// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    lucide.createIcons();
    
    // Initialize all functionality
    initToggleNavigation();
    initPasswordToggle();
    initPasswordStrength();
    initFormValidation();
    initFormSubmission();
    initNotifications();
    
    console.log('Auth page loaded successfully!');
});

// Toggle Navigation Functionality
function initToggleNavigation() {
    const loginTab = document.getElementById('login-tab');
    const signupTab = document.getElementById('signup-tab');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const toggleIndicator = document.querySelector('.toggle-indicator');
    const switchFormButtons = document.querySelectorAll('.switch-form');
    
    // Handle tab clicks
    loginTab.addEventListener('click', () => switchToForm('login'));
    signupTab.addEventListener('click', () => switchToForm('signup'));
    
    // Handle switch form button clicks
    switchFormButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const target = button.getAttribute('data-target');
            switchToForm(target);
        });
    });
    
    function switchToForm(formType) {
        // Update tabs
        loginTab.classList.toggle('active', formType === 'login');
        signupTab.classList.toggle('active', formType === 'signup');
        
        // Update indicator
        toggleIndicator.classList.toggle('signup', formType === 'signup');
        
        // Update forms
        loginForm.classList.toggle('active', formType === 'login');
        signupForm.classList.toggle('active', formType === 'signup');
        
        // Reset forms
        if (formType === 'login') {
            signupForm.reset();
            resetPasswordStrength();
        } else {
            loginForm.reset();
        }
        
        // Clear any validation errors
        clearValidationErrors();
        
        // Focus first input
        setTimeout(() => {
            const firstInput = formType === 'login' 
                ? document.getElementById('login-mobile')
                : document.getElementById('signup-name');
            if (firstInput) firstInput.focus();
        }, 200);
    }
}

// Password Toggle Functionality
function initPasswordToggle() {
    const passwordToggles = document.querySelectorAll('.password-toggle');
    
    passwordToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const passwordInput = document.getElementById(targetId);
            const eyeOpen = this.querySelector('.eye-open');
            const eyeClosed = this.querySelector('.eye-closed');
            
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                eyeOpen.style.display = 'none';
                eyeClosed.style.display = 'block';
            } else {
                passwordInput.type = 'password';
                eyeOpen.style.display = 'block';
                eyeClosed.style.display = 'none';
            }
        });
    });
}

// Password Strength Functionality
function initPasswordStrength() {
    const signupPassword = document.getElementById('signup-password');
    const strengthFill = document.querySelector('.strength-fill');
    const strengthText = document.querySelector('.strength-text');
    
    if (!signupPassword || !strengthFill || !strengthText) return;
    
    signupPassword.addEventListener('input', function() {
        const password = this.value;
        const strength = calculatePasswordStrength(password);
        
        // Update strength bar
        strengthFill.style.width = `${strength.percentage}%`;
        strengthText.textContent = strength.text;
        
        // Update colors based on strength
        if (strength.percentage < 30) {
            strengthFill.style.background = '#ef4444';
        } else if (strength.percentage < 70) {
            strengthFill.style.background = '#f59e0b';
        } else {
            strengthFill.style.background = '#10b981';
        }
    });
}

function calculatePasswordStrength(password) {
    let score = 0;
    let feedback = [];
    
    if (password.length >= 8) score += 25;
    else feedback.push('at least 8 characters');
    
    if (/[a-z]/.test(password)) score += 25;
    else feedback.push('lowercase letter');
    
    if (/[A-Z]/.test(password)) score += 25;
    else feedback.push('uppercase letter');
    
    if (/[0-9]/.test(password)) score += 25;
    else feedback.push('number');
    
    if (/[^A-Za-z0-9]/.test(password)) score += 10;
    
    let text = '';
    if (score < 30) text = 'Weak password';
    else if (score < 70) text = 'Medium strength';
    else if (score < 90) text = 'Strong password';
    else text = 'Very strong password';
    
    return { percentage: Math.min(score, 100), text, feedback };
}

function resetPasswordStrength() {
    const strengthFill = document.querySelector('.strength-fill');
    const strengthText = document.querySelector('.strength-text');
    
    if (strengthFill && strengthText) {
        strengthFill.style.width = '0%';
        strengthText.textContent = 'Password strength';
    }
}

// Form Validation
function initFormValidation() {
    const forms = document.querySelectorAll('.auth-form');
    
    forms.forEach(form => {
        const inputs = form.querySelectorAll('.form-input');
        
        inputs.forEach(input => {
            input.addEventListener('blur', () => validateField(input));
            input.addEventListener('input', () => clearFieldError(input));
        });
    });
}

