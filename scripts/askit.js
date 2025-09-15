document.querySelector('.float-chat-trigger').addEventListener('click', () => {
    const overlay = document.querySelector('.overlay');
    const chatContainer = document.querySelector('.chat-bot-container');

    // Show overlay
    overlay.style.display = 'block';

    // Trigger opening animation
    chatContainer.style.display = 'flex';
    chatContainer.classList.add('opening');

    // Add open class after animation starts
    setTimeout(() => {
        chatContainer.classList.add('open');
    }, 100);

    // Prevent body scroll
    document.body.style.overflowY = 'hidden';

    // Remove opening class after animation completes
    setTimeout(() => {
        chatContainer.classList.remove('opening');
    }, 500);
});

document.querySelector('.clear-btn>img').addEventListener('click', () => {
    const overlay = document.querySelector('.overlay');
    const chatContainer = document.querySelector('.chat-bot-container');

    // Remove open class and trigger closing animation
    chatContainer.classList.remove('open');

    // Hide after animation completes
    setTimeout(() => {
        overlay.style.display = 'none';
        chatContainer.style.display = 'none';
        chatContainer.classList.remove('opening');
        document.body.style.overflowY = 'auto';
    }, 400);
});