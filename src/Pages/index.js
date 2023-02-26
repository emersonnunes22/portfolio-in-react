import React from 'react';
import { Routes, Route } from "react-router-dom";
import PageHome from './Home';
import PageProjetos from './Projetos';
import PageSkills from './Skills';
import './Pages.css';

function Pages() {
  return (
     <Routes>
     <Route exact path="/" element={<PageHome />} />
     <Route path="/projetos" element={<PageProjetos/>} />
     <Route path="/skills" element={<PageSkills />} />
     </Routes>
     );
}

export default Pages;