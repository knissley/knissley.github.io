import React, { FC, useState } from 'react';
import './theme.css';
import './App.css';
import NavHeader from './Navigation/NavHeader';
import Hero from './Hero/Hero';
import Projects from './Projects/Projects';
import AboutMe from './AboutMe/AboutMe';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons'

interface Props {}

const App:FC<Props> = () => {
  const [theme, setTheme] = useState('dark');

  return (
    <div className={`app ${theme}`}>
      <header>
        <NavHeader theme={theme} setTheme={setTheme} />
      </header>

      <main>
          <Hero />
          <Projects />
          <AboutMe />
      </main>

      <footer className='footer'>
        <span><FontAwesomeIcon style={{fontSize: '.9rem'}} icon={faCopyright} /> Kyle Nissley</span>
      </footer>
    </div>
  );
}

export default App;
