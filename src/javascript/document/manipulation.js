// src\javascript\document\manipulation.js

import { generateApp } from "../components/functional.js";

function displayApp() {
  const app = document.querySelector("#app");

  app.innerHTML = `
    ${generateApp()}
  `;
}

export { displayApp };
