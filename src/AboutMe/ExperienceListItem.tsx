import React, { FC, useState } from 'react';
import { Job } from '../types/job';
import './ExperienceListItem.css';
import { motion } from 'framer-motion';

interface Props {
  job: Job;
};

const ExperienceListItem:FC<Props> = ({ job }) => {
  const dateString = `${job.startDate} - ${job.endDate}`;
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(() => !active);
  }

  return (
    <li className='job-list-item' onClick={handleClick} >
      <span className='job-title'>{job.title}</span>
      <span className='job-company'>{job.company}</span>
      <motion.span initial={{opacity: 0, translateX: -10}} whileInView={{opacity: .4, translateX: 0}} viewport={{once: true}}  className='job-dates'>{dateString}</motion.span>
      {
        active && (
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
        )
      }
    </li>
  )
};

export default ExperienceListItem;