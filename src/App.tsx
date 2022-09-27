import React, { FC, useState } from 'react';
import './theme.css';
import './App.css';
import NavHeader from './Navigation/NavHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import HomePage from './HomePage';
import { Route, Routes } from 'react-router-dom';
import ProjectPage from './Projects/ProjectPage';

interface Props {}

const App:FC<Props> = () => {
  const [theme, setTheme] = useState('dark');

  return (
    <div className={`app ${theme}`}>
      <header>
        <NavHeader theme={theme} setTheme={setTheme} />
      </header>

      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/projects/:id' element={<ProjectPage/>} />
        </Routes>
      </main>

      <footer className='footer'>
        <span><FontAwesomeIcon style={{fontSize: '.9rem'}} icon={faCopyright} /> Kyle Nissley</span>
      </footer>
    </div>
  );
}

export default App;
