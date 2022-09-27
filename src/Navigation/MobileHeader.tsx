import React, { FC, useState } from 'react';
import './MobileHeader.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

interface Props {};

const MobileHeader:FC<Props> = () => {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!isOpen);
  }

  return (
    <>
      <FontAwesomeIcon onClick={handleClick} className='menu-icon' icon={faBars} />
      <div className={`background ${isOpen ? 'show' : 'hide'}`}>
        <ul className='mobile-list'>
          <li onClick={handleClick} className='mobile-list-item'><a href='#'>Home</a></li>
          <li onClick={handleClick} className='mobile-list-item'><a href='#my-work'>My Work</a></li>
          <li onClick={handleClick} className='mobile-list-item'><a href='#about-me'>About Me</a></li>
        </ul>
      </div>
    </>
  );
};

export default MobileHeader;

/*

<ul className='nav-list'>
  <li><a className='nav-link' href='#'>Home</a></li>
  <li><a className='nav-link' href='#my-work'>My Work</a></li>
  <li><a className='nav-link' href='#about-me'>About Me</a></li>
</ul>

*/