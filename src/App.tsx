import React, { FC, useState } from 'react';
import './theme.css';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import HomePage from './HomePage';
import { Route, Routes } from 'react-router-dom';
import ProjectPage from './Projects/ProjectPage';
import NotFoundPage from './Pages/NotFoundPage';

interface Props {}

const App:FC<Props> = () => {
  const [theme, setTheme] = useState('light');

  return (
    <div className={`app ${theme}`}>
      <Routes>
        <Route path='/portfolio' element={<HomePage theme={theme} setTheme={setTheme} />} />
        <Route path='/portfolio/projects/:id' element={<ProjectPage theme={theme} setTheme={setTheme} />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>

      <footer className='footer'>
        <span>Kyle Nissley <FontAwesomeIcon style={{fontSize: '.9rem'}} icon={faCopyright} /> 2022</span>
      </footer>
    </div>
  );
}

export default App;
