import "./ProjectCard.css";
import { getImageUrl } from "../../../../utils";
import { Url, Github } from "../../../Svgs/";
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
        <a className="project-link project-preview-link" target="_blank" href={project.preview}>
          <Url />
          Preview
        </a>
        <a className="project-link project-github-link" target="_blank" href={project.code}>
          <Github height='21' width='21' />
          Code
        </a>
      </div>
    </div>
  );
};
