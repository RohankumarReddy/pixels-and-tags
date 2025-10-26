document.getElementById('summarise').addEventListener('click', async () => {
    const result = document.getElementById('result');
    result.textContent = 'Extracting text...';
    const summary_type = document.getElementById("summary-type").value;

    chrome.storage.sync.get(['geminiApikey'], async ({ geminiApikey }) => {
        if (!geminiApikey) {
            result.textContent = "No API key set";
            return;
        }

        chrome.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
            if (tabs.length === 0) {
                result.textContent = 'No active tab found';
                return;
            }

            const activeTab = tabs[0];

            chrome.tabs.sendMessage(activeTab.id, { type: "GetArticleText" }, async (response) => {
                const text = response?.text;
                if (!text) {
                    result.textContent = "Couldn't extract text from this page";
                    return;
                }

                try {
                    const summary = await getGeminiSummary(text, summary_type, geminiApikey);
                    result.textContent = summary;
                } catch (err) {
                    result.textContent = "Gemini error: " + err.message;
                }
            });
        });
    });
});

async function getGeminiSummary(rawText, type, apiKey) {
    const max = 20000;
    const text = rawText.length > max ? rawText.slice(0, max) + "..." : rawText;

    const promptMap = {
        brief: `Summarize in 2-3 sentences in simple english:\n${text}`,
        detailed: `Give a detailed summary in simple english:\n${text}`,
        bullets: `Summarize in 5-7 bullet points (start each line with "*") in simple english:\n${text}`
    };

    const prompt = promptMap[type] || promptMap.brief;

   
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
            contents: [
                {
                    parts: [
                        {
                            text: prompt 
                        }
                    ]
                }
            ]
        })
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`API call failed with status ${response.status}: ${errorData.error.message}`);
    } 

    const data = await response.json();
    
    return data.candidates?.[0]?.content?.parts?.[0]?.text || "No summary returned";
}