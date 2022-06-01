import React from "react";
import Header from "../../Header/Header";
import Footer from '../../Footer/Footer';
import '../../Content/styles.css'


function Ranking(){
    return(
        <div>
            <Header/>
            <div className="content">
                <h2>RANKING</h2>
            </div>
            <Footer/>
        </div>
        
    )
}

export default Ranking;