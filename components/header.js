import html from "html-literal";
import logo from "../assets/img/TVT_logo_clip.jpg";

export default state => html`
  <div class="sticky">
    <header>
      <div class="header-bar-item">
        <img id="logo" src="${logo}" alt="Track Version Track logo" />
      </div>
      <h1 class="header-bar-item" id="page-title">${state.header}</h1>
      <p class="header-bar-item"></p>
    </header>
  </div>
`;
