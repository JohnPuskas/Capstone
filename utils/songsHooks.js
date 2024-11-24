import * as store from "../store";
import axios from "axios";

export function afterHook(router) {
  function modal() {
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
    });

    // closes the modal if clicked outside the modal, and return css to default values
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

    // closes the modal if clicking "cancel", and return css to default values
    document.getElementById("cancelBtn").addEventListener("click", () => {
      modal.style.display = "none";
      header.style.filter = "";
      nav.style.filter = "";
      body.style.height = "";
      body.style.overflow = "";
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
          console.log("Songs store:", store.songs);
          const body = document.querySelector("body");
          body.style.height = "";
          body.style.overflow = "";
          store.songs.songs.data.unshift(response.data);
          router.navigate("/songs");
        })
        .catch(error => {
          console.log("I broke it!", error);
        });
    });
  }

  modal();

  // navigates to the songVersions page, showing versions corresponding to songID
  const seeVersionsButtons = document.querySelectorAll(".see-version");
  seeVersionsButtons.forEach(button => {
    button.addEventListener("click", () => {
      let buttonId = button.id;
      console.log(buttonId);
      router.navigate(`songVersions?id=${buttonId}`);
    });
  });

  // pagination navigation
  const pageBtns = document.querySelectorAll(".page-btn");
  pageBtns.forEach(pageButton => {
    pageButton.addEventListener("click", () => {
      let page = pageButton.id;
      router.navigate(`songs?page=${page}`);
    });
  });
}

// Display songs
export async function beforeHook(queryParams, done = () => { }) {
  let pageNumber = 1;
  if (queryParams != null) {
    pageNumber = queryParams.page;
  }
  console.log(pageNumber, typeof pageNumber);
  await axios
    .get(`${process.env.TVT_API_URL}/songs`, {
      params: {
        page: `${pageNumber}`
      }
    })
    .then(response => {
      console.log("this is the songs Response", response);
      store.songs.songs = response.data;
      store.songs.currentPage = response.data.currentPage;
      store.songs.totalPages = response.data.totalPages;
      console.log(store.songs);

      done();
    })
    .catch(error => {
      console.log("I broke it!", error);
      done();
    });
}
