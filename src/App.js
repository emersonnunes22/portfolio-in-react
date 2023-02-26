import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Background from './Pages/Background.js';
import Pages from './Pages';
import Navbar from './Pages/Navbar';
import './Estilos.css';
function App() {
  return (
      <React.Fragment>
      <Router basename={process.env.PUBLIC_URL}>
      <Background />
      <Navbar />
      <Pages />
      </Router>
     </React.Fragment>
  );
}

export default App;