import { Contact } from "./Contact/Contact.jsx";
import "./Footer.css";

export const Footer = ({ translations, currentLang }) => {
  return (
    <footer className="footer" id="contact">
      <section className="footer-wrapper">
        <Contact translations={translations} currentLang={currentLang}/>
      </section>
    </footer>
  );
};
