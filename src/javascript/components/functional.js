// src\javascript\components\functional.js

function generateCalculatorKey(key) {
  return `<button type="button" class="g-col-3 calculator-key">${key}</button>`;
}

function generateApp() {
  return `
    <section id="keys-grid" class="grid text-center">
      <p id="result" class="g-col-12"></p>
    </section>
  `;
}

export { generateCalculatorKey, generateApp };
