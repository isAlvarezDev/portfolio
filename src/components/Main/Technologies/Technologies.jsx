import { createSwapy } from "swapy";
import { useEffect, useRef } from "react";
import technologies from "../../../data/technologies.json";
import "./Technologies.css";
import { SvgRenderer } from "./SvgRenderer";
import { ArrowDown } from "../../Svgs";

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
        <ArrowDown />
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
                <div className="skill-container">
                <SvgRenderer base64Data={technology.image.data} />
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
