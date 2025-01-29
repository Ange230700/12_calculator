// src\javascript\events\listeners.js

import {
  handleLoadingOfDomContent,
  handleClickOnCalculatorButton,
} from "./handlers.js";

function waitForLoadingOfDomContent() {
  document.addEventListener("DOMContentLoaded", handleLoadingOfDomContent);
}

function waitForClickOnCalculatorButton() {
  const calculatorButtons = document.querySelectorAll(".calculator-key");

  calculatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
      handleClickOnCalculatorButton(button);
    });
  });
}

export { waitForLoadingOfDomContent, waitForClickOnCalculatorButton };
