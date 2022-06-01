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

            <div className="login">
                <li>
                    <a href="/signin">ENTRAR</a>
                </li>

                <li>
                    <a href="/signup">CADASTRAR</a>
                </li>
            </div>

            
        </div>
    )
}

export default Header;