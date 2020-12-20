//Refrence: 
  //If Statements: https://www.w3schools.com/js/js_if_else.asp
  //Math.floor/random: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  //Code: https://github.com/alirueter/password-generator
// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var masterArray=[];
//password criteria
var numArr=['0','1','2','3','4','5','6','7','8','9'];
var letterLower=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var letterUpper=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var specialchar=['!','?','#','$','&','*','+','/',';','-','~'];
//contains everything you need based on userinput
var isNum;
var userLength;

//variable to declare
var confirmnumArr;
var confirmlowerLetter;
var confirmletterUpper;
var confirmspecialchar;
var confirmuserLenght;

//function generatePassword returns the finalpassword
function generatePassword(){
  //series of questions to ask the user
  var confirmnumArr = (window.confirm("Would you like numbers included in your password?"));
  var confirmletterLower = (window.confirm("Would you like to include lower caser letters in your password?"));
  var confirmletterUpper = (window.confirm("Woudl you like to include upper case letters in your password"));
  var confirmspecialchar = (window.confirm("Would you like to include special characters in your password"));

  //Users must choose at least one of the criterias so loop if they choose none
    while (confirmletterLower == false && confirmletterUpper == false && confirmnumArr == false && confirmspecialchar == false) {
  window.alert("You will need to slect one of the criteria to generate a password");
  //ask the criteria questions again
  var confirmnumArr = (window.confirm("Would you like numbers included in your password?"));
  var confirmletterLower = (window.confirm("Would you like to include lower caser letters in your password?"));
  var confirmletterUpper = (window.confirm("Woudl you like to include upper case letters in your password"));
  var confirmspecialchar = (window.confirm("Would you like to include special characters in your password"));
    }
  //length of at least 8 characters and no more than 128 characters //(while loop)
    userLength= prompt("How many characters would you like your passwrod to be?")
  //check userlength when is less than 8 or greater that 128
    if(parseInt(userLength)<8 || userLength>128){
      //if user doesn't fit criteria then ask again 
      userLength= prompt("Your password will need to be between 8 and 128 characters?")
    }
  
 var password = [];
    //lowercase, 
    if(letterLower){
      password = password.concat(letterLower);
    }
  //uppercase
    if(letterUpper){
      password = password.concat(letterUpper);
    } 
  //numeric,
    if(numArr){
      password = password.concat(numArr);
    }
  //special characters
    if(specialchar){
      password = password.concat(numArr);
    }
    console.log(masterArray);
for (var i=0; i < userLength; i++) {
  masterArray.push(password[Math.floor(Math.random() * password.length)]);
}
return masterArray.join("");
// //we need to build that masterarray based on the yes

//     if(isNum==true){
//       for(var i=0;i<numArr.length;i++)
//       masterArray.push(numArr[i])
//     }

// //generate password
//   var ranpassword = ""
//     for (var i = 0; i < confirmuserLenght; i++) {
//       ranpassword = ranpassword + password[Math.floor(Math.random() * password.length)];
//       console.log(ranpassword)
//     }
//   return ranpassword;
}


  // Write password to the #password input
  function writePassword() {
    //return something and store it to the variable password
    var password = generatePassword();
    console.log(password);
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

  }

  // Add event listener to generate buttons
  // document.getElementById("generatepassword").innterHTML = createPassword;

  generateBtn.addEventListener("click", writePassword);
