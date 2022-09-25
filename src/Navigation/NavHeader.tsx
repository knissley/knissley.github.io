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
      { !isLargerScreen && (
        <span>Burger</span>
      )}
      {
        isLargerScreen && (
          <ul className='nav-list'>
            <li><a className='nav-link' href='#'>Home</a></li>
            <li><a className='nav-link' href='#'>Projects</a></li>
            <li><a className='nav-link' href='#'>About Me</a></li>
          </ul>
        )
      }
      {
        theme === 'light' ?
          <FontAwesomeIcon onClick={handleClick} icon={faMoon} />
        :
          <FontAwesomeIcon onClick={handleClick} icon={faSun} />
      }
    </nav>
  )
}

export default NavHeader;