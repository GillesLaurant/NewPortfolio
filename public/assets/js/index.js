// MODULES
import { handlerTheme } from "./handles/handlerTheme.js";
import { handlerLang } from "./handles/handlerLang.js";
import { home, titleHomeColored } from "./views/Home.js";
import { projects, titleProjectsColored } from "./views/Projects.js";
import { contact, titleContactColored } from "./views/Contact.js";

// DOM
const app = document.getElementById("app");
const main = document.querySelector(".main");
const themeButton = document.querySelector(".toggleTheme");
const langButton = document.querySelector(".toggleLang");
const linksNav = document.getElementsByClassName("nav-items");
const title = document.getElementsByTagName("h1");

// PARAMS
let locat = "home";
let themeDark = true;
let langFrench = true;

// NAV APP
const handleNav = (ev) => {
  ev.preventDefault();
  // Change local component
  locat = ev.target.id;
  // Remove active item nav
  ev.target.classList.add("activeNav");
  // Reset other items nav
  for (const link of linksNav) {
    link.innerText !== ev.target.innerText &&
      link.classList.remove("activeNav");
    switch (link.id) {
      case "home":
        link.innerHTML = langFrench ? "Accueil" : "Home";
        break;

      case "projects":
        link.innerHTML = langFrench ? "Projets" : "Projects";
        break;
      default:
        break;
    }
  }

  switch (locat) {
    // Page Home
    case "home":
      // Render Home
      main.innerHTML = home(langFrench);
      // Toggle color title
      title[0].style.background = themeDark ? titleHomeColored : "#000";
      title[0].style["-webkit-background-clip"] = "text";
      // Toggle light mode
      if (!themeDark) {
        app.classList.add("lightMode_home");
        app.classList.remove("lightMode_projects");
        app.classList.remove("lightMode_contact");
      }
      break;

    // Page Projects
    case "projects":
      // Render Projects
      main.innerHTML = projects(langFrench);
      // Toggle color title
      title[0].style.background = themeDark ? titleProjectsColored : "#000";
      title[0].style["-webkit-background-clip"] = "text";
      // Toggle light mode
      if (!themeDark) {
        app.classList.add("lightMode_projects");
        app.classList.remove("lightMode_home");
        app.classList.remove("lightMode_contact");
      }
      break;

    // Page Contact
    case "contact":
      // Render Contact
      main.innerHTML = contact(langFrench);
      // Toggle color title
      title[0].style.background = themeDark ? titleContactColored : "#000";
      title[0].style["-webkit-background-clip"] = "text";
      // Toggle light mode
      if (!themeDark) {
        app.classList.add("lightMode_contact");
        app.classList.remove("lightMode_home");
        app.classList.remove("lightMode_projects");
      }
      break;

    default:
      break;
  }
};

const handleLang = (ev) => {
  ev.preventDefault();
  // Toggle langage
  langFrench = !langFrench;
  handlerLang(langFrench, locat);
};

const handleTheme = (ev) => {
  ev.preventDefault();
  // Toggle theme
  themeDark = !themeDark;
  handlerTheme(themeDark, locat);
};

// First rendering
main.innerHTML = home(langFrench);

// LISTENERS
for (const link of linksNav) {
  link.addEventListener("click", handleNav);
}
langButton.addEventListener("click", handleLang);
themeButton.addEventListener("click", handleTheme);
