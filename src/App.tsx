import React, { FC, useState } from 'react';
import './theme.css';
import './App.css';
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
      <Routes>
        <Route path='/' element={<HomePage theme={theme} setTheme={setTheme} />} />
        <Route path='/projects/:id' element={<ProjectPage theme={theme} setTheme={setTheme} />} />
        <Route path='*' />
      </Routes>

      <footer className='footer'>
        <span>Kyle Nissley <FontAwesomeIcon style={{fontSize: '.9rem'}} icon={faCopyright} /> 2022</span>
      </footer>
    </div>
  );
}

export default App;
