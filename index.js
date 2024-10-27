import { header, nav, main, footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { camelCase } from "lodash";

const router = new Navigo("/");

function render(state = store.home) {
  document.querySelector("#root").innerHTML = `
    ${header(state)}
    ${nav(store.links)}
    ${main(state)}
    ${footer()}
  `;
  router.updatePageLinks();
}

render();

router.on({
  "/": () => render(),
  ":view": (match) => {

    const view = match?.data?.view ? camelCase(match.data.view) : "home";

    if (view in store) {
      render(store[view]);
    } else {
      console.log(`View ${view} not found`);
    }
  }
}).resolve();


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
