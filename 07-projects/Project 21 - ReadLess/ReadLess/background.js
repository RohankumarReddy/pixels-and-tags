chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.get(["geminiAPikey"], (result) => {
    if (!result.geminiAPikey) {
      chrome.tabs.create({ url: "options.html" });
    }
  });
});
