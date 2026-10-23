const area = document.querySelector("#features");

area.insertAdjacentHTML(
  "beforeend",
  `
  <section>
    <h2>5. Text Size</h2>
    <button id="textSize">Toggle Large Text</button>
  </section>
`,
);

let large = false;

document.querySelector("#textSize").onclick = () => {
  large = !large;
  document.querySelector("main").style.fontSize = large ? "20px" : "16px";
};
