// Registration Form Script (Validation, Redirect & Menu Toggle)

document.addEventListener("DOMContentLoaded", function () {
  console.log("✅ script.js loaded successfully");

  const form = document.querySelector('form[action="https://formspree.io/f/mvgzernd"]');

  if (!form) {
    console.warn("⚠️ Form not found — check your form action URL or file path.");
    return;
  }

   // stop default submit
  form.addEventListener("submit", async function (event) {
    event.preventDefault();
    event.stopPropagation();

    if (!form.checkValidity()) {
      alert("⚠️ Please complete all required fields correctly before submitting.");
      return;
    }

    // Collect form data
    const formData = new FormData(form);

    try {
      // Send to Formspree using Fetch - Redirect to Thank You page
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        console.log("✅ Form submitted successfully!");
        window.location.href = "index2.html"; 
      } else {
        console.error("❌ Form submission failed:", response.statusText);
        alert("Submission failed. Please try again later.");
      }
    } catch (error) {
      console.error("❌ Error submitting form:", error);
      alert("An error occurred. Please check your connection and try again.");
    }
  });

  //  Hamburger Menu Toggle 
  const menu = document.getElementById("mobile-menu");
  const navLinks = document.querySelector(".nav-links");

  menu.addEventListener("click", () => {
    menu.classList.toggle("active");
    navLinks.classList.toggle("active");
  });
});

