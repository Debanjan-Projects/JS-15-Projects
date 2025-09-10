const passwordBox = document.getElementById("password");

const length = 10;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*~{}[]<>,./?";

// ✅ FIXED: changed "uppercase" → "upperCase"
const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  // ✅ FIXED: while condition corrected
  while (password.length < length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passwordBox.value = password;
}

// Optional: Copy password to clipboard
function copyPassword() {
  if (passwordBox.value !== "") {
    passwordBox.select();
    document.execCommand("copy");
    alert("Password copied!");
  }
}
