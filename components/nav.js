import html from "html-literal";

export default state => html`
  <nav id="hamburger-nav-container" class="header-bar-item">
    <i class="fas fa-bars"></i>
    <ul class="hidden--mobile nav-links">
      <li><a href="index.html">Home</a></li>
      <li><a href="#">Songs (coming soon)</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
  </nav>
`;
