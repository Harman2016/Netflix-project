import React from "react";
import Footer from "./Footer.jsx";
import Inputcard from "./Inputcard.jsx" ;
import Cardcode from "./Cardcode.jsx";
import Cardcode2 from "./Cardcode2.jsx";
import Card3 from "./Card3.jsx";
import Card4 from "./Card4.jsx";

export default function Front() {
  return (
    <>
    <Inputcard/>
    <hr style={{margin:"0",height:"10px",backgroundColor:"black",opacity:"0.8"}}></hr>
    <Cardcode/>
    <hr style={{margin:"0",height:"10px",backgroundColor:"black",opacity:"0.8"}}></hr>
    <Cardcode2/>
    <hr style={{margin:"0",height:"10px",backgroundColor:"black",opacity:"0.8"}}></hr>
    <Card3/>
    <hr style={{margin:"0",height:"10px",backgroundColor:"black",opacity:"0.8"}}></hr>
    <Card4/>
    <hr style={{margin:"0",height:"10px",backgroundColor:"black",opacity:"0.8"}}></hr>
    <Footer/>
  </>
  );
}
