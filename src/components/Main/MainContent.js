import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Main.css";
import Footer from "./Footer";
import SubNav from "./SubNav";
import MainSearch from "./MainSearch";
import TutorDisplay from "./TutorsDisplay";
import ExtraInfo from "./ExtraInfo";
import Steps from "./Steps"
import Why from "./Why"

class MainContent extends Component{
render(){
    return(
        <div>
        <SubNav/>
     
      <MainSearch/>
      <TutorDisplay/>
      <ExtraInfo/>
      <Steps/>
      <Why/>
      <Footer/>
        </div>
    )
}
}
 export default MainContent;