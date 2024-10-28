import html from "html-literal";

export default () => html`
  <main>
    <h2>This is the song Versions page which will be dynamically populated</h2>
    <section id="versions">
      <div class="version-container">
        <div class="version-title-area">
          <h3>This is a Version Title</h3>
        </div>
        <div class="changeLog-area">
          <p>
            This is a version changelog. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Magni quibusdam quod ipsum suscipit id in fugiat
            nesciunt et aliquid minima quos, iste temporibus excepturi harum
            sequi dignissimos laboriosam, numquam error?
          </p>
        </div>
        <div class="edit-delete-buttons">
          <button class="edit-btn">Edit</button>
          <button class="delete-btn">Delete</button>
        </div>
      </div>
      <div class="version-container">
        <div class="version-title-area">
          <h3>This is a Version Title</h3>
        </div>
        <div class="changeLog-area">
          <p>
            This is a version changelog. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Magni quibusdam quod ipsum suscipit id in fugiat
            nesciunt et aliquid minima quos, iste temporibus excepturi harum
            sequi dignissimos laboriosam, numquam error?
          </p>
        </div>
        <div class="edit-delete-buttons">
          <button class="edit-btn">Edit</button>
          <button class="delete-btn">Delete</button>
        </div>
      </div>
      <div class="version-container">
        <div class="version-title-area">
          <h3>This is a Version Title</h3>
        </div>
        <div class="changeLog-area">
          <p>
            This is a version changelog. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Magni quibusdam quod ipsum suscipit id in fugiat
            nesciunt et aliquid minima quos, iste temporibus excepturi harum
            sequi dignissimos laboriosam, numquam error?
          </p>
        </div>
        <div class="edit-delete-buttons">
          <button class="edit-btn">Edit</button>
          <button class="delete-btn">Delete</button>
        </div>
      </div>
    <section>

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
