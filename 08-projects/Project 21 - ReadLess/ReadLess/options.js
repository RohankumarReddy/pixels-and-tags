document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.sync.get(["geminiApikey"], ({ geminiApikey }) => {
        if (geminiApikey) {
            document.getElementById("api-key").value = geminiApikey;
        }
    });

    document.getElementById('save-button').addEventListener("click", () => {
        const apikey = document.getElementById("api-key").value.trim();
        if (!apikey) return;

        chrome.storage.sync.set({ geminiApikey: apikey }, () => {
            const successMessage = document.getElementById('success-message');
            successMessage.style.display = 'block';

            setTimeout(() => window.close(), 1000);
        });
    });
});
