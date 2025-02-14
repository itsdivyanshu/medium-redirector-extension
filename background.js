chrome.webNavigation.onBeforeNavigate.addListener(function (details) {
  if (
    details.url.includes("medium.com") &&
    !details.url.includes("freedium.cfd")
  ) {
    const freediumUrl = "https://freedium.cfd/" + details.url;
    chrome.tabs.update(details.tabId, {
      url: freediumUrl,
    });
  }
});
