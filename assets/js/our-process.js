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
// SCROLL ANIMATION FOR PROCESS STEPS
// =========================
if ('IntersectionObserver' in window) {
  const steps = document.querySelectorAll('.process-step');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateX(0)';
        }, index * 100);
      }
    });
  }, { threshold: 0.1 });
  
  steps.forEach((step, index) => {
    step.style.opacity = '0';
    step.style.transform = 'translateX(20px)';
    step.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(step);
  });
}

// =========================
// SCROLL ANIMATION FOR FEATURE CARDS
// =========================
if ('IntersectionObserver' in window) {
  const features = document.querySelectorAll('.process-feature');
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
  
  features.forEach((feature, index) => {
    feature.style.opacity = '0';
    feature.style.transform = 'translateY(20px)';
    feature.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(feature);
  });
}

// =========================
// SCROLL ANIMATION FOR INDUSTRY CARDS
// =========================
if ('IntersectionObserver' in window) {
  const industries = document.querySelectorAll('.industry-card');
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
  
  industries.forEach((industry, index) => {
    industry.style.opacity = '0';
    industry.style.transform = 'scale(0.95)';
    industry.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(industry);
  });
}
