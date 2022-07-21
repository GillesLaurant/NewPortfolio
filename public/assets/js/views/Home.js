// Text french
const titleHomeFrench = "Développeur Web Javascript";
const textHomeFrench =
  "J’ai toujours été passionné par le monde de la tech, naturellement j’ai décidé d’orienté ma carrière en ce sens en opérant une reconversion professionnelle. Je me suis alors formé au développement web en autodidacte avec OpenClassRoom puis via O’CLOCK avec une formation intensive avec spécialisation React.";

// Text English
const titleHomeEnglish = "Web Javascript Developer";
const textHomeEnglish =
  "I have always been passionate about the world of tech, naturally I decided to direct my career in this direction by operating a professional retraining. I then trained in self-taught web development with OpenClassRoom then via O’CLOCK with intensive training with React specialization.";

const titleHomeColored = "linear-gradient(225deg, #0093E9 0%, #80D0C7 100%)";

// Component
const home = (lang) => {
  return `<section class="home"><h1 class="home-title">${
    lang ? titleHomeFrench : titleHomeEnglish
  }</h1><div class="home-img"></div><article class="home-article">${
    lang ? textHomeFrench : textHomeEnglish
  }</article><div class="home-asides"><aside class="home-asides-content"><img src="./assets/images/Logo_OpenClassrooms.png" alt="logo OpenClassRoom" /></aside><aside class="home-asides-content"><img src="./assets/images/logos/IconOclock.svg" alt="logo O\'clock" /></aside></div><p class="home-text-author">by Gilles Laurant</p></section>`;
};

export {
  home,
  titleHomeFrench,
  textHomeFrench,
  titleHomeEnglish,
  textHomeEnglish,
  titleHomeColored,
};
