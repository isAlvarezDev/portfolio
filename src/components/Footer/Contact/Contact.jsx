import { Email, LinkedIn, Github } from "../../Svgs";
import "./Contact.css";

export const Contact = ({ translations, currentLang }) => {
  const { letsTalk, getInTouch, letsConnect, rights } = translations[currentLang];

  return (
    <>
      <section className="contact">
        <div className="text">
          <h2>{letsTalk}</h2>
          <p className="color-tertiary">{getInTouch}</p>
          <p className="color-text">{letsConnect}</p>
        </div>
        <ul className="footer-links">
          <li className="footer-link">
            <a href="mailto:isalvarezdev@gmail.com">
              <Email
                className="footer-contact-img"
                width="24"
                height="24"
                fill="#83C8F2"
              />
            </a>
          </li>
          <li className="footer-link">
            <a href="https://www.linkedin.com/in/is-alvarez/" target="_blank">
              <LinkedIn
                className="footer-contact-img"
                width="24"
                height="24"
                fill="#83C8F2"
              />
            </a>
          </li>
          <li className="footer-link">
            <a href="https://github.com/isAlvarezDev" target="_blank">
              <Github
                width="24"
                height="24"
                className="footer-contact-img"
                fill="#83C8F2"
              />
            </a>
          </li>
        </ul>
      </section>
      <div className="footer-divider" />
      <p className="rights">© {new Date().getFullYear()} isAlvarezDev. {rights}</p>
    </>
  );
};
