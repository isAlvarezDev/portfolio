import { getImageUrl } from "../../../utils"
import './Contact.css'

export const Contact = ({ translations, currentLang }) => {
    const { contact, getInTouch } = translations[currentLang];

    return (
        <>
            <div className="text">
                <h2>{contact}</h2>
                <p>{getInTouch}</p>
            </div>
            <ul className="footer-links">
                <li className="footer-link">
                    <img className="footer-contact-img" src={getImageUrl("contact/emailIcon.png")} alt="email icon" />
                    <a href="mailto:alvarezisaac871@gmail.com">alvarezisaac871@gmail.com</a>
                </li>
                <li className="footer-link">
                    <img className="footer-contact-img" src={getImageUrl("contact/linkedinIcon.png")} alt="linkedin icon" />
                    <a href="https://www.linkedin.com/in/is-alvarez/" target="_blank">linkedin.com/is-alvarez</a>
                </li>
                <li className="footer-link">
                    <img className="footer-contact-img" src={getImageUrl("contact/githubIcon.png")} alt="github icon" />
                    <a href="https://github.com/isAlvarezDev" target="_blank">github.com/isAlvarezDev</a>
                </li>
            </ul>
        </>
    )
}