// Import Home
import {
  titleHomeFrench,
  textHomeFrench,
  titleHomeEnglish,
  textHomeEnglish,
} from "../views/Home.js";
// Import Projects
import {
  titleProjectsFrench,
  titleProjectsEnglish,
} from "../views/Projects.js";
import { listProjects } from "../views/DetailsProject.js";
// Import Contact
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
} from "../views/Contact.js";

// DOM
// Header
const buttonLang = document.getElementsByClassName("toggleLang-flag");
const nav = document.getElementsByTagName("li");
// Home
const titleHome = document.getElementsByClassName("home-title");
const textHome = document.getElementsByClassName("home-article");
// Projects
const titleProjects = document.getElementsByClassName("projects-title");
const introProjects = document.getElementsByClassName("project-intro");
const technoDescript = document.getElementsByClassName("techno-desc");
// Contact
const titleContact = document.getElementsByClassName("contact-title");
const labels = document.getElementsByTagName("label");
const buttonSubmit = document.getElementsByClassName("contact-button");

// Toggle language
const handlerLang = (lang, locat) => {
  // Toggle button image
  buttonLang[0].src = lang
    ? "./assets/images/buttons/FlagUK_64.svg"
    : "./assets/images/buttons/FlagFrenchButton_64.svg";

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
    /***** HOME  *****/
    case "home":
      // Title
      titleHome[0].innerHTML = lang ? titleHomeFrench : titleHomeEnglish;
      // Text
      textHome[0].innerHTML = lang ? textHomeFrench : textHomeEnglish;
      break;

    /***** PROJECTS  *****/
    case "projects":
      console.dir(titleProjects[0]);
      // If view all projects
      if (
        titleProjects[0].innerText === "My projects" ||
        titleProjects[0].innerText === "Mes projets"
      ) {
        titleProjects[0].innerText = lang
          ? titleProjectsFrench
          : titleProjectsEnglish;
        // If view one project
      } else {
        // Sort project
        const projectViewed = listProjects.find(
          (project) => project.title === titleProjects[0].innerText
        );
        // Toggle intro language
        introProjects[0].innerText = lang
          ? projectViewed.introFr
          : projectViewed.introEn;

        // Toggle language
        for (const [key, techno] of Object.entries(technoDescript)) {
          techno.innerText = lang
            ? projectViewed.listTech[key].descFr
            : projectViewed.listTech[key].descEn;
        }
      }

      break;

    /***** CONTACT  *****/
    case "contact":
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
