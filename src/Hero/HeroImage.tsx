import React, { FC } from 'react';
import image from '../assets/HeroImageLarge.png';
import './HeroImage.css';
import { motion } from 'framer-motion';

interface Props {}

const HeroImage:FC<Props> = () => {


  return (
    <div className='hero-image-container'>
      <motion.img drag dragConstraints={{ top: -50, left: -50, right: 50, bottom: 50}} className='hero-image' alt='Kyle Nissley' src={image} />
    </div>
  )
};


export default HeroImage;