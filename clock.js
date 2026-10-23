const clockArea = document.querySelector("#features");

clockArea.insertAdjacentHTML(
  "beforeend",
  `
  <section>
    <h2>4. Live Clock</h2>
    <p id="clock"></p>
  </section>
`,
);

function updateClock() {
  document.querySelector("#clock").textContent =
    new Date().toLocaleTimeString();
}

updateClock();
setInterval(updateClock, 1000);
