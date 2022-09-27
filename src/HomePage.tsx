import React, { FC } from 'react';
import Hero from './Hero/Hero';
import Projects from './Projects/Projects';
import AboutMe from './AboutMe/AboutMe';

interface Props {};

const HomePage:FC<Props> = () => {

  return (
    <>
      <Hero />
      <Projects />
      <AboutMe />
    </>
  )
};

export default HomePage;