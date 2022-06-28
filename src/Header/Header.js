import "../Header/styles.css"

function Header(){
    return(
        <div className="header">

            <h2>Jornada do Desenvolvedor</h2>
            <div className="menu">
                <ul className="items">
                    <li>
                        <a href="/">HOME</a>
                    </li>
                    <li >
                        <a href="/sobre">SOBRE</a>
                    </li>
                    <li>
                        <a href="/ranking">RANKING</a>
                    </li>
                    <li>
                        <a href="/jornadas">JORNADAS</a>
                    </li>

                </ul>
            </div>

            <div id="login_off" className="login_off">
                <li>
                    <a href="/signin">ENTRAR</a>
                </li>

                <li>
                    <a href="/signup">CADASTRAR</a>
                </li>
            </div>

            <div id="login_on" className="login_on">

                <div className="dataUser">

                    <div className="nameAndPhoto">
                        <strong className="nomeUser">NOME</strong>
                        <img className="photoUser" src="https://cdn-icons-png.flaticon.com/512/17/17004.png" alt="foto de perfil"/> 
                    </div>


                    <div className="pontuacao">
                        <strong className="xp">0 pontos</strong>
                    </div>

                </div>


                <div className="buttonLogout">
                    <li>
                        <a href="/sobre">SAIR</a>
                    </li>
                </div>

            </div>


        </div>
    )
}

export default Header;