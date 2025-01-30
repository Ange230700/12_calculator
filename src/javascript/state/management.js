// src\javascript\state\management.js

export const CalculatorState = (() => {
  let first_number = "";
  let second_number = "";
  let current_operator = null;
  let has_result = false;

  function resetGlobalVariables() {
    first_number = "";
    second_number = "";
    current_operator = null;
    has_result = false;
  }

  function saveResultForFurtherCalculation(result) {
    first_number = result;
    second_number = "";
    current_operator = null;
    has_result = true;
  }

  function chooseOperator(operatorKey) {
    current_operator = operatorKey;
    has_result = false;
  }

  function appendToFirstNumber(digit) {
    first_number += digit;
  }

  function appendToSecondNumber(digit) {
    second_number += digit;
  }

  function getState() {
    return {
      first_number,
      second_number,
      current_operator,
      has_result,
    };
  }

  return {
    resetGlobalVariables,
    saveResultForFurtherCalculation,
    chooseOperator,
    appendToFirstNumber,
    appendToSecondNumber,
    getState,
  };
})();
