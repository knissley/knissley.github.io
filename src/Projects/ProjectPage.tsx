import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import projects from '../constants/projectsInfo';
import './ProjectPage.css';

interface Props {};

type ProjectPageParams = {
  id: string;
}

const ProjectPage:FC<Props> = () => {
  let { id:projectId } = useParams<ProjectPageParams>();

  const project = projects.find((project) => project.id = Number(projectId)) || projects[0];

  return (
    <div className='project-page-container'>
      <div className='project-container'>
        <h1 className='project-header'>{project.title}</h1>
        <div className='project-image-container'>
        <img className='project-image' alt='' src={project.images[0]} />
        </div>
        {
          project.longDescription.map((paragraph, idx) => <p key={idx}>{paragraph}</p>)
        }
        <div className='project-buttons-container'>
          <button className='btn project-page-btn'>See it Live</button>
          <button className='btn project-page-btn'>Github</button>
        </div>
      </div>
    </div>
  )
};

export default ProjectPage;