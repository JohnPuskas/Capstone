import { header, nav, main, footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { camelCase } from "lodash";
import axios from "axios";
import * as utils from "./utils";

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

// render();

router.hooks({
  before: (done, match) => {
    const view = match?.data?.view ? camelCase(match.data.view) : "home";

    switch (view) {
      case "home":
        axios
          .get(
            `https://zenquotes.io/api/random/${process.env.ZENQUOTES_API_KEY}`)
          .then(response => {
            console.log("this is the response data:", response.data);
            store.home.quote = {
              quoteText: response.data[0].q,
              quoteAuthor: response.data[0].a,
              quoteHtml: response.data[0].h
            }
            console.log("The Store?", store.home.quote);
            done();
          })
          .catch(error => {
            console.log("I broke it!: ", error);
            done();
          });
        break;
      default:
        done();
    }
  },
  already: (match) => {
    const view = match?.data?.view ? camelCase(match.data.view) : "home";

    render(store[view]);
  },
  after: (match) => {
    router.updatePageLinks();
    // toggle nav hamburger menu
    utils.toggleNav();

  }
});

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
