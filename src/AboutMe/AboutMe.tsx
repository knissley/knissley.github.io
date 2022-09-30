import React, { FC } from 'react';
import WorkExperience from './WorkExperience';
import './AboutMe.css';
import { ReactComponent as CodingSVG } from '../assets/coding_purple.svg';
import { ReactComponent as GamingSVG } from '../assets/gaming_purple.svg';

interface Props {};

const AboutMe:FC<Props> = () => {



  return (
    <div className='aboutme-container'>
      <h2 id='about-me' className='aboutme-header'>About Me</h2>
      <p className='aboutme-bio'>Full-Stack Software Engineer with a Bachelor's from the University of Houston. Previously a marketing professional, I am passionate about building intuitive, user-friendly applications and I enjoy the process of problem solving to creatively find solutions. I am skilled in JavaScript, TypeScript, React, Web Design, and Systems Design.</p>
      <p className='aboutme-bio'>When I'm not coding, I love playing video games (ask me about how my brother and I almost made a semi-pro team in high school), hiking, and traveling. My first passion was to work in the sports industry, specifically in the front office of a professional team. My track record on DraftKings made me reconsider my team-building acumen.</p>
      <WorkExperience />
      <h3>Let's get in touch</h3>
      <a className='btn about-me-btn' href='mailto:knissley97@gmail.com'>Contact Me</a>
      <CodingSVG className='extra-svg coding-svg' />
      <GamingSVG className='extra-svg gaming-svg' />
    </div>
  )
};

export default AboutMe;