import CopyToClipboard from "react-copy-to-clipboard";
import "./Hero.css";
import { useState } from "react";
import { HeroImage } from "./";
import { CheckMark, Copy, CV, Github, LinkedIn } from "../../Svgs";
export const Hero = ({ translations, currentLang }) => {
  const [isCopiedEmail, setIsCopiedEmail] = useState(false);
  const { greetings, profession, careerObjective } = translations[currentLang];

  const onCopyText = () => {
    setIsCopiedEmail(true);
    setTimeout(() => setIsCopiedEmail(false), 650);
  };
  return (
    <section className="container">
      <div className="content">
        <h1>
          {greetings}
          <br />
          <strong className="color-tertiary">Isaac Alvarez</strong>
        </h1>
        <p className="description">
          <strong className="color-tertiary color-tertiary-no-bold">
            {profession}
          </strong>
          , {careerObjective}
        </p>
        <div className="social-media">
          <CopyToClipboard text="isalvarezdev@gmail.com" onCopy={onCopyText}>
            <button className="email" onClick={onCopyText}>
              isalvarezdev@gmail.com
              {isCopiedEmail ? (
                <CheckMark />
              ) : (
                <Copy />
              )}
            </button>
          </CopyToClipboard>

          <div>
            <a
              href={
                currentLang === "es"
                  ? "./assets/hero/spanish-cv.pdf"
                  : "./assets/hero/english-cv.pdf"
              }
              target="_blank"
            >
              <button className="cv">
                <CV />
              </button>
            </a>
            <a href="https://github.com/isAlvarezDev" target="_blank">
              <button className="github">
                <Github width='28' height='28' />
              </button>
            </a>
            <a href="https://linkedin.com/in/is-alvarez/" target="_blank">
              <button className="linkedin">
                <LinkedIn />
              </button>
            </a>
          </div>
        </div>
      </div>
      <HeroImage />
      <div className="topBlur" />
      <div className="bottomBlur" />
    </section>
  );
};
