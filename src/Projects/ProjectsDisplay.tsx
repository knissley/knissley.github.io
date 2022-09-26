import React, { FC } from 'react';
import './ProjectsDisplay.css';
import projects from '../constants/projectsInfo';
import ProjectCard from './ProjectCard';

interface Props {}

const ProjectsDisplay:FC<Props> = () => {


  return (
    <div className='projects-display-container'>
      {
        projects.map(project => <ProjectCard project={project} />)
      }
    </div>
  )
}

export default ProjectsDisplay;