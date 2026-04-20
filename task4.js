function checkNumberType(num) {
  if (num > 0) {
    return "Positive";
  } else if (num < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}

let userInput = prompt("Please enter a number:"); 

let convertedNumber = Number(userInput); //converts to num

console.log(checkNumberType(convertedNumber));
