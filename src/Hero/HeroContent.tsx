import React, { FC } from 'react';
import './HeroContent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


interface Props {}

const HeroContent:FC<Props> = () => {


  return (
    <div className='hero-content-container'>
      <div>
        <h1 className='hero-header'>Kyle Nissley</h1>
        <span className='hero-subtitle'>Software Engineer</span>
        <div className='hero-socials-container'>
          <FontAwesomeIcon className='social-icon' icon={faGithub} />
          <FontAwesomeIcon className='social-icon' icon={faLinkedin} />
        </div>
      </div>
      <p>
        Lorem ipsum dolor imet Lorem ipsum dolor imet Lorem ipsum dolor imet Lorem ipsum dolor imet Lorem ipsum dolor imet Lorem ipsum dolor imet..
      </p>
      <button className='btn hero-btn'>
        See My Work
      </button>
    </div>
  )
};


export default HeroContent;