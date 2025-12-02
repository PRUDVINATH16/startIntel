function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    const mobileLinks = document.querySelectorAll('.nav-mobile-link');
    
    if (!mobileMenuBtn || !mobileMenu) {
        console.error("Mobile menu elements not found. Make sure your header is loaded correctly.");
        return;
    }
    
    let isMenuOpen = false;
    
    // Toggle mobile menu
    mobileMenuBtn.addEventListener('click', function() {
        isMenuOpen = !isMenuOpen;
        
        if (isMenuOpen) {
            mobileMenu.classList.add('show');
            menuIcon.style.display = 'none';
            closeIcon.style.display = 'block';
            document.body.style.overflow = 'hidden';
        } else {
            mobileMenu.classList.remove('show');
            menuIcon.style.display = 'block';
            closeIcon.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
    
    // Close menu when clicking on mobile links
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (isMenuOpen) {
                mobileMenuBtn.click(); // Simulate a click to close the menu
            }
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (isMenuOpen && !mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
            mobileMenuBtn.click();
        }
    });
    
    // Close menu on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && isMenuOpen) {
            mobileMenuBtn.click();
        }
    });
}

let user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
if(user){
    location.href='https://prudvinath16.github.io/startIntel/home.html';
}
