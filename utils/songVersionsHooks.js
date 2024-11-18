import * as store from "../store";
import axios from "axios";

export function afterHook(router) { }

export function beforeHook(done = () => { }, queryParam) {
  console.log(queryParam);
  axios
    .get(`${process.env.TVT_API_URL}/songVersions`, {
      params: {
        id: `${queryParam}`
      }
    })
    .then(response => {
      console.log("The songVersions page response is....:", response);
      store.songs.songs = response.data;
      console.log(response.data);
      console.log(store.songs);
      done();
    })
    .catch(error => {
      console.log("I broke it!", error);
      done();
    });
}
