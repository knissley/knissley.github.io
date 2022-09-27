import React, { FC } from "react";
import './ProjectCard.css';
import { project as ProjectType } from '../types/project';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import image from '../assets/dummy-project.jpg';
import { motion } from 'framer-motion';

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
    <motion.div whileHover={{
      scale: 1,
      translateY: -5,
      transition: { duration: .1, ease: [.5, .75, .75, 1]},
      cursor: 'pointer',
    }} className='card-container'>
      <div className='card-image-container'>
        <img className={`card-image ${objectFitClass}`} alt={project.title} src={project.imageUrl || image} />
      </div>
      <div className='card-info-container'>
        <div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
        <div className='card-sub-details'>
          <span>{technologiesString}</span>
          <FontAwesomeIcon className='github-logo' icon={faGithub} />
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard;