document.addEventListener("DOMContentLoaded", () => {
  console.log("Document loaded");

  const modal = document.querySelector(".modal");
  const body = document.querySelector("body");

  document.querySelector(".button-sign-up").addEventListener("click", () => {
    modal.classList.remove("hidden");
    body.classList.add("disable");
  });

  document
    .querySelector("#contact-form")
    .addEventListener("submit", async (event) => {
      event.preventDefault();

      const data = {
        firstname: document.querySelector("#firstname").value,
        lastname: document.querySelector("#lastname").value,
        email: document.querySelector("#email").value,
        message: document.querySelector("#message").value,
      };

      console.log(data);

      const response = await axios.post("http://localhost:3000/contact-form");
      console.log("Response =>", response);
    });

  document.querySelector(".icon-times").addEventListener("click", () => {
    modal.classList.add("hidden");
    body.classList.remove("disable");
  });
});
