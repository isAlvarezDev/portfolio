import "./About.css";
import { getImageUrl } from "../../../utils/";
export const About = ({ translations, currentLang }) => {
  const {
    about,
    firstParagraph,
    secondParagraph,
    thirdParagraph,
    fourthParagraph,
  } = translations[currentLang];
  return (
    <section className="about" id="about">
      <h2 className="about-title">{about}</h2>
      <article className="about-container">
        <img
          className="about-img"
          src={getImageUrl("about/about-image.jpg")}
          alt="Image of Isaac Alvarez in fron of a computer"
        />
        <div className="about-description-container">
          <p className="about-description">
            {firstParagraph.firstPart}
            <strong className="color-tertiary color-tertiary-no-bold">
              {firstParagraph.secondPart}
            </strong>
            {firstParagraph.thirdPart}
          </p>
          <p className="about-description">
            {secondParagraph.firstPart}
            <strong className="color-tertiary color-tertiary-no-bold">
              {secondParagraph.secondPart}
            </strong>
            .
          </p>
          <p className="about-description">
            {thirdParagraph.firstPart}
            <strong className="color-tertiary color-tertiary-no-bold">
              {thirdParagraph.secondPart}
            </strong>
            {thirdParagraph.thirdPart}
            <strong className="color-tertiary color-tertiary-no-bold">
              {thirdParagraph.fourthPart}
            </strong>
            .
          </p>
          <p className="about-description about-description-no-margin">
            {fourthParagraph.firstPart}
            <strong className="color-tertiary color-tertiary-no-bold">
              {fourthParagraph.secondPart}
            </strong>
            <a
              href="https://zelda.fandom.com/wiki/Korok"
              target="_blank"
              className="korogs"
            >
              {fourthParagraph.thirdPart}
            </a>
          </p>
        </div>
      </article>
    </section>
  );
};
