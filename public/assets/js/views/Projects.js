// Text french
const titleProjectsFrench = "Mes projets";
const titleProjectsEnglish = "My projects";
const listProjects = [
  {
    /*****   gillesLaurant.fr   *****/
    ref: "gilleslaurant",
    title: "GillesLaurant.fr",
    mokups: "./assets/images/mokups/mokupSportfolio1.svg",
  },
  {
    /*****   ShapeArts.fr   *****/
    ref: "shapearts",
    title: "ShapeArts.fr",
    mokups: "./assets/images/mokups/mokupSportfolio1.svg",
  },
  {
    /*****   reactDevGillesLaurant.com   *****/
    ref: "portfolio",
    title: "reactDevGillesLaurant.com",
    mokups: "./assets/images/mokups/mokupSportfolio1.svg",
  },
  {
    /*****   O'Crypto   *****/
    ref: "ocrypto",
    title: "O'crypto",
    mokups: "./assets/images/mokups/mokupSportfolio1.svg",
  },
];

const titleProjectsColored =
  "linear-gradient(225deg, #12fff7  0%, #b3ffab 100%)";

// Component
const projects = (lang) => {
  return `<section class="projects">
  <h1 class="projects-title">
  ${lang ? titleProjectsFrench : titleProjectsEnglish}
  </h1>
  <div class="projects-container">
  ${listProjects
    .map(
      (project) =>
        `<div key=${project.ref} id=${project.ref} name=${project.ref} class="projects-item">
    <img src=${project.mokups} class="projects-item-mokup" />
    <p class="projects-item-title" >${project.title}</p>
    </div>`
    )
    .join("")}
  </div>
  </section>`;
};

export {
  projects,
  titleProjectsFrench,
  titleProjectsEnglish,
  titleProjectsColored,
};
