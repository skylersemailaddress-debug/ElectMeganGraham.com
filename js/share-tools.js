
(function () {
  function textFromId(id) {
    var el = document.getElementById(id);
    return el ? el.value : "";
  }

  function copyText(id, trigger) {
    var txt = textFromId(id);
    if (!txt) return;
    navigator.clipboard.writeText(txt).then(function () {
      if (trigger) {
        var original = trigger.textContent;
        trigger.textContent = "Copied";
        setTimeout(function () { trigger.textContent = original; }, 1200);
      }
    });
  }

  document.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-copy-target]");
    if (btn) {
      e.preventDefault();
      copyText(btn.getAttribute("data-copy-target"), btn);
      return;
    }

    var shareBtn = e.target.closest("[data-share-url]");
    if (shareBtn) {
      e.preventDefault();
      var url = shareBtn.getAttribute("data-share-url") || window.location.href;
      var text = shareBtn.getAttribute("data-share-text") || "";
      var mode = shareBtn.getAttribute("data-share-mode") || "native";

      if (mode === "text") {
        window.location.href = "sms:?&body=" + encodeURIComponent(text + "\n" + url);
        return;
      }
      if (mode === "email") {
        window.location.href = "mailto:?subject=" + encodeURIComponent("Megan Graham for Elkhart County Clerk")
          + "&body=" + encodeURIComponent(text + "\n\n" + url);
        return;
      }
      if (mode === "facebook") {
        window.open("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url), "_blank");
        return;
      }
      if (navigator.share) {
        navigator.share({ title: document.title, text: text, url: url }).catch(function () {});
      } else {
        navigator.clipboard.writeText(url);
      }
    }
  });
})();
