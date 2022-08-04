const container = document.getElementsByClassName("projects-container");
const projectContainer = document.getElementsByClassName("project");
const title = document.getElementsByClassName("projects-title");
const closeButton = document.getElementsByClassName("projects-close");

export const listProjects = [
  {
    /*****   GillesLaurant.fr   *****/
    ref: "gilleslaurant",
    title: "GillesLaurant.fr",
    link: "#",
    introFr: "Refonte de mon portfolio.",
    introEn: "Refont my portfolio.",
    mokups: "./assets/images/mokups/newPortfolioDeskMob_192.svg",
    mokupDesk: "./assets/images/mokups/newPortfolioDesk_192.svg",
    mokupMob: "./assets/images/mokups/newPortfolioMob_192.svg",
    listTech: [
      {
        name: "Javascript",
        logo: "./assets/images/logos/JS_64.svg",
        alt: "Javascript",
        descFr: "Site réalisé uniquement en Javascript, HTML et CSS.",
        descEn: "Site made only in Javascript, HTML and CSS.",
      },
      {
        name: "Sass",
        logo: "./assets/images/logos/Sass_64.svg",
        alt: "Sass",
        descFr: "Intégration de Sass comme pré-processeur CSS.",
        descEn: "Integration of Sass as a CSS pre-processor.",
      },
      {
        name: "Email.js",
        logo: "./assets/images/logos/EmailJS_64.svg",
        alt: "Email.js",
        descFr: "Utilisation de l'API Email.js pour l'envoi des emails.",
        descEn: "Use of the Email.js API for sending emails.",
      },
      {
        name: "Node.js",
        logo: "./assets/images/logos/NodeJS_64.svg",
        alt: "Node.js",
        descFr: "API REST Node.js avec son framework Express.js.",
        descEn: "Node.js REST API with its Express.js framework.",
      },
      {
        name: "Hostinger.fr",
        logo: "./assets/images/logos/Hostinger_64.svg",
        alt: "Hostinger.fr",
        descFr:
          "Hébergement sur serveur privé virtuel (VPS) sur Hostinger.fr sous CentOS.",
        descEn:
          "Hosting on virtual private server (VPS) on Hostinger.fr under CentOS.",
      },
      {
        name: "GitHub",
        logo: "./assets/images/logos/GitHubW_64.svg",
        alt: "GitHub",
        descFr: "Versioning avec Git via GitHub.com",
        descEn: "Versioning with Git via GitHub.com.",
      },
    ],
  },
  {
    /*****   ShapeArts.fr   *****/
    ref: "shapearts",
    title: "ShapeArts.fr",
    link: "www.shapearts.fr",
    introFr:
      "Application multi-joueurs de dessin communautaire à base de formes prédéfinies.",
    introEn:
      "Multi-player community drawing application based on predefined shapes.",
    mokups: "./assets/images/mokups/shapeartsDeskMob_192.svg",
    mokupDesk: "./assets/images/mokups/shapeartsDesk_192.svg",
    mokupMob: "./assets/images/mokups/shapeartsMob_192.svg",
    listTech: [
      {
        name: "React.js",
        logo: "./assets/images/logos/React_64.svg",
        alt: "React.js",
        descFr: "UI avec le framework React.js et la librairie Redux@toolkits.",
        descEn:
          "UI with the React.js framework and the Redux@toolkits library.",
      },
      {
        name: "Node.js",
        logo: "./assets/images/logos/NodeJS_64.svg",
        alt: "Node.js",
        descFr: "API REST Node.js avec son framework Express.js.",
        descEn: "Node.js REST API with its Express.js framework.",
      },
      {
        name: "Sass",
        logo: "./assets/images/logos/Sass_64.svg",
        alt: "Sass",
        descFr: "Intégration de Sass comme pré-processeur CSS.",
        descEn: "Integration of Sass as a CSS pre-processor.",
      },
      {
        name: "Hostinger.fr",
        logo: "./assets/images/logos/Hostinger_64.svg",
        alt: "Hostinger.fr",
        descFr: "Hébergement VPS sur Hostinger.fr sous CentOS.",
        descEn: "Hosting VPS on Hostinger.fr under CentOS.",
      },
      {
        name: "Socket.io",
        logo: "./assets/images/logos/SocketIO_64.svg",
        alt: "Socket.io",
        descFr: "Communication par web sockets avec Socket.io.",
        descEn: "Integration of Sass as a CSS preprocessor.",
      },
      {
        name: "Sequelize",
        logo: "./assets/images/logos/Sequelize_64.svg",
        alt: "Sequelize",
        descFr: "ORM pour gérer les transactions avec la BDD.",
        descEn: "ORM to manage transactions with the BDD.",
      },
      {
        name: "GitHub",
        logo: "./assets/images/logos/GitHubW_64.svg",
        alt: "GitHub",
        descFr: "Versioning avec Git via GitHub.com",
        descEn: "Versioning with Git via GitHub.com.",
      },
      {
        name: "MySQL",
        logo: "./assets/images/logos/MySQL_64.svg",
        alt: "my SQL",
        descFr: "Base de données relationnelles avec MySQL.",
        descEn: "Relational database with MySQL.",
      },
    ],
  },
  {
    /*****   reactDevGillesLaurant.com   *****/
    ref: "portfolio",
    title: "reactDevGillesLaurant.com",
    link: "www.reactdevgilleslaurant.com",
    introFr: "Mon premier site vitrine, proposant plusieurs designs.",
    introEn: "My first showcase site, offering several designs.",
    mokups: "./assets/images/mokups/myPortfolioDeskMob_192.svg",
    mokupDesk: "./assets/images/mokups/myPortfolioDesk_192.svg",
    mokupMob: "./assets/images/mokups/myPortfolioMob_192.svg",
    listTech: [
      {
        name: "React.js",
        logo: "./assets/images/logos/React_64.svg",
        alt: "React.js",
        descFr:
          "UI avec le framework React.js et la librairie Redux pour m'exercer.",
        descEn:
          "UI with the React.js framework and the Redux library to practice.",
      },
      {
        name: "Sass",
        logo: "./assets/images/logos/Sass_64.svg",
        alt: "Sass",
        descFr: "Intégration de Sass comme pré-processeur CSS.",
        descEn: "Integration of Sass as a CSS pre-processor.",
      },
      {
        name: "Green Sock",
        logo: "./assets/images/logos/Gsap_64.svg",
        alt: "Green Sock",
        descFr:
          "Intégration de Green Sock (gsap pour les intimes) pour les animations.",
        descEn: "Integration of Green Sock (gsap for friends) for animations.",
      },
      {
        name: "Motion",
        logo: "./assets/images/logos/Motion_64.svg",
        alt: "Motion.js",
        descFr:
          "Intégration de la librairie Motion.js pour la transition des pages.",
        descEn: "Integration of the Motion.js library for page transition.",
      },
      {
        name: "Email.js",
        logo: "./assets/images/logos/EmailJS_64.svg",
        alt: "Email.js",
        descFr: "Utilisation de l'API Email.js pour l'envoi des emails.",
        descEn: "Use of the Email.js API for sending emails.",
      },
      {
        name: "GitHub",
        logo: "./assets/images/logos/GitHubW_64.svg",
        alt: "GitHub",
        descFr: "Versioning avec Git via GitHub.com",
        descEn: "Versioning with Git via GitHub.com.",
      },
    ],
  },
  {
    /*****   O'Crypto   *****/
    ref: "ocrypto",
    title: "O'crypto",
    link: "https://youtu.be/bE8Efk9obOw?t=2519",
    introFr: "Portefeuille numérique de crypto-monnaies.",
    introEn: "Cryptocurrency digital wallet.",
    mokups: "./assets/images/mokups/ocryptoDeskMob_192.svg",
    mokupDesk: "./assets/images/mokups/ocryptoDesk_192.svg",
    mokupMob: "./assets/images/mokups/ocryptoMob_192.svg",
    listTech: [
      {
        name: "React.js",
        logo: "./assets/images/logos/React_64.svg",
        alt: "React.js",
        descFr: "UI avec le framework React.js et la librairie Redux@toolkits.",
        descEn:
          "UI with the React.js framework and the Redux@toolkits library.",
      },
      {
        name: "Sass",
        logo: "./assets/images/logos/Sass_64.svg",
        alt: "Sass",
        descFr: "Intégration de Sass comme pré-processeur CSS.",
        descEn: "Integration of Sass as a CSS pre-processor.",
      },
      {
        name: "Semantic.UI",
        logo: "./assets/images/logos/SemanticUI_64.svg",
        alt: "Semantic.UI",
        descFr: "Intégration du framework Semantic.UI pour simplifier le CSS.",
        descEn: "Integration of the Semantic.UI framework to simplify CSS.",
      },
      {
        name: "Chart.js",
        logo: "./assets/images/logos/ChartJS_64.svg",
        alt: "Chart.js",
        descFr: "Modélisation des graphiques avec Chart.js.",
        descEn: "Chart modeling with Chart.js.",
      },
      {
        name: "Node.js",
        logo: "./assets/images/logos/NodeJS_64.svg",
        alt: "Node.js",
        descFr: "API REST Node.js avec son framework Express.js.",
        descEn: "Node.js REST API with its Express.js framework.",
      },
      {
        name: "PostgreSQL",
        logo: "./assets/images/logos/PostgreSQL_64.svg",
        alt: "PostgreSQL",
        descFr: "Base de données relationnelles avec PostgreSQL.",
        descEn: "Relational database with PostgreSQL.",
      },
      {
        name: "GitHub",
        logo: "./assets/images/logos/GitHubW_64.svg",
        alt: "GitHub",
        descFr: "Versioning avec Git via GitHub.com",
        descEn: "Versioning with Git via GitHub.com.",
      },
      {
        name: "Swagger",
        logo: "./assets/images/logos/SwaggerUI_64.svg",
        alt: "Swagger UI",
        descFr: "Visualisation et intéractions de l'API avec Swagger.UI.",
        descEn: "Visualization and API interactions with Swagger.UI.",
      },
    ],
  },
];
export const showProject = (refProject, lang, themeDark) => {
  const project = listProjects.find((project) => project.ref === refProject);

  // Set Title project
  title[0].innerHTML = project.title;
  project.ref === "portfolio" && title[0].classList.add("portfolio");

  // Remove container projects
  container[0].style.display = "none";
  closeButton[0].style.display = "flex";

  // Component
  projectContainer[0].innerHTML = `
  <!-- LINKS -->
  <a href=${
    project.link
  } class="project-link link-desk" target="_blank" title=${
    project.title
  } rel="noopener noreferrer">
    <img src=${
      project.mokupDesk
    } class="project-link-mokupDesk" loading="eager" />
  </a>

  <a href=${project.link} class="project-link link-mob" target="_blank" title=${
    project.title
  } rel="noopener noreferrer">
    <img src=${project.mokupMob} alt=${
    project.title
  } class="project-link-mokupMob" loading="eager" />
  </a>

  <!-- INTRO -->
  <p class="project-intro" >${lang ? project.introFr : project.introEn}</p>

  <!-- BUTTON TECHNOS CLOSE -->
  <button type="button" class="technos-close">
    <svg class="technos-close-svg" width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M60.8798 53.1891L40.4815 32.7908L60.8798 12.3925C63.082 10.1902 63.082 6.64474 60.8798 4.44247C58.6775 2.24021 55.132 2.24021 52.9297 4.44247L32.5314 24.8408L12.1332 4.44247C9.9309 2.24021 6.38541 2.24021 4.18315 4.44247C1.98088 6.64474 1.98088 10.1902 4.18315 12.3925L24.5814 32.7908L4.18315 53.1891C1.98088 55.3913 1.98088 58.9368 4.18315 61.1391C6.38541 63.3413 9.9309 63.3413 12.1332 61.1391L32.5314 40.7408L52.9297 61.1391C55.132 63.3413 58.6775 63.3413 60.8798 61.1391C63.0664 58.9368 63.0664 55.3757 60.8798 53.1891Z" />
    </svg>
  </button>

  <div class="techs-container">
    ${project.listTech
      .map(
        (techno) =>
          `<div id=${project.ref + "_" + techno.name} class="techno">
            <img src=${techno.logo} alt=${
            techno.alt
          } class="techno-logo" loading="eager" />
            <p class="techno-desc">${lang ? techno.descFr : techno.descEn}</p>
          </div>`
      )
      .join("")}
    
  </div>`;

  // Toggle technos
  projectContainer[0].style.display = window.innerWidth < 990 ? "flex" : "grid";
  const closeTechnos = document.getElementsByClassName("technos-close");

  // DOM
  const mokupMobile = document.getElementsByClassName("link-mob");
  const technoLogo = document.getElementsByClassName("techno-logo");
  const technoDesc = document.getElementsByClassName("techno-desc");

  // Toggle show technos
  closeTechnos[0].addEventListener("click", (ev) => {
    ev.preventDefault();
    // Turn button animation
    closeTechnos[0].classList.toggle("button_viewed");
    // Scale mokup mobile
    mokupMobile[0].classList.toggle("mokup_viewed");
    // Scale & translate svg logo
    for (const logo of technoLogo) {
      logo.classList.toggle("technoLogo_viewed");
    }
    // Toggle opacity text
    for (const desc of technoDesc) {
      desc.classList.toggle("technoDesc_viewed");
    }
  });
};
