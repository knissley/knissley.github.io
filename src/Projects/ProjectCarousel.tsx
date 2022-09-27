import React, { FC, useState } from 'react';
import './ProjectCarousel.css';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';
import projects from '../constants/projectsInfo';
import ProjectCard from './ProjectCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons';

interface Props {};

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const ProjectCarousel:FC<Props> = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const projectIndex = wrap(0, projects.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial='enter'
          animate='center'
          exit='exit'
          transition={{
            x : { type: 'spring', stiffness: 300, damping: 30},
            opacity: { duration: 0.2 },
          }}
          drag='x'
          dragConstraints={{left: 0, right: 0}}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          style={{position: 'absolute'}}
        >
          <ProjectCard project={projects[projectIndex]} />
        </motion.div>
      </AnimatePresence>
      <div className='next' onClick={() => paginate(1)}>
          <FontAwesomeIcon className='next-icon' icon={faCaretRight} />
      </div>
      <div className='prev' onClick={() => paginate(-1)}>
          <FontAwesomeIcon className='prev-icon' icon={faCaretLeft} />
      </div>
      <div className='progress-container'>
          {
            projects.map((project, idx) => (
              <div onClick={() => {
                setPage(() => [idx, direction])
              }} className={`progress-indicator ${idx === projectIndex ? 'active' : ''}`}></div>
            ))
          }
      </div>
    </>
  )
};


export default ProjectCarousel;