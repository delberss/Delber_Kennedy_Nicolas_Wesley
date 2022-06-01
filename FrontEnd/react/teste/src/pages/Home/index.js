import React from "react";
import Header from "../../Header/Header";
import Footer from '../../Footer/Footer';
import '../../Content/styles.css'

function Home(){
    return(
        <div>
            <Header/>  
            <div className="content">
                <div className="box">
                    <h2>HOME</h2>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;