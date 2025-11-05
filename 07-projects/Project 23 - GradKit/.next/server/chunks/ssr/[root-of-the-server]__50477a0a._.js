module.exports = [
"[project]/app/(main)/learning-feed/page.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"408c422ad80c325e2994603f61c704d7ee990921ea":"LearningFeed"},"",""] */ __turbopack_context__.s([
    "LearningFeed",
    ()=>LearningFeed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@google/generative-ai/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
// Initialize the Gemini client
const genAI = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GoogleGenerativeAI"](process.env.GEMINI_API_KEY);
// Use the correct model that supports search grounding
const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash-preview-09-2025"
});
// Define a strict JSON schema for the model's output
const responseSchema = {
    type: "ARRAY",
    items: {
        type: "OBJECT",
        properties: {
            title: {
                type: "STRING"
            },
            type: {
                type: "STRING"
            },
            source: {
                type: "STRING"
            },
            time: {
                type: "STRING"
            },
            summary: {
                type: "ARRAY",
                items: {
                    type: "STRING"
                }
            },
            relevance: {
                type: "STRING"
            },
            link: {
                type: "STRING"
            }
        },
        required: [
            "title",
            "type",
            "source",
            "time",
            "summary",
            "relevance",
            "link"
        ]
    }
};
async function LearningFeed({ industry, skills, interests }) {
    try {
        // Validate input
        if (!industry && (!skills || skills.length === 0) && (!interests || interests.length === 0)) {
            return {
                error: "Please provide at least one field (industry, skills, interests)"
            };
        }
        // Update the prompt to be professional and explicitly command the use of search
        const prompt = `
      You are a professional career development assistant. Your task is to generate a personalized learning feed 
      of exactly 5 items for a user with the following profile:
      Industry: ${industry || "General"}
      Skills: ${skills?.join(", ") || "None"}
      Interests: ${interests?.join(", ") || "General Knowledge"}

      **You MUST use your search tool** to find real, high-quality, and currently available online content. 
      Do not invent content or provide placeholder links.

      For each item, provide:
      - title: The actual title of the content.
      - type: (e.g., Article, Video, Podcast, Course).
      - source: The name of the website or platform (e.g., TechCrunch, YouTube, Coursera).
      - time: Estimated consumption time (e.g., "5 min read", "25 min video").
      - summary: 3 concise bullet points of what the user will learn.
      - relevance: A brief explanation of why this is relevant to the user's profile.
      - link: **The direct, real, and valid URL** to the content.
    `;
        // Call the model with search tools and JSON mode enabled
        const result = await model.generateContent({
            contents: [
                {
                    parts: [
                        {
                            text: prompt
                        }
                    ]
                }
            ],
            // Enable Google Search grounding to get real links
            tools: [
                {
                    "google_search": {}
                }
            ],
            // Enforce valid JSON output to prevent parsing errors
            generationConfig: {
                responseMimeType: "application/json",
                responseSchema: responseSchema
            }
        });
        const response = result.response;
        // Professional error handling and response parsing
        if (!response || !response.parts || response.parts.length === 0) {
            if (response.promptFeedback?.blockReason) {
                console.error("Prompt was blocked:", response.promptFeedback.blockReason);
                return {
                    error: `Request blocked due to: ${response.promptFeedback.blockReason}. Please adjust your input.`
                };
            }
            if (response.candidates?.[0]?.finishReason !== "STOP") {
                console.error("Generation stopped for reason:", response.candidates?.[0]?.finishReason);
                return {
                    error: `Generation failed: ${response.candidates?.[0]?.finishReason}`
                };
            }
            return {
                error: "Received an empty response from the AI."
            };
        }
        // The text is now guaranteed to be a valid JSON string
        const text = response.parts[0].text;
        const feed = JSON.parse(text);
        if (!Array.isArray(feed)) {
            console.error("Parsed response is not an array:", feed);
            return {
                error: "AI returned an invalid data format."
            };
        }
        // Success: return the feed object
        return {
            feed
        };
    } catch (err) {
        console.error("Learning Feed Server Action Error:", err);
        // Return an error object instead of throwing, which prevents the crash
        return {
            error: err.message || "A server error occurred while generating the feed."
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    LearningFeed
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(LearningFeed, "408c422ad80c325e2994603f61c704d7ee990921ea", null);
}),
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/app/layout.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.js [app-rsc] (ecmascript)"));
}),
"[project]/app/not-found.jsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/not-found.jsx [app-rsc] (ecmascript)"));
}),
"[project]/app/(main)/layout.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/(main)/layout.js [app-rsc] (ecmascript)"));
}),
"[project]/app/(main)/learning-feed/page.jsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/(main)/learning-feed/page.jsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__50477a0a._.js.map