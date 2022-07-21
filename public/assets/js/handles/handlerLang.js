import {
  titleHomeFrench,
  textHomeFrench,
  titleHomeEnglish,
  textHomeEnglish,
  titleHomeColored,
} from "../views/Home.js";
import {
  titleProjectsFrench,
  titleProjectsEnglish,
  titleProjectsColored,
} from "../views/Projects.js";
import {
  titleContactFrench,
  titleContactEnglish,
  labelNameFrench,
  labelEmailFrench,
  labelMessageFrench,
  buttonFrench,
  labelNameEnglish,
  labelEmailEnglish,
  labelMessageEnglish,
  buttonEnglish,
  titleContactColored,
} from "../views/Contact.js";
// Button toggle lang
const buttonLang = document.getElementsByClassName("toggleLang-flag");
// Nav DOM
const nav = document.getElementsByTagName("li");
// Home DOM
const titleHome = document.getElementsByClassName("home-title");
const textHome = document.getElementsByClassName("home-article");
// Contact DOM
const titleContact = document.getElementsByClassName("contact-title");
const labels = document.getElementsByTagName("label");
const buttonSubmit = document.getElementsByClassName("contact-button");

const handlerLang = (lang, locat) => {
  console.log(buttonSubmit);
  // Toggle button image
  buttonLang[0].src = lang
    ? "./assets/images/buttons/united-kingdom-flag-round-icon-32.png"
    : "./assets/images/buttons/flag_french.png";

  // Toggle nav items
  for (const link of nav) {
    switch (link.id) {
      case "home":
        link.innerHTML = lang ? "Accueil" : "Home";
        break;

      case "projects":
        link.innerHTML = lang ? "Projets" : "Projects";
        break;
      default:
        break;
    }
  }
  // Toggle text components
  switch (locat) {
    case "home":
      // Title
      titleHome[0].innerHTML = lang ? titleHomeFrench : titleHomeEnglish;
      // Text
      textHome[0].innerHTML = lang ? textHomeFrench : textHomeEnglish;
      break;

    case "contact":
      console.log(titleContact);
      // Title
      titleContact[0].innerHTML = lang
        ? titleContactFrench
        : titleContactEnglish;

      // Submit button
      buttonSubmit[0].innerHTML = lang ? buttonFrench : buttonEnglish;

      // Labels form
      for (const label of labels) {
        switch (label.htmlFor) {
          case "contactName":
            label.innerHTML = lang ? labelNameFrench : labelNameEnglish;
            break;
          case "contactEmail":
            label.innerHTML = lang ? labelEmailFrench : labelEmailEnglish;
            break;
          case "contactMessage":
            label.innerHTML = lang ? labelMessageFrench : labelMessageEnglish;
            break;

          default:
            break;
        }
      }
      break;

    default:
      break;
  }
};

export { handlerLang };
