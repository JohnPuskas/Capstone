import html from "html-literal";

export default state => html`
  ${window.scrollTo(0, 0)}
  <main>
    <div id="modal" class="modal">
      <div id="modal-content">
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
            <input type="submit" class="save-btn button" value="Save" />
            <button type="reset" id="cancelBtn" class="cancel-btn" value="Cancel">Cancel</>
          </div>
        </div>
      </form>
      </div>
    </div>

    <div id="add" class="add">
      <div class="add-btn">
        <button class="add-button">
          <i class="fa-solid fa-plus"></i>
        </button>
      </div>
      <p class="add-new">Add New</p>
    </div>

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
          <button id=${song._id} class="see-version">See Song Versions</button>
        </div>
      </div>`;
    })
    .join("")}
    </section>
  </main>
`;
