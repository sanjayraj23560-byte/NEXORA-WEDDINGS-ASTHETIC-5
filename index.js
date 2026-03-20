
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  const enterPortalBtn = document.getElementById('closeLoginModal');

  if (enterPortalBtn) {
    enterPortalBtn.addEventListener('click', function () {
      // Redirects the user to the home page
      window.location.href = 'home.html';
    });
  }
});
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
// 1. Identify the 'Forgot Password' link
const forgotPasswordLink = document.querySelector('a[href="#"]'); // Specifically the one near the checkbox
const forgotModal = document.getElementById('forgotPasswordModal');
const forgotForm = document.getElementById('forgotPasswordForm');

// 2. Open Modal Function
if (forgotPasswordLink) {
  forgotPasswordLink.addEventListener('click', (e) => {
    e.preventDefault();
    forgotModal.classList.remove('hidden');
  });
}

// 3. Close Modal Function
function closeForgotModal() {
  forgotModal.classList.add('hidden');
}

// 4. Handle Form Submission & Redirect
if (forgotForm) {
  forgotForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // You could add a 'Success' message here, but as requested:
    // Direct redirect to home page
    window.location.href = 'home.html';
  });
}

// Optional: Close modal if clicking outside the box
window.addEventListener('click', (e) => {
  if (e.target === forgotModal) {
    closeForgotModal();
  }
});
// Close functionality
closeLoginModal.addEventListener('click', () => {
  loginModalContent.classList.add('scale-95', 'opacity-0');
  setTimeout(() => {
    loginModal.classList.add('hidden');
    // Optional: window.location.href = 'index.html';
  }, 300);
});