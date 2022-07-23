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
            idCam: page != null ? (page === 'b' ? 1 : 2) : 1,
            idT: 1,
            valorSwitch: page != null ? page : 'j',
            detST: [],
            materialST: [],
            anotacao: ""

        };

    }
    //na primeira vez que for usar esse component vai ser utilizado carrega os topicos dos 2 caminhos
    componentDidMount() {
        console.log('fn componentDidMount')
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
        //Nâo tenho certeza se isso aqui é suficiente
        if (this.state.valorSwitch != 'j') {
            this.carregaAnotacao(1);

        }
    }

    //pega os subtopicos de um determinado topico do bd e coloca em state.subT
    carregaSubtopicos(id) {
        console.log('fn carregasubtopicos')
        this.setState({ valorSwitch: 'c' });
        console.log('carrega subtopico');
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            mode: 'cors'
        };

        let url = "https://trabalhoengsw.herokuapp.com/topicos/get/subtopicos?idTopico=" + id;
        fetch(url, requestOptions)
            .then(response => response.text())
            .then(result => {
                this.setState({ subT: JSON.parse(result) })
            })
            .catch(error => console.log('error', error));

        this.setState({ valorSwitch: 's' });

    }
    //pega do db as informações de um subtopico especifico e coloca em state.detST e pega os materiais de estudo
    //e coloca em state.materialST
    detalhesST(id) {
        console.log('fn detalhesST')
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            mode: 'cors'
        };
        let url = "https://trabalhoengsw.herokuapp.com/subtopicos/get?id=" + id;
        console.log(url);
        fetch(url, requestOptions)
            .then(response => response.text())
            .then(result => { this.setState({ detST: JSON.parse(result) }); console.log(result) })
            .catch(error => console.log('error', error));

        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            mode: 'cors'
        };
        url = "https://trabalhoengsw.herokuapp.com/conteudos/get/all/subtopico?idSubtopico=" + id;
        fetch(url, requestOptions)
            .then(response => response.text())
            .then(result => { this.setState({ materialST: JSON.parse(result) }) })
            .catch(error => console.log('error', error));



    }
    //converte um json para uma lista de atributos html dependendo do valor de opc passado
    JsonToList(opc) {
        console.log('fn jsontolist')
        const List = [];
        //backend
        if (opc === 1) {
            console.log('rendering b')
            for (let i = 0; i < this.state.topBack.length; i++) {
                let id = this.state.topBack[i]['id'];
                let nome = this.state.topBack[i]['nome'];
                List.push(
                    <li key={id} onClick={() => {
                        this.setState({ valorSwitch: 's', idT: id });
                        this.carregaSubtopicos(id);
                    }}>{nome}</li>
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
                    <li key={id} onClick={() => {
                        this.setState({ valorSwitch: 's', idT: id });
                        this.carregaSubtopicos(id);
                    }}>{nome}</li>
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

                        <div onClick={() => {
                            this.setState({ valorSwitch: 'd', idSubT: id });
                            this.detalhesST(id)
                        }}>{nome}</div>

                    </li>
                );
            }
        }
        //materiais subtopicos
        if (opc === 4) {

            for (let i = 0; i < this.state.materialST.length; i++) {
                let id = this.state.materialST[i]['id'];
                List.push(
                    <li className="materiais" key={id}>
                        <div>{this.state.materialST[i]['tipo']}</div>

                        <div><a href={this.state.materialST[i]['link']} rel="noopener noreferrer"
                            target={"_blank"}>{this.state.materialST[i]['titulo']}</a></div>

                        <hr></hr>

                    </li>
                );
            }

        }
        return List;
    }
    //TODO
    //tipo =1 para caminho, 2 para topico,3 para subtopíco
    salvaAnotacao(tipo) {
        console.log('fn salvaanotacao');
        if (this.state.user[0]['id'] == -1) {
            alert('É necessario estar logado');
        }
        else {
            if (tipo === 1) {
                let sucesso = false;
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

                var urlencoded = new URLSearchParams();
                urlencoded.append("usuario", this.state.user[0]['id']);
                urlencoded.append("caminho", this.state.idCam);
                urlencoded.append("conteudo", this.state.anotacao);

                var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: urlencoded,
                    redirect: 'follow',
                    mode: 'cors'
                };

                fetch("https://trabalhoengsw.herokuapp.com/feedbackcaminhos/insert", requestOptions)
                    .then(response => response.text())
                    .then(result => { console.log(result); result == 'ok' ? sucesso = true : sucesso = false })
                    .catch(error => console.log('error', error));
                console.log('result = ' + sucesso);
            }
            if (tipo === 2) { }
            if (tipo === 3) { }
        }
    }
    //TODO
    //tipo =1 para caminho, 2 para topico,3 para subtopíco
    carregaAnotacao(tipo) {
        console.log('fn carregaanotacao');
        let temp = "";
        if (tipo === 1) {
            var requestOptions = {
                method: 'GET',
                redirect: 'follow',
                mode: 'cors'
            };
            let url = "https://trabalhoengsw.herokuapp.com/feedbackcaminhos/get/all/user/caminho?usuario=" + this.state.user[0]['id'];
            url = url + "&caminho=" + this.state.idCam;
            fetch(url, requestOptions)
                .then(response => response.text())
                .then(result => { temp = JSON.stringify(result); console.log('resul15t = ' + result) })
                .catch(error => console.log('error', error));
            console.log('temp =' + temp);
            if (temp == null) {
                console.log('opa1')
            }
            else {
                console.log('anotacao = ' + temp)
                this.setState({ anotacao: temp });
            }
        }
        if (tipo === 2) { }
        if (tipo === 3) { }
    }


    //TODO : aqui salva no db que o usuario marcou como concluido um subtopico
    subTConcluido(id) {
        console.log('fn subtconcluido');
        console.log(this.state.user[0]['subtopicosconcluidos']);
        let b = [... this.state.user[0]['subtopicosconcluidos'], { 'id': id, 'valor': true }];
        let aux = this.state.user;
        aux[0]['subtopicosconcluidos'] = b;
        this.setState({ user: aux });
        this.atualizaUserDb(aux);
    }
    //TODO
    atualizaUserDb(usr) {
        console.log('fn atualizauserdb');
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
            .catch(error => (console.log('error', error), alert("erro de conexão, tente novamente")));

    }
    //por enquanto ela sempre volta pra pagina que escolhe entre as jornadas
    //TODO : melhorar, para que volte a pagina anterior
    volta() {

        console.log('fn volta');
        this.setState({ valorSwitch: 'j' })
    }
    renderSelecaoJornada() {
        console.log('renderselecaojornada');
        return (
            <div>
                <Header />
                <div className="content">
                    <h2 className="jornadasBackFront">Jornadas</h2>
                    <div className="jornadas">
                        <a className="box-backend" onClick={() => {
                            this.setState({ valorSwitch: 'b', idCam: 1 });
                            this.carregaAnotacao(1)
                        }}>
                            <strong>Backend</strong>
                        </a>

                        <a className="box-frontend" onClick={() => {
                            this.setState({ valorSwitch: 'f', idCam: 2 });
                            this.carregaAnotacao(1)
                        }}>
                            <strong>Frontend</strong>
                        </a>

                    </div>
                </div>
                <Footer />
            </div>

        );
    }

    renderBackend() {
        console.log('fn renderbackend');
        console.log('idcam = ' + this.state.idCam);
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
                            {this.JsonToList(1)}

                        </ul>
                    </div>
                    <div>
                        <div className="field">

                            <input type="anotacoes" name="anotacoes" value={this.state.anotacao}
                                placeholder="Insira suas anotações aqui" id="anotacoes" onChange={e => { this.setState({ anotacao: e.target.value }) }} />
                        </div>
                        <button onClick={() => { this.salvaAnotacao(1) }}>Salvar Anotações</button>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
    renderSubTDetalhes() {
        console.log('fn rendersubtdetalhes');
        if (this.state.detST.length <= 0) {
            return (this.renderLoading());
        }
        else {
            return (
                <>
                    <Header />
                    <div className="content">
                        <h2>Detalhes</h2>
                        <div className="voltar" onClick={() => { this.volta() }}>

                            <span className="material-symbols-outlined">arrow_back</span>

                        </div>
                        <div>
                            <button className="buttonConcluido" >Concluido</button>
                        </div>
                        <div><h3>{this.state.detST[0]['nome']}</h3></div>
                        <div><h4>{this.state.detST[0]['descricao']}</h4></div>
                        <div><h4>Materiais de estudo :</h4></div>

                        <ul>
                            {this.JsonToList(4)}
                        </ul>
                        <div>
                            <div className="field">

                                <input type="anotacoes" name="anotacoes"
                                    placeholder="Insira suas anotações aqui" id="anotacoes" />
                            </div>
                            <button>Salvar Anotações</button>
                        </div>

                    </div>console.log('idcam = ' +this.state.idCam);
                    <Footer />
                </>
            );
        }
    }
    renderSubT() {

        console.log('fn rendersubt');
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
                            {this.JsonToList(3)}

                        </ul>
                    </div>
                    <div>
                        <div className="field">

                            <input type="anotacoes" name="anotacoes"
                                placeholder="Insira suas anotações aqui" id="anotacoes" />
                        </div>
                        <button>Salvar Anotações</button>
                    </div>

                </div>
                <Footer />
            </>
        );
    }

    renderFrontend() {
        console.log('fn renderfrontend');
        console.log('idcam = ' + this.state.idCam);
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
                            {this.JsonToList(2)}

                        </ul>
                    </div>
                    <div>
                        <div className="field">

                            <input type="anotacoes" name="anotacoes"
                                placeholder="Insira suas anotações aqui" id="anotacoes" />
                        </div>
                        <button>Salvar Anotações</button>
                    </div>

                </div>
                <Footer />
            </>
        );
    }

    renderLoading() {

        console.log('fn renderloading');

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

        console.log('fn render');
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
            case 'd': {
                return (
                    this.renderSubTDetalhes());
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