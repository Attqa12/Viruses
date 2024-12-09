// JavaScript for Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
  const mobileToggle = document.querySelector(".mobile-menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  mobileToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
  });
});




var navLinks = document.getElementById("navLinks");

function showMenu(){
  navLinks.style.right = "0"
}

function hideMenu(){
  navLinks.style.right = "-50%"
}

// On scroll navbar styles change
const nav = document.querySelector("Nav")

window.addEventListener ("scroll", function() {
    nav.classList.toggle ("sticky", window.scrollY > 0);
});

// Get the modal, button and close elements
const popup = document.getElementById('feedback-popup');
const feedbackBtn = document.getElementById('feedback-btn');
const closePopup = document.getElementById('close-popup');

// Show the popup when feedback button is clicked
feedbackBtn.onclick = function() {
  popup.style.display = 'flex';
}

// Close the popup when close button is clicked
closePopup.onclick = function() {
  popup.style.display = 'none';
}

// Close the popup if the user clicks outside of the modal
window.onclick = function(event) {
  if (event.target === popup) {
    popup.style.display = 'none';
  }
}

// Handle form submission (e.g., display a message or send the data)
const feedbackForm = document.getElementById('feedback-form');
feedbackForm.onsubmit = function(event) {
  event.preventDefault();

  // You can process the form data here, e.g., send to your server via AJAX
  alert('Thank you for your feedback!');
  
  // Close the popup after submission
  popup.style.display = 'none';

  // Optionally, reset the form
  feedbackForm.reset();
}
