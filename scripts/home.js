// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Initialize Lucide icons
    lucide.createIcons();

    // Initialize all functionality
    initSidebarToggle();
    initProfileDropdown();
    initInputArea();
    initSuggestionCards();
    initFullscreenModal();
    initMobileResponsive();

    console.log('StratIntel home page loaded successfully!');
});

// Sidebar Toggle Functionality
function initSidebarToggle() {
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const mobileSidebarToggle = document.getElementById('mobile-sidebar-toggle');
    const mainContent = document.getElementById('main-content');

    // Desktop sidebar toggle
    sidebarToggle.addEventListener('click', function () {
        sidebar.classList.toggle('collapsed');

        // Update toggle icon
        const icon = this.querySelector('i');
        if (sidebar.classList.contains('collapsed')) {
            document.querySelector('.sidebar-brand').style.display = 'none';
            document.querySelector('.recent-section').style.display = 'none';
            document.querySelector('.sidebar-header').style.justifyContent = 'center';
            document.querySelector('.new-chat-btn').style.padding = '0.3rem 0rem';
            document.querySelector('.new-chat-btn').style.marginLeft = '0.4rem 0rem';
            document.querySelector('.new-chat-btn').style.width = '3.6rem';
        } else {
            document.querySelector('.sidebar-brand').style.display = 'block';
            document.querySelector('.recent-section').style.display = 'block';
            document.querySelector('.sidebar-header').style.justifyContent = 'space-between';
            document.querySelector('.new-chat-btn').style.padding = '0.5rem 1.5rem';
            document.querySelector('.new-chat-btn').style.width = '100%';

        }
        lucide.createIcons();

        // Update main content margin
        if (sidebar.classList.contains('collapsed')) {
            mainContent.style.marginLeft = 'var(--sidebar-collapsed-width)';
        } else {
            mainContent.style.marginLeft = 'var(--sidebar-width)';
        }

        // Save state to localStorage
        localStorage.setItem('sidebarCollapsed', sidebar.classList.contains('collapsed'));
    });

    // Mobile sidebar toggle
    mobileSidebarToggle.addEventListener('click', function () {
        sidebar.classList.toggle('mobile-open');
        document.body.style.overflow = sidebar.classList.contains('mobile-open') ? 'hidden' : '';
    });

    // Close mobile sidebar when clicking outside
    document.addEventListener('click', function (e) {
        if (window.innerWidth <= 768 &&
            sidebar.classList.contains('mobile-open') &&
            !sidebar.contains(e.target) &&
            !mobileSidebarToggle.contains(e.target)) {
            sidebar.classList.remove('mobile-open');
            document.body.style.overflow = '';
        }
    });

    // Restore sidebar state from localStorage
    const savedState = localStorage.getItem('sidebarCollapsed');
    if (savedState === 'true') {
        sidebar.classList.add('collapsed');
        lucide.createIcons();
        mainContent.style.marginLeft = 'var(--sidebar-collapsed-width)';
    }
}

// Profile Dropdown Functionality
function initProfileDropdown() {
    const profileBtn = document.getElementById('profile-btn');
    const profileDropdown = document.getElementById('profile-dropdown');

    profileBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        profileBtn.classList.toggle('active');
        profileDropdown.classList.toggle('show');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function (e) {
        if (!profileBtn.contains(e.target) && !profileDropdown.contains(e.target)) {
            profileBtn.classList.remove('active');
            profileDropdown.classList.remove('show');
        }
    });

    // Handle profile menu items
    const profileMenuItems = profileDropdown.querySelectorAll('.profile-menu-item');
    profileMenuItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const action = this.textContent.trim();

            // Close dropdown
            profileBtn.classList.remove('active');
            profileDropdown.classList.remove('show');

            // Handle different actions
            switch (action) {
                case 'Profile Settings':
                    showNotification('Profile settings coming soon!', 'info');
                    break;
                case 'Billing & Plans':
                    showNotification('Billing section coming soon!', 'info');
                    break;
                case 'Sign Out':
                    handleSignOut();
                    break;
            }
        });
    });
}

