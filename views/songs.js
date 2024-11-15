import html from "html-literal";

export default state => html`
  <main>
    <section id="songs">
      ${state.songs
    .map(song => {
      return `<div class="song-container">
        <div class="song-title-area">
          <h3>${song.title}</h3>
        </div>
        <div class="song-description-area">
          <p>
            ${song.description}
          </p>
        </div>
        <div class="edit-delete-buttons">
          <button class="edit-btn">Edit</button>
          <button class="delete-btn">Delete</button>
          <button class="see-version">See Song Versions</button>
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
              placeholder="Enter the Song Title"
              required
            />
          </h3>
        </div>
        <div class="song-description-area">
          <textarea
            name="description"
            id="description"
            class="song-input"
            placeholder="Enter a Song Description (optional)"
          ></textarea>
        </div>
        <div class="edit-delete-buttons">
          <input type="submit" class="save-btn" value="Save" />
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
  </main>
`;
