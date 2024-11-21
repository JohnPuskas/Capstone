import html from "html-literal";

export default state =>
  html`
    ${window.scrollTo(0, 0)}
    <main>
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
              id="${state.songId}"
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
      <section id="songs">
        ${state.versions
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
    </main>
  `;
