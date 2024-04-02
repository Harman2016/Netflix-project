import React from 'react'
import Card from 'react-bootstrap/Card';
import style from "./CardCss.module.css";
import{Col,Row} from "react-bootstrap";
export default function Cardcode() {
  return (
    <>
    <div style={{backgroundColor:"black",color:"white"}}className="card" >
    <Row className="p-4">
      <Col className="pt-5">
      <h1 style={{marginLeft:"100px",marginTop:"20px"}}> Enjoy on Your TV</h1>
      <p className="pt-4" style={{marginLeft:"100px"}}>
        {""}
         Watch on smart TVs, PlayStation, Xbox,
        Chromecast, Apple TV, Blu-ray players and more.{""}
        </p>
        </Col>
        <Col
        style={{
          display:"flex",
          alignContent:"right",
          justifyContent:"right",
      }}
        >
        <img 
        className="p-0"
        height={403}
        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"/>
        <video style={{width:390}}
        autoPlay
        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"/>
</Col>
</Row>
</div>
</>
      );
 }
