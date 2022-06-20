import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
    return <>
        <div className="row d-flex justify-content-center" id="profile">
            <div className="col-11 d-flex justify-content-center">
                <img className="img-fluid" src="/img/profile.jpg" alt="Profile picture" />
            </div>
            <div className="col-11 d-flex justify-content-center">
                <div className="basic-info">
                    <h2 className="name">Yasmin S.</h2>
                    <p id="profile-mail" className="mb-0">yasminsantos@email.com</p>
                    <p id="since">Usuario(a) desde: jun/2022</p>
                </div>
            </div>
            <div className="col-11 d-flex flex-column">
                <h2 className="title">Dados de Login</h2>
                <div className="login-info d-flex justify-content-center">
                    <form className="">
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label"><i className="bi bi-person-fill"></i>Login</label>
                            <input type="text" className="form-control" id="username" aria-describedby="usernamehelp"
                                value="yasmin_santos" disabled />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label"><i className="bi bi-envelope-fill"></i>E-mail</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailhelp" value="yasminsantos@email.com" disabled />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label"><i className="bi bi-key-fill"></i>Senha</label>
                            <input type="password" className="form-control" id="password" aria-describedby="passwordhelp" value="TheCakeisaLie" disabled />
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-11 d-flex flex-column">
                <h2 className="title">Dados Pessoais</h2>
                <div className="personal-info d-flex justify-content-center">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="fullname" className="form-label"><i className="bi bi-person-lines-fill"></i>Nome
                                Completo</label>
                            <input type="text" className="form-control" id="fullname" aria-describedby="fullnamehelp"
                                value="Yasmin Santos" disabled />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="birth" className="form-label"><i className="bi bi-calendar-date-fill"></i>Data de
                                Nascimento</label>
                            <input type="date" className="form-control" id="birth" aria-describedby="birthhelp"
                                value="1999-01-06" disabled />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="college" className="form-label"><i className="bi bi-bank"></i>Instituição de Ensino</label>
                            <input type="text" className="form-control" id="college" aria-describedby="collegehelp"
                                value="UniBH" disabled />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="course" className="form-label"><i className="bi bi-book-half"></i>Curso</label>
                            <input type="text" className="form-control" id="course" aria-describedby="coursehelp"
                                value="Medicina" disabled />

                        </div>
                    </form>
                </div>
            </div>
            <div className="col-11 d-flex justify-content-center">
                <div className="btns d-flex flex-row-reverse">
                    <a className="btn btn-primary btn-3 d-flex align-items-center" href="#" id="logout" role="button">Logout</a>
                    <Link className="btn btn-primary btn-1" to="profile/edit" role="button">Editar Informações</Link>
                </div>
            </div>
        </div>
    </>
}

export { Profile };