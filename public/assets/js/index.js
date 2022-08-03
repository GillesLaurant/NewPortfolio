// MODULES
import { handlerTheme } from "./handles/handlerTheme.js";
import { handlerLang } from "./handles/handlerLang.js";
import { handlerNav } from "./handles/handlerNav.js";
import { home, titleHomeColored } from "./views/Home.js";
import { projects, titleProjectsColored } from "./views/Projects.js";
import { contact, titleContactColored } from "./views/Contact.js";
import { checkForm } from "./handles/handleMail.js";

// DOM
const main = document.getElementsByClassName("main");
const linksNav = document.getElementsByClassName("nav-items");
const themeButton = document.querySelector(".toggleTheme");
const langButton = document.querySelector(".toggleLang");
const submitButton = document.getElementsByClassName("contact-button");

// PARAMS
export let locat = "home";
export let themeDark = true;
export let langFrench = true;

// Handle nav Home || Projects || Contact
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
  // Navigation
  handlerNav(locat, themeDark, langFrench);
};

// Handle langage French || English
const handleLang = (ev) => {
  ev.preventDefault();
  // Toggle langage
  langFrench = !langFrench;
  handlerLang(langFrench, locat);
};

// Handle theme Dark || Light
const handleTheme = (ev) => {
  ev.preventDefault();
  // Toggle theme
  themeDark = !themeDark;
  handlerTheme(themeDark, locat);
};

// First rendering
main[0].innerHTML = home(langFrench);

// LISTENERS
for (const link of linksNav) {
  link.addEventListener("click", handleNav);
}
langButton.addEventListener("click", handleLang);
themeButton.addEventListener("click", handleTheme);
