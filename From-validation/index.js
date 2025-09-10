const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const passwordInput = document.getElementById('password');
const cpasswordInput = document.getElementById('cpassword');
const submitError = document.getElementById('submit-error');

// Regex validators
const nameRegex = /^[a-zA-Z\s]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\d{10,15}$/;

function showError(input, message) {
  const group = input.parentElement;
  const error = group.querySelector('.error-message');
  group.classList.add('invalid');
  group.classList.remove('valid');
  error.innerText = message;
}

function showSuccess(input) {
  const group = input.parentElement;
  group.classList.remove('invalid');
  group.classList.add('valid');
}

function validateName() {
  const value = nameInput.value.trim();
  if (value === '') {
    showError(nameInput, 'Name is required');
    return false;
  } else if (!nameRegex.test(value)) {
    showError(nameInput, 'Name must contain only letters');
    return false;
  } else {
    showSuccess(nameInput);
    return true;
  }
}

function validateEmail() {
  const value = emailInput.value.trim();
  if (value === '') {
    showError(emailInput, 'Email is required');
    return false;
  } else if (!emailRegex.test(value)) {
    showError(emailInput, 'Enter a valid email');
    return false;
  } else {
    showSuccess(emailInput);
    return true;
  }
}

function validatePhone() {
  const value = phoneInput.value.trim();
  if (value === '') {
    showError(phoneInput, 'Phone number is required');
    return false;
  } else if (!phoneRegex.test(value)) {
    showError(phoneInput, 'Enter a valid phone number');
    return false;
  } else {
    showSuccess(phoneInput);
    return true;
  }
}

function validatePassword() {
  const value = passwordInput.value.trim();
  if (value === '') {
    showError(passwordInput, 'Password is required');
    return false;
  } else {
    showSuccess(passwordInput);
    return true;
  }
}

function validateConfirmPassword() {
  const value = cpasswordInput.value.trim();
  if (value === '') {
    showError(cpasswordInput, 'Confirm password is required');
    return false;
  } else if (value !== passwordInput.value.trim()) {
    showError(cpasswordInput, 'Passwords do not match');
    return false;
  } else {
    showSuccess(cpasswordInput);
    return true;
  }
}

// Event listeners for real-time validation
nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
phoneInput.addEventListener('input', validatePhone);
passwordInput.addEventListener('input', validatePassword);
cpasswordInput.addEventListener('input', validateConfirmPassword);

// Form submit
form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPhoneValid = validatePhone();
  const isPasswordValid = validatePassword();
  const isCPasswordValid = validateConfirmPassword();

  if (isNameValid && isEmailValid && isPhoneValid && isPasswordValid && isCPasswordValid) {
    submitError.style.display = 'none';
    alert('Form submitted successfully!');
    form.reset();
    document.querySelectorAll('.input-group').forEach(group => group.classList.remove('valid'));
  } else {
    submitError.style.display = 'block';
    submitError.innerText = 'Please fix the errors above';
  }
});
