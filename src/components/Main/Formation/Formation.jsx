import "./Formation.css";

export const Formation = ({ translations, currentLang }) => {
  const { formation, title } = translations[currentLang];
  return (
    <section className="formation">
      <h2 className="formation-title">{formation}</h2>
      <div className="formation-info">
        <div className="university-info">
        <span className="badge">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
            <path d="M6 12v5c3 3 9 3 12 0v-5"></path>graduation-cap
          </svg>
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
        <span className="badge completed">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
            <path d="m9 12 2 2 4-4"></path>shield-check
          </svg>
        </span>
        </div>
      </div>
    </section>
  );
};
