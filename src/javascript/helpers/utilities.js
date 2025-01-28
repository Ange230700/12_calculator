// src\javascript\helpers\utilities.js

function checkIfNumberIsInteger(number) {
  return Number.isInteger(number);
}

function handleNatureOfNumberError(firstNumber, secondNumber) {
  if (
    !checkIfNumberIsInteger(firstNumber) ||
    !checkIfNumberIsInteger(secondNumber)
  )
    throw new Error("Please enter integers only");
}

function doSum(firstNumber, secondNumber) {
  handleNatureOfNumberError(firstNumber, secondNumber);

  return firstNumber + secondNumber;
}

function doSubtraction(firstNumber, secondNumber) {
  handleNatureOfNumberError(firstNumber, secondNumber);

  return firstNumber - secondNumber;
}

function doMultiplication(firstNumber, secondNumber) {
  handleNatureOfNumberError(firstNumber, secondNumber);

  return firstNumber * secondNumber;
}

function doEuclideanDivision(firstNumber, secondNumber) {
  handleNatureOfNumberError(firstNumber, secondNumber);

  return Math.floor(firstNumber / secondNumber);
}
console.log(doEuclideanDivision(7, 2));

export { doSum, doSubtraction, doMultiplication, doEuclideanDivision };
