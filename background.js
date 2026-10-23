const backgroundArea = document.querySelector("#features");

backgroundArea.insertAdjacentHTML(
  "beforeend",
  `
  <section>
    <h2>3. Background Color</h2>
    <button data-color="#f4f4f4">Light</button>
    <button data-color="green">Green</button>
    <button data-color="blue">Blue</button>
  </section>
`,
);

backgroundArea.querySelectorAll("[data-color]").forEach((button) => {
  button.onclick = () => {
    document.body.style.background = button.dataset.color;
  };
});
