


var characterLength = 8;
var passwordChoice = [];

var Symbols = ['!', '@', '#', '^', '(', ')', '$', '%']; 
var Lower = ['a', 'b', 'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var Upper = ['A', 'B', 'C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var Numbers = ['0','1','2','3','4','5','6','7','8','9'];


var generateBtn = document.querySelector("#generate"); 
generateBtn.addEventListener("click", writePassword);


function writePassword() {
  var correctPrompts = getPrompts(); 
  var passwordText = document.querySelector("#password"); 

  if (correctPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;

  } else {
    passwordTest.value = '';
  }

}


function generatePassword() {
  var password = "";

  for(var i = 0; i < characterLength; i++) {
    var randomCharacter = Math.floor(Math.random() * passwordChoice.length);
    password = password + passwordChoice[randomCharacter];
  }
  return password;
}
 

function getPrompts() {
  passwordChoice = [];

 
  characterLength = parseInt (prompt("How many characters do you want your password to be? (8-128 characters)"));
  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) { //this should all be false
      alert("Character length has to be one number between 8 - 128");
      return false;
  }

  if (confirm("Would you like lowercase letters in your password?")) {
    passwordChoice = passwordChoice.concat(Lower);
  }

  if (confirm("Would you like uppercase letters in your password?")) {
    passwordChoice = passwordChoice.concat(Upper);
  }  
 
  if (confirm("Would you like special characters in your password?")) {
    passwordChoice = passwordChoice.concat(Symbols);
} 

if (confirm("Would you like numbers in your password?")) {
  passwordChoice = passwordChoice.concat(Numbers);
}

return true;
};


