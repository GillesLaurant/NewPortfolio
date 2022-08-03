// Text french
const titleContactFrench = "Contactez moi";
const labelNameFrench = "Votre nom";
const labelEmailFrench = "Votre email";
const labelMessageFrench = "Votre message";
const buttonFrench = "Envoyer";

// Text English
const titleContactEnglish = "Contact me";
const labelNameEnglish = "Your name";
const labelEmailEnglish = "Your mail";
const labelMessageEnglish = "Your message";
const buttonEnglish = "Submit";

// Colors title
const titleContactColored = "linear-gradient(242deg, #fbab7e 0%, #f7ce68 100%)";

// Animation text jobs author
const animText = (text, lang) => {
  // Params typewriter
  const typewriter = new Typewriter(text, {
    loop: true,
    delay: 55,
    deleteSpeed: 30,
  });
  // French typrewriter
  if (lang) {
    typewriter
      .pauseFor(2500)
      .typeString("Gilles Laurant")
      .pauseFor(1700)
      .deleteAll()
      .typeString("Développeur <span class='type-web'>Web</span>")
      .pauseFor(300)
      .typeString(" <span class='type-js'>Javascript</span>")
      .pauseFor(2000)
      .deleteChars(14)
      .pauseFor(500)
      .typeString("<span class='type-front'>Front end</span>")
      .pauseFor(300)
      .typeString(" <span class='type-js'> Javascript</span>")
      .pauseFor(1000)
      .deleteChars(10)
      .pauseFor(400)
      .typeString(" <span class='type-react'>React</span>")
      .pauseFor(1000)
      .deleteChars(17)
      .typeString("<span class='type-full'>Fullstack</span>")
      .pauseFor(500)
      .typeString(" <span class='type-js'> JS</span>")
      .pauseFor(1800)
      .start();
  } else {
    // English typewriter
    typewriter
      .pauseFor(1500)
      .typeString("Gilles Laurant")
      .pauseFor(1700)
      .deleteAll()
      .typeString(
        "<span class='type-js'>Javascript </span> <span class='type-web'>Web</span> Developer"
      )
      .pauseFor(2000)
      .deleteChars(13)
      .pauseFor(500)
      .typeString(" <span class='type-front'> Front end</span> Developer")
      .pauseFor(1000)
      .deleteAll()
      .pauseFor(200)
      .typeString(
        "<span class='type-react'>React </span> <span class='type-front'> Front end</span> Developer"
      )
      .pauseFor(1000)
      .deleteAll()
      .typeString(
        "<span class='type-js'>JS </span> <span class='type-full'> Fullstack</span> Developer"
      )
      .pauseFor(1800)
      .start();
  }
};

