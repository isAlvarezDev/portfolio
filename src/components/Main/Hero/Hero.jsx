import CopyToClipboard from "react-copy-to-clipboard";
import "./Hero.css";
import { useState } from "react";
import { HeroImage } from "./";
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
          <CopyToClipboard text="alvarezisaac871@gmail.com" onCopy={onCopyText}>
            <button className="email" onClick={onCopyText}>
              alvarezisaac871@gmail.com
              {isCopiedEmail ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="24"
                  height="24"
                  viewBox="0 0 64 64"
                  fill="#fff"
                >
                  <path d="M27 55L6 33 9 29 26 41 55 12 59 16z"></path>
                </svg>
              ) : (
                <svg
                  stroke="currentColor"
                  height="24px"
                  width="24px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 352.804 352.804"
                  fill="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M318.54,57.282h-47.652V15c0-8.284-6.716-15-15-15H34.264c-8.284,0-15,6.716-15,15v265.522c0,8.284,6.716,15,15,15h47.651 v42.281c0,8.284,6.716,15,15,15H318.54c8.284,0,15-6.716,15-15V72.282C333.54,63.998,326.824,57.282,318.54,57.282z M49.264,265.522V30h191.623v27.282H96.916c-8.284,0-15,6.716-15,15v193.24H49.264z M303.54,322.804H111.916V87.282H303.54V322.804 z"></path>
                </svg>
              )}
            </button>
          </CopyToClipboard>

          <div>
            <a
              href={
                currentLang === "es"
                  ? "./src/assets/hero/spanish-cv.pdf"
                  : "./src/assets/hero/english-cv.pdf"
              }
              target="_blank"
            >
              <button className="cv">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                  <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                  <path d="M10 9H8"></path>
                  <path d="M16 13H8"></path>
                  <path d="M16 17H8"></path>file-text
                </svg>
              </button>
            </a>
            <a href="https://github.com/isAlvarezDev" target="_blank">
              <button className="github">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>github
                </svg>
              </button>
            </a>
            <a href="https://linkedin.com/in/is-alvarez/" target="_blank">
              <button className="linkedin">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>linkedin
                </svg>
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
