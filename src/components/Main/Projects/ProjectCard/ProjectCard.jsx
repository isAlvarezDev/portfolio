import "./ProjectCard.css";
import { getImageUrl } from "../../../../utils";

export const ProjectCard = ({ project }) => {
  return (
    <div className="project-container">
      <div className="project-image-container">
      <img
        src={getImageUrl(project.imageSrc)}
        alt={`Image of ${project.title}`}
        className="project-image"
      />
      </div>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <ul className="project-skills">
        {project.skills.map((skill, index) => {
          return (
            <li className="project-skill" key={index}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className="project-links">
        <a className="project-link" target="_blank" href={project.preview}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
          </svg>
          Preview
        </a>
        <a className="project-link" target="_blank" href={project.code}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
          </svg>
          Code
        </a>
      </div>
    </div>
  );
};
