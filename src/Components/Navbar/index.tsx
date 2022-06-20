import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props: any) => {
  return <>
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand navbar-title" to="/home">MedSim</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link select-color" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Estatísticas</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Sobre</Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <div className="nav-item d-flex">
              <img className="img-fluid" src="/img/profile.jpg" alt="" id="profile-mini" />
              <li className="nav-item dropdown dropdown-menu-end dropdown-menu-lg-start">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button"
                  data-bs-toggle="dropdown" aria-expanded="false">
                  Yasmin S.
                </a>
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start"
                  aria-labelledby="navbarDarkDropdownMenuLink">
                  <li><Link className="dropdown-item" to="profile">Perfil</Link></li>
                  <li><Link className="dropdown-item log-out" to="/">Sair</Link>
                  </li>
                </ul>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
    <div>
      {props.children}
    </div>
  </>
}

export { Navbar };