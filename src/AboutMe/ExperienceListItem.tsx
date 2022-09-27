import React, { FC } from 'react';
import { Job } from '../types/job';
import './ExperienceListItem.css';
import { motion } from 'framer-motion';

interface Props {
  job: Job;
};

const ExperienceListItem:FC<Props> = ({ job }) => {
  const dateString = `${job.startDate} - ${job.endDate}`;

  return (
    <motion.li initial={{opacity: 0}} transition={{delay: .175, staggerChildren: 0.07}} whileInView={{opacity: 1}} viewport={{once: true}} className='job-list-item' >
      <span className='job-title'>{job.title}</span>
      <span className='job-company'>{job.company}</span>
      <motion.span initial={{opacity: 0, translateX: -10}} whileInView={{opacity: .65, translateX: 0}} viewport={{once: true}}  className='job-dates'>{dateString}</motion.span>
      <div className={'job-information'}>
        {
          job.description.map((sentence) => (
            <p>{sentence}</p>
          ))
        }
        <ul className='job-bullet-points'>
          {
            job.bulletPoints.map((bullet) => (
              <li>{bullet}</li>
            ))
          }
        </ul>
      </div>
    </motion.li>
  )
};

export default ExperienceListItem;