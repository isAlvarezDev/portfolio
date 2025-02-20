import { createSwapy } from "swapy";
import { useEffect, useRef } from "react";
import technologies from "../../../data/technologies.json";
import { getImageUrl } from "../../../utils";
import "./Technologies.css";

export const Technologies = ({ translations, currentLang }) => {
  const swapy = useRef(null);
  const container = useRef(null);
  const { tech, drag } = translations[currentLang];

  useEffect(() => {
    if (container.current) {
      swapy.current = createSwapy(container.current);
    }
    return () => {
      swapy.current?.destroy();
    };
  }, []);
  return (
    <section className="technologies" id="technologies">
      <h2 className="title">{tech}</h2>
      <div className="drag-indication">
        <p>{drag}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="#6B7280"
          className="bi bi-arrow-down-short"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"
          />
        </svg>
      </div>
      <div className="skills" ref={container}>
        {technologies.map((technology, index) => {
          return (
            <div
              key={index}
              className="skill"
              data-swapy-slot={technology.title}
            >
              <div data-swapy-item={index}>
                <div>
                  <div className="skill-image-container">
                    <img
                      src={getImageUrl(technology.imageSrc)}
                      alt={technology.title}
                      className="skill-image"
                    />
                  </div>
                  <p className="skill-title">{technology.title}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
