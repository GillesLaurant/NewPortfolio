import { home, titleHomeColored } from "../views/Home.js";
import { projects, titleProjectsColored } from "../views/Projects.js";
import { animText, contact, titleContactColored } from "../views/Contact.js";
import { showProject } from "../views/DetailsProject.js";
import { checkForm, handlerMail } from "./handleMail.js";
import { langFrench, themeDark } from "../index.js";

const app = document.getElementById("app");
const main = document.getElementsByClassName("main");
const title = document.getElementsByTagName("h1");
const contactAuthor = document.getElementsByClassName("contact-author");
const projectContainer = document.getElementsByClassName("project");
const buttonSubmit = document.getElementsByClassName("contact-button");

// NAV APP
export const handlerNav = (locat, theme, lang) => {
  switch (locat) {
    // Page Home
    case "home":
      // Render Home
      main[0].innerHTML = home(lang);
      // Toggle color title
      title[0].style.background = theme ? titleHomeColored : "#000";
      title[0].style["-webkit-background-clip"] = "text";
      // Toggle light mode
      if (!theme) {
        app.classList.add("lightMode_home");
        app.classList.remove("lightMode_projects");
        app.classList.remove("lightMode_contact");
      }
      break;

    // Page Projects
    case "projects":
      // Render Projects
      main[0].innerHTML = projects(lang);
      projectContainer[0].style.display = "none";
      // Toggle color title
      title[0].style.background = theme ? titleProjectsColored : "#000";
      title[0].style["-webkit-background-clip"] = "text";
      // Toggle light mode
      if (!theme) {
        app.classList.add("lightMode_projects");
        app.classList.remove("lightMode_home");
        app.classList.remove("lightMode_contact");
      }

      const domProjects = document.getElementsByClassName("projects-item");

      // Show project
      for (const item of domProjects) {
        item.addEventListener("click", (ev) => {
          ev.preventDefault();
          showProject(ev.target.id, langFrench, themeDark);
        });
      }
      const closeButton = document.getElementsByClassName("projects-close");
      // Toggle projects
      closeButton[0].addEventListener("click", (ev) => {
        ev.preventDefault();
        handlerNav("projects", themeDark, langFrench);
      });

      break;

    // Page Contact
    case "contact":
      // Render Contact
      main[0].innerHTML = contact(lang);
      animText(contactAuthor[0], lang);
      // Toggle color title
      title[0].style.background = theme ? titleContactColored : "#000";
      title[0].style["-webkit-background-clip"] = "text";
      // Toggle light mode
      if (!theme) {
        app.classList.add("lightMode_contact");
        app.classList.remove("lightMode_home");
        app.classList.remove("lightMode_projects");
      }
      // Check empty fields
      buttonSubmit[0].addEventListener("mouseenter", (ev) => {
        ev.preventDefault();
        checkForm();
      });
      // Send email
      buttonSubmit[0].addEventListener("click", (ev) => {
        ev.preventDefault();
        handlerMail(lang);
      });
      break;

    default:
      break;
  }
};
