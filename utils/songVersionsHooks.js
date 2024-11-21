import * as store from "../store";
import axios from "axios";

export function afterHook(router, queryParam) {
  // Create a new song version
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
