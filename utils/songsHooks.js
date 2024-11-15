import * as store from "../store";
import axios from "axios";

export function afterHook(router) {
  document.querySelector("#song-form").addEventListener("submit", event => {
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
        store.songs.songs.push(response.data).then(router.navigate("songs"));

        // router.navigate("/songs");
      })
      .catch(error => {
        console.log("I broke it!", error);
      });
  });
}

export function beforeHook(done = () => { }) {
  axios
    .get(`${process.env.TVT_API_URL}/songs`)
    .then(response => {
      console.log("this is the songs Response", response);
      store.songs.songs = response.data;
      done();
    })
    .catch(error => {
      console.log("I broke it!", error);
      done();
    });
}
