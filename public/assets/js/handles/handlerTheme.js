import { titleHomeColored } from "../views/Home.js";
import { titleProjectsColored } from "../views/Projects.js";
import { titleContactColored } from "../views/Contact.js";

// DOM
const themeIcon = document.getElementsByClassName("toggleTheme-icon");
const titleHome = document.getElementsByClassName("home-title");
const titleProjects = document.getElementsByClassName("projects-title");
const titleContact = document.getElementsByClassName("contact-title");
const navLinks = document.getElementsByClassName("nav-items");

// Toggle theme DARK || LIGHT
const handlerTheme = (themeDark, locat) => {
  // Toggle svg button
  themeIcon[0].src = themeDark
    ? "./assets/images/buttons/Sun_64.svg"
    : "./assets/images/buttons/Moon_64.svg";

  // Color animation link nav
  for (const iterator of navLinks) {
    iterator.classList.replace(
      themeDark ? "nav-items-light" : "nav-items-dark",
      themeDark ? "nav-items-dark" : "nav-items-light"
    );
  }

  // Toggle background-colors & colors text
  switch (locat) {
    /*****   Home view   *****/
    case "home":
      // Background
      app.classList.replace(
        themeDark ? "lightMode_home" : "darkMode",
        themeDark ? "darkMode" : "lightMode_home"
      );

      // Colors title
      titleHome[0].style.background = themeDark ? titleHomeColored : "#000";
      titleHome[0].style["-webkit-background-clip"] = "text";
      break;

    /*****   Projects view   *****/
    case "projects":
      // Background
      app.classList.replace(
        themeDark ? "lightMode_projects" : "darkMode",
        themeDark ? "darkMode" : "lightMode_projects"
      );

      // Colors title
      titleProjects[0].style.background = themeDark
        ? titleProjectsColored
        : "#000";
      titleProjects[0].style["-webkit-background-clip"] = "text";
      break;

    /*****   Contact view   *****/
    case "contact":
      // Background
      app.classList.replace(
        themeDark ? "lightMode_contact" : "darkMode",
        themeDark ? "darkMode" : "lightMode_contact"
      );

      // Colors title
      titleContact[0].style.background = themeDark
        ? titleContactColored
        : "#000";
      titleContact[0].style["-webkit-background-clip"] = "text";
      break;

    default:
      break;
  }
};

export { handlerTheme };
