// Custom form validation for JOMACS Registration Form
document.addEventListener("DOMContentLoaded", function () {
  console.log("✅ script.js loaded successfully"); // Debug check for GitHub Pages

  const form = document.querySelector(
    'form[action="https://formspree.io/f/mvgzernd"]'
  );

  if (!form) {
    console.warn(
      "⚠️ Form not found — check your form action URL or file path."
    );
    return;
  }

  form.addEventListener("submit", function (event) {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
      alert(
        "⚠️ Please complete all required fields correctly before submitting."
      );
    }
  });
});

const menu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  navLinks.classList.toggle("active");
});