// Input Area Functionality
function initInputArea() {
    const messageInput = document.getElementById('message-input');
    const sendBtn = document.getElementById('send-btn');
    const charCount = document.getElementById('char-count');
    const fullscreenBtn = document.getElementById('fullscreen-btn');

    // Auto-resize textarea
    messageInput.addEventListener('input', function () {
        // Reset height to auto to get the correct scrollHeight
        this.style.height = 'auto';

        // Set height based on scrollHeight, with min and max limits
        const newHeight = Math.min(Math.max(this.scrollHeight, 24), 120);
        this.style.height = newHeight + 'px';

        // Update character count
        const currentLength = this.value.length;
        charCount.textContent = currentLength;

        // Enable/disable send button
        sendBtn.disabled = currentLength === 0 || currentLength > 2000;

        // Update character count color
        if (currentLength > 1800) {
            charCount.style.color = '#ef4444';
        } else if (currentLength > 1500) {
            charCount.style.color = '#f59e0b';
        } else {
            charCount.style.color = 'var(--text-muted)';
        }
    });

    // Handle Enter key (send message)
    messageInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            if (!sendBtn.disabled) {
                sendMessage();
            }
        }
    });

    // Send button click
    sendBtn.addEventListener('click', sendMessage);

    // Fullscreen button
    fullscreenBtn.addEventListener('click', function () {
        openFullscreenModal();
    });
}

// Suggestion Cards Functionality
function initSuggestionCards() {
    const suggestionCards = document.querySelectorAll('.suggestion-card');

    suggestionCards.forEach(card => {
        card.addEventListener('click', function () {
            const suggestion = this.getAttribute('data-suggestion');
            const messageInput = document.getElementById('message-input');

            // Set the suggestion text in the input
            messageInput.value = suggestion;

            // Trigger input event to update UI
            messageInput.dispatchEvent(new Event('input'));

            // Focus the input
            messageInput.focus();

            // Scroll to input area
            document.getElementById('input-area').scrollIntoView({
                behavior: 'smooth',
                block: 'end'
            });
        });
    });
}

// Fullscreen Modal Functionality
function initFullscreenModal() {
    const fullscreenModal = document.getElementById('fullscreen-modal');
    const fullscreenInput = document.getElementById('fullscreen-input');
    const fullscreenCharCount = document.getElementById('fullscreen-char-count');
    const fullscreenSend = document.getElementById('fullscreen-send');
    const fullscreenCancel = document.getElementById('fullscreen-cancel');
    const fullscreenClose = document.getElementById('fullscreen-close');

    // Fullscreen input handling
    fullscreenInput.addEventListener('input', function () {
        const currentLength = this.value.length;
        fullscreenCharCount.textContent = currentLength;

        // Enable/disable send button
        fullscreenSend.disabled = currentLength === 0 || currentLength > 2000;

        // Update character count color
        if (currentLength > 1800) {
            fullscreenCharCount.style.color = '#ef4444';
        } else if (currentLength > 1500) {
            fullscreenCharCount.style.color = '#f59e0b';
        } else {
            fullscreenCharCount.style.color = 'var(--text-muted)';
        }
    });

    // Send button
    fullscreenSend.addEventListener('click', function () {
        const message = fullscreenInput.value.trim();
        if (message) {
            // Copy to main input
            const messageInput = document.getElementById('message-input');
            messageInput.value = message;
            messageInput.dispatchEvent(new Event('input'));

            // Close modal and send
            closeFullscreenModal();
            sendMessage();
        }
    });

    // Cancel and close buttons
    fullscreenCancel.addEventListener('click', closeFullscreenModal);
    fullscreenClose.addEventListener('click', closeFullscreenModal);

    // Close on escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && fullscreenModal.classList.contains('show')) {
            closeFullscreenModal();
        }
    });

    // Close on backdrop click
    fullscreenModal.addEventListener('click', function (e) {
        if (e.target === fullscreenModal) {
            closeFullscreenModal();
        }
    });
}

