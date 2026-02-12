(() => {
  const host = window.location.hostname;

  if (host !== "mail.google.com") {
    return;
  }

  window.dispatchEvent(
    new CustomEvent("inbox-snapper:content-script-ready", {
      detail: { host }
    })
  );
})();
