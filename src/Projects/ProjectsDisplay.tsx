import React, { FC } from 'react';
import './ProjectsDisplay.css';
import projects from '../constants/projectsInfo';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import ProjectCarousel from './ProjectCarousel';

interface Props {}

const ProjectsDisplay:FC<Props> = () => {
  const isLargerScreen = useMediaQuery({
    query: '(min-width: 800px)',
  });

  return (
    <motion.div initial={{ opacity: 0}} whileInView={{opacity: 1}} viewport={{once:true}} className='projects-display-container'>
      {
        isLargerScreen && (
          projects.map(project => <ProjectCard key={project.title} project={project} />)
        )
      }
      {
        !isLargerScreen && (
          <ProjectCarousel />
        )
      }
    </motion.div>
  )
}

export default ProjectsDisplay;