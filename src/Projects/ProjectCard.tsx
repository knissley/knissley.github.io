import React, { FC } from "react";
import './ProjectCard.css';
import { project as ProjectType } from '../types/project';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import image from '../assets/dummy-project.jpg';
import { motion } from 'framer-motion';
import { Link} from 'react-router-dom';

interface Props {
  project: ProjectType;
}

const ProjectCard:FC<Props> = ({project}) => {
  const { technologies } = project;
  const objectFitClass = project.imageOrientation === 'landscape' ? 'cover' : 'contain';

  let technologiesString = '';
  technologies.forEach((technology, idx) => {
    if (idx === technologies.length - 1) {
      technologiesString += technology;
    } else {
      technologiesString += `${technology}, `;
    }
  });


  return (
    <motion.div
      whileHover={{
      scale: 1,
      translateY: -5,
      transition: { duration: .175},
      }}
      className='card-container'
    >
      <div className='card-image-container'>
        <img className={`card-image ${objectFitClass}`} alt={project.title} src={project.images[0] || image} />
      </div>
      <div className='card-info-container'>
        <div>
          <Link className='project-page-link' to={`/portfolio/projects/${project.id}`}>
            <h3>{project.title}</h3>
          </Link>
          <p>{project.description}</p>
        </div>
        <div className='card-sub-details'>
          <span>{technologiesString}</span>
          <div className='card-icons-container'>
            {
              project.deployedUrl !== '' && (
                <a className='deployed-url-anchor' href={project.deployedUrl} target='_blank' rel='noreferrer' >
                  <FontAwesomeIcon className='deployed-url-icon' icon={faLink} />
                </a>
              )
            }
            <a className='github-anchor' target='_blank' rel='noreferrer' href={project.githubUrl}>
              <FontAwesomeIcon className='github-logo' icon={faGithub} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard;