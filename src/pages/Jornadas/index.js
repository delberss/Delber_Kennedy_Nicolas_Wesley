import React, { Component } from "react";

import Header from "../../Header/Header";
import Footer from '../../Footer/Footer';

import '../../Content/styles.css'
import '../Jornadas/style.css'
import '../Jornadas/styleJornadas.css'
import '../Jornadas/styleMateriais.css'
import '../Jornadas/styleSubtopicos.css'
import '../Jornadas/styleTopicos.css'

import { __esModule } from "@testing-library/jest-dom/dist/matchers";



class Jornadas extends Component {

    constructor(props) {

        const queryParams = new URLSearchParams(window.location.search);
        const page = queryParams.get('page');

        super(props);
        this.state = {
            user: JSON.parse(window.sessionStorage.getItem("usuario")),
            topFront: [],
            nomeTopico: "",
            paginaAtual: "",
            topBack: [],
            subT: [],
            idSubT: 1,
            idCam: page != null ? (page === 'b' ? 1 : 2) : 1,
            idT: 1,
            valorSwitch: page != null ? page : 'j',
            detST: [],
            materialST: [],
            anotacao: [{ 'conteudo': '', 'id': -1 }],
            subTConcluido : false

        };

    }
    //na primeira vez que for usar esse component vai ser utilizado carrega os topicos dos 2 caminhos
    componentDidMount() {
        //console.log('fn componentDidMount')
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
            .catch(error => {console.log('error', error);alert('Erro de conexão')});

        fetch("https://trabalhoengsw.herokuapp.com/caminhos/get/topicos?idCaminho=2", requestOptions)
            .then(response => response.text())
            .then(result => {
                this.setState({ topFront: JSON.parse(result) })
            })
            .catch(error => {console.log('error', error);alert('Erro de conexão')});
        //Nâo tenho certeza se isso aqui é suficiente
        if (this.state.valorSwitch == 'b' || this.state.valorSwitch == 'f') {
            this.carregaAnotacao(1);

        }
    }

