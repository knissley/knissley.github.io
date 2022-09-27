import React, { FC } from 'react';
import './HeroContent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';


interface Props {}

const animationOptions = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  transition: {
    duration: 1.75,
  },
}

const HeroContent:FC<Props> = () => {


  return (
    <div className='hero-content-container'>
      <div>
        <h1 className='hero-header'>Kyle Nissley</h1>
        <motion.div
          initial={animationOptions.initial}
          animate={animationOptions.animate}
          transition={animationOptions.transition}
          className='subtitle-socials-container'
        >
          <span className='hero-subtitle'>Software Engineer</span>
          <div className='hero-socials-container'>
            <FontAwesomeIcon className='social-icon' icon={faGithub} />
            <FontAwesomeIcon className='social-icon' icon={faLinkedin} />
          </div>
        </motion.div>
      </div>
      <motion.p
        initial={animationOptions.initial}
        animate={animationOptions.animate}
        transition={animationOptions.transition}
      >
        Lorem ipsum dolor imet Lorem ipsum dolor imet Lorem ipsum dolor imet Lorem ipsum dolor imet Lorem ipsum dolor imet Lorem ipsum dolor imet..
      </motion.p>
      <button className='btn hero-btn'>
        <a href="#my-work">See My Work</a>
      </button>
    </div>
  )
};


export default HeroContent;