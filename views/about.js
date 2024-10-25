import html from "html-literal";
import imageOfMe from "../assets/img/ME.jpg";

export default () => html`
  <main>
    <div class="about-page-articles-container">
      <section id="content">
        <article class="about-article app-content">
          <h2>About This Application</h2>
          <p>
            This application was inspired by version control in the software
            world. In the software development, version history is easy to
            track. With each change, developers add a small message that
            describes changes that were made. A list of all changes throughout a
            project can be viewed all in one place simultaneously. As a music
            producer, I thought wouldn't it be nice if we had something like
            this for song projects? In large projects, I would lose track of
            which iteration contained what changes. Sometimes I would need to go
            back to grab something from an old file to place into the current
            version. Without a system in place like offered with this
            application, I would find myself going through the lengthy process
            of opening and closing individual song version files throughout the
            history of the song until I (hopefully) could sort through things
            and find what I was looking for.
          </p>
        </article>
        <article class="about-article app-content bottom-app-content">
          <h2>About The Developer</h2>
          <img
            id="pic-of-me"
            src="${imageOfMe}"
            alt="picture of the developer of this application"
          />
          <p>
            My name is John Puskas. In addition to being a music producer, I am
            also a full stack web developer. I have prior experience with
            C#/.NET and Python, and I am learning to use JavaScript as a full
            stack web development tool. This application represents my first
            foray into the world of full stack JS development.
          </p>
        </article>
      </section>
    </div>
  </main>
`;
