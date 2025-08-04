// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Initialize Lucide icons
    lucide.createIcons();

    // Initialize all functionality
    initToggleNavigation();
    initPasswordToggle();
    initPasswordStrength();
    initFormValidation();
    initFormSubmission();

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
        toggle.addEventListener('click', function () {
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

    signupPassword.addEventListener('input', function () {
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
                if (!/^[6-9]\d{9}$/.test(value)) {
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
        return;
    }

    // Show loading state
    setButtonLoading(submitBtn, true);

    try {
        const loginData = {
            mobile: formData.get('mobile'),
            password: formData.get('password'),
        };

        console.log('Login data:', loginData);


        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        });
        const result = await response.json();
        console.log(result);

        if(result.success && result.message=='login successfully'){
            location.href = 'home.html';
        }
        else if(result.success==false && result.message=='password incorrect')
        {
            msg=document.querySelector('#login-message'),
            msg.innerHTML='please enter correct password';
            document.querySelector('.login-msg').style.display='flex';
            setTimeout(() => {
                document.querySelector('.login-msg').style.display='none'; 
            }, 3500);
        }
        else if (result.message=='some error occoured'){
            msg=document.querySelector('#login-message')
            msg.innerHTML='internal server error please try again after sometime'; 
            document.querySelector('.login-msg').style.display='flex';
            setTimeout(() => {
                document.querySelector('.login-msg').style.display='none'; 
            }, 3500);

        }
        else if (result.message==`Account doesn't exsist`){
            msg=document.querySelector('#login-message')
            msg.innerHTML='Account not found'; 
            document.querySelector('.login-msg').style.display='flex';
            setTimeout(() => {
                document.querySelector('.login-msg').style.display='none'; 
            }, 3500);

        }




    } catch (error) {
        console.error('Login error:', error);
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
        return;
    }

    // Show loading state
    setButtonLoading(submitBtn, true);

    try {
        const signupData = {
            username: formData.get('name'),
            mobile: formData.get('mobile'),
            password: formData.get('password'),
        };

        console.log('Signup data:', signupData);


        const response = await fetch('/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(signupData)
        });

        console.log(response);

        const result = await response.json();
        console.log(result);

        if(result.success && result.message=='user created successfully'){
            location.href = 'home.html';
        }
        else if(result.success== false && result.message=='user already exist' ){
            msg=document.querySelector('#message')
          
            msg.innerHTML='Account already exist with this mobile number';
            
            document.querySelector('.msg').style.display='flex';
            setTimeout(() => {
                document.querySelector('.msg').style.display='none'; 
            }, 3500);

        }
        else{
            msg=document.querySelector('#message')
            msg.innerHTML='internal server error please try again after sometime'; 
            document.querySelector('.msg').style.display='flex';
            setTimeout(() => {
                document.querySelector('.msg').style.display='none'; 
            }, 3500);

        }


    } catch (error) {
        console.error('Signup error:', error);
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

// Keyboard Navigation
document.addEventListener('keydown', function (e) {
    // Enter key on toggle buttons
    if (e.key === 'Enter' && e.target.classList.contains('toggle-btn')) {
        e.target.click();
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
document.addEventListener('input', function (e) {
    if (e.target.type === 'tel') {
        let value = e.target.value.replace(/\D/g, '');
        e.target.value = value;
    }
});

