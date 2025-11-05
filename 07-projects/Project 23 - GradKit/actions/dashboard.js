"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

export const generateAIInsights = async (industry) => {
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

  const result = await model.generateContent(prompt);
  const response = result.response;
  const text = response.text();
  const cleanedText = text.replace(/```(?:json)?\n?/g, "").trim();

  return JSON.parse(cleanedText);
};

export async function getIndustryInsights() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
    include: {
      industryInsight: true,
    },
  });

  if (!user) throw new Error("User not found");

  // If no insights exist, generate them
  if (!user.industryInsight) {
    const insights = await generateAIInsights(user.industry);

    const industryInsight = await db.industryInsight.create({
      data: {
        industry: user.industry,
        ...insights,
        nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      },
    });

    return industryInsight;
  }

  return user.industryInsight;
}