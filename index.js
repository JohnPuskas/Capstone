import { header, nav, main, footer } from "./components";

function render() {
  document.querySelector("#root").innerHTML = `
    ${header()}
    ${nav()}
    ${main()}
    ${footer()}
  `;
}

render();

document.querySelector(".fa-bars").addEventListener("click", () => {
  document.querySelector("nav > ul").classList.toggle("hidden--mobile");
});

/// ! Temporarily commented out due to elements being unavailable at this time
// const contactForm = document.querySelector("#contact-form");

// contactForm.addEventListener("submit", event => {
//   event.preventDefault();

//   // Below is or debugging
//   console.log("form submitted");
//   const inputs = event.target.elements;

//   for (let input of inputs) {
//     console.log(`input name: ${input.name}, input value: ${input.value}`);
//   }
// });
