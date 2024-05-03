// Select the button from the page
const button = document.querySelector('[data-a-target="chat-send-button"]');

// Add count to the end of /vips and /mods messages
const addCounter = () => {
    setTimeout(() => {
        // Select all the vips and mods output messages
        const VIPElements = document.querySelectorAll('.Layout-sc-1xcs6mc-0.chat-line__status');

        // Cycle through each message
        VIPElements.forEach((element) => {
            // Make sure "welcome to chat" and messages already with count aren't given a(nother) count
            if (!element.innerHTML.includes('Welcome to the chat room!') && !element.innerHTML.includes(' (count: ')) {
                // Get list of VIPs/Mods
                const vips = element.innerHTML.split(': ');
                // Get count of VIPs/Mods
                const count = vips[1].split(' ').length;

                // Replace text in the DOM with new text
                element.innerHTML = element.innerHTML + ` (count: ${count})`;
            }
        });
    }, 1000);
};

// If pressed enter, run the code
document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addCounter();
    }
});

// If the chat message send button is clicked, run the code
button.onclick = () => {
    addCounter();
};

// Run on extension initialisation
addCounter();
