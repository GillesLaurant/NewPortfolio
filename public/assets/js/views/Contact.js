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

// Colors title contact
const titleContactColored = "linear-gradient(255deg, #f83600 0%, #f9d423 100%)";

// Animation text author
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
      .pauseFor(1500)
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
      .typeString(" <span class='type-front'>Front end</span> Developer")
      .pauseFor(1000)
      .deleteAll()
      .pauseFor(200)
      .typeString(
        "<span class='type-react'>React </span> <span class='type-front'>Front end</span> Developer"
      )
      .pauseFor(1000)
      .deleteAll()
      .typeString(
        "<span class='type-js'>JS</span> <span class='type-full'> Fullstack</span> Developer"
      )
      .pauseFor(1500)
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

    <p class="contact-author">Gilles Laurant</p>

    <div class="contact-links">
    <svg
      class="contact-links-link link-phone"
      enable-background="new 0 0 139 139"
      height="139px"
      version="1.1"
      viewBox="0 0 139 139"
      width="139px"
      xml:space="preserve"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M67.317,81.952c-9.284-7.634-15.483-17.054-18.742-22.414l-2.431-4.583c0.85-0.912,7.332-7.853,10.141-11.619  c3.53-4.729-1.588-9-1.588-9S40.296,19.933,37.014,17.076c-3.282-2.861-7.06-1.272-7.06-1.272  c-6.898,4.457-14.049,8.332-14.478,26.968C15.46,60.22,28.705,78.216,43.028,92.148c14.346,15.734,34.043,31.504,53.086,31.486  c18.634-0.425,22.508-7.575,26.965-14.473c0,0,1.59-3.775-1.268-7.06c-2.86-3.284-17.265-17.688-17.265-17.688  s-4.268-5.119-8.998-1.586c-3.525,2.635-9.855,8.496-11.38,9.917C84.171,92.749,73.582,87.104,67.317,81.952z"
      />
    </svg>

    <svg
      class="contact-links-link link-linkedin"
      version="1.1"
      viewBox="0 0 48 48"
      xml:space="preserve"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M34.95037,32.31248c-0.0083-2.14649-0.01611-4.29199-0.03125-6.43848    c-0.00684-0.89355-0.12988-1.76855-0.36572-2.59863c-0.42969-1.51074-1.23242-2.50391-2.45557-3.03418    c-1.34912-0.58496-2.77149-0.7002-4.22363-0.34277c-0.9248,0.22656-1.72021,0.6748-2.375,1.33789    c0.00049-0.17285,0.00195-0.34473,0.00635-0.51758c0.00195-0.0791,0.0083-0.32227-0.1626-0.49707    c-0.17236-0.1748-0.41699-0.17969-0.49316-0.17285c-1.22803,0.00684-2.45361,0.00684-3.67969,0.00098    c-0.13379-0.0127-0.34131,0.01367-0.49316,0.16504c-0.15137,0.15039-0.16846,0.34863-0.16846,0.48535    c0.00635,4.52441,0.00586,9.04883,0,13.57422c0,0.1377,0.01758,0.33789,0.16895,0.48828    c0.15039,0.15137,0.3374,0.16699,0.48828,0.16602c1.2832-0.00781,2.56592-0.00781,3.84912,0c0.00439,0,0.0083,0,0.0127,0    c0.13623,0,0.32764-0.01855,0.47266-0.16309c0.1499-0.14941,0.1665-0.35156,0.16602-0.49023    c-0.0083-2.14844-0.01074-4.29688-0.00049-6.44531c0.00293-0.52246,0.03516-1.04492,0.0957-1.55176    c0.06885-0.57812,0.25439-1.02344,0.56689-1.3623c0.37793-0.41016,0.88184-0.56641,1.65723-0.56445    c0.86768,0.0166,1.36475,0.39062,1.61035,1.21484c0.17285,0.58008,0.1875,1.19043,0.18799,1.81738l0.00049,6.86035    c0,0.51465,0.16406,0.67969,0.67432,0.67969l3.75879,0.00098c0.25537,0,0.43994-0.00098,0.59082-0.15234    c0.15088-0.15234,0.15039-0.34277,0.14941-0.58398L34.95037,32.31248z"
      />
      <path
        d="M18.53337,27.50193l-0.00049-1.60742c-0.00098-1.72656-0.00146-3.45215,0.00586-5.17871    c0.00049-0.15527-0.01807-0.35352-0.16846-0.50293c-0.15088-0.15137-0.37354-0.17773-0.49414-0.16504    c-1.27588,0.00977-2.55029,0.00879-3.82422,0.00098c-0.15625,0.00488-0.34863,0.01465-0.50146,0.16699    c-0.15381,0.15234-0.1709,0.35742-0.1709,0.49805c0.00684,4.51562,0.00684,9.03223,0,13.54883    c0,0.1416,0.01807,0.34766,0.17139,0.5c0.15332,0.15137,0.36377,0.15332,0.49854,0.16602    c1.27539-0.00977,2.55029-0.00977,3.82471,0c0.00488,0,0.00928,0,0.01416,0c0.15039,0,0.33789-0.02051,0.48291-0.16504    c0.1499-0.14941,0.16846-0.3457,0.16797-0.50098c-0.00781-1.73242-0.00732-3.4668-0.00635-5.2002L18.53337,27.50193z"
      />
      <path
        d="M15.97527,13.07127c-0.00684,0-0.01318,0-0.01953,0    c-1.63086,0.00879-2.91064,1.29395-2.91357,2.9248c0,0.00098,0,0.00098,0,0.00098c0,0.77734,0.31934,1.53906,0.87646,2.08984    c0.54639,0.54102,1.26123,0.83789,2.01562,0.83789c0.00977,0,0.02002-0.00098,0.02979-0.00098    c1.67529-0.0166,2.93604-1.27637,2.93262-2.93066c-0.00146-0.80273-0.30273-1.54395-0.84863-2.08594    C17.50359,13.36717,16.76824,13.07127,15.97527,13.07127z"
      />
    </svg>

    <svg
      viewBox="0 0 1024 1024"
      height="1024"
      width="1024"
      class="contact-links-link link-github"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M512 0C229.25 0 0 229.25 0 512c0 226.25 146.688 418.125 350.156 485.812 25.594 4.688 34.938-11.125 34.938-24.625 0-12.188-0.469-52.562-0.719-95.312C242 908.812 211.906 817.5 211.906 817.5c-23.312-59.125-56.844-74.875-56.844-74.875-46.531-31.75 3.53-31.125 3.53-31.125 51.406 3.562 78.47 52.75 78.47 52.75 45.688 78.25 119.875 55.625 149 42.5 4.654-33 17.904-55.625 32.5-68.375C304.906 725.438 185.344 681.5 185.344 485.312c0-55.938 19.969-101.562 52.656-137.406-5.219-13-22.844-65.094 5.062-135.562 0 0 42.938-13.75 140.812 52.5 40.812-11.406 84.594-17.031 128.125-17.219 43.5 0.188 87.312 5.875 128.188 17.281 97.688-66.312 140.688-52.5 140.688-52.5 28 70.531 10.375 122.562 5.125 135.5 32.812 35.844 52.625 81.469 52.625 137.406 0 196.688-119.75 240-233.812 252.688 18.438 15.875 34.75 47 34.75 94.75 0 68.438-0.688 123.625-0.688 140.5 0 13.625 9.312 29.562 35.25 24.562C877.438 930 1024 738.125 1024 512 1024 229.25 794.75 0 512 0z"
      />
    </svg>
    
    <svg
      class="contact-links-link link-cv"
      height="80.4666mm"
      version="1.1"
      viewBox="0 0 846.66 846.66"
      width="80.4666mm"
      xml:space="preserve"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M423.33 279.52c54.2,0 98.47,44.26 98.47,98.47l0 45.71c0,11.4 -9.25,20.65 -20.65,20.65l-155.64 0c-11.4,0 -20.65,-9.25 -20.65,-20.65l0 -45.71c0,-54.2 44.27,-98.47 98.47,-98.47zm-182.05 256.57c-27.16,0 -27.16,-41.3 0,-41.3l364.1 0c27.16,0 27.16,41.3 0,41.3l-364.1 0zm0 177.71c-27.16,0 -27.16,-41.29 0,-41.29l364.1 0c27.16,0 27.16,41.29 0,41.29l-364.1 0zm0 -88.85c-27.16,0 -27.16,-41.3 0,-41.3l364.1 0c27.16,0 27.16,41.3 0,41.3l-364.1 0zm-121.37 -614.55l465.97 0c5.7,0 10.86,2.31 14.6,6.05l140.87 140.87c4.03,4.03 6.05,9.32 6.05,14.6l0 643.69c0,11.4 -9.25,20.65 -20.65,20.65l-606.84 0c-11.4,0 -20.65,-9.25 -20.65,-20.65l0 -784.56c0,-11.4 9.25,-20.65 20.65,-20.65zm457.42 41.29l-436.78 0 0 743.28 565.56 0 0 -614.5 -128.78 -128.78zm-154 57.32c45.98,0 83.25,37.28 83.25,83.26 0,45.97 -37.27,83.25 -83.25,83.25 -45.98,0 -83.25,-37.28 -83.25,-83.25 0,-45.98 37.27,-83.26 83.25,-83.26zm0 41.3c-23.18,0 -41.96,18.78 -41.96,41.96 0,23.17 18.78,41.96 41.96,41.96 23.18,0 41.96,-18.79 41.96,-41.96 0,-23.18 -18.78,-41.96 -41.96,-41.96zm0 170.5c-31.4,0 -57.18,25.77 -57.18,57.18l0 25.07 114.36 0 0 -25.07c0,-31.41 -25.78,-57.18 -57.18,-57.18z"
      />
    </svg>
  </div>
  <form class="contact-form">
    <div class="contact-form-infos">
      <div class="contact-container-info contact-name">
        <label for="contactName" class="contact-name-label">
          ${lang ? labelNameFrench : labelNameEnglish}
        </label>
        <input
          type="text"
          name="contactName"
          class="contact-name-input"
        />
      </div>
      <div class="contact-container-info contact-email">
        <label for="contactEmail" class="contact-email-label">
          ${lang ? labelEmailFrench : labelEmailEnglish}
        </label>
        <input
          type="text"
          name="contactEmail"
          class="contact-email-input"
        />
      </div>
    </div>
    <div class="contact-form-message">
      <label for="contactMessage" class="contact-message-label">
        ${lang ? labelMessageFrench : labelMessageEnglish}
      </label>
      <textarea
        class="contact-message-input"
        name="contactMessage"
        rows="5"
      ></textarea>
    </div>

    <button type="submit" class="contact-button">
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
