import React, { FC } from 'react';
import './NavHeader.css';
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

interface Props {
  theme: string;
  setTheme: Function;
}

const NavHeader:FC<Props> = ({theme, setTheme}) => {
  const isLargerScreen = useMediaQuery({
    query: '(min-width: 700px)',
  });

  const handleClick = () => {
    setTheme((prevTheme:string) => prevTheme === 'light' ? 'dark' : 'light');
  }

  return (
    <nav className='header'>
      <div className='header-container'>
        { !isLargerScreen && (
          <span>Burger</span>
        )}
        {
          isLargerScreen && (
            <ul className='nav-list'>
              <li><a className='nav-link' href='#'>Home</a></li>
              <li><a className='nav-link' href='#my-work'>My Work</a></li>
              <li><a className='nav-link' href='#about-me'>About Me</a></li>
            </ul>
          )
        }
        <div className='header-btn-container'>
          <button className='btn header-contact-btn'>Contact Me</button>
          {
            theme === 'light' ?
              <FontAwesomeIcon className='theme-toggle-btn' onClick={handleClick} icon={faMoon} />
            :
              <FontAwesomeIcon className='theme-toggle-btn' onClick={handleClick} icon={faSun} />
          }
        </div>
      </div>
    </nav>
  )
}

export default NavHeader;