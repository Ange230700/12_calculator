// src\javascript\events\handlers.js

import {
  displayApp,
  updateResultWithKeyPressed,
} from "../document/manipulation.js";
import { waitForClickOnCalculatorButton } from "../events/listeners.js";

const handleLoadingOfDomContent = () => {
  displayApp();

  waitForClickOnCalculatorButton();
};

const handleClickOnCalculatorButton = (button) => {
  const key = button.innerHTML.trim();
  updateResultWithKeyPressed(key);
};

export { handleLoadingOfDomContent, handleClickOnCalculatorButton };
