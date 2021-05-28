var button = document.getElementById('generate');
var numbers = document.getElementById('numbers');
var small = document.getElementById('small');
var capital = document.getElementById('capital');
var special = document.getElementById('special');
var displayPassword = document.getElementById('password');
var length = document.getElementById('length');
var copy = document.getElementById('copy');

function smallLetters() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function capitalLetters() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function numbersIncl() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function specialChar() {
  var specialCharacters = '!@#$%^&*(){}|-=+:?></.,[];';

  return specialCharacters.charAt(
    Math.floor(Math.random() * specialCharacters.length)
  );
}

button.addEventListener('click', () => {
  var number = numbers.checked;
  var smallL = small.checked;
  var capitalL = capital.checked;
  var specialL = special.checked;

  if (!number && !smallL && !capitalL && !specialL) {
    displayPassword.innerText = 'Select atleast one option';
  } else {
    var password = '';
    var size = length.value;

    if (!size) {
      displayPassword.innerText += 'Select the length of the password';
    }

    while (password.length != size) {
      var funN = Math.floor(Math.random() * 4);
      password +=
        funN == 0 && smallL
          ? smallLetters()
          : funN == 1 && capitalL
          ? capitalLetters()
          : funN == 2 && number
          ? numbersIncl()
          : funN == 3 && specialL
          ? specialChar()
          : '';
    }

    displayPassword.innerText = password;

    copy.addEventListener('click', () => {
      var textarea = document.createElement('textarea');
      textarea.value = password;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      setTimeout(() => {
        copied.innerText = '';
      }, 1000);
      textarea.remove();
    });
  }
});
