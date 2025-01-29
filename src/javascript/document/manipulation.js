// src\javascript\document\manipulation.js

import {
  generateCalculatorKey,
  generateApp,
} from "../components/functional.js";
import {
  globalVariables,
  resetGlobalVariables,
  saveResultForFurtherCalculation,
  chooseOperator,
} from "../state/management.js";
import { calculateResult } from "../helpers/utilities.js";

function fillKeysGridSection() {
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

  const keysGrid = document.querySelector("#keys-grid");

  const calculatorButtons = keys
    .map((key) => generateCalculatorKey(key))
    .join("");

  if (keysGrid.innerHTML.includes('<p id="result" class="g-col-12"></p>')) {
    keysGrid.innerHTML += calculatorButtons;
  }
}

function displayApp() {
  const app = document.querySelector("#app");
  app.innerHTML = generateApp();

  fillKeysGridSection();
}

function clearResultArea(resultArea) {
  resetGlobalVariables();
  resultArea.innerHTML = "";
}

function printResult(result, resultArea) {
  saveResultForFurtherCalculation(result);
  resultArea.innerHTML = result;
}

function updateDisplay() {
  const { first_number, second_number, current_operator } = globalVariables;
  const resultArea = document.querySelector("#result");

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

function updateResultWithKeyPressed(key) {
  const resultArea = document.querySelector("#result");

  if (globalVariables.has_result && !["+", "-", "×", "÷"].includes(key)) {
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
      if (globalVariables.first_number !== "") {
        chooseOperator(key);
        resultArea.innerHTML = ` ${globalVariables.current_operator} `;
      }
      break;

    case "=":
      if (
        globalVariables.first_number !== "" &&
        globalVariables.current_operator &&
        globalVariables.second_number !== ""
      ) {
        const result = calculateResult(
          globalVariables.current_operator,
          globalVariables.first_number,
          globalVariables.second_number,
        );

        printResult(result, resultArea);
      }
      break;

    default:
      if (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(key)) {
        if (!globalVariables.current_operator) {
          globalVariables.first_number += key;
          resultArea.innerHTML = globalVariables.first_number;
        } else {
          globalVariables.second_number += key;
          resultArea.innerHTML = globalVariables.second_number;
        }
      }
  }

  if (!["=", "C"].includes(key)) {
    updateDisplay();
  }
}

export { displayApp, updateResultWithKeyPressed };
