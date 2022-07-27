import { Component} from "react";
import { Link } from 'react-router-dom';
import "../Header/styles.css"

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario: window.sessionStorage.getItem("usuario"),
            logado: true,
            nome : "",
            pontos : 0,
            nivel :1
            
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

    //this.calculoxp();
    }
    // calculoxp()
    // {   console.log('nivel ='+ this.state.nivel);
    //     if(this.state.pontos<5)
    //     {
    //         this.setState({nivel :1});
    //     }
    //     if(this.state.pontos<10)
    //     {
    //         this.setState({nivel :2});
    //     }if(this.state.pontos<15)
    //     {
    //         this.setState({nivel :3});
    //     }if(this.state.pontos<20)
    //     {
    //         this.setState({nivel :4});
    //     }
    //     if(this.state.pontos>20)
    //     {
    //         this.setState({nivel :5});
    //     }
    // }
    logout = () => {
        const userVazio =  [{"id":-1,"nome":"teste","email":"teste@teste.com","curso":"","senha":"","experiencia":0,"caminhoatual":-1,"subtopicosconcluidos":[{'id': 9999, 'valor':false}],"topicosconcluidos":[{'id': 9999, 'valor':false}]}];
        this.setState({logado : false})
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
                        <li>
                            <a href="/jornadas">JORNADAS </a>
                        </li>                     
                        <li>
                            <a href="/ranking">RANKING</a>
                        </li>

                        <li >
                            <a href="/sobre">SOBRE</a>
                        </li>
                        <li >
                            <a href="/formulario1">FORMULÁRIO</a>
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
                        <div className="campo_User">
                            <span className="nomeUser">{this.state.nome}</span> <br></br>
                            <img className="photoUser" src="https://cdn-icons-png.flaticon.com/512/17/17004.png" alt="foto de perfil" /><br></br>
                            <span className="xp"> Nivel : {this.state.nivel} E {this.props.xp=== undefined ? this.state.pontos : this.props.xp} pontos</span>
                        </div>

                        <div>
                            
                            
                            <Link  onClick={()=>{
                                // essa tag <link é uma forma que achei de deslogar e navegar pra home 
                                // pq quando desloga lá na pagina das jornadas buga muita coisa
                                //e se for pra pagina home reseta a maioria das coisas que buga
                                this.logout()}} to={{
                                pathname: '/'                        
                                }}>
                                <button type="button">SAIR</button>
                            </Link>
                        </div>
                    </div>
                }


            </div>
        );
    }
}

export default Header;