// Mobile Responsive Functionality
function initMobileResponsive() {
    // Handle window resize
    window.addEventListener('resize', function () {
        const sidebar = document.getElementById('sidebar');

        // Close mobile sidebar on desktop
        if (window.innerWidth > 768) {
            sidebar.classList.remove('mobile-open');
            document.body.style.overflow = '';
        }
    });

    // Touch gestures for mobile sidebar
    let touchStartX = 0;
    let touchEndX = 0;

    document.addEventListener('touchstart', function (e) {
        touchStartX = e.changedTouches[0].screenX;
    });

    document.addEventListener('touchend', function (e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipeGesture();
    });

    function handleSwipeGesture() {
        const sidebar = document.getElementById('sidebar');
        const swipeThreshold = 100;

        if (window.innerWidth <= 768) {
            // Swipe right to open sidebar
            if (touchEndX - touchStartX > swipeThreshold && touchStartX < 50) {
                sidebar.classList.add('mobile-open');
                document.body.style.overflow = 'hidden';
            }

            // Swipe left to close sidebar
            if (touchStartX - touchEndX > swipeThreshold && sidebar.classList.contains('mobile-open')) {
                sidebar.classList.remove('mobile-open');
                document.body.style.overflow = '';
            }
        }
    }
}

const SECRET_KEY = "mySuperSecretKey123"; // Keep this same everywhere

function encryptData(data) {
    return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
}

// Core Functions
async function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value.trim();
    const idea = message;

    if (!message) return;

    // Clear input
    messageInput.value = '';
    messageInput.style.height = 'auto';
    messageInput.dispatchEvent(new Event('input'));

    // Show loading
    showLoadingOverlay();

    let out = await checkIdea(idea);
    if (out == 'No') {
        await sendForm(idea);
        return;
        let data = await analyzeIdea(idea);
        if (data.raw == 'Yes') {
            let researchData = await sendData(idea);
            let user = localStorage.getItem('user');
            user = JSON.parse(user);

            if (user) {
                const mobile = user.mobile;
                const result = researchData;


                await fetch("http://localhost:3000/api/report/save-report", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ mobile, idea, result }),
                });

                hideLoadingOverlay();

                // 🔥 Encrypt idea and send via GET param
                const encryptedIdea = encodeURIComponent(encryptData({ idea }));
                location.href = `results.html?data=${encryptedIdea}`;
            } else {
                console.log('user not found');
            }
        } else {
            hideLoadingOverlay();
            showNotification("You have entered an invalid idea!", "info");
            console.log("Idea not accepted");
        }
    } else {
        hideLoadingOverlay();
        showNotification("This idea research is already completed!", "info");
        console.log("Idea already there");
    }
}

async function sendForm(idea) {
    let user = localStorage.getItem('user');
    user = JSON.parse(user);
    const mobile = user.mobile;
    if(mobile){
        let req = await fetch('http://localhost:3000/api/form/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ idea, mobile })
        });
        let res = await req.json();
        console.log('send');
    }
}

async function checkIdea(idea) {
    let user = localStorage.getItem('user');
    user = JSON.parse(user);
    const mobile = user.mobile;
    let response = await fetch('http://localhost:3000/api/report/check', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ idea, mobile })
    });

    let data = await response.json();
    return data.message;
}

async function analyzeIdea(idea) {
    let response = await fetch('http://localhost:3000/api/research/analyze', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ idea })
    });

    let data = await response.json();
    return data;
}

