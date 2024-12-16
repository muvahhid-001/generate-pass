const slider = document.getElementById("slider");
const number = document.getElementById("number");
const passwordText = document.querySelector(".password-text");
const generateButton = document.querySelector(".generate-bt");

slider.oninput = function () {
  number.textContent = slider.value;
};

slider.oninput = function () {
  number.textContent = slider.value;
};

function generatePassword(length) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }
  return password;
}

generateButton.onclick = function () {
  const passwordLength = parseInt(slider.value);
  const newPassword = generatePassword(passwordLength);
  passwordText.textContent = newPassword;
};
