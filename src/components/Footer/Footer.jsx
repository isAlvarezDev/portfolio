import { Contact } from "./Contact/Contact.jsx";
import "./Footer.css";

export const Footer = ({ translations, currentLang }) => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-wrapper">
        <Contact translations={translations} currentLang={currentLang}/>
      </div>
    </footer>
  );
};
