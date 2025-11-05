"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

export async function LearningFeed({ industry, skills, interests }) {
  if (!industry && (!skills || skills.length === 0) && (!interests || interests.length === 0)) {
    throw new Error("Please provide at least one field (industry, skills, interests).");
  }

  const prompt =` You are a professional career development assistant. Generate a learning feed of 5 items for this user:
- Industry: ${industry || "General"}
- Skills: ${skills?.join(", ") || "None"}
- Interests: ${interests?.join(", ") || "General Knowledge"}

**Instructions:**
1. Use your Google Search tool to find **real, live, working content**.
2. Only include links that are currently accessible — DO NOT invent URLs.
3. Provide all fields in **strict JSON format**: title, type, source, time, summary (3 bullets), relevance, link.
4. Validate the JSON output and make sure it can be parsed without errors.`;

  try {
    const result = await model.generateContent(prompt);
    let text = result.response.text().trim();

    // Extract JSON array from text using regex
    const jsonMatch = text.match(/\[.*\]/s);
    if (!jsonMatch) throw new Error("AI output does not contain a JSON array");

    const feed = JSON.parse(jsonMatch[0]);

    if (!Array.isArray(feed)) throw new Error("Parsed AI output is not an array");
    return feed;
  } catch (err) {
    console.error("Failed to generate learning feed:", err);
    throw new Error("Failed to generate learning feed. Make sure the AI output is valid JSON.");
  }
}
