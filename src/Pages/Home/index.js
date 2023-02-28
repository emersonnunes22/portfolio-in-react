function PageHome() {
  return (
    <div className="Home">
    <div className="Apresentacao">
    <h1 className="Titulo">Web Developer</h1>
    <p className="Sobre-mim">Meu Nome é <u className="underlineNome">Emerson Nunes</u>,  tenho 21 anos, sou apaixonado por tecnologia e arte. Transformo ideias em realidade digital com habilidades em desenvolvimento web.</p>
    <div className="Contatos">
    <h2 className="TituloContatos">Contatos:</h2>
    <a href="https://github.com/emersonnunes22"><div>
    <i className='bx bxl-github'></i><p>Github</p>
    </div></a>
    <a href="https://www.linkedin.com/in/emerson-nunes-918922244"><div>
    <i className='bx bxl-linkedin'></i><p>Linkedin</p>
    </div></a>
    <a href="mailto: ermesonsilvanunes2018@gmail.com?"><div>
    <i className='bx bx-envelope'></i><p>E-mail</p>
    </div></a>
    <a href="https://wa.me/+5586981886818"><div>
    <i className='bx bxs-phone'></i><p>Telefone</p>
    </div></a>
    </div>
    </div>
    
    </div>
  );
}

export default PageHome;