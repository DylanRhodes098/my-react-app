// src/App.jsx
import React from 'react';
import About from './pages/about.jsx';
import Layout from './components/layout.jsx';

const App = () => {
  return (
    <>
    <div>
      <h1>hello</h1>
    </div>
    <Layout>
      <About />
    </Layout>
    </>
  );
};

export default App;


