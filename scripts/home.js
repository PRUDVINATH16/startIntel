// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Initialize Lucide icons
    lucide.createIcons();

    // Initialize all functionality
    initSidebarToggle();
    initProfileDropdown();
    initInputArea();
    initSuggestionCards();
    initChatFunctionality();
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
                case 'Research History':
                    showNotification('Research history coming soon!', 'info');
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

// Chat Functionality
function initChatFunctionality() {
    const newChatBtn = document.getElementById('new-chat-btn');
    const chatItems = document.querySelectorAll('.chat-item');

    // New chat button
    newChatBtn.addEventListener('click', function () {
        startNewChat();
    });

    // Chat item clicks
    chatItems.forEach(item => {
        item.addEventListener('click', function () {
            const chatTitle = this.querySelector('.chat-title').textContent;
            loadChat(chatTitle);
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

// Core Functions
function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value.trim();

    if (!message) return;

    // Hide welcome screen and show chat
    const welcomeScreen = document.getElementById('welcome-screen');
    const chatMessages = document.getElementById('chat-messages');

    welcomeScreen.style.display = 'none';
    chatMessages.style.display = 'flex';

    // Add user message
    addMessage(message, 'user');

    // Clear input
    messageInput.value = '';
    messageInput.style.height = 'auto';
    messageInput.dispatchEvent(new Event('input'));

    // Show loading
    showLoadingOverlay();

    // Simulate AI response
    setTimeout(() => {
        hideLoadingOverlay();
        addMessage(generateAIResponse(message), 'assistant');

        // Add to recent chats
        addToRecentChats(message);
    }, 2000 + Math.random() * 2000);
}

function addMessage(content, sender) {
    const chatMessages = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;

    const avatar = sender === 'user' ? 'JD' : '🧠';
    const avatarClass = sender === 'user' ? 'user' : 'assistant';

    messageDiv.innerHTML = `
        <div class="message-avatar">${avatar}</div>
        <div class="message-content">
            <div class="message-bubble">${content}</div>
        </div>
    `;

    chatMessages.appendChild(messageDiv);

    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Animate message in
    messageDiv.style.opacity = '0';
    messageDiv.style.transform = 'translateY(20px)';

    requestAnimationFrame(() => {
        messageDiv.style.transition = 'all 0.3s ease';
        messageDiv.style.opacity = '1';
        messageDiv.style.transform = 'translateY(0)';
    });
}

function generateAIResponse(userMessage) {
    // Simple AI response simulation based on keywords
    const responses = {
        'food delivery': `Great idea! The food delivery market is experiencing significant growth. Here's my analysis:

**Market Opportunity**: The global food delivery market is valued at $150+ billion and growing at 11% annually.

**Key Insights**:
• High demand in urban areas, especially post-pandemic
• Competition from UberEats, DoorDash, Grubhub
• Focus on local restaurants and unique cuisine
• Consider delivery time optimization and driver management

**Recommendations**:
1. Start with a specific geographic area
2. Partner with local restaurants first
3. Develop a strong mobile app experience
4. Consider subscription models for frequent users

Would you like me to dive deeper into any specific aspect?`,

        'saas': `Excellent choice! SaaS project management tools have a robust market. Here's my analysis:

**Market Analysis**: The project management software market is worth $6.68 billion and growing at 10.67% CAGR.

**Competitive Landscape**:
• Major players: Asana, Trello, Monday.com, Jira
• Opportunity in niche markets and specific industries
• Focus on user experience and integration capabilities

**Success Factors**:
1. Identify underserved market segments
2. Develop intuitive user interface
3. Strong integration ecosystem
4. Freemium pricing model
5. Excellent customer support

**Next Steps**: Define your unique value proposition and target specific user personas.

What specific industry or user type are you targeting?`,

        'e-commerce': `Handmade products e-commerce is a thriving niche! Here's my comprehensive analysis:

**Market Potential**: The global handicrafts market is valued at $718 billion with strong online growth.

**Competitive Analysis**:
• Etsy dominates with 90+ million active buyers
• Amazon Handmade and Facebook Marketplace are growing
• Opportunity for specialized, curated platforms

**Key Success Factors**:
1. Strong seller onboarding and support
2. Quality assurance and authenticity verification
3. Excellent search and discovery features
4. Mobile-optimized shopping experience
5. Community building around makers

**Recommendations**: Focus on a specific craft category or geographic region initially.

Which type of handmade products are you most interested in featuring?`,

        'fintech': `FinTech payment solutions are hot! Here's my detailed market analysis:

**Market Size**: Mobile payment market is $1.48 trillion and growing at 33.8% CAGR.

**Key Trends**:
• Contactless payments surge post-COVID
• Buy-now-pay-later (BNPL) integration
• Cryptocurrency payment acceptance
• Cross-border payment solutions

**Competitive Landscape**:
• PayPal, Square, Stripe dominate
• Emerging players: Klarna, Afterpay, Zelle
• Opportunity in B2B payments and niche markets

**Critical Considerations**:
1. Regulatory compliance (PCI DSS, PSD2)
2. Security and fraud prevention
3. Integration ease for merchants
4. Transaction fee competitiveness

What specific payment problem are you looking to solve?`
    };

    // Find matching response based on keywords
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes('food') || lowerMessage.includes('delivery') || lowerMessage.includes('restaurant')) {
        return responses['food delivery'];
    } else if (lowerMessage.includes('saas') || lowerMessage.includes('project management') || lowerMessage.includes('software')) {
        return responses['saas'];
    } else if (lowerMessage.includes('e-commerce') || lowerMessage.includes('handmade') || lowerMessage.includes('marketplace')) {
        return responses['e-commerce'];
    } else if (lowerMessage.includes('fintech') || lowerMessage.includes('payment') || lowerMessage.includes('financial')) {
        return responses['fintech'];
    }

    // Default response
    return `Thank you for sharing your business idea! I'm analyzing the following aspects:

**Initial Assessment**:
• Market size and growth potential
• Competitive landscape analysis
• Target audience identification
• Revenue model opportunities
• Technical requirements
• Go-to-market strategy

**Key Questions to Consider**:
1. What specific problem does your idea solve?
2. Who is your target customer?
3. What makes your solution unique?
4. How do you plan to monetize?
5. What's your initial budget and timeline?

I'd be happy to provide more detailed analysis once you share more specifics about your industry, target market, or business model. What aspect would you like to explore first?`;
}

function addToRecentChats(message) {
    const recentChats = document.getElementById('recent-chats');
    const chatTitle = message.length > 30 ? message.substring(0, 30) + '...' : message;

    // Create new chat item
    const chatItem = document.createElement('div');
    chatItem.className = 'chat-item';
    chatItem.innerHTML = `
        <i data-lucide="message-circle"></i>
        <span class="chat-title">${chatTitle}</span>
        <button class="chat-options">
            <i data-lucide="more-horizontal"></i>
        </button>
    `;

    // Add to top of recent chats
    recentChats.insertBefore(chatItem, recentChats.firstChild);

    // Limit to 10 recent chats
    const chatItems = recentChats.querySelectorAll('.chat-item');
    if (chatItems.length > 10) {
        recentChats.removeChild(chatItems[chatItems.length - 1]);
    }

    // Re-initialize icons
    lucide.createIcons();

    // Add click handler
    chatItem.addEventListener('click', function () {
        loadChat(chatTitle);
    });
}

function startNewChat() {
    // Clear chat messages
    const chatMessages = document.getElementById('chat-messages');
    const welcomeScreen = document.getElementById('welcome-screen');

    chatMessages.innerHTML = '';
    chatMessages.style.display = 'none';
    welcomeScreen.style.display = 'flex';

    // Clear input
    const messageInput = document.getElementById('message-input');
    messageInput.value = '';
    messageInput.style.height = 'auto';
    messageInput.dispatchEvent(new Event('input'));

    showNotification('Started new chat session', 'success');
}

function loadChat(chatTitle) {
    showNotification(`Loading chat: ${chatTitle}`, 'info');

    // Simulate loading a previous chat
    const welcomeScreen = document.getElementById('welcome-screen');
    const chatMessages = document.getElementById('chat-messages');

    welcomeScreen.style.display = 'none';
    chatMessages.style.display = 'flex';
    chatMessages.innerHTML = '';

    // Add some sample messages
    setTimeout(() => {
        addMessage(`I want to research ${chatTitle.replace('...', '')}`, 'user');
        setTimeout(() => {
            addMessage(generateAIResponse(chatTitle), 'assistant');
        }, 1000);
    }, 500);
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
    const loadingSpinner = loadingOverlay.querySelector('.loading-spinner i');
    loadingSpinner.style.animation = 'pulse 2s ease-in-out infinite';
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

    let icon = 'info';
    if (type === 'success') icon = 'check-circle';
    else if (type === 'error') icon = 'alert-circle';
    else if (type === 'warning') icon = 'alert-triangle';

    notification.innerHTML = `
        <div class="notification-content">
            <i data-lucide="${icon}" class="notification-icon"></i>
            <span class="notification-text">${message}</span>
        </div>
        <button class="notification-close">
            <i data-lucide="x"></i>
        </button>
    `;

    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 2rem;
        right: 2rem;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.3);
        border-radius: 1rem;
        padding: 1rem 1.5rem;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        display: flex;
        align-items: center;
        gap: 1rem;
        max-width: 400px;
        transform: translateX(100%);
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        border-left: 4px solid ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : type === 'warning' ? '#f59e0b' : '#3b82f6'};
    `;

    document.body.appendChild(notification);

    // Initialize icons
    lucide.createIcons();

    // Show notification
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 400);
    });

    // Auto-hide after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 400);
        }
    }, 5000);
}

// Keyboard Shortcuts
document.addEventListener('keydown', function (e) {
    // Ctrl/Cmd + K to focus search (new chat)
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        document.getElementById('message-input').focus();
    }

    // Ctrl/Cmd + N for new chat
    if ((e.ctrlKey || e.metaKey) && e.key === 'n') {
        e.preventDefault();
        startNewChat();
    }

    // Ctrl/Cmd + B to toggle sidebar
    if ((e.ctrlKey || e.metaKey) && e.key === 'b') {
        e.preventDefault();
        document.getElementById('sidebar-toggle').click();
    }
});

// Performance Optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Auto-save functionality (optional)
function initAutoSave() {
    const messageInput = document.getElementById('message-input');

    const debouncedSave = debounce((value) => {
        if (value.trim()) {
            localStorage.setItem('stratintel_draft', value);
        } else {
            localStorage.removeItem('stratintel_draft');
        }
    }, 1000);

    messageInput.addEventListener('input', function () {
        debouncedSave(this.value);
    });

    // Restore draft on load
    const savedDraft = localStorage.getItem('stratintel_draft');
    if (savedDraft) {
        messageInput.value = savedDraft;
        messageInput.dispatchEvent(new Event('input'));
    }
}

let profileInitials = document.querySelector('.profile-st-letter');
let profileInitials2 = document.querySelector('.profile-st-letter2');
let profileName = document.querySelector('.profile-name');
let profileMail = document.querySelector('.profile-email');
async function updateProfileInitials() {
    let user = localStorage.getItem('user');
    if (!user){
        console.log('No user found');
        return;
    }
    user = JSON.parse(user);
    let profile_data_request = await fetch('http://localhost:3000/api/profile/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ mobile: user.mobile})
    });
    let profile_data = await profile_data_request.json();
    console.log(profile_data);
    profileInitials.textContent = profile_data.username.slice(0, 2).toUpperCase();
    profileInitials2.textContent = profile_data.username.slice(0, 2).toUpperCase();
    profileName.textContent = profile_data.username;
    profileMail.textContent = profile_data.mobile;
}

updateProfileInitials();