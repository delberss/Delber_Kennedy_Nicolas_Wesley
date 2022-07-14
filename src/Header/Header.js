import { Component} from "react";
import "../Header/styles.css"

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario: window.sessionStorage.getItem("usuario"),
            logado: true,
            nome : "",
            pontos : 0,
            
        }
        if(this.state.usuario != null){
            this.state.usuario = JSON.parse(this.state.usuario);
        if (this.state.usuario[0]['id'] === -1) {
            this.state.logado = false;
        }
        else {
            this.state.logado = true;
            this.state.nome = this.state.usuario[0]['nome'];
            this.state.pontos = this.state.usuario[0]['experiencia'];

        }
    };

    }

    logout = () => {
        const userVazio =  [{"id":-1,"nome":"teste","email":"teste@teste.com","curso":"","senha":"","experiencia":0,"caminhoatual":-1,"caminhoback":{},"caminhofront":{}}];
          
        window.sessionStorage.setItem("usuario",JSON.stringify(userVazio));
    }
    render() {
      
        return (
            
            <div className="header" >

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
                            <a href="/jornadas">JORNADAS </a>
                        </li>

                    </ul>
                </div>
                {!this.state.logado &&
                    <div id="login_off" className="login_off">
                        <li>
                            <a href="/signin">ENTRAR</a>
                        </li>

                        <li>
                            <a href="/signup">CADASTRAR</a>
                        </li>
                    </div>
                }
                {this.state.logado &&
                    <div id="login_on" className="login_on">

                        <div className="dataUser">

                            <div className="nameAndPhoto">
                                <strong className="nomeUser" > {this.state.nome}</strong>
                                <img className="photoUser" src="https://cdn-icons-png.flaticon.com/512/17/17004.png" alt="foto de perfil" />
                            </div>


                            <div className="pontuacao">
                                <strong className="xp ">{this.state.pontos} pontos</strong>
                            </div>

                        </div>


                        <div className="buttonLogout">
                            <li>
                            <button type="button" onClick={() => this.logout()}>SAIR</button>
                            </li>
                        </div>

                    </div>}


            </div>
        );
    }
}

export default Header;