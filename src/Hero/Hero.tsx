import React, { FC } from 'react';
import './Hero.css';
import HeroContent from './HeroContent';
import HeroImage from './HeroImage';

interface Props {}

const Hero:FC<Props> = () => {


  return (
    <section className='hero-container'>
      <HeroContent />
      <HeroImage />
    </section>
  )
};


export default Hero;