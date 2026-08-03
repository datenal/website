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
// OTHER SERVICE TOGGLE
// =========================
const serviceSelect = document.getElementById('service');
const otherContainer = document.getElementById('otherServiceContainer');
const otherInput = document.getElementById('otherService');

serviceSelect.addEventListener('change', function() {
  if (this.value === 'Other') {
    otherContainer.style.display = 'block';
    otherInput.setAttribute('required', 'required');
  } else {
    otherContainer.style.display = 'none';
    otherInput.removeAttribute('required');
    otherInput.value = '';
  }
});

// =========================
// FILE UPLOAD
// =========================
const fileInput = document.getElementById('fileInput');
const fileList = document.getElementById('fileList');
const dropZone = document.getElementById('fileDropZone');

// Click to upload
dropZone.addEventListener('click', function() {
  fileInput.click();
});

// Drag and drop
dropZone.addEventListener('dragover', function(e) {
  e.preventDefault();
  this.style.borderColor = '#0A3D91';
  this.style.background = '#edf5ff';
});

dropZone.addEventListener('dragleave', function(e) {
  e.preventDefault();
  this.style.borderColor = '#d1d5db';
  this.style.background = 'white';
});

dropZone.addEventListener('drop', function(e) {
  e.preventDefault();
  this.style.borderColor = '#d1d5db';
  this.style.background = 'white';
  const files = e.dataTransfer.files;
  handleFiles(files);
});

fileInput.addEventListener('change', function() {
  handleFiles(this.files);
});

function handleFiles(files) {
  for (let file of files) {
    const tag = document.createElement('span');
    tag.className = 'file-tag';
    tag.innerHTML = `<i class="fa-regular fa-file"></i> ${file.name} (${(file.size / 1024).toFixed(0)}KB) <span class="remove-file" onclick="removeFile(this)">&times;</span>`;
    fileList.appendChild(tag);
  }
  fileInput.value = '';
}

function removeFile(el) {
  el.parentElement.remove();
}

// =========================
// FORM VALIDATION
// =========================
const form = document.getElementById('requestForm');
const formContainer = document.getElementById('formContainer');
const successMessage = document.getElementById('successMessage');

function showError(inputId, errorId) {
  const input = document.getElementById(inputId);
  const error = document.getElementById(errorId);
  input.classList.add('error');
  error.classList.add('visible');
}

function clearError(inputId, errorId) {
  const input = document.getElementById(inputId);
  const error = document.getElementById(errorId);
  input.classList.remove('error');
  error.classList.remove('visible');
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone) {
  return /^[\+\d\s\-\(\)]{8,20}$/.test(phone);
}

form.addEventListener('submit', function(e) {
  e.preventDefault();
  let isValid = true;

  // First Name
  const firstName = document.getElementById('firstName');
  if (!firstName.value.trim()) {
    showError('firstName', 'firstNameError');
    isValid = false;
  } else {
    clearError('firstName', 'firstNameError');
  }

  // Last Name
  const lastName = document.getElementById('lastName');
  if (!lastName.value.trim()) {
    showError('lastName', 'lastNameError');
    isValid = false;
  } else {
    clearError('lastName', 'lastNameError');
  }

  // Email
  const email = document.getElementById('email');
  if (!validateEmail(email.value.trim())) {
    showError('email', 'emailError');
    isValid = false;
  } else {
    clearError('email', 'emailError');
  }

  // Phone
  const phone = document.getElementById('phone');
  if (!validatePhone(phone.value.trim())) {
    showError('phone', 'phoneError');
    isValid = false;
  } else {
    clearError('phone', 'phoneError');
  }

  // Service
  const service = document.getElementById('service');
  if (!service.value) {
    showError('service', 'serviceError');
    isValid = false;
  } else {
    clearError('service', 'serviceError');
  }

  // Request Type
  const requestType = document.getElementById('requestType');
  if (!requestType.value) {
    showError('requestType', 'requestTypeError');
    isValid = false;
  } else {
    clearError('requestType', 'requestTypeError');
  }

  // Subject
  const subject = document.getElementById('subject');
  if (!subject.value.trim()) {
    showError('subject', 'subjectError');
    isValid = false;
  } else {
    clearError('subject', 'subjectError');
  }

  // Details
  const details = document.getElementById('details');
  if (details.value.trim().length < 10) {
    showError('details', 'detailsError');
    isValid = false;
  } else {
    clearError('details', 'detailsError');
  }

  // Privacy Consent
  const privacy = document.getElementById('privacyConsent');
  if (!privacy.checked) {
    document.getElementById('privacyError').classList.add('visible');
    isValid = false;
  } else {
    document.getElementById('privacyError').classList.remove('visible');
  }

  if (isValid) {
    // Hide form, show success
    form.style.display = 'none';
    successMessage.classList.add('visible');

    // Scroll to top of form
    formContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
});

// Real-time validation clearing
document.querySelectorAll('input, select, textarea').forEach(function(el) {
  el.addEventListener('input', function() {
    const errorId = this.id + 'Error';
    const errorEl = document.getElementById(errorId);
    if (errorEl) {
      this.classList.remove('error');
      errorEl.classList.remove('visible');
    }
  });
  el.addEventListener('change', function() {
    const errorId = this.id + 'Error';
    const errorEl = document.getElementById(errorId);
    if (errorEl) {
      this.classList.remove('error');
      errorEl.classList.remove('visible');
    }
  });
});

// =========================
// RESET FORM FUNCTION
// =========================
function resetForm() {
  form.reset();
  form.style.display = 'block';
  successMessage.classList.remove('visible');
  fileList.innerHTML = '';
  otherContainer.style.display = 'none';
  document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
  document.querySelectorAll('.error-message').forEach(el => el.classList.remove('visible'));
  document.getElementById('privacyError').classList.remove('visible');
  formContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
