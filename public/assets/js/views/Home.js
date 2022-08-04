// Text french
const titleHomeFrench = "Développeur Web Javascript";
const textHomeFrench =
  "J’ai toujours été passionné par le monde de la tech, naturellement j’ai décidé d’orienté ma carrière en ce sens en opérant une reconversion professionnelle. Je me suis alors formé au développement web en autodidacte avec <span>Open</span><span>Class</span><span>Room</span> puis via O’CLOCK avec une formation intensive avec spécialisation React.";

// Text English
const titleHomeEnglish = "Web Javascript Developer";
const textHomeEnglish =
  "I have always been passionate about the world of tech, naturally I decided to direct my career in this direction by operating a professional retraining. I then trained in self-taught web development with <span>Open</span><span>Class</span><span>Room</span> then via O’CLOCK with intensive training with React specialization.";

// Color title
const titleHomeColored = "linear-gradient(225deg, #0093E9 0%, #80D0C7 100%)";

// Component
const home = (lang) => {
  return `
  <section class="home">
    <h1 class="home-title">
      ${lang ? titleHomeFrench : titleHomeEnglish}
    </h1>

    <!-- AUTHOR IMG -->
    <div class="home-img"></div>

    <article class="home-article">
      ${lang ? textHomeFrench : textHomeEnglish}
    </article>

    <!-- LINKS FORMATIONS -->
    <div class="home-asides">

      <!-- OpenClassRoom -->
      <aside class="home-asides-content home-openCR">
        <a href="https://openclassrooms.com/" class="home-asides-content-linkOPC" target="_blank" title="OpenClassRoom" rel="noopener noreferrer"></a>
      </aside>

      <!-- O'clock -->
      <aside class="home-asides-content home-oclock">
        <a href="https://oclock.io/" class="home-asides-content-linkOC" target="_blank" title="O'clock" rel="noopener noreferrer"></a>
      </aside>
    </div>

    <!-- AUTHOR -->
    <p class="home-text-author">by Gilles Laurant</p>
  </section>`;
};

export {
  home,
  titleHomeFrench,
  textHomeFrench,
  titleHomeEnglish,
  textHomeEnglish,
  titleHomeColored,
};