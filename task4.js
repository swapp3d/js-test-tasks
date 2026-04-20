function checkNumberType(num) {
  if (num > 0) {
    return "Positive";
  } else if (num < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}

let userInput; 
do {
  userInput = prompt("Enter a number:");
  if (userInput !== "stop") {
    let convertedNumber = Number(userInput);
    console.log(checkNumberType(convertedNumber));
  }
} while (userInput !== "stop"); 