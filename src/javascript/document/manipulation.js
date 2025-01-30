// src\javascript\document\manipulation.js

import {
  generateCalculatorKey,
  generateApp,
} from "../components/functional.js";
import { CalculatorState } from "../state/management.js";
import { calculateResult } from "../helpers/utilities.js";

function fillKeysGridSection(app) {
  const keys = [
    "9",
    "8",
    "7",
    "÷",
    "4",
    "5",
    "6",
    "×",
    "1",
    "2",
    "3",
    "-",
    "C",
    "0",
    "=",
    "+",
  ];

  const keysGrid = app.querySelector("#keys-grid");

  const calculatorButtons = keys
    .map((key) => generateCalculatorKey(key))
    .join("");

  if (keysGrid.innerHTML.includes('id="result"')) {
    keysGrid.innerHTML += calculatorButtons;
  }
}

function displayApp() {
  const app = document.querySelector("#app");
  app.innerHTML = generateApp();

  fillKeysGridSection(app);

  return app;
}

function clearResultArea(resultArea) {
  CalculatorState.resetGlobalVariables();
  resultArea.innerHTML = "";
}

function printResult(result, resultArea) {
  CalculatorState.saveResultForFurtherCalculation(result);
  resultArea.innerHTML = result;
}

function updateDisplay() {
  const { first_number, second_number, current_operator } =
    CalculatorState.getState();

  const resultArea = document.querySelector("#result > p");

  let textToDisplay = "";

  if (first_number !== "") {
    textToDisplay += first_number;
  }

  if (current_operator) {
    textToDisplay += current_operator;
  }

  if (second_number !== "") {
    textToDisplay += second_number;
  }

  resultArea.innerHTML = textToDisplay;
}

function updateResultWithKeyPressed(key, app) {
  const resultArea = app.querySelector("#result > p");
  const { first_number, second_number, current_operator, has_result } =
    CalculatorState.getState();

  if (has_result && !["+", "-", "×", "÷"].includes(key)) {
    clearResultArea(resultArea);
  }

  switch (key) {
    case "C":
      clearResultArea(resultArea);

      break;

    case "+":
    case "-":
    case "×":
    case "÷":
      if (first_number !== "") {
        CalculatorState.chooseOperator(key);
        resultArea.innerHTML = ` ${current_operator} `;
      }
      break;

    case "=":
      if (first_number !== "" && current_operator && second_number !== "") {
        const result = calculateResult(
          current_operator,
          first_number,
          second_number,
        );

        printResult(result, resultArea);
      }
      break;

    default:
      if (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(key)) {
        if (!current_operator) {
          CalculatorState.appendToFirstNumber(key);
          resultArea.innerHTML = first_number;
        } else {
          CalculatorState.appendToSecondNumber(key);
          resultArea.innerHTML = second_number;
        }
      }
  }

  if (!["=", "C"].includes(key)) {
    updateDisplay();
  }
}

export { displayApp, updateResultWithKeyPressed };
