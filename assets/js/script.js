// --- Typewriter Effect Script ---

const textElement = document.getElementById('typewriter-text');
const textToType = "Welcome to Teetech"; // The phrase to be typed
let charIndex = 0;
const typingSpeed = 150; // Milliseconds per character
const erasingSpeed = 75; // Milliseconds per character
const delayAfterTyping = 1500; // Delay before erasing starts

function type() {
    if (charIndex < textToType.length) {
        textElement.textContent += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        // Once typing is complete, wait, then start erasing
        setTimeout(erase, delayAfterTyping);
    }
}

function erase() {
    if (charIndex > 0) {
        textElement.textContent = textToType.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingSpeed);
    } else {
        // Once erasing is complete, wait a moment, then loop (start typing again)
        setTimeout(type, 500); // Small delay before restarting
    }
}

// Start the loop when the page loads
document.addEventListener("DOMContentLoaded", () => {
    type();
});