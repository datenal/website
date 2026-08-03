// Menu toggle
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle.addEventListener("click", function () {
  mainNav.classList.toggle("active");
  const icon = menuToggle.querySelector("i");
  if (mainNav.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
});
document.querySelectorAll("nav a").forEach(function(link) {
  link.addEventListener("click", function() {
    mainNav.classList.remove("active");
    const icon = menuToggle.querySelector("i");
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  });
});

// FAQ accordion
function toggleFaq(el) {
  const answer = el.nextElementSibling;
  const icon = el.querySelector("i");
  if (answer.classList.contains("open")) {
    answer.classList.remove("open");
    icon.style.transform = "rotate(0deg)";
  } else {
    document.querySelectorAll(".faq-answer").forEach(a => a.classList.remove("open"));
    document.querySelectorAll(".faq-question i").forEach(i => i.style.transform = "rotate(0deg)");
    answer.classList.add("open");
    icon.style.transform = "rotate(180deg)";
  }
}

// Form validation & submission
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const status = document.getElementById("formStatus");
  const name = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const consent = document.getElementById("consent").checked;

  if (!name || !email || !message || !consent) {
    status.className = "form-message error";
    status.textContent = "Please fill in all required fields and agree to the consent.";
    return;
  }

  // Simulate sending
  status.className = "form-message success";
  status.textContent = "Thank you! Your message has been sent. We'll get back to you shortly.";
  this.reset();
  setTimeout(() => {
    status.className = "form-message";
    status.textContent = "";
  }, 6000);
});
