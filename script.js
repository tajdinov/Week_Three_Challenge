// Assignment Code
var generateBtn = document.querySelector("#generate");

var specialChars = "!#$%//&'()*+,-./\:;<=>?@[]^_`{|}~";
var numbers = "0123456789";
var letters = "abcdefghijklmnokqrstuvwxyz";
var uLetters = letters.toUpperCase();

function generatePassword() {

  var passLength = parseInt(prompt('How many characters would you like your password? Choose between 8 and 128'));
  if (!passLength) {
    alert('Bad value');
    return;
  }

  if (passLength < 8 || passLength > 128) {
    alert('Length must be between 8 and 128');
    return;
  }

  var possibleChars = "";

  if (confirm("Will this contain numbers?")) {
    possibleChars += numbers;
  }
  if (confirm("Will this contain special characters?")) {
    possibleChars += specialChars;
  }
  if (confirm("Will this contain Uppercase letters?")) {
    possibleChars += uLetters;
  }
  if (confirm("Will this contain Lowercase letters?")) {
    possibleChars += letters;
  }

  if (possibleChars === "") {
    alert('You must choose a criteria!');
    return;
  }


  var password = "";

  for (var i = 0; i < passLength; i++) {
      var passChar = possibleChars[Math.floor(Math.random() * possibleChars.length)];
      password += passChar;
  }

  return password;
}

// Write password to the #password input
function genAndShowPass() {
  var pass = generatePassword();

  if (pass) {
    var passwordText = document.querySelector("#password");
    passwordText.value = pass;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", genAndShowPass);
