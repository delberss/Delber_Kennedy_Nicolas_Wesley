import React, { Component } from "react";
import '../Jornadas/style.css'
import Header from "../../Header/Header";
import Footer from '../../Footer/Footer';
import '../../Content/styles.css'

class Jornadas extends Component {
    
    constructor(props) {
        
        super(props);
        this.state = {user : props.user};
        console.log('jornadas');
        console.log(this.state.user[0]['id']);
        
    }
    
    render() 
    {   
        
        return(
            <div>
                <Header user={this.state.user} />
                <div className="content">
                    <h2 className="jornadasBackFront">Jornadas</h2>
                    <div className="jornadas">
                        <a className="box-backend" href="/jornadaback">
                            <strong>Backend</strong>
                        </a>
    
                        <a className="box-frontend" href="/jornadafront">
                            <strong>Frontend</strong>
                        </a>
                        
                    </div>
                </div>
                <Footer/>
            </div>
            
        );
    }
}



export default Jornadas;
