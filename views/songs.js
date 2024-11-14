import html from "html-literal";

export default state => html`
  <main>
    <h2>This is the songs page which will be dynamically populated</h2>
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
