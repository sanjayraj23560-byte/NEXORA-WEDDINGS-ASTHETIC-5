function toggleNav() {
        const sideNav = document.getElementById('sideNav');
        sideNav.classList.toggle('hidden');
        sideNav.classList.toggle('flex');
    }
const contactForm = document.getElementById('contactForm');
const successModal = document.getElementById('successModal');
const modalContent = document.getElementById('modalContent');
const closeModal = document.getElementById('closeModal');
const dynamicMessage = document.getElementById('dynamicMessage');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const service = document.getElementById('service').value;

    dynamicMessage.textContent = `Thank you, ${name}! Your request regarding "${service}" has been received. Our team will contact you shortly.`;

    successModal.classList.remove('hidden');
    
    this.reset();
});

closeModal.addEventListener('click', function() {
    closeSuccessModal();
});

successModal.addEventListener('click', function(e) {
    if (e.target === successModal) {
        closeSuccessModal();
    }
});

function closeSuccessModal() {
    modalContent.classList.add('opacity-0');
    setTimeout(() => {
        successModal.classList.add('hidden');
        modalContent.classList.remove('opacity-0');
    }, 250); 
}