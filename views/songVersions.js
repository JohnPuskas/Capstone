import html from "html-literal";
import { songVersions as versions } from "../store";

let songVersionHtml;
let versionTitleAndChangelogHtmlString = "";

// The 'Add' button will need to be in the html regardless of whether a user has any saved versions or not.
const addButton = html`
  <div class="add">
    <div class="add-btn">
      <button class="add-button">
        <i class="fa-solid fa-plus"></i>
      </button>
    </div>
    <p class="add-new">Add New</p>
  </div>
`;

// If the user does not yet have any song versions saved, give info to add a version.
// Else give the list of song versions.
if (versions.versionTitles == []) {
  songVersionHtml = html`
    <main>
      <h2>There are no song versions to display yet.</h2>
      <h3>Add a new song versions</h3>
      ${addButton}
    </main>
  `;
} else {
  // ?? Looping through the array from imported songVersions of store and creating html dynamically from elements.
  versions.versionTitles.forEach((versionTitles, index) => {
    versionTitleAndChangelogHtmlString += html`
      <div class="version-container">
        <div class="version-title-area">
          <h3>${versionTitles}</h3>
        </div>
        <div class="changeLog-area">
          <p>
            ${versions.versionChanges[index]}
          </p>
        </div>
        <div class="edit-delete-buttons">
          <button class="edit-btn">Edit</button>
          <button class="delete-btn">Delete</button>
        </div>
      </div>
    `;
  });
  console.log(versionTitleAndChangelogHtmlString);

  // Now that the song versions' html is defined it can be inserted into the html literal.
  songVersionHtml = html`
    <main>
      <h2>
        This is the song Versions page which will be dynamically populated
      </h2>
      <section id="versions">
        ${versionTitleAndChangelogHtmlString}
      </section>
      ${addButton}
    </main>
  `;
}

// Exports the appropriate HTML depending on the conditional check and looping
export default () => songVersionHtml;
