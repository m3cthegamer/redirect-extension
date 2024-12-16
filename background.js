// Add a custom context menu option
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "redirectVideoLink",
    title: "Redirect link",
    contexts: ["link"],
    documentUrlPatterns: ["https://www.youtube.com/*"]
  });
});

// Redirect link when context menu is clicked
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "redirectVideoLink") {
    const originalLink = info.linkUrl;

    // Modify the link
    if (originalLink.includes("youtube.com/watch")) {
      const modifiedLink = originalLink.replace("youtube.com", "yout-ube.com");
      console.log("Redirected link: ", modifiedLink);

      // Open in a new tab
      chrome.tabs.create({ url: modifiedLink });
    } else {
      console.log("No valid YouTube link found.");
    }
  }
});
