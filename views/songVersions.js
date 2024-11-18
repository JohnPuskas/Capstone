import html from "html-literal";
import { default as songs } from "../store/songs";

export default state =>
  html`
    <main>
      <h1>
        This is the Song Versions page which will be dynamically populated
      </h1>
      <h2>
        It shows the various versions of the song selected by the user in the
        'Songs' page
      </h2>
      <p>This is the ID of the Song for which Song Versions will display:</p>
      ${console.log(songs)}
      <p>${songs.songs._id}</p>
    </main>
  `;
