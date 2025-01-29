// src\javascript\events\handlers.js

import {
  displayApp,
  updateResultWithKeyPressed,
} from "../document/manipulation.js";
import { waitForClickOnCalculatorButton } from "../events/listeners.js";

const handleLoadingOfDomContent = () => {
  const app = displayApp();

  waitForClickOnCalculatorButton(app);
};

const handleClickOnCalculatorButton = (button, app) => {
  const key = button.innerHTML.trim();
  updateResultWithKeyPressed(key, app);
};

export { handleLoadingOfDomContent, handleClickOnCalculatorButton };