function validateField(input) {
    const value = input.value.trim();
    const fieldName = input.name;
    let isValid = true;
    let errorMessage = '';
    
    // Required field validation
    if (!value) {
        isValid = false;
        errorMessage = `${getFieldLabel(fieldName)} is required`;
    } else {
        // Specific field validations
        switch (fieldName) {
            case 'name':
                if (value.length < 2) {
                    isValid = false;
                    errorMessage = 'Name must be at least 2 characters';
                }
                break;
                
            case 'mobile':
                if (!/^\+?[\d\s\-\(\)]{10,}$/.test(value)) {
                    isValid = false;
                    errorMessage = 'Please enter a valid mobile number';
                }
                break;
                
            case 'password':
                if (input.id === 'signup-password') {
                    const strength = calculatePasswordStrength(value);
                    if (strength.percentage < 50) {
                        isValid = false;
                        errorMessage = 'Password is too weak';
                    }
                } else if (value.length < 6) {
                    isValid = false;
                    errorMessage = 'Password must be at least 6 characters';
                }
                break;
        }
    }
    
    if (!isValid) {
        showFieldError(input, errorMessage);
    } else {
        clearFieldError(input);
    }
    
    return isValid;
}

function showFieldError(input, message) {
    clearFieldError(input);
    
    input.style.borderColor = '#ef4444';
    input.style.background = 'rgba(239, 68, 68, 0.05)';
    
    const errorElement = document.createElement('div');
    errorElement.className = 'field-error';
    errorElement.textContent = message;
    errorElement.style.cssText = `
        color: #ef4444;
        font-size: 0.8rem;
        margin-top: 0.5rem;
        display: flex;
        align-items: center;
        gap: 0.25rem;
    `;
    
    input.parentNode.appendChild(errorElement);
}

function clearFieldError(input) {
    input.style.borderColor = '';
    input.style.background = '';
    
    const errorElement = input.parentNode.querySelector('.field-error');
    if (errorElement) {
        errorElement.remove();
    }
}

function clearValidationErrors() {
    const errorElements = document.querySelectorAll('.field-error');
    errorElements.forEach(element => element.remove());
    
    const inputs = document.querySelectorAll('.form-input');
    inputs.forEach(input => {
        input.style.borderColor = '';
        input.style.background = '';
    });
}

function getFieldLabel(fieldName) {
    const labels = {
        name: 'Full Name',
        mobile: 'Mobile Number',
        password: 'Password'
    };
    return labels[fieldName] || fieldName;
}

// Form Submission
function initFormSubmission() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    
    loginForm.addEventListener('submit', handleLogin);
    signupForm.addEventListener('submit', handleSignup);
}

async function handleLogin(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitBtn = form.querySelector('.submit-btn');
    const formData = new FormData(form);
    
    // Validate form
    if (!validateForm(form)) {
        showNotification('Please fix the errors and try again', 'error');
        return;
    }
    
    // Show loading state
    setButtonLoading(submitBtn, true);
    
    try {
        // Simulate API call
        await simulateApiCall();
        
        const loginData = {
            mobile: formData.get('mobile'),
            password: formData.get('password'),
            remember: formData.get('remember') === 'on'
        };
        
        console.log('Login data:', loginData);
        
        // Success
        showNotification('Login successful! Redirecting...', 'success');
        
        // Simulate redirect after delay
        setTimeout(() => {
            // window.location.href = '/dashboard';
            console.log('Redirecting to dashboard...');
        }, 2000);
        
    } catch (error) {
        console.error('Login error:', error);
        showNotification('Login failed. Please check your credentials.', 'error');
    } finally {
        setButtonLoading(submitBtn, false);
    }
}

async function handleSignup(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitBtn = form.querySelector('.submit-btn');
    const formData = new FormData(form);
    
    // Validate form
    if (!validateForm(form)) {
        showNotification('Please fix the errors and try again', 'error');
        return;
    }
    
    // Check terms agreement
    const termsCheckbox = form.querySelector('#terms-agreement');
    if (!termsCheckbox.checked) {
        showNotification('Please agree to the Terms of Service and Privacy Policy', 'error');
        return;
    }
    
    // Show loading state
    setButtonLoading(submitBtn, true);
    
    try {
        // Simulate API call
        await simulateApiCall();
        
        const signupData = {
            name: formData.get('name'),
            mobile: formData.get('mobile'),
            password: formData.get('password'),
            terms: formData.get('terms') === 'on'
        };
        
        console.log('Signup data:', signupData);
        
        // Success
        showNotification('Account created successfully! Welcome aboard!', 'success');
        
        // Switch to login form after delay
        setTimeout(() => {
            document.getElementById('login-tab').click();
            document.getElementById('login-mobile').value = signupData.mobile;
        }, 2000);
        
    } catch (error) {
        console.error('Signup error:', error);
        showNotification('Signup failed. Please try again.', 'error');
    } finally {
        setButtonLoading(submitBtn, false);
    }
}

function validateForm(form) {
    const inputs = form.querySelectorAll('.form-input');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });
    
    return isValid;
}

function setButtonLoading(button, loading) {
    const btnText = button.querySelector('.btn-text');
    const btnIcon = button.querySelector('.btn-icon');
    const btnLoading = button.querySelector('.btn-loading');
    
    if (loading) {
        btnText.style.opacity = '0';
        btnIcon.style.opacity = '0';
        btnLoading.style.display = 'flex';
        button.disabled = true;
    } else {
        btnText.style.opacity = '1';
        btnIcon.style.opacity = '1';
        btnLoading.style.display = 'none';
        button.disabled = false;
    }
}

