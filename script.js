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
//prebuilt. length
var isNum;
var userLength;

//variable to declare
var confirmnumArr;
var confirmlowerLetter;
var confirmletterUpper;
var confirmspecialchar;

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
    userLength= prompt("How many characters would you like your password to be?")
  }
  //parseInt()
//lowercase, 
if(lowerLetter)
//uppercase, 
//numeric,
isNum= confirm("would you like numbers?")
//special characters

//we need to build that masterarray based on the yes

if(isNum==true){
  for(var i=0;i<numArr.length;i++)
  masterArray.push(numArr[i])
}
if ()
//generate password
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//randomly assign values based on userinput and the length will be dependent of the user (for loop)
//math.ran math floor (check generator code from class)

//when we create our pw.. here is validation for it (LATER)
  //validated and at least one character type should be selected
//once pw is finished  password is  displayed to the page
  return pw;
}



// Write password to the #password input
function writePassword() {
  //return something and store it to the variable password
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
