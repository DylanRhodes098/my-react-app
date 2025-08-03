import React from 'react';
import { useState } from "react";
import About from './pages/about';
import Projects from './pages/projects';
import Technologies from './pages/technologies';
import Layout from './components/layout';
import GlobalStyle from './styles/globalStyles';

const App = () => {

const [onPage, nextPage] = useState('about');

  return (
    <>
 <GlobalStyle />
    <Layout chosenPage={onPage} choosePage={nextPage}>
      {onPage === 'about' && <About></About>}
      {onPage === 'projects' && <Projects></Projects>}
      {onPage === 'technologies' && <Technologies></Technologies>}
    </Layout>
    </>
  );
};

export default App;


