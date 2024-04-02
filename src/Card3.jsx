import {Row,Col} from "react-bootstrap";
export default function Card3() {
  return (
    <div className="card" style={{backgroundColor:"black",color:"white"}}>
        <div className="card-body">
            <Row style={{height:"70vh"}}>
                <Col style={{marginTop:"10%"}}>
                    {""}
                    <center>
                        <div style={{fontSize:"50px",fontWeight:"bolder"}}>
                            Watch everywhere
                        </div>
                    </center>
                    <h4 style={{ marginLeft:"150px",marginTop:"10px"}}>
                        Stream unlimted movies and TV shows on your phone, tablet,
                        laptop,and tv.
                    </h4>
                </Col>
                <Col
                style={{
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                }}
                >
                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"></img>
                <video
                style={{
                    postion:"absolute",
                    marginBottom:"240px",
                    marginRight:"120px",
                    height:"300px",
                    width:"330px"
                }}
                autoPlay playsInline muted loop
                 src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
                ></video>
                </Col>
            </Row>
        </div>
    </div>
  );
}
