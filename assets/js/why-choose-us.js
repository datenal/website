// =========================
// MENU TOGGLE
// =========================
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
// COUNTER ANIMATION
// =========================
function animateCounters() {
  const counters = document.querySelectorAll('.stat-number');
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-count'));
    const duration = 2000;
    const step = Math.max(1, Math.floor(target / 60));
    let current = 0;
    
    const updateCounter = () => {
      current += step;
      if (current >= target) {
        counter.textContent = target + (counter.textContent.includes('%') ? '%' : '');
        return;
      }
      counter.textContent = current;
      requestAnimationFrame(updateCounter);
    };
    
    // Check if element is visible
    const rect = counter.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      updateCounter();
    }
  });
}

// Run on load and scroll
setTimeout(animateCounters, 500);
window.addEventListener('scroll', animateCounters);

// =========================
// SCROLL ANIMATION FOR ADVANTAGE CARDS
// =========================
if ('IntersectionObserver' in window) {
  const cards = document.querySelectorAll('.advantage-card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, index * 80);
      }
    });
  }, { threshold: 0.1 });
  
  cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(25px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
}

// =========================
// SCROLL ANIMATION FOR PROMISE CARDS
// =========================
if ('IntersectionObserver' in window) {
  const promises = document.querySelectorAll('.promise-card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'scale(1)';
        }, index * 60);
      }
    });
  }, { threshold: 0.1 });
  
  promises.forEach((promise, index) => {
    promise.style.opacity = '0';
    promise.style.transform = 'scale(0.95)';
    promise.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(promise);
  });
}
