import html from "html-literal";
import { default as songs } from "../store/songs";

export default state =>
  html`
    <main>
      <section id="songs">
        ${console.log(songs.songs)}
        ${songs.songs.versions
      .map(version => {
        return `<div class="song-container">
        <div class="song-title-area">
          <h3>${version.title}</h3>
        </div>
        <div class="song-description-area">
          <p>
            ${version.changes}
          </p>
        </div>
        <div class="edit-delete-buttons">
          <button class="edit-btn">Edit</button>
          <button class="delete-btn">Delete</button>
        </div>
      </div>`;
      })
      .join("")}
      </section>
      <form id="song-form">
        <div class="song-container">
          <div class="song-title-area">
            <h3>
              <input
                type="text"
                name="title"
                id="title"
                class="song-input"
                placeholder="Enter the Version Title"
                required
              />
            </h3>
          </div>
          <div class="song-description-area">
            <textarea
              name="changes"
              id="changes"
              class="song-input"
              placeholder="Enter the changes for this song version"
            ></textarea>
          </div>
          <div class="edit-delete-buttons">
            <input
              type="submit"
              name="submitButton"
              id="${songs.songs._id}"
              class="save-btn"
              value="Save"
            />
          </div>
        </div>
      </form>

      <div class="add">
        <div class="add-btn">
          <button class="add-button">
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
        <p class="add-new">Add New</p>
      </div>
      ${console.log(songs)}
      <p>${songs.songs._id}</p>
    </main>
  `;

/*
      <section id="songs">
        ${console.log(state.songs)}
        ${songs.versions
      .map(version => {
        return `<div class="song-container">
        <div class="song-title-area">
          <h3>${version.title}</h3>
        </div>
        <div class="song-description-area">
          <p>
            ${version.changes}
          </p>
        </div>
        <div class="edit-delete-buttons">
          <button class="edit-btn">Edit</button>
          <button class="delete-btn">Delete</button>
        </div>
      </div>`;
      })
      .join("")}
      </section>
*/
