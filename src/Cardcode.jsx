import React from 'react'
import{Col,Row} from "react-bootstrap";
export default function Cardcode() {
  return (
    
    <div  className="card"style={{backgroundColor:"black",color:"white"}} >
    <div className="card-body">
    <Row style={{height:"70vh"}}>
    <Col style={{marginTop:"10%"}}>  <center>
                 <div style={{fontSize:"50px", fontWeight:"bolder"}}>Enjoy on your TV</div></center>
                <h4 style={{marginLeft:"23%" , marginTop:"10px"}}>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h4>
                </Col>
                <Col style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                  <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"/>
        
      <video style={{position:"absolute",marginBottom:"90px",height:"36vh",marginRight:"100px"}} autoPlay loop playsInline muted src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"></video>

</Col>
</Row>
</div>
</div>
 );
 }
