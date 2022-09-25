import React, { FC } from 'react';
import './Hero.css';
import HeroContent from './HeroContent';
import HeroImage from './HeroImage';

interface Props {}

const Hero:FC<Props> = () => {


  return (
    <div className='hero-container'>
      <HeroContent />
      <HeroImage />
    </div>
  )
};


export default Hero;