async function sendData(idea) {
    const endpoints = [
        "competitors",
        "market",
        "pricing",
        "success",
        "audience",
        "tech",
        "time-budget",
        "team",
        "roadmap"
    ];

    // Map endpoints to fetch promises
    const requests = endpoints.map(async (endpoint) => {
        const res = await fetch(`http://localhost:3000/api/research/${endpoint}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ idea }),
        });
        const data = await res.json();
        return { endpoint, data }; // Keep endpoint name
    });

    // Wait for all in parallel
    const results = await Promise.all(requests);

    // Build final object WITHOUT reduce
    const research = {};
    for (const result of results) {
        research[result.endpoint] = result.data;
    }

    return research;
}

function openFullscreenModal() {
    const fullscreenModal = document.getElementById('fullscreen-modal');
    const fullscreenInput = document.getElementById('fullscreen-input');
    const messageInput = document.getElementById('message-input');

    // Copy current input to fullscreen
    fullscreenInput.value = messageInput.value;
    fullscreenInput.dispatchEvent(new Event('input'));

    // Show modal
    fullscreenModal.classList.add('show');
    document.body.style.overflow = 'hidden';

    // Focus input
    setTimeout(() => {
        fullscreenInput.focus();
    }, 100);
}

function closeFullscreenModal() {
    const fullscreenModal = document.getElementById('fullscreen-modal');
    const fullscreenInput = document.getElementById('fullscreen-input');

    fullscreenModal.classList.remove('show');
    document.body.style.overflow = '';

    // Clear fullscreen input
    fullscreenInput.value = '';
    fullscreenInput.dispatchEvent(new Event('input'));
}

function showLoadingOverlay() {
    const loadingOverlay = document.getElementById('loading-overlay');
    loadingOverlay.style.display = 'flex';

    // Animate loading icon
    /* const loadingSpinner = document.querySelector('.loading-spinner>i');
    loadingSpinner.style.animation = 'pulse 2s ease-in-out infinite'; */
}

function hideLoadingOverlay() {
    const loadingOverlay = document.getElementById('loading-overlay');
    loadingOverlay.style.display = 'none';
}

function handleSignOut() {
    if (confirm('Are you sure you want to sign out?')) {
        showNotification('Signing out...', 'info');
        // Clear user data from localStorage
        localStorage.removeItem('user');

        // Simulate sign out
        setTimeout(() => {
            // Redirect to login page
            window.location.href = 'http://localhost:5500';
        }, 500);
    }
}

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());

    const notification = document.createElement('div');
    notification.className = `notification ${type}`;

    // Define icon and color based on type
    let icon = 'info';
    let color = '#3b82f6'; // Default info blue
    if (type === 'success') {
        icon = 'check-circle';
        color = '#10b981'; // Green
    } else if (type === 'error') {
        icon = 'alert-circle';
        color = '#ef4444'; // Red
    } else if (type === 'warning') {
        icon = 'alert-triangle';
        color = '#f59e0b'; // Amber
    }

    notification.innerHTML = `
        <div class="notification-content">
            <i data-lucide="${icon}" class="notification-icon"></i>
            <span class="notification-text">${message}</span>
        </div>
        <button class="notification-close">
            <i data-lucide="x"></i>
        </button>
    `;

    // --- REVAMPED STYLES ---
    notification.style.cssText = `
        position: fixed;
        top: 2rem;
        right: 2rem;
        background: rgba(255, 255, 255, 0.6);
        backdrop-filter: blur(15px) saturate(150%);
        border-radius: 12px;
        padding: 1rem;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.08), 0 0px 40px -10px ${color};
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        max-width: 380px;
        width: calc(100% - 4rem);
        opacity: 0;
        transform: translateX(calc(100% + 2rem)) rotate(3deg);
        transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.4s ease;
        -webkit-backdrop-filter: blur(15px) saturate(150%);
    `;

    // Style inner elements
    const contentEl = notification.querySelector('.notification-content');
    contentEl.style.cssText = `
        display: flex;
        align-items: center;
        gap: 0.75rem;
    `;

    const iconEl = notification.querySelector('.notification-icon');
    iconEl.style.color = color;

    const textEl = notification.querySelector('.notification-text');
    textEl.style.cssText = `
        font-weight: 500;
        color: #333;
        line-height: 1.4;
    `;

    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.style.cssText = `
        background: transparent;
        border: none;
        cursor: pointer;
        opacity: 0.5;
        padding: 0.25rem;
        border-radius: 99px;
        transition: all 0.2s ease;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    closeBtn.onmouseover = () => {
        closeBtn.style.opacity = '1';
        closeBtn.style.background = 'rgba(0, 0, 0, 0.1)';
    };
    closeBtn.onmouseout = () => {
        closeBtn.style.opacity = '0.5';
        closeBtn.style.background = 'transparent';
    };
    // --- END OF STYLES ---

    document.body.appendChild(notification);

    // Initialize Lucide icons
    lucide.createIcons();
    // Ensure close icon is small and subtle
    const closeIcon = closeBtn.querySelector('svg');
    if (closeIcon) {
        closeIcon.style.width = '16px';
        closeIcon.style.height = '16px';
    }


    // Function to close the notification
    const closeNotification = () => {
        if (notification.parentNode) {
            notification.style.opacity = '0';
            notification.style.transform = `translateX(calc(100% + 2rem)) rotate(3deg)`;
            setTimeout(() => notification.remove(), 600);
        }
    };

    // Show notification
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0) rotate(0deg)';
    }, 100);

    // Close button functionality
    closeBtn.addEventListener('click', closeNotification);

    // Auto-hide after 5 seconds
    const autoHideTimeout = setTimeout(closeNotification, 5000);

    // Optional: Pause auto-hide on hover
    notification.addEventListener('mouseover', () => clearTimeout(autoHideTimeout));
}

