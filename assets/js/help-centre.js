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

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(function(button) {
  button.addEventListener('click', function() {
    const isOpen = this.getAttribute('aria-expanded') === 'true';
    // Close all FAQs
    document.querySelectorAll('.faq-question').forEach(function(otherBtn) {
      otherBtn.setAttribute('aria-expanded', 'false');
      const otherAnswer = otherBtn.nextElementSibling;
      otherAnswer.classList.remove('open');
    });
    // Toggle clicked
    if (!isOpen) {
      this.setAttribute('aria-expanded', 'true');
      const answer = this.nextElementSibling;
      answer.classList.add('open');
    }
  });
  // Keyboard support
  button.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      this.click();
    }
  });
});

// Search tags click to populate search
document.querySelectorAll('.search-tag').forEach(function(tag) {
  tag.addEventListener('click', function() {
    const searchInput = document.querySelector('.search-box input');
    searchInput.value = this.textContent.trim();
    searchInput.focus();
  });
});

// Search button click
document.querySelector('.search-box button').addEventListener('click', function() {
  const query = document.querySelector('.search-box input').value.trim();
  if (query) {
    alert('Search functionality would display results for: "' + query + '"\n\nThis is a demo. In production, this would redirect to search results.');
  }
});

// Enter key on search input
document.querySelector('.search-box input').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    document.querySelector('.search-box button').click();
  }
});
