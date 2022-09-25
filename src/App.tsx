import React, { FC, useState } from 'react';
import './theme.css';
import './App.css';
import NavHeader from './Navigation/NavHeader';

interface Props {}

const App:FC<Props> = () => {
  const [theme, setTheme] = useState('light');

  return (
    <div className={`app ${theme}`}>
      <header>
        <NavHeader />
      </header>

      <main>
        {/*
          <Hero />
          <Projects />
          <AboutMe />
        */}
      </main>

      <footer>
        {/* <Footer /> */}
      </footer>
    </div>
  );
}

export default App;
