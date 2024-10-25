import html from "html-literal";

export default () => html`
  <main>
    <h2>This is the songs page which will be dynamically populated</h2>
    <section id="songs">
      <div class="song-container">
        <div class="song-title-area">
          <h3>This is a Song Title</h3>
        </div>
        <div class="song-description-area">
          <p>
            This is a song description. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Magni quibusdam quod ipsum suscipit id in fugiat
            nesciunt et aliquid minima quos, iste temporibus excepturi harum
            sequi dignissimos laboriosam, numquam error?
          </p>
        </div>
        <div class="edit-delete-buttons">
          <button class="edit-btn">Edit</button>
          <button class="delete-btn">Delete</button>
          <button class="see-version">See Song Versions</button>
        </div>
      </div>
      <div class="song-container">
        <div class="song-title-area">
          <h3>This is a 2nd Song Title</h3>
        </div>
        <div class="song-description-area">
          <p>
            This is a song description. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Magni quibusdam quod ipsum suscipit id in fugiat
            nesciunt et aliquid minima quos, iste temporibus excepturi harum
            sequi dignissimos laboriosam, numquam error?
          </p>
        </div>
        <div class="edit-delete-buttons">
          <button class="edit-btn">Edit</button>
          <button class="delete-btn">Delete</button>
          <button class="see-version">See Song Versions</button>
        </div>
      </div>
      <div class="song-container">
        <div class="song-title-area">
          <h3>This is a 3rd Song Title</h3>
        </div>
        <div class="song-description-area">
          <p>
            This is a song description. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Magni quibusdam quod ipsum suscipit id in fugiat
            nesciunt et aliquid minima quos, iste temporibus excepturi harum
            sequi dignissimos laboriosam, numquam error?
          </p>
        </div>
        <div class="edit-delete-buttons">
          <button class="edit-btn">Edit</button>
          <button class="delete-btn">Delete</button>
          <button class="see-version">See Song Versions</button>
        </div>
      </div>
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
