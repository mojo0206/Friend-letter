const envelope = document.getElementById("envelopeWrapper");
const topFlap = document.getElementById("topFlap");
const letterFolded = document.getElementById("letterFolded");
const clickMessage = document.getElementById("clickMessage");

envelope.addEventListener("click", () => {
    if (!envelope.classList.contains("open")) {
        envelope.classList.add("open");

        // 1. Fade out the click message
        clickMessage.style.opacity = "0";

        // 2. After flap opens, letter starts to appear and scale up
        setTimeout(() => {
            letterFolded.style.opacity = "1";
            letterFolded.style.transform = "translate(-50%, -50%) scale(1)";
        }, 800); 

        // 3. Wait for letter to scale and unfold, then disable cursor
        setTimeout(() => {
            envelope.style.cursor = "default";
        }, 3000); 
    }
});