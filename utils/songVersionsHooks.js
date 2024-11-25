import * as store from "../store";
import axios from "axios";

// Create a new song version
export function afterHook(router, queryParam) {
  const header = document.querySelector(".sticky");
  const nav = document.querySelector("nav");
  const body = document.querySelector("body");
  const modal = document.getElementById("modal");

  // opens the modal
  document.getElementById("add").addEventListener("click", () => {
    modal.style.display = "flex";
    modal.style.flexDirection = "column";
    modal.style.justifyContent = "start";
    header.style.filter = "brightness(30%)";
    nav.style.filter = "brightness(30%)";
    body.style.height = "100vh";
    body.style.overflow = "hidden";
    window.scrollTo(0, 0);
  });

  // closes the modal if clicked outside the modal
  window.onclick = event => {
    if (event.target == modal) {
      modal.style.display = "none";
      document.getElementById("song-form").reset();
      header.style.filter = "";
      nav.style.filter = "";
      body.style.height = "";
      body.style.overflow = "";
    }
  };

  // closes the modal if clicking "cancel"
  document.getElementById("cancelBtn").addEventListener("click", () => {
    modal.style.display = "none";
    header.style.filter = "";
    nav.style.filter = "";
    body.style.height = "";
    body.style.overflow = "";
  });
  //
  document
    .querySelector("#song-form")
    .addEventListener("submit", async event => {
      event.preventDefault();

      const inputList = event.target.elements;
      console.log("Input element List", inputList);

      const requestData = {
        title: inputList.title.value,
        changes: inputList.changes.value
      };
      console.log(requestData);
      const songId = inputList.submitButton.id;
      console.log(songId);

      console.log("Request Body", requestData);

      await axios
        .put(
          `${process.env.TVT_API_URL}/songVersions?id=${queryParam}`,
          requestData
        )
        .then(response => {
          console.log("This the AFTER RESPONSE:", response);
          const body = document.querySelector("body");
          body.style.height = "";
          body.style.overflow = "";
          router.navigate(`/songVersions?id=${queryParam}`);
        })
        .catch(error => {
          console.log("I broke it!", error);
        });
    });
}

export async function beforeHook(queryParam, done = () => { }) {
  console.log(queryParam);
  await axios
    .get(`${process.env.TVT_API_URL}/songVersions`, {
      params: {
        id: `${queryParam}`
      }
    })
    .then(response => {
      store.songVersions.songId = queryParam;
      console.log("The songVersions page response is....:", response);
      store.songVersions.versions = response.data.versions;

      console.log(
        "This is the versions order in Store:",
        response.data.versions
      );
      done();
    })
    .catch(error => {
      console.log("I broke it!", error);
      done();
    });
}
