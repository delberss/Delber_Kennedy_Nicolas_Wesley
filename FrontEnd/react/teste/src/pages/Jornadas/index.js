import React from "react";
import '../Jornadas/style.css'
import Header from "../../Header/Header";
import Footer from '../../Footer/Footer';
import '../../Content/styles.css'


function Jornadas(){
    return(
        <div>
            <Header/>
            <div className="content">
                <h2>Jornadas</h2>
                <div className="jornadas">
                    <div className="backend">
                        <h2>Back-end</h2>
                        <ul>
                            <li>PYTHON</li>
                            <li>GO</li>
                            <li>JAVA</li>
                            <li>JAVASCRIPT</li>
                        </ul>
                    </div>

                    <div className="frontend">
                        <h2>Front-end</h2>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JAVASCRIPT</li>
                            <li>REACT JS</li>
                            <li>REACT NATIVE</li>
                        </ul>
                    </div>
                    
                </div>
            </div>
            <Footer/>
        </div>
        
    )
}

export default Jornadas;