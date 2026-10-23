const area = document.querySelector("#features");

area.insertAdjacentHTML(
  "beforeend",
  `
  <section>
    <h2>1. Dynamic Message</h2>
    <input id="message" placeholder="Enter your message">
    <button id="showMessage">Display</button>
    <p id="messageOutput"></p>
  </section>
`,
);

document.querySelector("#showMessage").onclick = () => {
  document.querySelector("#messageOutput").textContent =
    document.querySelector("#message").value;
};
