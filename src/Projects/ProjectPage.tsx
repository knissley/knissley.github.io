import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import projects from '../constants/projectsInfo';
import './ProjectPage.css';
import NavHeader from '../Navigation/NavHeader';

interface Props {
  theme: string;
  setTheme: Function;
};

type ProjectPageParams = {
  id: string;
}

const ProjectPage:FC<Props> = ({theme, setTheme}) => {
  let { id:projectId } = useParams<ProjectPageParams>();

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  const project = projects.find((project) => project.id === Number(projectId)) || projects[0];

  return (
    <>
      <header>
        <NavHeader projectPage={true} theme={theme} setTheme={setTheme} />
      </header>
      <main>
        <div className='project-page-container'>
          <div className='project-container'>
            <h1 className='project-header'>{project.title}</h1>
            <div className='project-image-container'>
              <img className={`project-image ${project.imageOrientation}`} alt='' src={project.images[0]} />
            </div>
            {
              project.longDescription.map((paragraph, idx) => <p className='description' key={idx}>{paragraph}</p>)
            }
            <div className='project-buttons-container'>
              {
                project.deployedUrl !== '' && (
                  <button className='btn project-page-btn'>
                    <a className='project-page-anchor' href={project.deployedUrl} target='_blank' rel='noreferrer'>
                      See it Live
                    </a>
                  </button>
                )
              }
              <button className='btn project-page-btn'>
                <a className='project-page-anchor' href={project.githubUrl} target='_blank' rel='noreferrer'>
                  Github
                </a>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
};

export default ProjectPage;