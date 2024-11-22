import * as store from "../store";
import axios from "axios";

export function afterHook(router) {
  function modal() {
    const modal = document.getElementById("modal");
    const header = document.querySelector(".sticky");
    const nav = document.querySelector("nav");

    // opens the modal
    document.getElementById("add").addEventListener("click", () => {
      modal.style.display = "flex";
      modal.style.flexDirection = "column";
      modal.style.justifyContent = "space-between";
      header.style.filter = "brightness(30%)";
      nav.style.filter = "brightness(30%)";
    });

    // closes the modal if clicked outside the modal
    window.onclick = event => {
      if (event.target == modal) {
        modal.style.display = "none";
        document.getElementById("song-form").reset();
        header.style.filter = "brightness(100%)";
        nav.style.filter = "brightness(100%)";
      }
    };

    // closes the modal if clicking "cancel"
    document.getElementById("cancelBtn").addEventListener("click", () => {
      modal.style.display = "none";
      header.style.filter = "brightness(100%)";
      nav.style.filter = "brightness(100%)";
    });

    document.getElementById("song-form").addEventListener("submit", event => {
      event.preventDefault();

      const inputList = event.target.elements;
      console.log("Input element List", inputList);

      const requestData = {
        title: inputList.title.value,
        description: inputList.description.value,
        versions: []
      };

      console.log("Request Body", requestData);

      axios
        .post(`${process.env.TVT_API_URL}/songs`, requestData)
        .then(response => {
          console.log("This the AFTER RESPONSE:", response);
          store.songs.songs.unshift(response.data);
          router.navigate("/songs");
        })
        .catch(error => {
          console.log("I broke it!", error);
        });
    });
  }

  modal();

  const seeVersionsButtons = document.querySelectorAll(".see-version");
  seeVersionsButtons.forEach(button => {
    button.addEventListener("click", () => {
      let buttonId = button.id;
      console.log(buttonId);
      router.navigate(`songVersions?id=${buttonId}`);
    });
  });
}

export function beforeHook(done = () => { }) {
  // Display all songs
  axios
    .get(`${process.env.TVT_API_URL}/songs`)
    .then(response => {
      console.log("this is the songs Response", response);
      store.songs.songs = response.data;
      console.log(store.songs);

      done();
    })
    .catch(error => {
      console.log("I broke it!", error);
      done();
    });
}
