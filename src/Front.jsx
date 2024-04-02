import React from 'react'
import Navbar from "./Navbar.jsx"
import Cardcode from "./Cardcode.jsx";
import Cardcode2 from './Cardcode2.jsx';
import Card3 from "./Card3.jsx";
export default function Front() {
  return (
    <div> 
    <Navbar/>
    <hr style={{ margin:"0",height:"10px",background:"black",opacity:"0.8"}}></hr>
    <Cardcode/>
    <hr style={{ margin:"0",height:"10px",background:"black",opacity:"0.8"}}></hr>
    <Cardcode2/>
    <hr style={{margin:"0",height:"10px",background:"black",opacity:"0.8"}}></hr>
    <Card3/>
    <hr style={{margin:"0",height:"10px",background:"black",opacity:"0.8"}}></hr>
    </div>
  )
}
