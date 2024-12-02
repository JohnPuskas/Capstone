import * as store from "../store";
import axios from "axios";

// Create a new song version
export function afterHook(router, queryParam) {
  // Opens/closes modal and modifies styling. Places PUT requests.
  function modal() {
    const header = document.querySelector(".sticky");
    const nav = document.querySelector("nav");
    const body = document.querySelector("body");
    const modal = document.getElementById("modal");
    const versionTitleInput = document.getElementById("title");
    const versionChangesInput = document.getElementById("changes");
    const submitButton = document.getElementById("save");
    let versionId;

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

    // Edit an existing Version
    const editButtons = document.querySelectorAll(".edit-btn");
    // Add event listeners to Edit button for all Versions
    editButtons.forEach(editButton => {
      editButton.addEventListener("click", () => {
        versionId = editButton.id;

        //change styling while modal is displayed
        modal.style.display = "flex";
        modal.style.flexDirection = "column";
        modal.style.justifyContent = "start";
        header.style.filter = "brightness(30%)";
        nav.style.filter = "brightness(30%)";
        body.style.height = "100vh";
        body.style.overflow = "hidden";
        window.scrollTo(0, 0);

        //Change the submit button id to 'update' to execute the correct code in PUT req
        submitButton.id = "update";
        submitButton.value = "Update";

        // Necessary to make the input defaultValues = saved values
        // loop through the songs array and get the saved values to display on the edit form
        store.songVersions.versions.forEach(version => {
          if (version["_id"] == versionId) {
            versionTitleInput.defaultValue = version["title"];
            versionChangesInput.defaultValue = version["changes"];
          }
        });
      });
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
        versionTitleInput.defaultValue = "";
        versionChangesInput.defaultValue = "";
        // Returns submit button id & value to previous value of 'save'
        submitButton.id = "save";
        submitButton.value = "Save";
      }
    };

    // closes the modal if clicking "cancel"
    document.getElementById("cancelBtn").addEventListener("click", () => {
      modal.style.display = "none";
      header.style.filter = "";
      nav.style.filter = "";
      body.style.height = "";
      body.style.overflow = "";
      versionTitleInput.defaultValue = "";
      versionChangesInput.defaultValue = "";
      // Returns submit button id & value to previous value of 'save'
      submitButton.id = "save";
      submitButton.value = "Save";
    });

    // Create a New Version if submitButton has id "save",
    // Update Version if the submitButton has id "update".
    document
      .getElementById("song-form")
      .addEventListener("submit", async event => {
        event.preventDefault();

        const inputList = event.target.elements;
        console.log("Input element List", inputList);

        if (submitButton.id == "save") {
          const requestData = {
            title: inputList.title.value,
            changes: inputList.changes.value
          };
          console.log("Request data", requestData);

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
        } else if (submitButton.id == "update") {
          const requestData = {
            _id: versionId,
            title: inputList.title.value,
            changes: inputList.changes.value
          };

          console.log("Request data", requestData);

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
        }
      });
  }

  modal();

  const deleteButtons = document.querySelectorAll(".delete-btn");
  // Add event listeners to Edit button for all Songs
  deleteButtons.forEach(deleteButton => {
    deleteButton.addEventListener("click", async () => {
      const songVersionId = deleteButton.id;
      const requestData = {
        songVersionId
      };
      console.log("Here is the DELETE requestData:", requestData);
      await axios
        .delete(
          `${process.env.TVT_API_URL}/songVersions?id=${queryParam}&versionID=${songVersionId}`,
          requestData
        )
        .then(() => {
          // Stay at the current page.
          router.navigate(`/songVersions?id=${queryParam}`);
        });
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
