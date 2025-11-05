import { db } from "@/lib/prisma";
import { inngest } from "./client";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

export const generateIndustryInsights = inngest.createFunction(
  { name: "Generate Industry Insights" },
  { cron: "0 0 * * 0" }, // Run every Sunday at midnight
  async ({ event, step }) => {
    const industries = await step.run("Fetch industries", async () => {
      return await db.industryInsight.findMany({
        select: { industry: true },
      });
    });

    for (const { industry } of industries) {
      const prompt = `
You are an expert industry analyst and data researcher.

Analyze the current global state of the **${industry}** industry and provide structured insights ONLY in **pure JSON** (no text, comments, markdown, or extra formatting).

Follow this exact JSON schema:
{
  "salaryRanges": [
    { "role": "string", "min": number, "max": number, "median": number, "location": "string" }
  ],
  "growthRate": number, // in percentage (e.g., 12.5)
  "demandLevel": "High" | "Medium" | "Low",
  "topSkills": ["string"],
  "marketOutlook": "Positive" | "Neutral" | "Negative",
  "keyTrends": ["string"],
  "recommendedSkills": ["string"]
}

Guidelines:
- Use realistic salary data (based on typical USD ranges for the given industry).
- Include **at least 5 roles** in "salaryRanges" with accurate job titles and locations (e.g., "Software Engineer", "Project Manager").
- Include **5–8 topSkills** and **5–8 keyTrends**.
- Ensure all string values are enclosed in double quotes.
- Do not add explanations, headings, markdown, or code blocks.
- Return only valid JSON that can be parsed directly.
`;

      const res = await step.ai.wrap(
        "gemini",
        async (p) => {
          return await model.generateContent(p);
        },
        prompt
      );

      const text = res.response.candidates[0].content.parts[0].text || "";
      const cleanedText = text.replace(/```(?:json)?\n?/g, "").trim();

      const insights = JSON.parse(cleanedText);

      await step.run(`Update ${industry} insights`, async () => {
        await db.industryInsight.update({
          where: { industry },
          data: {
            ...insights,
            lastUpdated: new Date(),
            nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
          },
        });
      });
    }
  }
);