import React, { FC } from 'react';
import './NavHeader.css';
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import MobileHeader from './MobileHeader';
import { Link } from 'react-router-dom';

interface Props {
  theme: string;
  setTheme: Function;
  projectPage: boolean
}

const NavHeader:FC<Props> = ({theme, setTheme, projectPage}) => {
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
          <MobileHeader projectPage={projectPage} />
        )}
        {
          isLargerScreen && (
            !projectPage ? (
            <ul className='nav-list'>
              <li><a className='nav-link' href='#'>Home</a></li>
              <li><a className='nav-link' href='#my-work'>My Work</a></li>
              <li><a className='nav-link' href='#about-me'>About Me</a></li>
            </ul> )
            :
            (
              <ul className='nav-list'>
                <li><Link to='/portfolio' className='nav-link'>Home</Link></li>
              </ul>
            )
          )
        }
        <div className='header-btn-container'>
          <button className='btn header-contact-btn'><a href='mailto:knissley97@gmail.com'>Contact Me</a></button>
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