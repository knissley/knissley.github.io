import React, { FC } from 'react';
import image from '../assets/HeroImageLarge.png';
import './HeroImage.css';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

interface Props {}

const HeroImage:FC<Props> = () => {
  const isLargerScreen = useMediaQuery({
    query: '(min-width: 700px)',
  });

  return (
    <div className='hero-image-container'>
      {
        isLargerScreen ?
        <motion.img drag dragConstraints={{ top: -25, left: -25, right: 5, bottom: 25}} className='hero-image' alt='Kyle Nissley' src={image} />
        :
        <img className='hero-image' alt='Kyle Nissley' src={image}/>
      }

    </div>
  )
};


export default HeroImage;