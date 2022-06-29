import React, { Component } from "react";
import "./styles.css";

class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.user,
            email: "",
            password: "",
        }
    }
    
    redireciona(usuario){
        console.log(usuario);
        
        this.props.navigation.navigate('/formulario1');
        
    }
    loga() {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            mode : 'cors'
        };

        var url = "https://trabalhoengsw.herokuapp.com/usuarios/login?senha=";
        url = url + this.state.password;
        url = url + "&email=";
        url = url + this.state.email;
        fetch(url, requestOptions)
            .then(response => response.text())
            .then(result =>  (result == "usuario inexistente" )? console.log('falhou') :  this.redireciona() )
            .catch(error => console.log('error', error));
    }
    render() {
        
        return (
            <div className="content">
                <div id="signin">
                    <h1 className="title">LOGIN DO SISTEMA</h1>
                    <form className="form" >
                        <div className="field">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" placeholder="Digite seu e-mail" id="email" value={this.state.email}
                             onChange={(e) => this.setState({ email: (e.target.value) })} />
                        </div>

                        <div className="field">
                            <label htmlFor="Password">Senha</label>
                            <input type="password" name="password" placeholder="Digite sua senha" id="password" value={this.state.password}
                             onChange={(e) => this.setState({ password: (e.target.value) })} />
                        </div>
                        <div className="actions">
                            <button type="button" onClick={() => this.loga()}>Entrar</button>
                            <button type="submit" >Voltar</button>
                        </div>
                    </form>

                </div>
            </div>
        )
    }
}

export default Signin;
