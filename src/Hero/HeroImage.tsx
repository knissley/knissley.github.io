import React, { FC } from 'react';
import image from '../assets/HeroImageLarge.png';
import './HeroImage.css';

interface Props {}

const HeroImage:FC<Props> = () => {


  return (
    <div className='hero-image-container'>
      <img className='hero-image' alt='Kyle Nissley' src={image} />
    </div>
  )
};


export default HeroImage;