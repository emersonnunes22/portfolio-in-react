import React from 'react';
import { useState, useEffect} from 'react';
import { Link, BrowserRouter as Router, useLocation } from 'react-router-dom';
import PageHome from '../Home';
import PageProjetos from '../Projetos';
import PageSkills from '../Skills';
import '../Pages.css';


function Navbar() {
  let Location = useLocation();
const [ activeLink, setActiveLink ] = useState(Location.pathname);
const Guias = (link) => {
  setActiveLink(link);
}
function Reloader () {
  window.location.href= "/portfolio-in-react";
}
  function ativarMenu () {
    const Body = document.querySelector("body");
    const abrirMenu = document.querySelector("#abrirMenu");
    const fecharMenu = document.querySelector("#fecharMenu");
    const menuMobile = document.querySelector(".Guias");
    const FundoDark = document.querySelector(".FundoDark");
   menuMobile.classList.add("ativo");
   abrirMenu.classList.add("hidden");
   fecharMenu.classList.add("ativo");
   Body.classList.add("estatico");
   FundoDark.classList.add("ativo");
  }
 
 function desativarMenu () {
   const Body = document.querySelector("body");
   const abrirMenu = document.querySelector("#abrirMenu");
    const menuMobile = document.querySelector(".Guias");
    const FundoDark = document.querySelector(".FundoDark");
    menuMobile.classList.remove("ativo");
    abrirMenu.classList.remove("hidden");
    Body.classList.remove("estatico");
    FundoDark.classList.remove("ativo");
 }
 
  return (
    <nav className="Navbar">
    <h1 className="Logo" onClick={Reloader}>Emerson Nunes</h1>
    <ul className="Guias">
    <li>
    <Link to="/" className={ activeLink === "/" ? "ativar" : ""}
    onClick={() => Guias("/")}>Home</Link>
    </li>
    <li>
    <Link to="/projetos" className={ activeLink === "/projetos" ? "ativar": ""}
    onClick={() => Guias("/projetos")}
    >Projetos</Link>
    </li>
    <li>
    <Link to="/skills" className={ activeLink === "/skills" ? "ativar": ""}
    onClick={() => Guias("/skills")}>Skills</Link>
    <i id="fecharMenu" className='bx bx-x' onClick={desativarMenu}></i>
    </li>
    </ul>
     <i id="abrirMenu" className='bx bx-menu' onClick={ativarMenu}></i>
    </nav>
  );
}

export default Navbar;