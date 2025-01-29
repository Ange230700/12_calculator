// src\javascript\helpers\utilities.js

/* Verifications */

function checkIfNumberIsInteger(number) {
  return Number.isInteger(number);
}

function checkIfSubtractionIsPossible(firstNumber, secondNumber) {
  return firstNumber > secondNumber;
}

function checkIfDivisorIsZero(secondNumber) {
  return secondNumber === 0;
}

function checkIfDivisionIsPossible(firstNumber, secondNumber) {
  return firstNumber >= secondNumber && firstNumber % secondNumber === 0;
}

/* Errors handling */

function handleNatureOfNumberError(firstNumber, secondNumber) {
  if (
    !checkIfNumberIsInteger(firstNumber) ||
    !checkIfNumberIsInteger(secondNumber)
  ) {
    return "Integers only (no decimals or letters)";
  }
}

function handleSubtractionError(firstNumber, secondNumber) {
  if (!checkIfSubtractionIsPossible(firstNumber, secondNumber)) {
    return "Only non-negative results allowed";
  }
}

function handleDivisionByZeroError(secondNumber) {
  if (checkIfDivisorIsZero(secondNumber)) {
    return "Cannot divide by zero";
  }
}

function handleDivisionError(firstNumber, secondNumber) {
  if (!checkIfDivisionIsPossible(firstNumber, secondNumber)) {
    return "Divisor not factor of dividend";
  }
}

/* Possible operations */

function doSum(firstNumber, secondNumber) {
  const natureOfNumberError = handleNatureOfNumberError(
    firstNumber,
    secondNumber,
  );

  return natureOfNumberError || `${firstNumber + secondNumber}`;
}

function doSubtraction(firstNumber, secondNumber) {
  const natureOfNumberError = handleNatureOfNumberError(
    firstNumber,
    secondNumber,
  );
  const subtractionError = handleSubtractionError(firstNumber, secondNumber);

  return (
    natureOfNumberError || subtractionError || `${firstNumber - secondNumber}`
  );
}

function doMultiplication(firstNumber, secondNumber) {
  const natureOfNumberError = handleNatureOfNumberError(
    firstNumber,
    secondNumber,
  );

  return natureOfNumberError || `${firstNumber * secondNumber}`;
}

function doDivision(firstNumber, secondNumber) {
  const natureOfNumberError = handleNatureOfNumberError(
    firstNumber,
    secondNumber,
  );
  const divisionByZeroError = handleDivisionByZeroError(secondNumber);
  const divisionError = handleDivisionError(firstNumber, secondNumber);

  return (
    natureOfNumberError ||
    divisionByZeroError ||
    divisionError ||
    `${firstNumber / secondNumber}`
  );
}

function calculateResult(operator, firstNumberString, secondNumberString) {
  const firstNumberInt = parseInt(firstNumberString, 10);
  const secondNumberInt = parseInt(secondNumberString, 10);

  switch (operator) {
    case "+":
      return doSum(firstNumberInt, secondNumberInt);

    case "-":
      return doSubtraction(firstNumberInt, secondNumberInt);

    case "×":
      return doMultiplication(firstNumberInt, secondNumberInt);

    case "÷":
      return doDivision(firstNumberInt, secondNumberInt);

    default:
      return "";
  }
}

export { calculateResult };