let profileInitials = document.querySelector('.profile-st-letter');
let profileInitials2 = document.querySelector('.profile-st-letter2');
let profileName = document.querySelector('.profile-name');
let profileMail = document.querySelector('.profile-email');
async function updateProfileInitials() {
    let user = localStorage.getItem('user');
    if (!user) {
        console.log('No user found');
        return;
    }
    user = JSON.parse(user);
    let profile_data_request = await fetch('http://localhost:3000/api/profile/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ mobile: user.mobile })
    });
    let profile_data = await profile_data_request.json();
    profileInitials.textContent = profile_data.username.slice(0, 2).toUpperCase();
    profileInitials2.textContent = profile_data.username.slice(0, 2).toUpperCase();
    profileName.textContent = profile_data.username;
    profileMail.textContent = profile_data.mobile;
}

updateProfileInitials();

let edit_icon = document.querySelector('.edit-icon');
let done_icon = document.querySelector('.done-icon');

edit_icon.addEventListener('click', () => {
    profileName.style.display = 'none';
    let user_name_input = document.querySelector('.user-name');
    user_name_input.style.display = 'block';
    user_name_input.focus();
    user_name_input.value = profileName.textContent;
    edit_icon.style.display = 'none';
    done_icon.style.display = 'block';
});

done_icon.addEventListener('click', handleUpdate);

// Get the input element
const user_name_input = document.querySelector('.user-name');

// Run on Enter key
user_name_input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        handleUpdate();
    }
});

async function handleUpdate() {
    profileName.style.display = 'block';
    user_name_input.style.display = 'none';
    edit_icon.style.display = 'block';
    done_icon.style.display = 'none';
    let choice = await updateUserName(user_name_input.value);
    if (choice) {
        profileName.textContent = user_name_input.value;
    }
}


async function updateUserName(name) {
    if (!isAlpha(name)) {
        showNotification('Invalid name. Please use letters only.');
        return false;
    }
    let userData = JSON.parse(localStorage.getItem('user')) || {};
    // Update username
    userData.username = name;
    // Save back
    localStorage.setItem('user', JSON.stringify(userData));

    let response = await fetch('http://localhost:3000/api/users/update-username', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ mobile: userData.mobile, username: name })
    });
    let data = await response.json();
    if (response.ok) {
        showNotification(data.message || 'Usename updated successfully');
        return true;
    } else {
        showNotification(data.message || 'Failed to update username');
        return false;
    }
}

function isAlpha(str) {
    return /^[A-Za-z]+$/.test(str);
}