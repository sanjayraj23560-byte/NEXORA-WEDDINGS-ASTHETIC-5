function toggleNav() {
  const sideNav = document.getElementById("sideNav");
  sideNav.classList.toggle("hidden");
  sideNav.classList.toggle("flex");
}

const loginForm = document.getElementById("loginForm");
const loginModal = document.getElementById("loginModal");
const loginModalContent = document.getElementById("loginModalContent");
const closeLoginModal = document.getElementById("closeLoginModal");
const userGreeting = document.getElementById("userGreeting");
const emailInput = document.getElementById("email");

loginForm.addEventListener("submit", function(event) {
  event.preventDefault(); 
  
  const emailVal = emailInput.value;
  const name = emailVal.split('@')[0];
  userGreeting.textContent = `Welcome aboard, ${name}!`;

  loginModal.classList.remove("hidden");
  loginModal.classList.add("flex");
  
  setTimeout(() => {
    loginModalContent.classList.remove("scale-95", "opacity-0");
    loginModalContent.classList.add("scale-100", "opacity-100");
  }, 10);
});

closeLoginModal.addEventListener("click", function() {
  window.location.href = "home.html";
});