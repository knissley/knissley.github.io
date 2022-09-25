import React, { FC, useState } from 'react';
import './theme.css';
import './App.css';
import NavHeader from './Navigation/NavHeader';
import Hero from './Hero/Hero';

interface Props {}

const App:FC<Props> = () => {
  const [theme, setTheme] = useState('light');

  return (
    <div className={`app ${theme}`}>
      <header>
        <NavHeader theme={theme} setTheme={setTheme} />
      </header>

      <main>
          <Hero />
          {/* <Projects />
          <AboutMe /> */}
      </main>

      <footer>
        {/* <Footer /> */}
      </footer>
    </div>
  );
}

export default App;
