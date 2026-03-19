function toggleNav() {
    const sideNav = document.getElementById('sideNav');
    sideNav.classList.toggle('hidden');
    sideNav.classList.toggle('flex');
}
const loginForm = document.getElementById('loginForm');
const loginModal = document.getElementById('loginModal');
const loginModalContent = document.getElementById('loginModalContent');
const userGreeting = document.getElementById('userGreeting');
const closeLoginModal = document.getElementById('closeLoginModal');

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get the name part of the email
    const email = document.getElementById('email').value;
    const name = email.split('@')[0];

    // Set message and show modal
    userGreeting.textContent = `Welcome back, ${name}! Redirecting you to the Nexora Wedding Portal.`;

    loginModal.classList.remove('hidden');

    // Short delay for the scale/opacity animation
    setTimeout(() => {
        loginModalContent.classList.remove('scale-95', 'opacity-0');
    }, 10);
});

// Close functionality
closeLoginModal.addEventListener('click', () => {
    loginModalContent.classList.add('scale-95', 'opacity-0');
    setTimeout(() => {
        loginModal.classList.add('hidden');
        // Optional: window.location.href = 'index.html';
    }, 300);
});