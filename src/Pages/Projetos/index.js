import { useState, useEffect} from 'react';
import Projetos from './ListaProjetos.js';
function PageProjetos() {

  return (
    <div className="Projetos">
    <ul className="FeedProjetos">
    {Projetos.map((projeto) => (
    <li key={projeto.id}>
    <h1>{projeto.titulo}</h1>
    <p>{projeto.texto}</p>
    <span>{projeto.ano}</span>
    <a href={projeto.url}>
    <button className="IrLink">Visitar</button>
    </a>
    </li>
    ))}
    </ul>
    </div>
)}
export default PageProjetos;