import React, { Component } from "react";
import '../Jornadas/style.css'
import Header from "../../Header/Header";
import Footer from '../../Footer/Footer';
import '../../Content/styles.css'

class Jornadas extends Component {
<<<<<<< HEAD
=======
    constructor(props) {
        super(props);
        this.state = {
            frontend: [],
            backend: []
        }
    }

    componentDidMount() {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            mode: 'cors'
        };

        fetch("https://trabalhoengsw.herokuapp.com/caminhos/get/topicos?idCaminho=1", requestOptions)
            .then(response => response.text())
            .then(result => {
                this.setState({ frontend: JSON.parse(result) })
            })
            .catch(error => console.log('error', error));

            fetch("https://trabalhoengsw.herokuapp.com/caminhos/get/topicos?idCaminho=2", requestOptions)
            .then(response => response.text())
            .then(result => {
                this.setState({ backend: JSON.parse(result) })
            })
            .catch(error => console.log('error', error));
    }

    frontJsonToList() {
        const frontList = [];
        for (let i = 0; i < this.state.frontend.length; i++) {
            let id = this.state.frontend[i]['id'];
            let nome = this.state.frontend[i]['nome'];
            let descricao = this.state.frontend[i]['descricao'];
            frontList.push(<li key={id}>Nome = {nome}, descricao = {descricao}</li>);
        }
        return frontList;
    }
    
    backJsonToList() {
        const backList = [];
        for (let i = 0; i < this.state.backend.length; i++) {
            let id = this.state.backend[i]['id'];
            let nome = this.state.backend[i]['nome'];
            let descricao = this.state.backend[i]['descricao'];
            backList.push(<li key={id}>Nome = {nome}, descricao = {descricao}</li>);
        }
        return backList;
    }
>>>>>>> 78121e62e3fcbaebfd60a22d4b34d09173b56581

    render() {
        return(
            <div>
                <Header/>
                <div className="content">
                    <h2 className="jornadasBackFront">Jornadas</h2>
                    <div className="jornadas">
<<<<<<< HEAD
                        <a className="box-backend" href="/jornadaback">
                            <strong>Backend</strong>
                        </a>
    
                        <a className="box-frontend" href="/jornadafront">
                            <strong>Frontend</strong>
                        </a>
=======
                        <div className="backend">
                            <h2>Back-end</h2>
                            <ul>
                            {this.frontJsonToList()}
                            </ul>
                        </div>
    
                        <div className="frontend">
                            <h2>Front-end</h2>
                            <ul>
                            {this.backJsonToList()}
                            </ul>
                        </div>
>>>>>>> 78121e62e3fcbaebfd60a22d4b34d09173b56581
                        
                    </div>
                </div>
                <Footer/>
            </div>
            
        );
    }
}



export default Jornadas;

