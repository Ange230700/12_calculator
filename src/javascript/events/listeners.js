// src\javascript\events\listeners.js

import {
  handleLoadingOfDomContent,
  handleClickOnCalculatorButton,
} from "./handlers.js";

function waitForLoadingOfDomContent() {
  document.addEventListener("DOMContentLoaded", handleLoadingOfDomContent);
}

function waitForClickOnCalculatorButton(app) {
  const calculatorButtonsArray = app.querySelectorAll(".calculator-key");

  calculatorButtonsArray.forEach((button) => {
    button.addEventListener("click", () => {
      handleClickOnCalculatorButton(button, app);
    });
  });
}

export { waitForLoadingOfDomContent, waitForClickOnCalculatorButton };
