function toggleNav() {
  const mobileMenu = document.getElementById('mobile-menu');
  if (!mobileMenu) return;
  const isOpen = mobileMenu.classList.contains('menu-open');
  if (isOpen) {
    mobileMenu.classList.remove('menu-open');
    mobileMenu.style.maxHeight = '0';
    mobileMenu.style.opacity = '0';
  } else {
    mobileMenu.classList.add('menu-open');
    mobileMenu.style.maxHeight = '400px';
    mobileMenu.style.opacity = '1';
  }
}

(function initStickyNav() {
  const nav = document.querySelector('nav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      nav.classList.add('nav-scrolled');
    } else {
      nav.classList.remove('nav-scrolled');
    }
  }, { passive: true });
})();


// Select elements
const contactForm = document.getElementById('contactForm');
const successModal = document.getElementById('successModal');
const modalContent = document.getElementById('modalContent');
const closeModal = document.getElementById('closeModal');
const dynamicMessage = document.getElementById('dynamicMessage');

// Form Submit Event
contactForm.addEventListener('submit', function (e) {
  e.preventDefault();

  // Get values from input
  const name = document.getElementById('name').value;
  const service = document.getElementById('service').value;

  // Set the custom message dynamically
  dynamicMessage.textContent = `Thank you, ${name}! Your request regarding "${service}" has been received. Our team will contact you shortly.`;

  // 1. Show the background overlay
  successModal.classList.remove('hidden');

  // 2. Clear the form fields
  this.reset();
});

// Close Modal Event (Click Button)
closeModal.addEventListener('click', function () {
  closeSuccessModal();
});

// Close Modal Event (Clicking Outside the Content Card)
successModal.addEventListener('click', function (e) {
  if (e.target === successModal) {
    closeSuccessModal();
  }
});

// Helper function to hide the modal smoothly
function closeSuccessModal() {
  // Add hidden after a short delay to let animation finish
  modalContent.classList.add('opacity-0');
  setTimeout(() => {
    successModal.classList.add('hidden');
    modalContent.classList.remove('opacity-0');
  }, 250);
}