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


    }
    calculoxp()
    {   //console.log('nivel ='+ this.state.nivel);
        let xp = this.props.xp=== undefined ? this.state.pontos : this.props.xp;
        if(xp<5)
        {
            //this.setState({nivel :1});
            return 'Nivel: 1 e '+ xp + ' pontos de xp';
        }
        if(xp<10)
        {   return 'Nivel: 2 e '+ xp + ' pontos de xp';
            //this.setState({nivel :2});
        }if(xp<15)
        {   return 'Nivel: 3 e '+ xp + ' pontos de xp';
            //this.setState({nivel :3});
        }if(xp<20)
        {   return 'Nivel: 4 e '+ xp + ' pontos de xp';
            //this.setState({nivel :4});
        }
        if(xp<25)
        {   return 'Nivel: 5 e '+ xp + ' pontos de xp';
            //this.setState({nivel :5});
        }
        return 'Nivel: 9 e '+ xp + ' pontos de xp';
    }
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
                            <span className="xp"> {this.calculoxp()}</span>
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