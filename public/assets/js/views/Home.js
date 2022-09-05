// Text french
const titleHomeFrench = "Développeur Web Javascript";
const textHomeFrench =
  "Passionné depuis toujours par l’informatique et les nouvelles technologies, j’ai naturellement décidé d’orienter ma carrière en ce sens en opérant une reconversion professionnelle dans le développement web.<br>Je me suis alors formé en autodidacte via <span>Open</span><span>Class</span><span>Room</span> puis via O’CLOCK avec une formation intensive de « Développeur Web FullStack Javascript » avec une spécialisation React.";

// Text English
const titleHomeEnglish = "Web Javascript Developer";
const textHomeEnglish =
  "Having always been passionate about IT and new technologies, I naturally decided to direct my career in this direction by operating a professional retraining in web development.<br>I trained as a self-taugh via <span>Open</span><span>Class</span><span>Room</span> then via O'CLOCK with an intensive training as a « FullStack Javascript Web Developer » with a specialization in React.";

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
        <a href="https://openclassrooms.com/" class="home-asides-content-linkOPC" target="_blank" title="OpenClassRoom" rel="noreferrer"></a>
      </aside>

      <!-- O'clock -->
      <aside class="home-asides-content home-oclock">
        <a href="https://oclock.io/" class="home-asides-content-linkOC" target="_blank" title="O'clock" rel="noreferrer"></a>
      </aside>
    </div>

    <!-- AUTHOR -->
    <div class="home-text-author">
      <span class="home-text-author-letters">b</span>
      <span class="home-text-author-letters">y</span>
      <span class="home-text-author-letters-space">_</span>
      <span class="home-text-author-letters">G</span>
      <span class="home-text-author-letters">i</span>
      <span class="home-text-author-letters">l</span>
      <span class="home-text-author-letters">l</span>
      <span class="home-text-author-letters">e</span>
      <span class="home-text-author-letters">s</span>
      <span class="home-text-author-letters-space">_</span>
      <span class="home-text-author-letters">L</span>
      <span class="home-text-author-letters">a</span>
      <span class="home-text-author-letters">u</span>
      <span class="home-text-author-letters">r</span>
      <span class="home-text-author-letters">a</span>
      <span class="home-text-author-letters">n</span>
      <span class="home-text-author-letters">t</span>
      </div>
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
