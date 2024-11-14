// toggle nav hamburger menu
export default function toggleNav() {
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });
}
