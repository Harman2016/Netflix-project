import React from "react";
import { Col, Row } from "react-bootstrap";
export default function Cardcode2() {
    return (
        <div className="card" style={{ background: "black", color: "white" }}>
            <div className="card-body">
                <Row style={{ height: "80vh" }}>
                    <Col
                        style={{
                            display: "flex",
                            justifyContent: "end",
                            alignItems: "center",
                        }}
                    >
                        <div>
                            <img style={{ height: "350px", marginRight: "85px" }} src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" />
                            <Row
                                style={{
                                    border: "solid",
                                    position: "absolute",
                                    width: "350px",
                                    marginLeft: "60px",
                                    marginRight: "70px",
                                    marginBottom: "70px",
                                    marginTop: "-60px",
                                    backgroundColor: "black",
                                    borderRadius: "10px",
                                    height: "20%",
                                }}
                            >
                                <img
                                    style={{ width: "75px", height: "80%" }}
                                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                                ></img>
                                <Col style={{marginTop:"4px"}}>
                                    <h6 className="mt-4" style={{ marginLeft: "-5px",fontWeight: "bold", fontSize: "17px" }}>Stranger Things</h6>
                                    <h6 className="text-primary" style={{ marginLeft: "-7px",fontSize: "17px" }}> Downloading....</h6>
                                </Col>
                                <Col style={{margin:"0",padding:"0"}}>
                                    <img
                                        style={{ height: "8vh", marginLeft: "40px", marginTop: "30px" }}
                                        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif" />
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <div style={{ width: "400", marginRight: "70px" }}>
                            <p style={{ fontSize: "72px", fontWeight: "bolder" }}>
                                Download your shows to watch offline
                            </p>
                            <p style={{ fontSize: "35px" }}>
                                Save your favorites easily and always have something to watch.
                            </p>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
};
