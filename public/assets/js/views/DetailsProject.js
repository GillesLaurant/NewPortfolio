const container = document.getElementsByClassName("projects-container");
const title = document.getElementsByClassName("projects-title");
const techsContainer = document.getElementsByClassName("techs-container");
const listProjects = [
  {
    /*****   GillesLaurant.fr   *****/
    ref: "gilleslaurant",
    title: "GillesLaurant.fr",
    introFr: "Refonte de mon portfolio.",
    introEn: "Refont my portfolio.",
    mokups: "./assets/images/mokups/mokupSportfolio1.svg",
    mokupDesk: "./assets/images/mokups/mokupDeskPortfolio1.svg",
    mokupMob: "./assets/images/mokups/mokupMobPortfolio1.svg",
    listTech: [
      {
        name: "Javascript",
        logo: "../public/assets/images/logos/react.svg",
        alt: "logo React.js",
        descFr: "UI avec le framework React.js et la librairie Redux@toolkits.",
        descEn:
          "UI with the React.js framework and the Redux@toolkits library.",
      },
      {
        name: "Sass",
        logo: "../public/assets/images/logos/sass.png",
        alt: "logo Sass",
        descFr: "Intégration de Sass comme préprocesseur CSS.",
        descEn: "Integration of Sass as a CSS preprocessor.",
      },
      {
        name: "Green Sock",
        logo: "../public/assets/images/logos/iconGreenSock.png",
        alt: "logo Green Sock",
        descFr:
          "Intégration de la librairie Green Sock (gsap pour les intimes) pour les animations.",
        descEn:
          "UI with the React.js framework and the Redux@toolkits library.",
      },
      {
        name: "Node.js",
        logo: "../public/assets/images/logos/nodejs.png",
        alt: "logo Node.js",
        descFr: "API REST Node.js avec son framework Express.js.",
        descEn: "Node.js REST API with its Express.js framework.",
      },
      {
        name: "Hostinger.fr",
        logo: "../public/assets/images/logos/sass.png",
        alt: "logo Hostinger.fr",
        descFr:
          "Hébergement sur serveur privé virtuel (VPS) sur Hostinger.fr sous CentOS.",
        descEn:
          "Hosting on virtual private server (VPS) on Hostinger.fr under CentOS.",
      },
      {
        name: "HTML & CSS",
        logo: "../public/assets/images/logos/sass.png",
        alt: "logo Socket.io",
        descFr: "Communication par web sockets avec Socket.io.",
        descEn: "Integration of Sass as a CSS preprocessor.",
      },
      {
        name: "GitHub",
        logo: "../public/assets/images/logos/githubCircle.svg",
        alt: "logo GitHub",
        descFr: "Versioning avec Git via GitHub.com",
        descEn: "Versioning with Git via GitHub.com.",
      },
    ],
  },
  {
    /*****   ShapeArts.fr   *****/
    ref: "shapearts",
    title: "ShapeArts.fr",
    introFr:
      "Application multi-joueurs de dessin communautaire à base de formes prédéfinies.",
    introEn:
      "Multi-player community drawing application based on predefined shapes.",
    mokups: "./assets/images/mokups/mokupSportfolio1.svg",
    mokupDesk: "./assets/images/mokups/mokupDeskPortfolio1.svg",
    mokupMob: "./assets/images/mokups/mokupMobPortfolio1.svg",
    listTech: [
      {
        name: "React.js",
        logo: "../public/assets/images/logos/react.svg",
        alt: "logo React.js",
        descFr: "UI avec le framework React.js et la librairie Redux@toolkits.",
        descEn:
          "UI with the React.js framework and the Redux@toolkits library.",
      },
      {
        name: "Sass",
        logo: "../public/assets/images/logos/sass.png",
        alt: "logo Sass",
        descFr: "Intégration de Sass comme préprocesseur CSS.",
        descEn: "Integration of Sass as a CSS preprocessor.",
      },
      {
        name: "Green Sock",
        logo: "../public/assets/images/logos/iconGreenSock.png",
        alt: "logo Green Sock",
        descFr:
          "Intégration de la librairie Green Sock (gsap pour les intimes) pour les animations.",
        descEn:
          "UI with the React.js framework and the Redux@toolkits library.",
      },
      {
        name: "Node.js",
        logo: "../public/assets/images/logos/nodejs.png",
        alt: "logo Node.js",
        descFr: "API REST Node.js avec son framework Express.js.",
        descEn: "Node.js REST API with its Express.js framework.",
      },
      {
        name: "Hostinger.fr",
        logo: "../public/assets/images/logos/sass.png",
        alt: "logo Hostinger.fr",
        descFr:
          "Hébergement sur serveur privé virtuel (VPS) sur Hostinger.fr sous CentOS.",
        descEn:
          "Hosting on virtual private server (VPS) on Hostinger.fr under CentOS.",
      },
      {
        name: "Socket.io",
        logo: "../public/assets/images/logos/sass.png",
        alt: "logo Socket.io",
        descFr: "Communication par web sockets avec Socket.io.",
        descEn: "Integration of Sass as a CSS preprocessor.",
      },
      {
        name: "GitHub",
        logo: "../public/assets/images/logos/githubCircle.svg",
        alt: "logo GitHub",
        descFr: "Versioning avec Git via GitHub.com",
        descEn: "Versioning with Git via GitHub.com.",
      },
      {
        name: "MySQL",
        logo: "../public/assets/images/logos/mySQL.png",
        alt: "logo my SQL",
        descFr: "Base de données relationnelles avec MySQL.",
        descEn: "Relational database with MySQL.",
      },
    ],
  },
  {
    /*****   reactDevGillesLaurant.com   *****/
    ref: "portfolio",
    title: "reactDevGillesLaurant.com",
    introFr:
      "Application multi-joueurs de dessin communautaire à base de formes prédéfinies.",
    introEn:
      "Multi-player community drawing application based on predefined shapes.",
    mokups: "./assets/images/mokups/mokupSportfolio1.svg",
    mokupDesk: "./assets/images/mokups/mokupDeskPortfolio1.svg",
    mokupMob: "./assets/images/mokups/mokupMobPortfolio1.svg",
    listTech: [
      {
        name: "React.js",
        logo: "./assets/images/logos/react.svg",
        alt: "logo React.js",
        descFr: "UI avec le framework React.js et la librairie Redux@toolkits.",
        descEn:
          "UI with the React.js framework and the Redux@toolkits library.",
      },
      {
        name: "Sass",
        logo: "../public/assets/images/logos/sass.png",
        alt: "logo Sass",
        descFr: "Intégration de Sass comme préprocesseur CSS.",
        descEn: "Integration of Sass as a CSS preprocessor.",
      },
      {
        name: "Green Sock",
        logo: "../public/assets/images/logos/iconGreenSock.png",
        alt: "logo Green Sock",
        descFr:
          "Intégration de la librairie Green Sock (gsap pour les intimes) pour les animations.",
        descEn:
          "UI with the React.js framework and the Redux@toolkits library.",
      },
      {
        name: "Node.js",
        logo: "../public/assets/images/logos/nodejs.png",
        alt: "logo Node.js",
        descFr: "API REST Node.js avec son framework Express.js.",
        descEn: "Node.js REST API with its Express.js framework.",
      },
      {
        name: "Hostinger.fr",
        logo: "../public/assets/images/logos/sass.png",
        alt: "logo Hostinger.fr",
        descFr:
          "Hébergement sur serveur privé virtuel (VPS) sur Hostinger.fr sous CentOS.",
        descEn:
          "Hosting on virtual private server (VPS) on Hostinger.fr under CentOS.",
      },
      {
        name: "Socket.io",
        logo: "../public/assets/images/logos/sass.png",
        alt: "logo Socket.io",
        descFr: "Communication par web sockets avec Socket.io.",
        descEn: "Integration of Sass as a CSS preprocessor.",
      },
      {
        name: "GitHub",
        logo: "../public/assets/images/logos/githubCircle.svg",
        alt: "logo GitHub",
        descFr: "Versioning avec Git via GitHub.com",
        descEn: "Versioning with Git via GitHub.com.",
      },
      {
        name: "MySQL",
        logo: "../public/assets/images/logos/mySQL.png",
        alt: "logo my SQL",
        descFr: "Base de données relationnelles avec MySQL.",
        descEn: "Relational database with MySQL.",
      },
    ],
  },
  {
    /*****   O'Crypto   *****/
    ref: "ocrypto",
    title: "O'crypto",
    introFr:
      "Application multi-joueurs de dessin communautaire à base de formes prédéfinies.",
    introEn:
      "Multi-player community drawing application based on predefined shapes.",
    mokups: "./assets/images/mokups/mokupSportfolio1.svg",
    mokupDesk: "./assets/images/mokups/mokupDeskPortfolio1.svg",
    mokupMob: "./assets/images/mokups/mokupMobPortfolio1.svg",
    listTech: [
      {
        name: "React.js",
        logo: "../public/assets/images/logos/react.svg",
        alt: "logo React.js",
        descFr: "UI avec le framework React.js et la librairie Redux@toolkits.",
        descEn:
          "UI with the React.js framework and the Redux@toolkits library.",
      },
      {
        name: "Sass",
        logo: "../public/assets/images/logos/sass.png",
        alt: "logo Sass",
        descFr: "Intégration de Sass comme préprocesseur CSS.",
        descEn: "Integration of Sass as a CSS preprocessor.",
      },
      {
        name: "Green Sock",
        logo: "../public/assets/images/logos/iconGreenSock.png",
        alt: "logo Green Sock",
        descFr:
          "Intégration de la librairie Green Sock (gsap pour les intimes) pour les animations.",
        descEn:
          "UI with the React.js framework and the Redux@toolkits library.",
      },
      {
        name: "Node.js",
        logo: "../public/assets/images/logos/nodejs.png",
        alt: "logo Node.js",
        descFr: "API REST Node.js avec son framework Express.js.",
        descEn: "Node.js REST API with its Express.js framework.",
      },
      {
        name: "Hostinger.fr",
        logo: "../public/assets/images/logos/sass.png",
        alt: "logo Hostinger.fr",
        descFr:
          "Hébergement sur serveur privé virtuel (VPS) sur Hostinger.fr sous CentOS.",
        descEn:
          "Hosting on virtual private server (VPS) on Hostinger.fr under CentOS.",
      },
      {
        name: "Socket.io",
        logo: "../public/assets/images/logos/sass.png",
        alt: "logo Socket.io",
        descFr: "Communication par web sockets avec Socket.io.",
        descEn: "Integration of Sass as a CSS preprocessor.",
      },
      {
        name: "GitHub",
        logo: "../public/assets/images/logos/githubCircle.svg",
        alt: "logo GitHub",
        descFr: "Versioning avec Git via GitHub.com",
        descEn: "Versioning with Git via GitHub.com.",
      },
      {
        name: "MySQL",
        logo: "../public/assets/images/logos/mySQL.png",
        alt: "logo my SQL",
        descFr: "Base de données relationnelles avec MySQL.",
        descEn: "Relational database with MySQL.",
      },
    ],
  },
];

export const showProject = (refProject, lang) => {
  const project = listProjects.find((project) => project.ref === refProject);
  title[0].innerHTML = project.title;
  title[0].style.fontSize = "2rem";
  console.log(project);

  container[0].innerHTML = `
  <img src=${project.mokupDesk} class="project-mokupDesk" />
    <p class="project-intro" >${lang ? project.introFr : project.introEn}</p>
    <div class="techs-container">
    ${project.listTech
      .map(
        (techno) =>
          `<div class="techno">
        <img src=${techno.logo} alt=${techno.alt} class="techno-logo" />
        <p class="techno-desc">${lang ? techno.descFr : techno.descEn}</p>
        </div>`
      )
      .join("")}
    <img src=${project.mokupMob} alt=${project.title} class="techno-mokup" />
    </div>`;

  container[0].style = {
    // ...container[0].style,
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "space-between",
    // alignItems: "center",
    // flexGrow: 0,
  };
};