    //pega os subtopicos de um determinado topico do bd e coloca em state.subT
    carregaSubtopicos(id) {
        //console.log('fn carregasubtopicos')
        this.setState({ valorSwitch: 'c' });

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
            .catch(error => {console.log('error', error);alert('Erro de conexão')});

        this.setState({ valorSwitch: 's' });

    }
    //pega do db as informações de um subtopico especifico e coloca em state.detST e pega os materiais de estudo
    //e coloca em state.materialST
    detalhesST(id) {
        //console.log('fn detalhesST')
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            mode: 'cors'
        };
        let url = "https://trabalhoengsw.herokuapp.com/subtopicos/get?id=" + id;
        fetch(url, requestOptions)
            .then(response => response.text())
            .then(result => { this.setState({ detST: JSON.parse(result) }) })
            .catch(error => {console.log('error', error);alert('Erro de conexão')});

        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            mode: 'cors'
        };
        url = "https://trabalhoengsw.herokuapp.com/conteudos/get/all/subtopico?idSubtopico=" + id;
        fetch(url, requestOptions)
            .then(response => response.text())
            .then(result => { this.setState({ materialST: JSON.parse(result) }) })
            .catch(error => {console.log('error', error);alert('Erro de conexão')});


    }
    //converte um json para uma lista de atributos html dependendo do valor de opc passado
    JsonToList(opc) {
        const List = [];
        //backend
        if (opc === 1) {
            //console.log('criando lista topicos backend')
            for (let i = 0; i < this.state.topBack.length; i++) {
                let id = this.state.topBack[i]['id'];
                let nome = this.state.topBack[i]['nome'];
                List.push(

                    <div className="subtopico">
                        <li className="topico" key={id} onClick={() => {
                            this.setState({ valorSwitch: 's', nomeTopico: nome, idT: id, anotacao: [{ 'conteudo': '', 'id': -1 }] },
                            () => {
                                this.carregaAnotacao(2);
                                this.carregaSubtopicos(id);
                            });
                                }}>{nome}
                        </li>
                        
                        <div className="topicoConcluido">
                            <span className="fa-solid fa-check"></span>
                        </div>
                    </div>


                    
                );
            }
        }
        //frontend
        if (opc === 2) {
            //console.log('criando lista topicos')
            for (let i = 0; i < this.state.topFront.length; i++) {
                var idTopicoFront = this.state.topFront[i]['id'];
                let id = this.state.topFront[i]['id'];
                let nome = this.state.topFront[i]['nome'];
                List.push(
                    <li className="topico" key={id} onClick={() => {
                        this.setState({ valorSwitch: 's',nomeTopico: nome, idT: id, idFront: idTopicoFront, anotacao: [{ 'conteudo': '', 'id': -1 }] },
                            () => {
                                this.carregaAnotacao(2);
                                this.carregaSubtopicos(id);

                            });
                        //console.log('clicou num topico no front');

                    }}>{nome}</li>
                );
            }
        }
        //subtopicos
        if (opc === 3) {
            //console.log('criando lista subtopicos de um topico especifico')
            for (let i = 0; i < this.state.subT.length; i++) {
                let id = this.state.subT[i]['id'];
                let nome = this.state.subT[i]['nome'];
                List.push(
                    <>
                        <div className="subtopico">
                            <li key={id}>

                                <div onClick={() => {
                                     this.setState({ valorSwitch: 'd',
                                      idSubT: id, anotacao: [{ 'conteudo': '', 'id': -1 }],
                                    subTConcluido:  this.verificaSubTConcluido(id) },
                                     () => {
                                         this.carregaAnotacao(3);
                                         this.detalhesST(id);
                                         //this.verificaSubTConcluido(id);
     
                                     });}}>{nome}
                                </div>

                            </li>
                            <div className="subtopicoConcluido">
                                <span className="fa-solid fa-check"></span>
                            </div>
                        </div>
                    </>
                );
            }
        }
        //materiais subtopicos
        if (opc === 4) {
            //console.log('criando lista de detalhes de um subtopico')
            for (let i = 0; i < this.state.materialST.length; i++) {
                let id = this.state.materialST[i]['id'];
                List.push(
                    <li className="material" key={id}>
                        <a href={this.state.materialST[i]['link']} rel="noopener noreferrer"
                            target={"_blank"}>{this.state.materialST[i]['titulo']} - {this.state.materialST[i]['tipo']}
                        </a>
                    </li>
                );
            }

        }
        return List;
    }

    //tipo =1 para caminho, 2 para topico,3 para subtopíco
    salvaAnotacao(tipo) {
        console.log('fn salvaanotacao');
        if (this.state.user[0]['id'] == -1) {
            document.querySelector('.campo_anotacao').style.border = "1px solid red";
            alert('É necessario estar logado');
        }
        else {

            if (tipo === 1) {
                document.querySelector('.campo_anotacao').style.border = "none";
                if (this.state.anotacao[0]['id'] == -1) {
                    console.log('nova, tipo 1');
                    var myHeaders = new Headers();
                    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

                    var urlencoded = new URLSearchParams();
                    urlencoded.append("usuario", this.state.user[0]['id']);
                    urlencoded.append("caminho", this.state.idCam);
                    urlencoded.append("conteudo", this.state.anotacao[0]['conteudo']);

                    var requestOptions = {
                        method: 'POST',
                        headers: myHeaders,
                        body: urlencoded,
                        redirect: 'follow'
                    };

                    fetch("https://trabalhoengsw.herokuapp.com/feedbackcaminhos/insert", requestOptions)
                        .then(response => response.text())
                        .then(result => { alert('Anotação salva com sucesso!'); })
                        .catch(error => { alert('Erro inesperado ao salvar a anotação') });
                }
                else {
                    console.log('velha tipo1');
                    console.log(this.state.anotacao[0]['id']);

                    console.log('json state antigo anotacao tipo1= ' +JSON.stringify( this.state.anotacao));
                    var myHeaders = new Headers();
                    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

                    var urlencoded = new URLSearchParams();
                    urlencoded.append("id", this.state.anotacao[0]['id']);
                    urlencoded.append("usuario", this.state.user[0]['id']);
                    urlencoded.append("idCaminho", this.state.idCam);
                    urlencoded.append("conteudo", this.state.anotacao[0]['conteudo']);
                    urlencoded.append("criado", this.state.anotacao[0]['criado']);

                    var requestOptions = {
                        method: 'PUT',
                        headers: myHeaders,
                        body: urlencoded,
                        redirect: 'follow',
                        mode: 'cors'
                    };

                    fetch("https://trabalhoengsw.herokuapp.com/feedbackcaminhos/edit", requestOptions)
                        .then(response => response.text())
                        .then(result => { alert('Anotação salva com sucesso!'); })
                        .catch(error => { alert('Erro inesperado ao salvar a anotação') });
                }

            }
            if (tipo === 2) {
                console.log('idT=', this.state.idT);


                console.log('json anotacao, tipo 2 = ' +JSON.stringify( this.state.anotacao));
                if (this.state.anotacao[0]['id'] == -1) {
                    console.log('nova anotação topico');

                    var myHeaders = new Headers();
                    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

                    var urlencoded = new URLSearchParams();
                    urlencoded.append("usuario", this.state.user[0]['id']);
                    urlencoded.append("idTopico", this.state.idT);
                    urlencoded.append("conteudo", this.state.anotacao[0]['conteudo']);
                   

                    var requestOptions = {
                        method: 'POST',
                        headers: myHeaders,
                        body: urlencoded,
                        redirect: 'follow'
                    };

                    fetch("https://trabalhoengsw.herokuapp.com/feedbacktopicos/insert", requestOptions)
                        .then(response => response.text())
                        .then(result => { alert('Anotação salva topico'+ result); })
                        .catch(error => { alert('Erro inesperado ao salvar a anotação') });
                }
                else {
                    console.log('velha tipo 2');
                    console.log(this.state.anotacao[0]['id']);

                    console.log('json anotacao tipo 2 caso ano ja existente = ' + JSON.stringify(+ this.state.anotacao));
                    var myHeaders = new Headers();
                    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

                    var urlencoded = new URLSearchParams();
                    urlencoded.append("id", this.state.anotacao[0]['id']);
                    urlencoded.append("usuario", this.state.user[0]['id']);
                    urlencoded.append("idTopico", this.state.idT);
                    urlencoded.append("conteudo", this.state.anotacao[0]['conteudo']);
                    urlencoded.append("criado", this.state.anotacao[0]['criado']);

                    var requestOptions = {
                        method: 'PUT',
                        headers: myHeaders,
                        body: urlencoded,
                        redirect: 'follow',
                        mode: 'cors'
                    };

                    fetch("https://trabalhoengsw.herokuapp.com/feedbacktopicos/edit", requestOptions)
                        .then(response => response.text())
                        .then(result => { alert('Anotação salva topico'+ result); })
                        .catch(error => { alert('Erro inesperado ao salvar a anotação') });
                }

            }
            if (tipo === 3) {

                console.log('idT=', this.state.idT);


                console.log('json anotacao, tipo 3 = ' +JSON.stringify( this.state.anotacao));
                if (this.state.anotacao[0]['id'] == -1) {
                    console.log('nova anotação subtopico');

                    var myHeaders = new Headers();
                    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

                    var urlencoded = new URLSearchParams();
                    urlencoded.append("usuario", this.state.user[0]['id']);
                    urlencoded.append("idSubTopico", this.state.idSubT);
                    urlencoded.append("conteudo", this.state.anotacao[0]['conteudo']);
                   

                    var requestOptions = {
                        method: 'POST',
                        headers: myHeaders,
                        body: urlencoded,
                        redirect: 'follow'
                    };

                    fetch("https://trabalhoengsw.herokuapp.com/feedbacksubtopicos/insert", requestOptions)
                        .then(response => response.text())
                        .then(result => { alert('Anotação salva topico'+ result); })
                        .catch(error => { alert('Erro inesperado ao salvar a anotação') });
                }
                else {
                    console.log('velha tipo 3');
                    console.log(this.state.anotacao[0]['id']);

                    console.log('json anotacao tipo 3 caso ano ja existente = ' + JSON.stringify(+ this.state.anotacao));
                    var myHeaders = new Headers();
                    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

                    var urlencoded = new URLSearchParams();
                    urlencoded.append("id", this.state.anotacao[0]['id']);
                    urlencoded.append("usuario", this.state.user[0]['id']);
                    urlencoded.append("idSubTopico", this.state.idSubT);
                    urlencoded.append("conteudo", this.state.anotacao[0]['conteudo']);
                    urlencoded.append("criado", this.state.anotacao[0]['criado']);

                    var requestOptions = {
                        method: 'PUT',
                        headers: myHeaders,
                        body: urlencoded,
                        redirect: 'follow',
                        mode: 'cors'
                    };

                    fetch("https://trabalhoengsw.herokuapp.com/feedbacksubtopicos/edit", requestOptions)
                        .then(response => response.text())
                        .then(result => { alert('Anotação salva subtopico '+ result); })
                        .catch(error => { alert('Erro inesperado ao salvar a anotação') });
                }

             }
        }
    }
    
    //tipo =1 para caminho, 2 para topico,3 para subtopíco
    async carregaAnotacao(tipo) {
        console.log('fn carregaanotacao cam =' + this.state.idCam);
        console.log('fn carregaanotacao t =' + this.state.idT);
        console.log('fn carregaanotacao st =' + this.state.idSubT);
        console.log('anota antes de procurar no bd =' + this.state.anotacao[0]['conteudo']);
        if (this.state.user[0]['id'] == -1) {
            console.log('não logado');
            this.setState({ anotacao: [{ 'conteudo': '', 'id': -1 }] });
        }
        else {
            if (tipo === 1) {

                var requestOptions = {
                    method: 'GET',
                    redirect: 'follow',
                    mode: 'cors'
                };
                let url = "https://trabalhoengsw.herokuapp.com/feedbackcaminhos/get/all/user/caminho?usuario=" + this.state.user[0]['id'];
                url = url + "&caminho=" + this.state.idCam;
                ;
                fetch(url, requestOptions)
                    .then(response => response.text())
                    .then(result => {
                        this.setState({ anotacao: JSON.parse(result).length == 0 ? [{ 'conteudo': "", 'id': -1 }] : JSON.parse(result) });
                    })
                    .catch(error => {console.log('error', error);alert('Erro de conexão')});

            }
            if (tipo === 2) {
                console.log('carregaanotacao tipo == 2');

                var requestOptions = {
                    method: 'GET',
                    redirect: 'follow',
                    mode: 'cors'
                };
                let url = "https://trabalhoengsw.herokuapp.com/feedbacktopicos/get/all/user/topico?usuario=" + this.state.user[0]['id'];
                url = url + "&topico=" + this.state.idT;
                ;
                fetch(url, requestOptions)
                    .then(response => response.text())
                    .then(result => {
                        this.setState({ anotacao: JSON.parse(result).length == 0 ? [{ 'conteudo': "", 'id': -1 }] : JSON.parse(result) });
                        console.log(result);
                    })
                    .catch(error => {console.log('error', error);alert('Erro de conexão')});
            }
            if (tipo === 3) {
                console.log('carregaanotacao tipo == 3');

                var requestOptions = {
                    method: 'GET',
                    redirect: 'follow',
                    mode: 'cors'
                };
                let url = "https://trabalhoengsw.herokuapp.com/feedbacksubtopicos/get/all/user/subtopico?usuario=" + this.state.user[0]['id'];
                url = url + "&subtopico=" + this.state.idSubT;
                ;
                fetch(url, requestOptions)
                    .then(response => response.text())
                    .then(result => {
                        this.setState({ anotacao: JSON.parse(result).length == 0 ? [{ 'conteudo': "", 'id': -1 }] : JSON.parse(result) });
                        console.log('result = ' + result);
                    })
                    .catch(error => {console.log('error', error);alert('Erro de conexão')});
            }
        }
    }

    verificaSubTConcluido(id){
        let a = this.state.user[0]['subtopicosconcluidos'].find(el => el.id === id);
        return a === undefined ? false : a['valor'];
       
    }
    
    subTConcluido(id) {
        console.log('fn subtconcluido');
        console.log(this.state.user[0]['subtopicosconcluidos']);
        let b = [... this.state.user[0]['subtopicosconcluidos'], { 'id': id, 'valor': true }];
        let aux = this.state.user;
        aux[0]['subtopicosconcluidos'] = b;
        aux[0]['experiencia'] ++;
        this.setState({ user: aux,subTConcluido :true });
        window.sessionStorage.setItem("usuario",JSON.stringify(aux));
        this.atualizaUserDb(aux);
       
    }
    
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
        urlencoded.append("caminhoAtual", usr[0]['caminhoatual']);
        urlencoded.append("topicosConcluidos", JSON.stringify(usr[0]['topicosconcluidos']));
        urlencoded.append("subtopicosConcluidos", JSON.stringify(usr[0]['subtopicosconcluidos']));
        urlencoded.append("curso", usr[0]['curso']);
        console.log('ca='+usr[0]['caminhoatual']);

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow',
            mode : 'cors'
        };

        fetch("https://trabalhoengsw.herokuapp.com/usuarios/edit", requestOptions)
            .then(response => response.text())
            .then(result => console.log('result' + result))
            .catch(error => (console.log('error', error), alert("erro de conexão, tente novamente")));

    }

    volta() {

        //TODO CORRIGIR OS PARAMETROS DO SETSTATE - "anotacao: [{ 'conteudo': '', 'id': -1 }] }"
        // CRIEI UM this.state.paginaAtual que as vezes n seja necessário
        
        if(this.state.paginaAtual == "f" || this.state.paginaAtual == "b"){
            this.setState({ valorSwitch: 'j', anotacao: [{ 'conteudo': '', 'id': -1 }] });
        }
        else if(this.state.paginaAtual == "s"){
            if( this.state.idCam == 1){
                this.setState({ valorSwitch: 'b', anotacao: [{ 'conteudo': '', 'id': -1 }] },
                () => {
                    this.carregaAnotacao(1);
                });
            }
               
            else{
                this.setState({ valorSwitch: 'f', anotacao: [{ 'conteudo': '', 'id': -1 }] },
                () => {
                    this.carregaAnotacao(1);
                });
            }
        }
        else{
            this.setState({ valorSwitch: 's', anotacao: [{ 'conteudo': '', 'id': -1 }] },
            () => {
                this.carregaAnotacao(2);
            });
        }
        
    }
    renderSelecaoJornada() {
        return (
            <div>
                <Header  xp={this.state.user[0]['experiencia']}/>
                <div className="content">
                    <h2 className="jornadasBackFront">Jornadas</h2>
                    <div className="jornadas">
                        <a className="box-backend" onClick={() => {
                            this.setState({ valorSwitch: 'b', idCam: 1, anotacao: [{ 'conteudo': '', 'id': -1 }] }
                                , () => { this.carregaAnotacao(1); });
                        }}>
                            <strong>Backend</strong>
                        </a>

                        <a className="box-frontend" onClick={() => {
                            this.setState({ valorSwitch: 'f', idCam: 2, anotacao: [{ 'conteudo': '', 'id': -1 }] }
                                , () => { this.carregaAnotacao(1); });

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
        this.state.paginaAtual = "b";
        return (
            <>
                <Header  xp={this.state.user[0]['experiencia']}/>
                <div className="content">
                    <h2>Tópicos Backend</h2>
                    <div className="voltar" onClick={() => { this.volta() }}>

                        <span className="material-symbols-outlined">arrow_back</span>

                    </div>
                    <div className="topicos">
                        <ul>
                            {this.JsonToList(1)}

                        </ul>
                    </div>
                    <div>
                        <div className="field_anotacoes">
                        <h2 className="h2_anotacoes">Anotações</h2>
                        <textarea maxLength={300} name="anotacoes"  value={this.state.anotacao[0]['conteudo']}
                                placeholder="Insira suas anotações aqui" id="anotacao_back" className="campo_anotacao"
                        onChange={e => {

                                    var a = this.state.anotacao[0];
                                    a['conteudo'] = e.target.value;
                                    this.setState({ anotacao: [a] });
                                }}>
                        </textarea>

                            <button onClick={() => { this.salvaAnotacao(1) }}>Salvar Anotações</button>
                        </div>

                    </div>
                </div>
                <Footer />
            </>
        );
    }
    renderSubTDetalhes() {
        this.state.paginaAtual = "materiais";

        console.log('fn rendersubtdetalhes');
        if (this.state.detST.length <= 0) {
            return (this.renderLoading());
        }
        else {
            if(this.state.subTConcluido)
            {
                return(
                <>
                    <Header xp={this.state.user[0]['experiencia']}/>
                    <div className="content">
                        <h2>Materiais de estudo</h2> 
                        <h2> {this.state.nomeTopico}: {this.state.detST[0]['nome']}</h2>

                        <div className="voltar" onClick={() => { this.volta() }}>

                            <span className="material-symbols-outlined">arrow_back</span>

                        </div>

                        <div className="conclusaoSubtopico">
                            <h4> subt já concluido</h4>
                        </div>

                        
                        <div className="materiais descricao_materiais">
                            Descrição: 
                            <h4>
                                {this.state.detST[0]['descricao']}
                            </h4>
                        </div>

                        <div className="materiais">
                            <ul>
                                {this.JsonToList(4)}
                            </ul>
                        </div>

                        <div>

                        <div className="field_anotacoes">
                            <h2 className="h2_anotacoes">Anotações</h2>
                            <textarea maxLength={300} name="anotacoes"  value={this.state.anotacao[0]['conteudo']}
                                    placeholder="Insira suas anotações aqui" id="anotacao_materiais" className="campo_anotacao"
                            onChange={e => {

                                        var a = this.state.anotacao[0];
                                        a['conteudo'] = e.target.value;
                                        this.setState({ anotacao: [a] });
                                    }}>
                            </textarea>

                                <button onClick={() => { this.salvaAnotacao(3) }}>Salvar Anotações</button>
                            </div>

                        </div>

                    </div>
                    <Footer />
                </>);
            }
            else{
            return (
                <>
                    <Header xp={this.state.user[0]['experiencia']}/>
                    <div className="content">
                        <h2>Materiais de estudo</h2> 
                        <h2> {this.state.nomeTopico}: {this.state.detST[0]['nome']}</h2>

                        <div className="voltar" onClick={() => { this.volta() }}>

                            <span className="material-symbols-outlined">arrow_back</span>

                        </div>

                        <div className="conclusaoSubtopico">
                            <button className="buttonConcluido" onClick={() => {this.subTConcluido(this.state.detST[0]['id'])}}>Concluido </button>
                        </div>

                        
                        <div className="materiais descricao_materiais">
                            Descrição: 
                            <h4>
                                {this.state.detST[0]['descricao']}
                            </h4>
                        </div>

                        <div className="materiais">
                            <ul>
                                {this.JsonToList(4)}
                            </ul>
                        </div>

                        <div>

                        <div className="field_anotacoes">
                            <h2 className="h2_anotacoes">Anotações</h2>
                            <textarea maxLength={300} name="anotacoes"  value={this.state.anotacao[0]['conteudo']}
                                    placeholder="Insira suas anotações aqui" id="anotacao_materiais" className="campo_anotacao"
                            onChange={e => {

                                        var a = this.state.anotacao[0];
                                        a['conteudo'] = e.target.value;
                                        this.setState({ anotacao: [a] });
                                    }}>
                            </textarea>

                                <button onClick={() => { this.salvaAnotacao(3) }}>Salvar Anotações</button>
                            </div>

                        </div>

                    </div>
                    <Footer />
                </>
            );}
        }
    }
    renderSubT() {
        this.state.paginaAtual = "s";

        console.log('fn rendersubt');

        return (
            <>
                <Header  xp={this.state.user[0]['experiencia']}/>
                <div className="content">
                    <h2>ASSUNTOS SOBRE - {this.state.nomeTopico}</h2>
                    <div className="voltar" onClick={() => { this.volta() }}>

                        <span className="material-symbols-outlined">arrow_back</span>

                    </div>
                    <div className="subtopicos">
                        <ul>
                            {this.JsonToList(3)}

                        </ul>
                    </div>
                    <div>
                        <div className="field_anotacoes">
                        <h2 className="h2_anotacoes">Anotações</h2>
                        <textarea maxLength={300} name="anotacoes"  value={this.state.anotacao[0]['conteudo']}
                                placeholder="Insira suas anotações aqui" id="anotacao_sub" className="campo_anotacao"
                        onChange={e => {

                                    var a = this.state.anotacao[0];
                                    a['conteudo'] = e.target.value;
                                    this.setState({ anotacao: [a] });
                                }}>
                        </textarea>

                            <button onClick={() => { this.salvaAnotacao(2) }}>Salvar Anotações</button>
                        </div>

                    </div>

                </div>
                <Footer />
            </>
        );
    }

    renderFrontend() {
        this.state.paginaAtual = "f";
        return (
            <>
                <Header  xp={this.state.user[0]['experiencia']}/>
                <div className="content">
                    <h2>Tópicos Frontend</h2>
                    <div className="voltar" onClick={() => { this.volta() }}>

                        <span className="material-symbols-outlined">arrow_back</span>

                    </div>
                    <div className="topicos">
                        <ul>
                            {this.JsonToList(2)}

                        </ul>
                    </div>
                    <div>
                        <div className="field_anotacoes">
                        <h2 className="h2_anotacoes">Anotações</h2>
                        <textarea maxLength={300} name="anotacoes"  value={this.state.anotacao[0]['conteudo']}
                                placeholder="Insira suas anotações aqui" id="anotacao_front" className="campo_anotacao"
                        onChange={e => {

                                    var a = this.state.anotacao[0];
                                    a['conteudo'] = e.target.value;
                                    this.setState({ anotacao: [a] });
                                }}>
                        </textarea>

                            <button onClick={() => { this.salvaAnotacao(1) }}>Salvar Anotações</button>
                        </div>


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


        switch (this.state.valorSwitch) {
            case 'f': {
                return (
                    this.renderFrontend());
            }
            case 'b': {
                return (
                    this.renderBackend());
            }
            case 'j': {
                return (
                    this.renderSelecaoJornada());
            }
            case 's': {
                return (
                    this.renderSubT());
            }
            case 'd': {
                return (
                    this.renderSubTDetalhes());
            }
            default: {
                return (
                    this.renderLoading());
            }
        };

    }
}



export default Jornadas;
