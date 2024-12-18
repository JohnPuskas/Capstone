import html from "html-literal";
import songFilesScreenshot from "../assets/img/Song_Session_Version_Confusion.jpg";

export default state => html`
  ${window.scrollTo(0, 0)}
  <main>
    <section id="content">
      <article id="about-app" class="app-content">
        <h2>What Track Version Track Is:</h2>
        <p>
          Welcome to Track Version Track! Have you ever had trouble tracking
          <i>what</i> changes were made in <i>which</i> versions of a song
          within a song project? With Track Version Track, you can get past a
          confusing mess of filenames like this:
        </p>
        <img
          class="demo-image"
          src="${songFilesScreenshot}"
          alt="screenshot of a confusing mess of file names"
        />
        <p>
          Using Track Version Track, you are able to create messages that
          describe the changes made in any version of a song, in as great of
          detail as you like. You will no longer need to dig through old
          versions of a song to find a specific file that may no longer exist in
          your current session. Or if you are working in collaboration with
          another artist, you can easily label your versions with descriptions
          that will allow your collaborator to be informed of what updates you
          have made.
        </p>
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
              version filenames. For each filename, enter a description of
              changes that were made in that version.
            </p>
          </li>
          <li>
            <p>
              View the full version history and list of changes all in one
              place, and one page.
            </p>
          </li>
        </ol>
        <h3 id="how-works-center">
          That's it! You'll never again lose track of where changes were made!
        </h3>
      </article>
      <article id="quote" class="app-content">
        <h2>Get Inspired:</h2>
        <blockquote>${state.quote.quoteText}</blockquote>
        <p>-${state.quote.quoteAuthor}</p>
      </article>
    </section>
  </main>
`;

/*
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
*/
