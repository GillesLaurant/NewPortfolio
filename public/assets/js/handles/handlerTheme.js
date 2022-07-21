import { titleHomeColored } from "../views/Home.js";
import { titleProjectsColored } from "../views/Projects.js";
import { titleContactColored } from "../views/Contact.js";

const themeIcon = document.getElementsByClassName("toggleTheme-icon");
const titleHome = document.getElementsByClassName("home-title");
const titleProjects = document.getElementsByClassName("projects-title");
const titleContact = document.getElementsByClassName("contact-title");

// Toggle theme DARK || LIGHT
const handlerTheme = (themeDark, locat) => {
  // Toggle svg button
  themeIcon[0].src = themeDark
    ? "./assets/images/buttons/sun.svg"
    : "./assets/images/buttons/moon.svg";

  // console.dir(titleHome[0].style);
  // Toggle background-colors & colors text
  switch (locat) {
    // Home view
    case "home":
      themeDark && app.classList.replace("lightMode_home", "darkMode");
      !themeDark && app.classList.replace("darkMode", "lightMode_home");
      titleHome[0].style.background = themeDark ? titleHomeColored : "#000";
      titleHome[0].style["-webkit-background-clip"] = "text";
      break;

    // Projects view
    case "projects":
      themeDark && app.classList.replace("lightMode_projects", "darkMode");
      !themeDark && app.classList.replace("darkMode", "lightMode_projects");
      titleProjects[0].style.background = themeDark
        ? titleProjectsColored
        : "#000";
      titleProjects[0].style["-webkit-background-clip"] = "text";
      break;

    // Contact view
    case "contact":
      themeDark && app.classList.replace("lightMode_contact", "darkMode");
      !themeDark && app.classList.replace("darkMode", "lightMode_contact");
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
