import React, { FC } from 'react';
import ProjectsDisplay from './ProjectsDisplay';
import './Projects.css';

interface Props {}

const Projects:FC<Props> = () => {


  return (
    <section className='projects-container'>
      <h2 id="my-work">My Work</h2>
      <ProjectsDisplay />
    </section>
  )
}

export default Projects;