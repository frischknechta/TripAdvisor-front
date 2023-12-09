document.addEventListener("DOMContentLoaded", () => {
  console.log("Document loaded");

  const modal = document.querySelector(".modal");
  const body = document.querySelector("body");
  const form = document.querySelector("#contact-form");

  document.querySelector(".button-sign-up").addEventListener("click", () => {
    modal.classList.remove("hidden");
    body.classList.add("disable");
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const data = {
      firstname: document.querySelector("#firstname").value,
      lastname: document.querySelector("#lastname").value,
      email: document.querySelector("#email").value,
      message: document.querySelector("#message").value,
    };

    console.log(data);

    try {
      const response = await axios.post(
        "https://site--backend-tripadvisor--79sf29g9cmjg.code.run/contact-form",
        data
      );
      if (response.status === 200) {
        alert("Votre formulaire a bien été envoyé");
      }
      form.reset();
    } catch (error) {
      if (error.response?.data.message === "Missing parameters") {
        alert("Veuillez remplir tous les champs du formulaire");
      } else {
        alert("Une erreur est survenue");
        form.reset();
      }
    }

    console.log("Response =>", response);
  });

  document.querySelector(".icon-times").addEventListener("click", () => {
    form.reset();
    modal.classList.add("hidden");
    body.classList.remove("disable");
  });
});
