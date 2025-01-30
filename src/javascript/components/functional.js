// src\javascript\components\functional.js

function generateCalculatorKey(key) {
  return `<button type="button" class="g-col-3 calculator-key btn btn-dark p-4">${key}</button>`;
}

function generateApp() {
  return `
    <section id="keys-grid" class="grid text-center border border-black rounded-5 p-3 gap-2">
      <div id="result" class="g-col-12 border border-black rounded-4 d-flex align-items-end" style="height: 100px;">
        <p class="text-end flex-fill px-3"></p>
      </div>
      
    </section>
  `;
}

export { generateCalculatorKey, generateApp };
