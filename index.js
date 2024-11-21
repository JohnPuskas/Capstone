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
    console.log("This is the match param", match);
    console.log(match.params);
    const view = match?.data?.view ? camelCase(match.data.view) : "home";
    console.log("Thisi s the view:", view);
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
      case "songs":
        utils.songsBeforeHook(done);
        break;
      case "songVersions":
        utils.songVersionsBeforeHook(match.params.id, done);
        break;
      default:
        done();
    }
  },
  already: async (match) => {
    const view = match?.data?.view ? camelCase(match.data.view) : "home";
    console.log("match params already:", match.params);

    if (view === "songs") {
      await utils.songsBeforeHook();
    }

    if (view === "songVersions") {
      await utils.songVersionsBeforeHook(match.params.id);
      console.log("before hook fired!");
    }

    console.log("This is the VIEW:", view);
    console.log("This is the store:", store[view]);
    await render(store[view]);


    if (view === "songs") {
      utils.songsAfterHook(router);
    }

    if (view === "songVersions") {
      utils.songVersionsAfterHook(router, match.params.id);
    }
  },
  after: async (match) => {
    const view = match?.data?.view ? camelCase(match.data.view) : "home";

    switch (view) {
      case "songs":
        utils.songsAfterHook(router);
        break;
      case "songVersions":
        utils.songVersionsAfterHook(router, match.params.id);
      default:
        break;
    }
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
