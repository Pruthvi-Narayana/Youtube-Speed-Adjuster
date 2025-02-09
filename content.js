window.addEventListener("load", function() {
  function addSpeedButtons() {
    const titleElement = document.querySelector("h1.style-scope.ytd-watch-metadata");
    if (titleElement && !document.querySelector(".custom-speed-buttons")) {
      const buttonContainer = document.createElement("div");
      buttonContainer.className = "custom-speed-buttons";

      const speeds = [1, 1.25, 1.5, 1.75, 2 , 15];
      speeds.forEach(speed => {
        const button = document.createElement("button");
        button.textContent = speed + "x";
        button.className = "speed-button";
        button.addEventListener("click", () => {
          document.querySelector("video").playbackRate = speed;
          console.log(`Changed speed to ${speed}x`);
        });
        buttonContainer.appendChild(button);
      });

      titleElement.parentNode.insertBefore(buttonContainer, titleElement.nextSibling);
      console.log("Buttons added!");
    }
  }

  addSpeedButtons();

  new MutationObserver(addSpeedButtons).observe(document.body, {
    childList: true,
    subtree: true
  });
});