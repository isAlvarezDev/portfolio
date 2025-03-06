import "./Formation.css";
import { GraduationHat, Badget } from "../../Svgs/";
export const Formation = ({ translations, currentLang }) => {
  const { formation, title } = translations[currentLang];
  return (
    <section className="formation">
      <h2 className="formation-title">{formation}</h2>
      <div className="formation-info">
        <div className="university-info">
        <span className="graduation">
          <GraduationHat />
        </span>
          <div className="university-data">
          <h3>
            <a href="https://uba.edu.ve/ingenieria-de-sistemas/">
              Universidad Bicentenaria de Aragua
            </a>
          </h3>
          <p className="formation-data-subtitle">{title}</p>
          </div>
        </div>
        <div className="university-info ending-time">
            <p className="formation-data-subtitle">Sept/2019 - Mar/2024</p>
        <span className="graduation completed">
          <Badget />
        </span>
        </div>
      </div>
    </section>
  );
};
