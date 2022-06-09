import React from 'react';

const LandingPage = () => { 
  return <>
     <header className="header d-flex justify-content-between align-items-center">
        <p className="logo-header">Similador - IC</p>
        <button id="show-login" type="button" className="btn btn-light btn-entrar-header">Entrar</button>
    </header>
    <div className="container-main d-flex justify-content-between">
        <div className="container-main-text">
            <p className="title-main">Simulador - IC</p>
            <p className="">
                Proin volutpat, ex eu euismod pharetra, quam risus consequat libero, sit amet bibendum ipsum velit
                vitae
                ipsum.
                <br/>
                <br/>
                Pellentesque tempor pulvinar volutpat. Nulla consectetur vulputate mollis. Proin blandit pharetra
                augue,
                sit amet porttitor massa pretium at.
                <br/>
                <br/>
                Nam ullamcorper magna gravida metus tristique commodo id sit amet ex. Morbi volutpat, justo eget
                auctor
                pellentesque, enim erat tincidunt enim, vel consectetur nibh ipsum id mi.
            </p>
        </div>
        <img src="img/10130.png" className="image-main" alt=""/>
    </div>

    {/* <!--Create account--> */}
    <div className="container-ca row d-flex justify-content-center gx-0">
        <div className="box-ca col-12 col-md-6">
            <p className="title-box-ca">Simulador - IC</p>
            <p className="subtitle-box-ca">Crie uma conta usando seu e-mail:</p>
            <form className="form-ca d-flex flex-column align-items-center">
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Nome de usuario</label>
                    <input type="text" className="form-control" id="username"/>
                    <div id="usernamehelp" className="form-text">Nome de usuario não pode conter ESPAÇO.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Senha</label>
                    <input type="password" className="form-control" id="password"/>
                    <div id="passwordhelp" className="form-text">Minimo 8 caracteres.</div>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Aceito os termos de uso</label>
                </div>
                <button type="submit" className="btn btn-primary btn-ca">Criar conta</button>
                <a className="login-ca" href="#">Já possuo uma conta!</a>
            </form>
        </div>
        <div className="container-text-ca col-12 col-md-6">
            <p className="title-text-ca">Lorem ipsum dolor</p>
            <p className="text-ca">Lorem ipsum dolor sit amet, Fusce eu tincidunt augue. In molestie velit vel lorem
                consectetur adipiscing elit. Aliquam congue et lectus sed feugiat. Nam at purus lacus. Fusce eu
                tincidunt augue. In molestie velit vel lorem convallis
                tempus.
                <br/><br/>
                Lorem ipsum dolor sit amet, Fusce eu tincidunt augue. In molestie velit vel lorem
                consectetur adipiscing elit. Aliquam congue et lectus sed feugiat. Nam at purus lacus. Fusce eu
                tincidunt augue. In molestie velit vel lorem convallis
                tempus.
            </p>
        </div>
    </div>

    {/* <!-- body text one column--> */}
    <div className="container-text-one d-flex justify-content-center">
        <div className="container-t2 ">
            <p className="title-text-one">Lorem ipsum dolor</p>
            <p className="text-one">Aenean fermentum urna sapien, hendrerit interdum velit egestas quis. Nullam ut justo
                sed nibh imperdiet fermentum sed sed tortor.
                <br/><br/>
                Etiam aliquet facilisis luctus. Praesent ac semper tellus. Proin efficitur sed lacus a malesuada.
                Integer sed laoreet neque. In in erat imperdiet, viverra nisl in, feugiat dui. Nam aliquam augue mi,
                tristique malesuada metus imperdiet ut. Vivamus aliquet eros lacus, hendrerit luctus ligula mattis
                sit
                amet. Fusce ultricies auctor nisi, eget
                <br/><br/>
                Ut in accumsan nibh, ac interdum massa. Phasellus et viverra justo. Aliquam vitae eleifend velit.
                <br/><br/>
                Mauris non pretium odio. Vivamus semper, lectus et tempus laoreet, libero nisl lacinia velit, ut
                venenatis ipsum leo quis nisl. Ut in accumsan nibh, ac interdum massa. Phasellus et viverra justo.
                Aliquam vitae eleifend velit.Mauris non pretium odio. Vivamus semper, lectus et tempus laoreet,
                libero nisl lacinia velit, ut venenatis ipsum leo quis nisl. Ut in accumsan nibh, ac interdum massa.
                Phasellus et viverra justo. Aliquam vitae eleifend velit.
                <br/><br/>
                Mauris non pretium odio. Vivamus semper, lectus et tempus laoreet, libero nisl lacinia velit, ut
                venenatis ipsum leo quis nisl. Ut in accumsan nibh, ac interdum massa. Phasellus et viverra justo.
                Aliquam vitae eleifend velit.
            </p>
        </div>
    </div>

    {/* <!-- body text two column --> */}
    <div className="container-text-two row d-flex align-items-center justify-content-center gx-0">
        <div className="container-text-two-0 col-12 col-md-6">
            <p className="title-text-two">Lorem ipsum dolor</p>
            <p className="text-two">Lorem ipsum dolor sit amet, Fusce eu tincidunt augue. In molestie velit vel lorem
                consectetur adipiscing elit. Aliquam congue et lectus sed feugiat. Nam at purus lacus. Fusce eu
                tincidunt augue. In molestie velit vel lorem convallis
                tempus.
                <br/><br/>
                Aliquam fermentum malesuada risus, aliquam aliquam libero tempor ac. Donec est arcu, consequat eu
                magna sit amet, cursus consectetur nisl. Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Praesent elit ante, consequat suscipit posuere at, rhoncus nec
                odio.
            </p>
        </div>
        <div className="container-text-two-1 col-1 col-12 col-md-6">
            <p className="title-text-two">Lorem ipsum dolor</p>
            <p className="text-two">Lorem ipsum dolor sit amet, Fusce eu tincidunt augue. In molestie velit vel lorem
                consectetur adipiscing elit. Aliquam congue et lectus sed feugiat. Nam at purus lacus. Fusce eu
                tincidunt augue. In molestie velit vel lorem convallis
                tempus.
                <br/><br/>
                Aliquam fermentum malesuada risus, aliquam aliquam libero tempor ac. Donec est arcu, consequat eu
                magna sit amet, cursus consectetur nisl. Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Praesent elit ante, consequat suscipit posuere at, rhoncus nec
                odio.
            </p>
        </div>
    </div>
    <div className="container-paragraph-ca d-flex align-items-center flex-column">
        <p className="paragraph-ca-title">Esta esperando o que? Crie sua conta agora mesmo!</p>
        <button type="button" className="btn btn-primary btn-paragraph-ca">Criar conta</button>
    </div>
    <footer className="footer"></footer>

    {/* <!-- Login popup--> */}
    <div className="container-popup">
        <div className="box-login">
            <a href="#" className="bi bi-x"></a>
            <p className="title-box-login">Simulador - IC</p>
            <p className="subtitle-box-login">Faça Login usando seu e-mail:</p>
            <form className="form-login d-flex flex-column align-items-center">
                <div className="mb-3 d-flex flex-column">
                    <label htmlFor="email" className="form-label align-self-start">E-mail</label>
                    <input type="email" className="form-control" id="email"/>
                </div>
                <div className="mb-3 d-flex flex-column">
                    <label htmlFor="password" className="form-label align-self-start">Senha</label>
                    <input type="password" className="form-control" id="password"/>
                    <a id="" className="link-ca-small" href="#">Esqueci minha senha.</a>
                </div>
                <button type="submit" className="btn btn-primary btn-login">Login</button>
                <a className="link-ca" href="#">Ainda não possuo uma conta</a>
            </form>
        </div>
    </div>
    </>
}

export { LandingPage };