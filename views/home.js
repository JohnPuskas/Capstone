import html from "html-literal";
import songFilesScreenshot from "../assets/img/Song_Session_Version_Confusion.jpg";

export default state => html`
  <main>
    <section id="user-login-section">
      <div id="create-user" class="user-login">
        <form id="new-user" name="newUser" onsubmit="">
          <h2 class="user-heading">Create User</h2>
          <label for="new-username">Username:</label>
          <input
            class="form-input"
            type="text"
            name="new-username"
            id="new-username"
            placeholder="enter a new username"
          />
          <input class="submit-btn" type="submit" value="submit" />
        </form>
      </div>
      <div id="select-user" class="user-login">
        <form id="existing-user" name="existingUser" onsubmit="">
          <h2 class="user-heading">Select User</h2>
          <label for="existing-username">Username:</label>
          <select
            name="existing-username"
            id="existing-username"
            class="form-input"
          >
            <option>To be populated by call to db.</option>
          </select>
          <input class="submit-btn" type="submit" value="submit" />
        </form>
      </div>
    </section>
    <section id="content">
      <article id="about-app" class="app-content">
        <h2>What Track Version Track Is:</h2>
        <p>
          Welcome to Track Version Track! Have you ever had trouble tracking
          <i>what</i> changes were made in <i>which</i> versions of a song
          within a song project? With Track Version Track, you can turn a
          confusing mess like this:
        </p>
        <img
          class="demo-image"
          src="${songFilesScreenshot}"
          alt="screenshot of a confusing mess of file names"
        />
        <p>Into this:</p>
        <img
          class="demo-image"
          src=""
          alt="screenshot of this app's organizational feature"
        />
      </article>
      <article class="app-content bottom-app-content">
        <h2>How It Works:</h2>
        <ol>
          <li>
            <p>
              Enter titles of song projects for which you wish to track version
              history details, and any description of the song project.
            </p>
          </li>
          <li>
            <p>
              Click on any individual song project to enter your specific song
              version filenames. For each filename, enter a changelog (the
              description of changes that were made in that version)
            </p>
          </li>
          <li>
            <p>
              View the full version history and list of changes all in one
              place, and one page.
            </p>
          </li>
          <li>
            <p>
              You also have the option of entering your ToDo list for the song
              project. Add items as they come up. Cross off items as they are
              completed, and they are saved into a Done List.
            </p>
          </li>
        </ol>
        <p>
          That's it! You'll never again lose track of where changes were made!
        </p>
      </article>
      <article id="quote" class="app-content">
        <h2>Get Inspired:</h2>
        <blockquote>${state.quote.quoteText}</blockquote>
        <p>-${state.quote.quoteAuthor}</p>
      </article>
    </section>
  </main>
`;
