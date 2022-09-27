import React, { FC } from 'react';
import WorkExperience from './WorkExperience';
import './AboutMe.css';

interface Props {};

const AboutMe:FC<Props> = () => {



  return (
    <div className='aboutme-container'>
      <h2 id='about-me' className='aboutme-header'>About Me</h2>
      <p className='aboutme-bio'>Full-Stack Software Engineer with a Bachelor's from the University of Houston. Previously a marketing professional, I am passionate about building intuitive, user-friendly applications and I enjoy the process of problem solving to creatively find solutions. I am skilled in JavaScript, TypeScript, React, Web Design, and Systems Design.</p>
      <WorkExperience />
      <h3>Let's get in touch</h3>
      <button className='btn about-me-btn'>Contact Me</button>
    </div>
  )
};

export default AboutMe;