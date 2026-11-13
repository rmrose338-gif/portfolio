document.querySelectorAll(".portrait-frame img").forEach((image) => {
  const showPlaceholder = () => {
    image.hidden = true;
  };

  image.addEventListener("error", showPlaceholder);

  if (image.complete && image.naturalWidth === 0) {
    showPlaceholder();
  }
});

const contactForm = document.querySelector("#contactForm");
const formStatus = document.querySelector("#form-status");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formStatus.textContent = "This form is not connected yet. Add a form endpoint to receive messages.";
});