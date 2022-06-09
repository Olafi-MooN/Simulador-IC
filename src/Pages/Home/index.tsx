import React from 'react';
import { CaseCards, ICaseCardsModel } from '../../Components/CaseCards';

const Home = () => { 
  const casosList: ICaseCardsModel[] = [
    {id: 1, description: 'Homem de 45 anos, agricultor, vem à UBS desacompanhado, queixando-se de dor nas costas.', title: 'Doutor(a), estou com muita dor nas costas', scenery: 'Cenário: Unidade básica de saúde.'}
  ];

  return <>
    <header>
    <nav className="navbar navbar-dark navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Simulador - IC</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse row" id="navbarNavAltMarkup">
          <div className="navbar-nav col-12 col-lg-3">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
            <a className="nav-link" href="#">Estatisticas</a>
            <a className="nav-link" href="#">Sobre</a>
          </div>
          <div className="col-12 col-lg-7"></div>
          <ul className="navbar-nav nav-bar-profile col-12 col-lg-2" id="profile">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                João_Vitor
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Perfil</a></li>
                <li><a className="dropdown-item" href="#">Modo noturno (Em breve)</a></li>
                <li>
                  <hr className="dropdown-divider"/>
                </li>
                <li><a className="dropdown-item" href="#">Sair</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  {/* <!-- Title--> */}
  <h1 className="home-title">Dashboard</h1>

  {/* <!-- body --> */}
  <div className="container-body">
    <div className="row casos gx-0">

      {/* <!-- casos --> */}
      <div className="col-12 col-xl-7 main-home-cow">
        {casosList.map(item =>  <CaseCards description={item.description} id={item.id} scenery={item.scenery} title={item.title} key={item.id}/> )}
      </div>

      {/* <!-- Espaço entre colunas --> */}
      <div className="col-12 col-xl-1"></div>

      {/* <!-- Estatisticas --> */}

      <div className="col-12 col-xl-4 d-flex justify-content-center">
        <div className="teste align-self-start">
          <h5 className="estatisticas-title">Estatisticas</h5>
          <div className="estatisticas-iten d-flex justify-content-start align-items-center">
            <i className="bi bi-check2-circle icon-estatisticas"></i>
            <h6 className="estatisticas-itens">Casos concluidos:</h6>
          </div>
          <div className="estatisticas-iten d-flex justify-content-start align-items-center">
            <i className="bi bi-award icon-estatisticas"></i>
            <h6 className="estatisticas-itens">Bem sucedidos:</h6>
          </div>
          <div className="estatisticas-iten d-flex justify-content-start align-items-center">
            <i className="bi bi-exclamation-diamond icon-estatisticas"></i>
            <h6 className="estatisticas-itens">Falhas:</h6>
          </div>
          <div className="estatisticas-iten d-flex justify-content-start align-items-center">
            <i className="bi bi-exclamation-triangle icon-estatisticas"></i>
            <h6 className="estatisticas-itens">Casos com mais falhas:</h6>
          </div>
          <div className="estatisticas-iten d-flex justify-content-start align-items-center">
            <i className="bi bi-clock icon-estatisticas"></i>
            <h6 className="estatisticas-itens">Casos com maior duração:</h6>
          </div>
          <div className="estatisticas-iten d-flex justify-content-start align-items-center">
            <i className="bi bi-clock-history icon-estatisticas"></i>
            <h6 className="estatisticas-itens">Casos com menor duração:</h6>
          </div>
        </div>
      </div>
    </div>

    {/* <!-- Paginator --> */}

    <nav className="d-flex justify-content-center">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li className="page-item"><a className="page-link" href="#">1</a></li>
        <li className="page-item"><a className="page-link" href="#">2</a></li>
        <li className="page-item"><a className="page-link" href="#">3</a></li>
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>

  {/* <!-- footer --> */}
  <footer className="footer">
    {/* <!-- title and social icons --> */}
    <div className="container-top d-flex justify-content-between">
      <h2 className="title">Simulador - IC</h2>
      <div className="social-icons">
        <div className="social-icons">
          <a href="#" className="bi bi-instagram social-icon"></a>
          <a href="#" className="bi bi-linkedin social-icon"></a>
          <a href="#" className="bi bi-github social-icon"></a>
          <a href="#" className="bi bi-envelope-fill social-icon"></a>
        </div>
      </div>
    </div>

    {/* <!-- title and social icons --> */}
    <div className="row gx-0">
      <div className="col-12 col-xl-3">
        <h3 className="col-title">Paginas</h3>
        <ul className="list-group">
          <a href="" className="list-group-item">Home</a>
          <a href="" className="list-group-item">Estatisticas</a>
          <a href="" className="list-group-item">Sobre</a>
        </ul>
      </div>
      <div className="col-12 col-xl-3">
        <h3 className="col-title">Recursos</h3>
        <ul className="list-group">
          <a href="" className="list-group-item">Protótipo</a>
          <a href="" className="list-group-item">Artigo</a>
          <a href="" className="list-group-item">Código Fonte</a>
        </ul>
      </div>
      <div className="col-12 col-xl-6">
        <h3 className="col-title">Nosso Time</h3>
        <div className="container-our-team d-flex justify-content-between">
          <ul className="list-group our-team">
            <a href="" className="list-group-item">Flavio - (Orientador)</a>
            <a href="" className="list-group-item">Alan - TI (Back-end)</a>
            <a href="" className="list-group-item">Alef Santos - TI (Full-stack)</a>
            <a href="" className="list-group-item">João V. Guimarães - TI (Front-end, UX/UI)</a>
            <a href="" className="list-group-item">[Nome Sobrenome] - [area] [especialização]</a>
          </ul>
          <ul className="list-group our-team">
            <a href="" className="list-group-item">[Nome Sobrenome] - [area] [especialização]</a>
            <a href="" className="list-group-item">[Nome Sobrenome] - [area] [especialização]</a>
            <a href="" className="list-group-item">[Nome Sobrenome] - [area] [especialização]</a>
            <a href="" className="list-group-item">[Nome Sobrenome] - [area] [especialização]</a>
            <a href="" className="list-group-item">[Nome Sobrenome] - [area] [especialização]</a>
          </ul>
        </div>
      </div>
      <h4 className="copyright">©Simulador - IC 2022 Todos os direitos reservados.</h4>
    </div>
  </footer>

  </>

}

export { Home };