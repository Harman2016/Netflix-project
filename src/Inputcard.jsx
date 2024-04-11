import React from 'react'
import Style from "./Card.module.css";
import Nav from "./Nav.jsx";
export default function Inputcard() {
  return (
    <>
    <div 
    style={{
        background:
        'linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(" https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_large.jpg ")',
        height:"95vh",
        boxShadow:"1000px",
    }}
    >
        <Nav/>
        <div
        style={{
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
        }}
        >
            <center>
                {""}
                <div className={Style.txtcard}
                style={{color:"white"}}>
                    <b>
                        <h1 className={`${Style.txt}`} style={{fontWeight:"bolder",fontSize:"50px",marginTop:"350px",}}>
                            Unlimited movies,Tv shows and more
                        </h1>
                    </b>
                    <h4 className={Style.txt}>Watch anywhere.Cancel anytime.</h4>
                    <h5 className={Style.txt}>
                        Ready to watch? Enter your email to create or restart your
                        membership.
                    </h5>
                    <div>
                        <input
                        className={`${Style.inp}`}
                        placeholder="Email Adress"
                        type="email"
                        
                        />
                        <button
                        className="btn"
                        style={{
                        backgroundColor:"red",
                        color:"white",
                        height:"49px",
                        width:"150px",
                        fontSize:"20px",
                        }}
                        >
                            <b>Get Started</b>
                        </button>
                        </div>
                </div>
            </center>
        </div>
    </div>
    </>
  );
}
