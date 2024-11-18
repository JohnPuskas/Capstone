import * as store from "../store";
import axios from "axios";

export function afterHook(router, queryParam) {
  // Create a new Song
  document.querySelector("#song-form").addEventListener("submit", event => {
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

    axios
      .put(
        `${process.env.TVT_API_URL}/songVersions?=${queryParam}`,
        requestData
      )
      .then(response => {
        console.log("This the AFTER RESPONSE:", response);
        store.songs.songs.versions.push(response.data);
        // .then(router.navigate("songs"))
        router.navigate(`songVersions?id=${queryParam}`);
      })
      .catch(error => {
        console.log("I broke it!", error);
      });
  });
}

export function beforeHook(queryParam, done = () => { }) {
  console.log(queryParam);
  axios
    .get(`${process.env.TVT_API_URL}/songVersions`, {
      params: {
        id: `${queryParam}`
      }
    })
    .then(response => {
      console.log("The songVersions page response is....:", response);
      store.songs.songs.versions = response.data.versions;
      console.log(response.data);
      done();
    })
    .catch(error => {
      console.log("I broke it!", error);
      done();
    });
}
