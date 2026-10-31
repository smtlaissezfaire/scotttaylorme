(function () {
  var dialog = document.getElementById("shot-lightbox");
  if (!dialog || typeof dialog.showModal !== "function") return;

  var image = dialog.querySelector(".lightbox-image");
  var caption = document.getElementById("shot-lightbox-caption");
  var closeButton = dialog.querySelector(".lightbox-close");
  var lastTrigger = null;

  function openFrom(trigger) {
    var thumb = trigger.querySelector("img");
    if (!thumb) return;

    var figure = trigger.closest("figure");
    var figcaption = figure ? figure.querySelector("figcaption") : null;
    var captionText = figcaption ? figcaption.textContent.replace(/\s+/g, " ").trim() : "";

    image.src = thumb.currentSrc || thumb.getAttribute("src");
    image.alt = thumb.alt || captionText;
    caption.textContent = captionText;
    lastTrigger = trigger;
    dialog.showModal();
    closeButton.focus();
  }

  document.querySelectorAll(".shot-thumb").forEach(function (trigger) {
    trigger.addEventListener("click", function (event) {
      event.preventDefault();
      openFrom(trigger);
    });
  });

  closeButton.addEventListener("click", function () {
    dialog.close();
  });

  dialog.addEventListener("click", function (event) {
    if (event.target === dialog) dialog.close();
  });

  dialog.addEventListener("close", function () {
    if (lastTrigger && typeof lastTrigger.focus === "function") lastTrigger.focus();
    lastTrigger = null;
  });
})();
