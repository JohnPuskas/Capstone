document.querySelector(".fa-bars").addEventListener("click", () => {
  document.querySelector("nav > ul").classList.toggle("hidden--mobile");
});

const contactForm = document.querySelector("#contact-form");

contactForm.addEventListener("submit", event => {
  event.preventDefault();

  // Below is or debugging
  console.log("form submitted");
  const inputs = event.target.elements;

  for (let input of inputs) {
    console.log(`input name: ${input.name}, input value: ${input.value}`);
  }
});
