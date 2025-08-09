import React from 'react';
import { useState } from "react";
import Home from './pages/home';
import Projects from './pages/projects';
import About from './pages/about';
import Layout from './components/layout';
import GlobalStyle from './styles/globalStyles';

const App = () => {

const [onPage, nextPage] = useState('home');

  return (
    <>
 <GlobalStyle />
    <Layout chosenPage={onPage} choosePage={nextPage}>
      {onPage === 'home' && <Home></Home>}
      {onPage === 'projects' && <Projects></Projects>}
      {onPage === 'about' && <About></About>}
    </Layout>
    </>
  );
};

export default App;


