const inputs = document.getElementsByTagName("input");
const textarea = document.getElementsByTagName("textarea");
const buttonSubmit = document.getElementsByClassName("contact-button");
const form = document.getElementsByClassName("contact-form");
const errorForm = document.getElementsByClassName("contact-form-error");
const NAME_REGEX = /^[A-Za-z0-9 -]{3,50}$/;
const MAIL_REGEX = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const MESSAGE_REGEX = /^[A-Za-z0-9_-]{3,1000}$/;
const emptyFields = {
  name: false,
  email: false,
  message: false,
};

const mail_params = {
  name: "",
  email: "",
  message: "",
};

// Hover check validity fields form
export const checkForm = () => {
  // Check validity inputs
  for (const input of inputs) {
    // Name
    input.name === "contactName" &&
      (!NAME_REGEX.test(input.value)
        ? (emptyFields.name = true) &&
          (input.style["box shadow"] = "inset 0px 0px 1px 1px rgb(209, 2, 2)")
        : (emptyFields.name = false));

    // Email
    input.name === "contactEmail" &&
      (!MAIL_REGEX.test(input.value)
        ? (emptyFields.email = true) &&
          (input.style["box shadow"] = "inset 0px 0px 1px 1px rgb(209, 2, 2)")
        : (emptyFields.email = false));
  }

  // Check validity Message
  textarea[0].value.length < 1
    ? (emptyFields.message = true) &&
      (textarea[0].style["box shadow"] = "inset 0px 0px 1px 1px rgb(209, 2, 2)")
    : (emptyFields.message = false);

  // Toggle error style button
  if (!Object.values(emptyFields).every((current) => !current)) {
    buttonSubmit[0].classList.add("contact-button-error");
  } else {
    buttonSubmit[0].classList.remove("contact-button-error");
  }
};

// Send mail with email.js
export const handlerMail = (lang) => {
  // If empty fields form
  if (!Object.values(emptyFields).every((current) => !current)) {
    // Show empty placeholders & return
    for (const input of Object.values(inputs)) {
      input.value.length < 1 && (input.placeholder = lang ? "Vide" : "Empty");
    }

    textarea[0].value < 1 &&
      (textarea[0].placeholder = lang ? "Vide" : "Empty");
    return;
  }
  // Remove error message
  errorForm[0].style.display = "none";

  // Create loader button
  buttonSubmit[0].innerHTML = `
  <div class="loader">
    <div class='loader-points'></div>
    <div class='loader-points'></div>
    <div class='loader-points'></div>
    <div class='loader-points'></div>
  </div>
    `;

  // Get data form
  for (const input of Object.values(inputs)) {
    input.name === "contactName" && (mail_params.name = input.value);
    input.name === "contactEmail" && (mail_params.email = input.value);
  }
  mail_params.message = textarea[0].value;

  // Request Emailjs
  emailjs
    .send(
      "service_lqycicf",
      "template_pi1ufdc",
      mail_params,
      "BEz2-luYB_NB8h-CG"
    )
    // Success respond
    .then(() => {
      form[0].innerHTML = `
        <img src="./assets/images/yes.gif" class="form-success" alt="Email envoyé" />`;
    })
    // Error respond
    .catch((err) => {
      console.log("error receiv Email.js", err);
      // Show error message
      errorForm[0].style.display = "block";
      buttonSubmit[0].innerHTML = lang ? "Envoyer" : "Submit";
    });
};
