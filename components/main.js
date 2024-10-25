import html from "html-literal";
import * as views from "../views";

export default state => html`
  ${views["home"]()} ${views["songs"]()} ${views["songVersions"]()}
  ${views["about"]()} ${views["contact"]()}
`;
