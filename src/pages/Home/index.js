import React from "react";
import Header from "../../Header/Header";
import Footer from '../../Footer/Footer';
import '../../Content/styles.css'

function Home(props){
    return(
        <div>
            <Header user = {props.user}/>  
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