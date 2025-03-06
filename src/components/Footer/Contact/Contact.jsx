import { Email, LinkedIn,Github } from "../../Svgs";
import './Contact.css'

export const Contact = ({ translations, currentLang }) => {
    const { contact, getInTouch } = translations[currentLang];

    return (
        <>
            <div className="text">
                <h2>{contact}</h2>
                <p className="color-tertiary">{getInTouch}</p>
            </div>
            <ul className="footer-links">
                <li className="footer-link">
                    <Email className="footer-contact-img"/>
                    <a href="mailto:isalvarezdev@gmail.com">isalvarezdev@gmail.com</a>
                </li>
                <li className="footer-link">
                    <LinkedIn className="footer-contact-img" width='40' height='38'/>
                    <a href="https://www.linkedin.com/in/is-alvarez/" target="_blank">linkedin.com/is-alvarez</a>
                </li>
                <li className="footer-link">
                    <Github width='40' height='40' className="footer-contact-img" />
                    <a href="https://github.com/isAlvarezDev" target="_blank">github.com/isAlvarezDev</a>
                </li>
            </ul>
        </>
    )
}