// Simulate API call
function simulateApiCall() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate 90% success rate
            if (Math.random() > 0.1) {
                resolve({ success: true });
            } else {
                reject(new Error('Network error'));
            }
        }, 1500 + Math.random() * 1000);
    });
}

// Notification System
function initNotifications() {
    // Auto-hide notifications after 5 seconds
    document.addEventListener('click', function(e) {
        if (e.target.closest('.notification-close')) {
            hideNotification();
        }
    });
}

function showNotification(message, type = 'info') {
    const notification = document.getElementById('notification');
    const notificationText = notification.querySelector('.notification-text');
    const notificationIcon = notification.querySelector('.notification-icon');
    
    // Set message
    notificationText.textContent = message;
    
    // Set icon based on type
    notificationIcon.innerHTML = '';
    if (type === 'success') {
        notificationIcon.innerHTML = '<i data-lucide="check-circle"></i>';
        notification.className = 'notification success';
    } else if (type === 'error') {
        notificationIcon.innerHTML = '<i data-lucide="alert-circle"></i>';
        notification.className = 'notification error';
    } else {
        notificationIcon.innerHTML = '<i data-lucide="info"></i>';
        notification.className = 'notification';
    }
    
    // Initialize new icons
    lucide.createIcons();
    
    // Show notification
    notification.style.display = 'flex';
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        hideNotification();
    }, 5000);
}

function hideNotification() {
    const notification = document.getElementById('notification');
    notification.classList.remove('show');
    
    setTimeout(() => {
        notification.style.display = 'none';
    }, 400);
}

// Keyboard Navigation
document.addEventListener('keydown', function(e) {
    // Enter key on toggle buttons
    if (e.key === 'Enter' && e.target.classList.contains('toggle-btn')) {
        e.target.click();
    }
    
    // Escape key to close notifications
    if (e.key === 'Escape') {
        hideNotification();
    }
    
    // Tab navigation enhancement
    if (e.key === 'Tab') {
        const activeForm = document.querySelector('.auth-form.active');
        if (activeForm) {
            const focusableElements = activeForm.querySelectorAll(
                'input, button, [tabindex]:not([tabindex="-1"])'
            );
            
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];
            
            if (e.shiftKey && document.activeElement === firstElement) {
                e.preventDefault();
                lastElement.focus();
            } else if (!e.shiftKey && document.activeElement === lastElement) {
                e.preventDefault();
                firstElement.focus();
            }
        }
    }
});

// Mobile Number Formatting
document.addEventListener('input', function(e) {
    if (e.target.type === 'tel') {
        let value = e.target.value.replace(/\D/g, '');
        
        // Format as: +1 (234) 567-8900
        if (value.length >= 10) {
            if (value.startsWith('1')) {
                value = value.substring(1);
            }
            value = `+1 (${value.substring(0, 3)}) ${value.substring(3, 6)}-${value.substring(6, 10)}`;
        } else if (value.length >= 6) {
            value = `(${value.substring(0, 3)}) ${value.substring(3, 6)}-${value.substring(6)}`;
        } else if (value.length >= 3) {
            value = `(${value.substring(0, 3)}) ${value.substring(3)}`;
        }
        
        e.target.value = value;
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

// Accessibility Improvements
function announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.style.position = 'absolute';
    announcement.style.left = '-10000px';
    announcement.style.width = '1px';
    announcement.style.height = '1px';
    announcement.style.overflow = 'hidden';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}

// Form Auto-save (optional)
function initAutoSave() {
    const forms = document.querySelectorAll('.auth-form');
    
    forms.forEach(form => {
        const inputs = form.querySelectorAll('.form-input');
        
        inputs.forEach(input => {
            // Don't auto-save passwords
            if (input.type !== 'password') {
                input.addEventListener('input', debounce(() => {
                    localStorage.setItem(`auth_${input.name}`, input.value);
                }, 500));
                
                // Restore saved values
                const savedValue = localStorage.getItem(`auth_${input.name}`);
                if (savedValue) {
                    input.value = savedValue;
                }
            }
        });
    });
}

// Initialize auto-save (uncomment if needed)
// initAutoSave();

// Analytics and Tracking (placeholder)
function trackEvent(eventName, properties = {}) {
    console.log('Track event:', eventName, properties);
    // Integrate with your analytics service here
    // Example: gtag('event', eventName, properties);
}

// Track form interactions
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('toggle-btn')) {
        trackEvent('form_toggle', { form_type: e.target.dataset.form });
    }
    
    if (e.target.classList.contains('submit-btn')) {
        const formType = e.target.closest('form').id.replace('-form', '');
        trackEvent('form_submit_attempt', { form_type: formType });
    }
});

console.log('🚀 Startup Research Agent Auth System Ready!');