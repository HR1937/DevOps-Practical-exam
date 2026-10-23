const area = document.querySelector("#features");

area.insertAdjacentHTML(
  "beforeend",
  `
  <section>
    <h2>2. Calculator</h2>
    <input id="first" type="number" placeholder="First number">
    <select id="operation">
      <option value="+">Add</option>
      <option value="-">Subtract</option>
      <option value="*">Multiply</option>
      <option value="/">Divide</option>
    </select>
    <input id="second" type="number" placeholder="Second number">
    <button id="calculate">Calculate</button>
    <p id="answer"></p>
  </section>
`,
);

document.querySelector("#calculate").onclick = () => {
  const a = Number(document.querySelector("#first").value);
  const b = Number(document.querySelector("#second").value);
  const op = document.querySelector("#operation").value;
  let result;

  if (op === "+") result = a + b;
  if (op === "-") result = a - b;
  if (op === "*") result = a * b;
  if (op === "/") result = b === 0 ? "Cannot divide by zero" : a / b;

  document.querySelector("#answer").textContent = "Result: " + result;
};
