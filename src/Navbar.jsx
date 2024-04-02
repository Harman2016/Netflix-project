import React from 'react'
import style from "./CardCss.module.css";
export default function Navbar() {
    return (
        <div>
            <div className="card">
                <div style={{height:"95vh" , backgroundImage:'url("https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_small.jpg")'}}>
                    <center>
                        <div style={{color:"white"}} >
                            <b><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                                {" "}
                                <h1 style={{fontSize:"40px"}}>
                                    Unlimited movies, TV shows and more
                                </h1>
                            </b>
                            <h4>
                                Watch anywhere. Cancel anytime.</h4>
                            <h5>
                                Ready to watch? Enter your email to create or restart your membership.
                            </h5>
                            <div>
                                <input
                                    placeholder="Email Adress"
                                    type="text"
                                />
                                <button
                                    className="btn"
                                    style={{
                                        backgroundColor: "red",
                                        color: "white",
                                        width: "150px",
                                        fontSize: "20px",
                                    }}
                                >
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </center>
                </div>
            </div>
        </div>
    );
}
