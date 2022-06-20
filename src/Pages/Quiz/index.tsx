import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../Api';
import { AccordionQuizContent } from '../../Components/AccordionQuizContent';
import { AccordionQuizMain } from '../../Components/AccordionQuizMain';
import { ICasosModel } from '../../models/ICasosModel';

const Quiz = () => {
    const caseList = [
        {
            id: 1, 
            title: 'Análise inicial',
            quiz: [
                {id: 1, question: 'Há quanto tempo está assim?', response: 'Estou assim a 10 dias.'}
            ] 
        },
        {
            id: 2, 
            title: 'Exames Físicos',
            quiz: [
                {id: 3, question: 'Sinais vitais (Monitoramento)', response: 'Sinais vitais (Monitoramento)'},
                {id: 4, question: 'Ectoscopia', response: 'Sinais vitais (Monitoramento)'},
                {id: 5, question: 'Oroscopia', response: 'Sinais vitais (Monitoramento)'}
            ] 
        },
        {
            id: 3, 
            title: 'Exames Complementares',
            quiz: [
                {id: 6, question: 'PCR', response: 'Estou assim a 10 dias.'},
                {id: 7, question: 'Íons', response: 'Estou assim a 10 dias.'},
                {id: 8, question: 'Hemograma', response: 'Estou assim a 10 dias.'},
            ] 
        },
        {
            id: 4, 
            title: 'Conduta',
            quiz: [
                {id: 10, question: 'Internação hospitalar', response: 'Estou assim a 10 dias.'}
            ] 
        },
    ] as ICasosModel[];

    useEffect(() => { 
        api.get("").then(res => console.log(res));
        console.log(import.meta.env.VITE_URL);
    }, [])
    
    return <>

        {/* <!-- title and back btn--> */}
        <div className="top-case row gx-0 align-items-center">
            <Link className="col-1 btn back-btn" to="/home" role="button"><i className="bi bi-arrow-left-circle"></i></Link>
            <h1 className="main-title col-10">"Doutor, estou com muita dor nas costas"</h1>
            <div className="col-1"></div>
        </div>

        {/* <!-- main --> */}
        <main className="row gx-0 p-4">

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
                    <div className="quiz-section p-2 mt-2">
                    {caseList.map(item => { 
                        return <>
                        <AccordionQuizMain key={item.id} id={"quiz-main"+String(item.id)} title={item.title}>
                            {item.quiz.map(quiz => <AccordionQuizContent id={quiz.id} title={quiz.question} response={quiz.response}/>)}
                        </AccordionQuizMain>
                        </>
                    })}
                    </div>
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