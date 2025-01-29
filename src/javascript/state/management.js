// src\javascript\state\management.js

const globalVariables = {
  first_number: "",
  second_number: "",
  current_operator: null,
  has_result: false,
};

function resetGlobalVariables() {
  globalVariables.first_number = "";
  globalVariables.second_number = "";
  globalVariables.current_operator = null;
  globalVariables.has_result = false;
}

function saveResultForFurtherCalculation(result) {
  globalVariables.first_number = result;
  globalVariables.second_number = "";
  globalVariables.current_operator = null;
  globalVariables.has_result = true;
}

function chooseOperator(key) {
  globalVariables.current_operator = key;
  globalVariables.has_result = false;
}

export {
  globalVariables,
  resetGlobalVariables,
  saveResultForFurtherCalculation,
  chooseOperator,
};
