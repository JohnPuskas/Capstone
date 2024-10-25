import html from "html-literal";

export default state => html`
  <div id="sticky">
    <header>
      <a class="header-bar-item" href="index.html">
        <img id="logo" src="" alt="Track Version Track logo" />
      </a>

      <h1 class="header-bar-item" id="page-title">${state.header}</h1>
      <button class="header-bar-item submit-btn" id="user-login-btn">
        Login
      </button>
    </header>
  </div>
`;
