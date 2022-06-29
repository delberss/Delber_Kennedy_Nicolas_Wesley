import { useState } from "react";
import "../Header/styles.css"

function Header(props){
    //const id = props.user[0]['id'];
    const nome = "";//props.user[0]['nome'];
    const exp = "";//props.user[0]['experiencia'];

    // const [id,setid] = useState();
    
    // setid(props.user[0]['id']);
    
    // const fn = (id)=> {
    //     //setid(props.user[0]['id']);
    //     if(id != -1)
    //     {
    //          document.getElementById("login_on").style.display = 'flex';
    //          document.getElementById("login_off").style.display = 'none';
    //          console.log('header');
    //     }
    //     console.log('header 2');
    // }

    
    return(
        
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
                        <strong className="nomeUser">{nome}</strong>
                        <img className="photoUser" src="https://cdn-icons-png.flaticon.com/512/17/17004.png" alt="foto de perfil"/> 
                    </div>


                    <div className="pontuacao">
                        <strong className="xp">{exp} pontos</strong>
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