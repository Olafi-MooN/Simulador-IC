import React from 'react';
import { Link } from 'react-router-dom';
import { AccordionQuizContent } from '../../Components/AccordionQuizContent';
import { AccordionQuizMain } from '../../Components/AccordionQuizMain';

const Quiz = () => {
    return <>

        {/* <!--Navbar--> */}
        <header>
            <nav className="navbar navbar-dark navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Simulador - IC</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
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
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    João_Vitor
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Perfil</a></li>
                                    <li><a className="dropdown-item" href="#">Modo noturno (Em breve)</a></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><a className="dropdown-item" href="#">Sair</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>


        {/* <!-- title and back btn--> */}
        <div className="top-case row gx-0 align-items-center">
            <Link className="col-1 btn back-btn" to="/home" role="button"><i className="bi bi-arrow-left-circle"></i></Link>
            <h1 className="main-title col-10">"Doutor, estou com muita dor nas costas"</h1>
            <div className="col-1"></div>
        </div>

        {/* <!-- main --> */}
        <main className="row gx-0">

            {/* <!-- cards --> */}

            {/* <!-- dados do paciente--> */}
            <div className="col-12 col-md-7 main-quiz-row">
                <section className="card-main" id="dados-do-paciente">
                    <h2 className="title">Dados do Paciente</h2>
                    <div className="content d-flex justify-content-between align-items-center">
                        <div className="img-text d-flex align-items-center">
                            <img className="card-img" src="/img/temperature1.png" alt="#" />
                            <div className="text">
                                <h4 id="name"><span className="span">Nome: </span>José da Silva Pereira</h4>
                                <h4 id="complaint"><span className="span">Queixa principal: </span>Estou com dor nas costas</h4>
                                <h4 id="profession"><span className="span">Profissão: </span> Agricultor</h4>
                            </div>
                        </div>
                        <div className="line"></div>
                        <div className="text">
                            <h4 id="idade"><span className="span">Idade: </span>45 anos</h4>
                            <h4 id="Peso"><span className="span">Peso: </span>84kg</h4>
                            <h4 id="imc"><span className="span">IMC: </span>24,7</h4>
                        </div>
                    </div>
                </section>

                {/* <!-- resumo do caso--> */}
                <section className="card-main" id="resumo-do-caso">
                    <h2 className="title">Resumo do Caso</h2>
                    <div className="content d-flex justify-content-start align-items-center">
                        <div className="img-text d-flex align-items-center">
                            <img className="card-img" src="/img/report.png" alt="#" />
                            <div className="text">
                                <h4 id="description"><span className="span">Descrição: </span>Homem agricultor, vem a UBS
                                    desacompanhado, queixando-se de dor nas
                                    costas</h4>
                                <h4 id="attendance"><span className="span">Atendimento: </span>Médico de saúde da familia</h4>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- monitorização--> */}
                <section className="card-main" id="monitorização">
                    <h2 className="title">Monitorização</h2>
                    <div className="content d-flex justify-content-start align-items-center">
                        <div className="img-text d-flex align-items-center">
                            <img className="card-img" src="/img/symptoms.png" alt="#" />
                            <div className="text">
                                <h4 id="temperature"><span className="span">Temperatura: </span>Ainda não aferido</h4>
                                <h4 id="pressure"><span className="span">Pressão: </span>Ainda não aferido</h4>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- historico do paciente--> */}
                <section className="card-main" id="historico">
                    <h2 className="title">Historico do Paciente</h2>
                    <div className="content d-flex justify-content-start align-items-center">
                        <div className="img-text d-flex align-items-center">
                            <img className="card-img" src="/img/temperature2.png" alt="#" />
                            <div className="text">
                                <h4 id="temperature"><span className="span">Historico: </span>Desenvolvendo historico</h4>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* <!-- Accordion --> */}

                <div className="col-12 col-md-5 main-quiz-row mt-4 ">
                    <AccordionQuizMain id="df" title="Ánalise inicial">
                        <AccordionQuizContent id="aes" title="Há quanto temspo estáds assim?" response="Estou assim a 10 dia"/>
                        <AccordionQuizContent id="aes" title="Há quanto texmpo estáds assim?" response="Estou assim a 10 dia"/>
                        <AccordionQuizContent id="ars" title="Há quanto temcpo estáds assim?" response="Estou assim a 10 dia"/>
                        <AccordionQuizContent id="afes" title="Há quanto tecmpo estáds assim?" response="Estou assim a 10 dia"/>
                    </AccordionQuizMain>
                    <AccordionQuizMain id="sdf" title="Ánalise inicidal">
                        <AccordionQuizContent id="ab" title="Há quanto tempo estádf assim?" response="Estou assim a 10 dia"/>
                    </AccordionQuizMain>
                    <AccordionQuizMain id="dsf"title="Ánalise inicidal">
                        <AccordionQuizContent id="ad" title="Há quanto tempo estsá assim?" response="Estou assim a 10 dia"/>
                    </AccordionQuizMain>
                </div>
        </main>

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

export { Quiz };