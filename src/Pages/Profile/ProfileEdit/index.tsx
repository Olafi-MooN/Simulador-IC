import React from "react";

const ProfileEdit = () => { 
  return <>
    <div className="row d-flex justify-content-center" id="profile">
        <div className="col-11 d-flex justify-content-center">
            <img className="img-fluid" src="/img/profile.jpg" alt="Profile picture"/>
        </div>
        <div className="col-11 d-flex justify-content-center">
            <div className="basic-info">
                <h2>Yasmin S.</h2>
                <p id="profile-mail" className="mb-0">yasminsantos@email.com</p>
                <p id="since">Usuario(a) desde: jun/2022</p>
            </div>
        </div>
        <div className="col-11 d-flex justify-content-center">
            <div className="login-info">
                <h2>Dados de Login</h2>
                <form>
                    <div className="mb-3">
                      <label htmlFor="username" className="form-label"><i className="bi bi-person-fill"></i>Login</label>
                      <input type="text" className="form-control" id="username" aria-describedby="usernamehelp"/>
                      <div id="usernamehelp" className="form-text">6-12 caracteres, permitido somente _ como caracter especial</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label"><i className="bi bi-envelope-fill"></i>E-mail</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailhelp" value="yasminsantos@email.com"/>
                        <div id="emailhelp" className="form-text">Nunca encheremos sua caixa de entrada com spam :)</div>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="password" className="form-label"><i className="bi bi-key-fill"></i>Senha</label>
                        <input type="password" className="form-control" id="password" aria-describedby="passwordhelp" value="TheCakeisaLie"/>
                        <div id="passwordhelp" className="form-text">8-16 digitos, caracteres especiais são permitidos</div>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="passwordcheck" className="form-label"><i className="bi bi-key-fill"></i>Repita Sua Senha</label>
                        <input type="password" className="form-control" id="passwordcheck" aria-describedby="passwordcheckhelp" value="TheCakeisaLie"/>
                      </div>
                  </form>
            </div>
        </div>
        <div className="col-11 d-flex justify-content-center">
            <div className="personal-info">
                <h2>Dados Pessoais</h2>
                <form>
                    <div className="mb-3">
                      <label htmlFor="fullname" className="form-label"><i className="bi bi-person-lines-fill"></i>Nome Completo</label>
                      <input type="text" className="form-control" id="username" aria-describedby="usernamehelp"
                            value="Yasmin Santos"/>
                      <div id="fullnamehelp" className="form-text">Insira seu nome completo</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="birth" className="form-label"><i className="bi bi-calendar-date-fill"></i>Data de Nascimento</label>
                        <input type="date" className="form-control" id="birth" aria-describedby="birthhelp" value="1999-01-06"/>
                        <div id="birthhelp" className="form-text">Insira sua data de nascimento</div>
                      </div>                     
                      <div className="mb-3">
                        <label htmlFor="college" className="form-label"><i className="bi bi-bank"></i>Instituição de Ensino</label>
                        <input type="text" className="form-control" id="college" aria-describedby="collegehelp" value="UniBH"/>
                        <div id="collegehelp" className="form-text">Qual a sua instituição de ensino?</div>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="course" className="form-label"><i className="bi bi-book-half"></i>Curso</label>
                        <input type="text" className="form-control" id="course" aria-describedby="coursehelp" value="Medicina"/>
                        <div id="coursehelp" className="form-text">O que você esta cursando?</div>
                      </div>                 
                  </form>
            </div>
        </div>
        <div className="col-11 d-flex justify-content-center">
            <div className="btns d-flex flex-row-reverse">
                <a className="btn btn-primary btn-3" href="profile.html" role="button">Cancelar</a>
                <a className="btn btn-primary btn-1" href="profile.html" role="button">Salvar</a>
            </div>
        </div>
    </div>
  </>
}

export  { ProfileEdit }