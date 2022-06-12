import React from 'react';
import { Link } from 'react-router-dom';

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
            <a className="col-1 btn back-btn" href="#" role="button"><i className="bi bi-arrow-left-circle"></i></a>
            <h1 className="main-title col-10">"Doutor, estou com muita dor nas costas"</h1>
            <div className="col-1"></div>
        </div>

        {/* <!-- main --> */}
        <main className="row main-row gx-0">

            {/* <!-- cards --> */}

            {/* <!-- dados do paciente--> */}
            <div className="col-12 col-lg-7 main-quiz-row">
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
            <div className="col-12 col-lg-1"></div>

            {/* <!-- Accordion --> */}

            <div className="col-12 col-lg-4">
                <section className="accordion-action">
                    <div className="accordion accordion-flush" id="accordionFlushExample">

                        {/* <!-- analise inicial--> */}
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingOne">
                                <button className="accordion-button collapsed title-questions" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false"
                                    aria-controls="flush-collapseOne">
                                    <h3>Análise Inicial</h3>
                                </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse"
                                aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <ul className="list-group list-group-flush accordion-body">
                                    <li className="list-group-item">


                                        <li className="nav-item dropstart">
                                            <a className="nav-link dropdown-toggle questions" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Há quanto tempo está assim?
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                                <li><a className="dropdown-item" href="#">Essa dor já dura 10 dias!</a></li>
                                            </ul>
                                        </li>

                                        <li className="nav-item dropstart">
                                            <a className="nav-link dropdown-toggle questions" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Como você me descreveria essa dor: Em peso, pontada,<br />
                                                aperto, latejante ou queimação?
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                                <li><a className="dropdown-item" href="#">Essa dor já dura 10 dias!</a></li>
                                            </ul>
                                        </li>

                                        <li className="nav-item dropstart">
                                            <a className="nav-link dropdown-toggle questions" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Onde dói, exatamente?
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                                <li><a className="dropdown-item" href="#">Essa dor já dura 10 dias!</a></li>
                                            </ul>
                                        </li>

                                        <li className="nav-item dropstart">
                                            <a className="nav-link dropdown-toggle questions" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                É uma dor constante ou que varia durante o dia?
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                                <li><a className="dropdown-item" href="#">Essa dor já dura 10 dias!</a></li>
                                            </ul>
                                        </li>

                                        <li className="nav-item dropstart">
                                            <a className="nav-link dropdown-toggle questions" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Se você pudesse dar uma nota para essa dor de 0 a 10, <br />
                                                sendo 0 nada de 10 a pior dor da sua vida, <br />
                                                quanto você daria?
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                                <li><a className="dropdown-item" href="#">Essa dor já dura 10 dias!</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropstart">
                                            <a className="nav-link dropdown-toggle questions" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Teve febre ou calafrios nesse período?
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                                <li><a className="dropdown-item" href="#">Essa dor já dura 10 dias!</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropstart">
                                            <a className="nav-link dropdown-toggle questions" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Teve outros sintomas associados?
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                                <li><a className="dropdown-item" href="#">Essa dor já dura 10 dias!</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropstart">
                                            <a className="nav-link dropdown-toggle questions" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Tomou alguma medicação em casa?
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                                <li><a className="dropdown-item" href="#">Essa dor já dura 10 dias!</a></li>
                                            </ul>
                                        </li>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* <!-- exames fisicos--> */}
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                    aria-controls="flush-collapseTwo">
                                    <h3>Exames Físicos</h3>
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse"
                                aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <ul className="list-group list-group-flush accordion-body">
                                    <li className="list-group-item">
                                        <a href="#" className="questions" id="q1-0">Sinais vitais (Monitoramento)</a>
                                    </li>
                                    <li className="list-group-item">
                                        <a href="#" className="questions" id="q1-1">Ectoscopia</a>
                                    </li>
                                    <li className="list-group-item">
                                        <a href="#" className="questions" id="q1-2">Linfonodos</a>
                                    </li>
                                    <li className="list-group-item">
                                        <a href="#" className="questions" id="q-3">Oroscopia</a>
                                    </li>
                                    <li className="list-group-item">
                                        <a href="#" className="questions" id="q1-4">Otoscopia</a>
                                    </li>
                                    <li className="list-group-item">
                                        <a href="#" className="questions" id="q1-5">Tireóide</a>
                                    </li>
                                    <li className="list-group-item">
                                        <a href="#" className="questions" id="q1-6">Aparelho respiratório</a>
                                    </li>
                                    <li className="list-group-item">
                                        <a href="#" className="questions" id="q1-7">Aparelho cardiovascular</a>
                                    </li>
                                    <li className="list-group-item">
                                        <a href="#" className="questions" id="q1-8">Trato gastrointestinal</a>
                                    </li>
                                    <li className="list-group-item">
                                        <a href="#" className="questions" id="q1-9">Sinais meníngeos</a>
                                    </li>
                                    <li className="list-group-item">
                                        <a href="#" className="questions" id="q1-10">Exame neurológico</a>
                                    </li>
                                    <li className="list-group-item">
                                        <a href="#" className="questions" id="q1-11">Manobras especiais</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* <!-- exames complementares --> */}
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseThree" aria-expanded="false"
                                    aria-controls="flush-collapseThree">
                                    <h3>Exames Complementares</h3>
                                </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse"
                                aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <ul className="list-group list-group-flush accordion-body">
                                    <li className="list-group-item">
                                        <h4 className="questions-title">Laboratoriais:</h4>
                                    </li>
                                    <li className="list-group-item">
                                        <a href="#" className="questions" id="q2-0">PCR</a>
                                    </li>
                                    <li className="list-group-item">
                                        <a href="#" className="questions" id="q2-1">Íons</a>
                                    </li>
                                    <li className="list-group-item">
                                        <a href="#" className="questions" id="q2-3">Hemograma</a>
                                    </li>
                                    <li className="list-group-item">
                                        <a href="#" className="questions" id="q2-4">Ureia e Creatinina</a>
                                    </li>
                                    <li className="list-group-item">
                                        <a href="#" className="questions" id="q2-5">EAS</a>
                                    </li>
                                    <li className="list-group-item">
                                        <a href="#" className="questions" id="q2-6">Ácido Úrico</a>
                                    </li>
                                    <li className="list-group-item">
                                        <a href="#" className="questions" id="q2-7">TGO e TGP</a>
                                    </li>
                                    <li className="list-group-item">
                                        <a href="#" className="questions" id="q2-8">Albumin</a>
                                    </li>
                                    <li className="list-group-item">
                                        <a href="#" className="questions" id="q2-9">Bilirrubina totais e frações</a>
                                    </li>
                                    <li className="list-group-item">
                                        <h4 className="questions-title" id="exame-img-correction">Imagem:</h4>
                                    </li>
                                    <li className="list-group-item">
                                        <a href="#" className="questions" id="q2-10">Ultrassom de rins e vias urinárias</a>
                                    </li>
                                    <li className="list-group-item">
                                        <a href="#" className="questions" id="q2-11">Tomografia computadorizada de abdome e
                                            pelve sem contraste</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* <!-- conduta --> */}
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingFour">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseFour" aria-expanded="false"
                                    aria-controls="flush-collapseFour">
                                    <h3>Conduta</h3>
                                </button>
                            </h2>
                            <div id="flush-collapseFour" className="accordion-collapse collapse"
                                aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                <ul className="list-group list-group-flush accordion-body">
                                    <li className="list-group-item">
                                        <a href="#" className="questions" id="q3-0">Internação hospitalar</a>
                                    </li>
                                    <li className="list-group-item">
                                        <a href="#" className="questions" id="q3-1">AINES: Indometacina ou Cetorolaco</a>
                                    </li>
                                    <li className="list-group-item">
                                        <a href="#" className="questions" id="q3-2">Opióides: Tramadol/Morfina se ausência de
                                            resposta aos AINES</a>
                                    </li>
                                    <li className="list-group-item">
                                        <a href="#" className="questions" id="q3-3">Antibióticos: Piperacilina + Tazobactam
                                            endovenosos</a>
                                    </li>
                                    <li className="list-group-item">
                                        <a href="#" className="questions" id="q3-4">Encaminhamento para Urologista:
                                            Nefrolitotomia Percutânea</a>
                                    </li>
                                    <li className="list-group-item">
                                        <a href="#" className="questions" id="q3-5">Encaminhamento para o Urologista:
                                            Ureteroscopia</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

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