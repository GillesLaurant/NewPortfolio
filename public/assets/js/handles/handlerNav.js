import { home, titleHomeColored } from "../views/Home.js";
import { projects, titleProjectsColored } from "../views/Projects.js";
import { animText, contact, titleContactColored } from "../views/Contact.js";
import { showProject } from "../views/DetailsProject.js";

const app = document.getElementById("app");
const main = document.getElementsByClassName("main");
const title = document.getElementsByTagName("h1");
const contactAuthor = document.getElementsByClassName("contact-author");

// NAV APP
export const handlerNav = (locat, themeDark, langFrench) => {
  switch (locat) {
    // Page Home
    case "home":
      // Render Home
      main[0].innerHTML = home(langFrench);
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
      main[0].innerHTML = projects(langFrench);
      // Toggle color title
      title[0].style.background = themeDark ? titleProjectsColored : "#000";
      title[0].style["-webkit-background-clip"] = "text";
      // Toggle light mode
      if (!themeDark) {
        app.classList.add("lightMode_projects");
        app.classList.remove("lightMode_home");
        app.classList.remove("lightMode_contact");
      }

      const domProjects = document.getElementsByClassName("projects-item");

      // Show project
      for (const item of domProjects) {
        item.addEventListener("click", (ev) => {
          ev.preventDefault();
          for (const project of domProjects) {
            if (ev.target.id !== project.id) {
              project.animate([{ opacity: "0%" }, { transform: "scale(0)" }], {
                duration: 500,
                fill: "forwards",
              });
            } else {
              project.animate(
                [
                  { position: "absolute", top: 0 },
                  { filter: "brightness(200%)" },
                ],
                {
                  duration: 500,
                  fill: "forwards",
                }
              );
            }
          }
          showProject(ev.target.id, langFrench);
        });
      }
      break;

    // Page Contact
    case "contact":
      // Render Contact
      main[0].innerHTML = contact(langFrench);
      animText(contactAuthor[0], langFrench);
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
