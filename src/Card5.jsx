import Accordion from 'react-bootstrap/Accordion';

export default function Card5() {
  return (
    <div className="card" style={{backgroundColor:"black",color:"white"}}>
        <div className="card-body">
            <center>
                <div style={{fontSize:"50px",fontWeight:"bolder"}}>
                    Frequently Asked Questions
                </div>
          </center>
          <div style={{backgroundColor:"black"}}>
            <Accordion defaultActivekey="0" style={{backgroundColor:"white"}}>
              <Accordion.Item eventKey="0">
                <Accordion.Header><text style={{color:"white"}}>Accordion Item #1</text></Accordion.Header>
                <Accordion.Body>
                  Lorem ispum dolor sit amet, consectetur adipiscing elit,sed
            eisumod tempor incididunt ut labore et dolore magna alioqua.Ut enim ad
             mini veniam,quis nostrud exercitation ullamco laboris nisi const ut
            aliquip ex ea commodo consequat.duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.Excepteur sint occaecat non proident, sunt in 
               culpa qui officia deserunt mollit anim id est laborum.                  
                </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventkey="1">
                  <Accordion.Header>Accordion Item #2</Accordion.Header>
                  <Accordion.Body>
                Lorem ispum dolor sit amet, consectetur adipiscing elit,sed
            eisumod tempor incididunt ut labore et dolore magna alioqua.Ut enim ad
             mini veniam,quis nostrud exercitation ullamco laboris nisi const ut
            aliquip ex ea commodo consequat.duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.Excepteur sint occaecat non proident, sunt in 
               culpa qui officia deserunt mollit anim id est laborum.                  
              </Accordion.Body>
                </Accordion.Item>
                </Accordion>
          </div>
        </div>
        </div>
  );
}
