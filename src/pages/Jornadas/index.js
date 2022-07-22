import React, { Component } from "react";
import '../Jornadas/style.css'
import Header from "../../Header/Header";
import Footer from '../../Footer/Footer';
import '../../Content/styles.css'
import '../Jornadas/styleJornada.css'
import '../Jornadas/styleTopico.css'
import '../Jornadas/styleSubtopicos.css'
import { __esModule } from "@testing-library/jest-dom/dist/matchers";

class Jornadas extends Component {

    constructor(props) {

        const queryParams = new URLSearchParams(window.location.search);
        const page = queryParams.get('page');

        super(props);
        this.state = {
            user: JSON.parse(window.sessionStorage.getItem("usuario")),
            topFront: [],
            topBack: [],
            subT: [],
            idSubT: 1,
            valorSwitch: page != null ? page : 'j',
        };
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
                this.setState({ topBack: JSON.parse(result) })
            })
            .catch(error => console.log('error', error));

        fetch("https://trabalhoengsw.herokuapp.com/caminhos/get/topicos?idCaminho=2", requestOptions)
            .then(response => response.text())
            .then(result => {
                this.setState({ topFront: JSON.parse(result) })
            })
            .catch(error => console.log('error', error));
    }

    carregaSubtopico() {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            mode: 'cors'
        };

        let url = "https://trabalhoengsw.herokuapp.com/topicos/get/subtopicos?idTopico=" + this.state.idSubT;
        fetch(url, requestOptions)
            .then(response => response.text())
            .then(result => {
                this.setState({ subT: JSON.parse(result) })
            })
            .catch(error => console.log('error', error));

    }

    //essa função ta sendo chamada todo render nos subtopicos, isso não é o certo
    topicosJsonToList(opc) {
        const List = [];
        //backend
        if (opc === 1) {
            console.log('rendering b')
            for (let i = 0; i < this.state.topBack.length; i++) {
                let id = this.state.topBack[i]['id'];
                let nome = this.state.topBack[i]['nome'];
                List.push(
                    <li key={id} onClick={() => { this.setState({ valorSwitch: 's', idSubT: id }) }}>{nome}</li>
                );
            }
        }
        //frontend
        if (opc === 2) {
            console.log('rendering f')
            for (let i = 0; i < this.state.topFront.length; i++) {
                let id = this.state.topFront[i]['id'];
                let nome = this.state.topFront[i]['nome'];
                List.push(
                    <li key={id} onClick={() => { this.setState({ valorSwitch: 's', idSubT: id }) }}>{nome}</li>
                );
            }
        }
        //subtopicos
        if (opc === 3) {
            console.log('rendering subtopicos')
            for (let i = 0; i < this.state.subT.length; i++) {
                let id = this.state.subT[i]['id'];
                let nome = this.state.subT[i]['nome'];
                List.push(
                    <li className="subtopicos" key={id}>
                        <div>
                            <button className="buttonConcluido" onClick={() => { this.subTConcluido(id) }}>Concluido</button>
                        </div>
                        <div>{nome}</div>
                        <div><label></label></div>
                        <a className="dicas" href="https://google.com" target="_blank" rel="noreferrer">Veja sobre</a>
                    </li>
                );
            }
        }
        return List;
    }
    atualizaUserDb(usr) {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("nome", usr[0]['nome']);
        urlencoded.append("id", usr[0]['id']);
        urlencoded.append("email", usr[0]['email']);
        urlencoded.append("senha", usr[0]['senha']);
        urlencoded.append("experiencia", usr[0]['experiencia']);
        urlencoded.append("caminhoAtual", usr[0]['caminhoAtual']);
        urlencoded.append("topicosConcluidos", usr[0]['topicosconcluidos']);
        urlencoded.append("subtopicosConcluidos", usr[0]['subtopicosconcluidos']);
        urlencoded.append("curso", usr[0]['curso']);

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        fetch("https://trabalhoengsw.herokuapp.com/usuarios/edit", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => (console.log('error', error),alert("erro de conexão, tente novamente")));

    }
    //TODO : aqui salva no db que o usuario marcou como concluido um subtopico
    subTConcluido(id) {
        console.log('opa');
        console.log(this.state.user[0]['subtopicosconcluidos']);
        let b = [... this.state.user[0]['subtopicosconcluidos'], { 'id': id, 'valor': true }];
        let aux = this.state.user;
        aux[0]['subtopicosconcluidos']= b;
        this.setState({ user: aux });
        this.atualizaUserDb(aux);
    }

    volta() {
        this.setState({ valorSwitch: 'j' })
    }
    renderSelecaoJornada() {
        return (
            <div>
                <Header />
                <div className="content">
                    <h2 className="jornadasBackFront">Jornadas</h2>
                    <div className="jornadas">
                        <a className="box-backend" onClick={() => { this.setState({ valorSwitch: 'b' }) }}>
                            <strong>Backend</strong>
                        </a>

                        <a className="box-frontend" onClick={() => { this.setState({ valorSwitch: 'f' }) }}>
                            <strong>Frontend</strong>
                        </a>

                    </div>
                </div>
                <Footer />
            </div>

        );
    }

    renderBackend() {
        return (
            <>
                <Header />
                <div className="content">
                    <h2>Tópicos Backend</h2>
                    <div className="voltar" onClick={() => { this.volta() }}>

                        <span className="material-symbols-outlined">arrow_back</span>

                    </div>
                    <div className="topico">
                        <ul>
                            {this.topicosJsonToList(1)}

                        </ul>
                    </div>

                </div>
                <Footer />
            </>
        );
    }

    renderSubT() {
        this.carregaSubtopico();
        return (
            <>
                <Header />
                <div className="content">
                    <h2>ASSUNTOS</h2>
                    <div className="voltar" onClick={() => { this.volta() }}>

                        <span className="material-symbols-outlined">arrow_back</span>

                    </div>
                    <div className="subtopicos">
                        <ul>
                            {this.topicosJsonToList(3)}

                        </ul>
                    </div>

                </div>
                <Footer />
            </>
        );
    }

    renderFrontend() {
        return (
            <>
                <Header />
                <div className="content">
                    <h2>Tópicos Frontend</h2>
                    <div className="voltar" onClick={() => { this.volta() }}>

                        <span className="material-symbols-outlined">arrow_back</span>

                    </div>
                    <div className="topico">
                        <ul>
                            {() => {this.topicosJsonToList(2)}}

                        </ul>
                    </div>

                </div>
                <Footer />
            </>
        );
    }

    renderLoading() {
        return (<>
            <div>
                <Header />
                <div className="content">
                    <h2 className="jornadasBackFront">carregando</h2>
                </div>
                <Footer />
            </div>
        </>
        );
    }

    render() {
        switch (this.state.valorSwitch) {
            case 'f': {
                return (
                    this.renderFrontend());
                break;
            }
            case 'b': {
                return (
                    this.renderBackend());
                break;
            }
            case 'j': {
                return (
                    this.renderSelecaoJornada());
                break;
            }
            case 's': {
                return (
                    this.renderSubT());
                break;
            }
            default: {
                return (
                    this.renderLoading());
                break;
            }
        };

    }
}



export default Jornadas;