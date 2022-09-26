import React, { FC } from 'react';
import './ProjectsDisplay.css';
import projects from '../constants/projectsInfo';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

interface Props {}

const ProjectsDisplay:FC<Props> = () => {


  return (
    <motion.div initial={{ opacity: 0}} whileInView={{opacity: 1}} viewport={{once:true}} className='projects-display-container'>
      {
        projects.map(project => <ProjectCard project={project} />)
      }
    </motion.div>
  )
}

export default ProjectsDisplay;