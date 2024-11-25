import { title } from "process";
import * as store from "../store";
import axios from "axios";

export function afterHook(router, queryParam) {
  // Opens/closes modal and modifies styling. Places PUT and POST requests.
  function modal() {
    const header = document.querySelector(".sticky");
    const nav = document.querySelector("nav");
    const body = document.querySelector("body");
    const modal = document.getElementById("modal");
    const songTitleInput = document.getElementById("title");
    const songDescriptionInput = document.getElementById("description");
    const submitButton = document.getElementById("save");
    let songId;

    // opens the modal for adding new song
    document.getElementById("add").addEventListener("click", () => {
      modal.style.display = "flex";
      modal.style.flexDirection = "column";
      modal.style.justifyContent = "start";
      header.style.filter = "brightness(30%)";
      nav.style.filter = "brightness(30%)";
      body.style.height = "100vh";
      body.style.overflow = "hidden";
    });

    // Edit an existing song
    const editButtons = document.querySelectorAll(".edit-btn");
    // Add event listeners to Edit button for all Songs
    editButtons.forEach(editButton => {
      editButton.addEventListener("click", () => {
        songId = editButton.id;

        //change styling while modal is displayed
        modal.style.display = "flex";
        modal.style.flexDirection = "column";
        modal.style.justifyContent = "start";
        header.style.filter = "brightness(30%)";
        nav.style.filter = "brightness(30%)";
        body.style.height = "100vh";
        body.style.overflow = "hidden";
        //Change the submit button id to 'update' to trigger PUT req
        submitButton.id = "update";
        submitButton.value = "Update";
        // Necessary to make the input defaultValues = saved values
        console.log(store.songs.songs.data);
        // loop through the songs array and get the saved values to display on the edit form
        store.songs.songs.data.forEach(song => {
          if (song["_id"] == songId) {
            songTitleInput.defaultValue = song["title"];
            songDescriptionInput.defaultValue = song["description"];
          }
        });
      });
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
        songTitleInput.defaultValue = "";
        songDescriptionInput.defaultValue = "";
        // Returns submit button id & value to previous value of 'save'
        submitButton.id = "save";
        submitButton.value = "Save";
      }
    };

    // closes the modal if clicking "cancel", and return css to default values
    document.getElementById("cancelBtn").addEventListener("click", () => {
      modal.style.display = "none";
      header.style.filter = "";
      nav.style.filter = "";
      body.style.height = "";
      body.style.overflow = "";
      songTitleInput.defaultValue = "";
      songDescriptionInput.defaultValue = "";
      // Returns submit button id & value to previous value of 'save'
      submitButton.id = "save";
      submitButton.value = "Save";
    });

    // Create a New Song if submitButton has id "save",
    // Update Song if the submitButton has id "update".
    document
      .getElementById("song-form")
      .addEventListener("submit", async event => {
        event.preventDefault();

        const inputList = event.target.elements;
        console.log("Input element List", inputList);

        if (submitButton.id == "save") {
          const requestData = {
            title: inputList.title.value,
            description: inputList.description.value,
            versions: []
          };

          console.log("Request Body", requestData);

          await axios
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
        } else if (submitButton.id == "update") {
          const requestData = {
            _id: songId,
            title: inputList.title.value,
            description: inputList.description.value,
            currentPage: store.songs.currentPage
          };

          console.log("Request Body", requestData);

          await axios
            .put(`${process.env.TVT_API_URL}/songs`, requestData)
            .then(response => {
              console.log("This the AFTER RESPONSE:", response);
              console.log("Songs store:", store.songs);
              const body = document.querySelector("body");
              body.style.height = "";
              body.style.overflow = "";
              store.songs.currentPage = response.data.currentPage;
              // store.songs.songs[""] = response.data.data;
              // store.songs.songs.data.["_id"](response.data);

              // Stay at the current pagination page upon Song update.
              router.navigate(`songs?page=${response.data.currentPage}`);
            })
            .catch(error => {
              console.log("I broke it!", error);
            });
        }
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
  // let pageNumber = 1;
  // if (queryParams != null) {
  //   pageNumber = queryParams.page;
  // }
  let pageNumber = queryParams["page"];
  pageNumber = pageNumber ? pageNumber : 1;
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
