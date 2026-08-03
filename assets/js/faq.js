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

// =========================
// FAQ ACCORDION - Universal
// =========================
(function() {
  const faqItems = document.querySelectorAll('.faq-item');
  let currentlyOpen = null;

  faqItems.forEach(item => {
    const button = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    
    // Ensure answer starts closed
    answer.classList.remove('open');
    button.setAttribute('aria-expanded', 'false');
    
    button.addEventListener('click', function(e) {
      const isOpen = answer.classList.contains('open');
      
      // Close all FAQs
      faqItems.forEach(otherItem => {
        const otherButton = otherItem.querySelector('.faq-question');
        const otherAnswer = otherItem.querySelector('.faq-answer');
        otherAnswer.classList.remove('open');
        otherButton.setAttribute('aria-expanded', 'false');
      });
      
      // Toggle the clicked one
      if (!isOpen) {
        answer.classList.add('open');
        button.setAttribute('aria-expanded', 'true');
        currentlyOpen = item;
      } else {
        currentlyOpen = null;
      }
    });
  });

  // Keyboard support - Enter and Space keys
  document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });
  });

})();
