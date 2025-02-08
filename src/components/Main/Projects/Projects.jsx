import './Projects.css'
import { ProjectCard } from './ProjectCard/ProjectCard'
import projects from '../../../data/projects.json'

export const Projects = ({ translations, currentLang }) => {
    const { project } = translations[currentLang]
    return (
        <section className='container-of-projects' id='projects'>
            <h2 className='title'>{project}</h2>
            <div className='project-wrappers'>
                {projects[currentLang].map((project, index) => {
                    return <ProjectCard project={project} key={index} />
                })}
            </div>
        </section>
    )
}