// Component
const contact = (lang) => {
  return `
  <section class="contact">
    <h1 class="contact-title">
    ${lang ? titleContactFrench : titleContactEnglish}
    </h1>

    <!-- TEXT ANIMATED JOBS AUTHOR -->
    <p class="contact-author">Gilles Laurant</p>

    <!-- SOCIAL LINKS CONTAINER -->
    <div class="contact-links">

      <!-- PHONE NUMBER -->
      <a href="tel:+33677220236" class="contact-links-link link-phone" title="Appeler" rel="noopener noreferrer">
        <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32.0827 37.27C28.2159 34.5242 25.634 31.136 24.2767 29.2081L23.2642 27.5597C23.6182 27.2317 26.3179 24.7351 27.4879 23.3806C28.9581 21.6796 26.8265 20.1434 26.8265 20.1434C26.8265 20.1434 20.8285 14.963 19.4615 13.9354C18.0946 12.9063 16.5211 13.4779 16.5211 13.4779C13.6481 15.0809 10.6697 16.4747 10.491 23.1777C10.4844 29.4534 16.0009 35.9262 21.9664 40.9372C27.9414 46.5965 36.1452 52.2686 44.0765 52.2621C51.8375 52.1093 53.451 49.5376 55.3074 47.0565C55.3074 47.0565 55.9696 45.6987 54.7792 44.5171C53.588 43.336 47.5884 38.1551 47.5884 38.1551C47.5884 38.1551 45.8108 36.3139 43.8408 37.5847C42.3726 38.5324 39.7362 40.6405 39.101 41.1516C39.1023 41.1534 34.692 39.123 32.0827 37.27Z" />
        </svg>
      </a>

    <!-- LINKEDIN -->
    <a href="https://www.linkedin.com/in/gilles-laurant-devjs" class="contact-links-link link-linkedin" target="_blank" title="Linkedin" rel="noopener noreferrer">
      <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.191 52.0827H15.9309V27.122H23.191V52.0827ZM19.5632 23.7115C17.2337 23.7115 15.3554 21.6961 15.3554 19.2122C15.3554 16.7293 17.2337 14.7134 19.5632 14.7134C21.8824 14.7134 23.7661 16.7288 23.7661 19.2122C23.7666 21.6961 21.8829 23.7115 19.5632 23.7115ZM50.3554 52.0827H43.1031V39.9445C43.1031 37.0503 43.0559 33.3263 39.3348 33.3263C35.5601 33.3263 34.985 36.4799 34.985 39.7375V52.0827H27.741V27.122H34.6929V30.534H34.792C35.7594 28.5717 38.1253 26.5027 41.6545 26.5027C48.9972 26.5027 50.3544 31.6707 50.3544 38.3934L50.3554 52.0827Z" />
      </svg>
    </a>

    <!-- GITHUB -->
    <a href="https://github.com/GillesLaurant" target="_blank" class="contact-links-link link-github" title="GitHub" rel="noopener noreferrer">
      <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32.1824 0.167053C23.6955 0.167053 15.5561 3.53847 9.55499 9.53964C3.55384 15.5408 0.182427 23.6801 0.182427 32.1671C0.169137 39.5353 2.63033 46.6945 7.17141 52.497C11.7125 58.2995 18.0704 62.4092 25.2259 64.1671V55.8192H22.4433C15.1528 55.8192 12.5928 44.6888 8.53024 44.6888C16.2937 44.6888 17.7963 50.254 22.4433 50.254C22.8206 50.3044 23.2044 50.2672 23.565 50.1451C23.9256 50.0231 24.2531 49.8196 24.5223 49.5505C24.7915 49.2813 24.995 48.9537 25.117 48.5931C25.239 48.2326 25.2763 47.8487 25.2259 47.4714V46.4975C17.1285 44.2157 11.3128 38.1497 11.3128 30.7757C11.378 26.9396 12.9468 23.2824 15.6815 20.5914C14.9845 19.087 14.7269 17.4162 14.9386 15.7718C15.1503 14.1273 15.8227 12.5762 16.878 11.2975C19.4236 12.0617 21.713 13.5046 23.5006 15.4714C29.1093 13.4345 35.2555 13.4345 40.8641 15.4714C42.6517 13.5046 44.9411 12.0617 47.4867 11.2975C48.5421 12.5762 49.2144 14.1273 49.4261 15.7718C49.6378 17.4162 49.3803 19.087 48.6832 20.5914C51.418 23.2824 52.9868 26.9396 53.0519 30.7757C53.0519 38.4001 46.6797 44.6888 37.9702 46.8036C38.8674 48.7532 39.2689 50.8944 39.1389 53.0366V64.1671C46.2943 62.4092 52.6522 58.2995 57.1933 52.497C61.7344 46.6945 64.1956 39.5353 64.1823 32.1671C64.1823 23.6801 60.8109 15.5408 54.8097 9.53964C48.8086 3.53847 40.6693 0.167053 32.1824 0.167053V0.167053Z" />
      </svg>
    </a>
    
    <!-- CV -->
    <a href="./assets/files/CV.pdf" class="contact-links-link link-cv" download="./assets/files/CV.pdf" title="CV" rel="noopener noreferrer">
      <svg width="65" height="66" viewBox="0 0 65 66" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M32.5003 24.0842C35.9846 24.0842 38.8306 26.7638 38.8306 30.0458V32.8132C38.8306 33.5034 38.2359 34.0634 37.5031 34.0634H27.4975C26.7646 34.0634 26.17 33.5034 26.17 32.8132V30.0458C26.17 26.7644 29.0159 24.0842 32.5003 24.0842V24.0842ZM20.7969 39.6177C19.0509 39.6177 19.0509 37.1172 20.7969 37.1172H44.2036C45.9497 37.1172 45.9497 39.6177 44.2036 39.6177H20.7969ZM20.7969 50.3767C19.0509 50.3767 19.0509 47.8769 20.7969 47.8769H44.2036C45.9497 47.8769 45.9497 50.3767 44.2036 50.3767H20.7969ZM20.7969 44.9975C19.0509 44.9975 19.0509 42.4971 20.7969 42.4971H44.2036C45.9497 42.4971 45.9497 44.9975 44.2036 44.9975H20.7969ZM12.9945 7.79083H42.9501C43.3165 7.79083 43.6482 7.93069 43.8886 8.15712L52.9447 16.6858C53.2038 16.9298 53.3336 17.2501 53.3336 17.5697V56.5406C53.3336 57.2308 52.739 57.7908 52.0061 57.7908H12.9945C12.2616 57.7908 11.6669 57.2308 11.6669 56.5406V9.04104C11.6669 8.35085 12.2616 7.79083 12.9945 7.79083V7.79083ZM42.4004 10.2907H14.3213V55.291H50.6792V18.0874L42.4004 10.2907V10.2907ZM32.5003 13.761C35.4562 13.761 37.8521 16.018 37.8521 18.8018C37.8521 21.5849 35.4562 23.842 32.5003 23.842C29.5444 23.842 27.1484 21.5849 27.1484 18.8018C27.1484 16.018 29.5444 13.761 32.5003 13.761ZM32.5003 16.2614C31.0101 16.2614 29.8028 17.3984 29.8028 18.8018C29.8028 20.2046 31.0101 21.3422 32.5003 21.3422C33.9904 21.3422 35.1977 20.2046 35.1977 18.8018C35.1977 17.3984 33.9904 16.2614 32.5003 16.2614ZM32.5003 26.584C30.4817 26.584 28.8244 28.1442 28.8244 30.0458V31.5636H36.1762V30.0458C36.1762 28.1442 34.5189 26.584 32.5003 26.584Z" />
      </svg>
    </a>
  </div>

  <!-- FORM EMAILJS -->
  <form class="contact-form">

  <!-- ERROR MESSAGE -->
    <p class="contact-form-error">Oups... Veuillez réessayez ultérieurement</p>

    <!-- INPUTS CONTAINER -->
    <div class="contact-form-infos">

      <!-- NAME -->
      <div class="contact-container-info contact-name">
        <label for="contactName" class="contact-name-label">
          ${lang ? labelNameFrench : labelNameEnglish}
        </label>
        <input
          type="text"
          name="contactName"
          class="contact-name-input"
          min="4"
          max="50"
          autofocus
          required
        />
      </div>

      <!-- EMAIL -->
      <div class="contact-container-info contact-email">
        <label for="contactEmail" class="contact-email-label">
          ${lang ? labelEmailFrench : labelEmailEnglish}
        </label>
        <input
          type="email"
          name="contactEmail"
          class="contact-email-input"
          min="10"
          max="50"
          required
        />
      </div>
    </div>

    <!-- TEXTAREA CONTAINER -->
    <div class="contact-form-message">
    
      <!-- MESSAGE -->
      <label for="contactMessage" class="contact-message-label">
        ${lang ? labelMessageFrench : labelMessageEnglish}
      </label>
      <textarea
        class="contact-message-input"
        name="contactMessage"
        rows="5"
        required
      ></textarea>
    </div>

    <!-- SUBMIT BUTTON -->
    <button type="button" class="contact-button">
      ${lang ? buttonFrench : buttonEnglish}
    </button>
  </form>
</section>`;
};

export {
  contact,
  titleContactFrench,
  labelNameFrench,
  labelEmailFrench,
  labelMessageFrench,
  buttonFrench,
  titleContactEnglish,
  labelNameEnglish,
  labelEmailEnglish,
  labelMessageEnglish,
  buttonEnglish,
  titleContactColored,
  animText,
};
