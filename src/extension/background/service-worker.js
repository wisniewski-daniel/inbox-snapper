const EXTENSION_READY_EVENT = "inbox_snapper_extension_ready";

chrome.runtime.onInstalled.addListener(() => {
  console.info("Inbox Snapper service worker installed.");
});

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message?.type === "PING_EXTENSION_BASELINE") {
    sendResponse({ ok: true, event: EXTENSION_READY_EVENT });
    return true;
  }

  return false;
});
