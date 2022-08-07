// Texts french || English
const titleProjectsFrench = "Mes projets";
const titleProjectsEnglish = "My projects";

// List projects
const listProjects = [
  {
    /*****   gillesLaurant.fr   *****/
    ref: "gilleslaurant",
    title: "GillesLaurant.fr",
    mokups: "./assets/images/mokups/newPortfolioDeskMob_192.svg",
  },
  {
    /*****   ShapeArts.fr   *****/
    ref: "shapearts",
    title: "ShapeArts.fr",
    mokups: "./assets/images/mokups/shapeartsDeskMob_192.svg",
  },
  {
    /*****   reactDevGillesLaurant.com   *****/
    ref: "portfolio",
    title: "reactDevGillesLaurant.com",
    mokups: "./assets/images/mokups/myPortfolioDeskMob_192.svg",
  },
  {
    /*****   O'Crypto   *****/
    ref: "ocrypto",
    title: "O'crypto",
    mokups: "./assets/images/mokups/ocryptoDeskMob_192.svg",
  },
];

// Color title
const titleProjectsColored =
  "linear-gradient(278.1deg,rgba(96, 221, 142, 1) 8.7%,rgb(40, 150, 154) 88.1%)";

// Component
const projects = (lang) => {
  return `
  <section class="projects">
    <!-- BUTTON CLOSE PROJECT -->
    <button type="button" class="projects-close" aria-label="close project view">
      <svg class="projects-close-svg" width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M60.8798 53.1891L40.4815 32.7908L60.8798 12.3925C63.082 10.1902 63.082 6.64474 60.8798 4.44247C58.6775 2.24021 55.132 2.24021 52.9297 4.44247L32.5314 24.8408L12.1332 4.44247C9.9309 2.24021 6.38541 2.24021 4.18315 4.44247C1.98088 6.64474 1.98088 10.1902 4.18315 12.3925L24.5814 32.7908L4.18315 53.1891C1.98088 55.3913 1.98088 58.9368 4.18315 61.1391C6.38541 63.3413 9.9309 63.3413 12.1332 61.1391L32.5314 40.7408L52.9297 61.1391C55.132 63.3413 58.6775 63.3413 60.8798 61.1391C63.0664 58.9368 63.0664 55.3757 60.8798 53.1891Z" />
      </svg>
    </button>

    <h1 class="projects-title">
      ${lang ? titleProjectsFrench : titleProjectsEnglish}
    </h1>

    <div class="projects-container">
      ${listProjects
        .map(
          (project) =>
            `<div key=${project.ref} id=${project.ref} name=${project.ref} class="projects-item">
              <img
                src=${project.mokups}
                alt=${project.title}
                class="projects-item-mokup"
                loading="eager"
              />
              <p class="projects-item-title" >${project.title}</p>
            </div>`
        )
        .join("")}
    </div>

    <!-- BUTTON CLOSE TECHNOS -->
    <div class="project">
      <button type="button" class="technos-close" aria-label="close section technologies use"></button>
    </div>
  </section>`;
};

export {
  projects,
  titleProjectsFrench,
  titleProjectsEnglish,
  titleProjectsColored,
};
