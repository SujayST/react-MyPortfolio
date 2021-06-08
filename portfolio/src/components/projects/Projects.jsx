import "./projects.scss"
import React from "react";
import SlidingContainer from "react-sliding-container";
import Slide from "react-sliding-container/lib/components/Slide";
import fiveg from  "../../assets/images/5g.jpg";
import bot from  "../../assets/images/bot.png";
import gesture from  "../../assets/images/gesture.jpg";
import books from  "../../assets/images/books.png";
import resume from "../../assets/images/resume.png";
import "./dang.scss";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


export default function Projects(){
  return (
    <div className="projects" id="projects">
    <div className="row">
        <div className="col-12 text-center py-5">
            <h1 className="display1">My Projects</h1>
            <SlidingContainer
                options={{
                    className: "sl2 my-slider",
                    height: "350px",
                    slideXMarginPx: 0,
                    showArrows: true,
                    slideYMarginPx: 0,
                    width:"1000px"
                  }} background-color="balck" >
                <Slide backgroundImage={bot} background-size="100% 100%">
                  <Card className="sl1">
                    <Card.Img variant="top" src={books} style={{width: "max" , height: 240}}/>
                    <Card.Body>
                      <Card.Title  style={{color: "#CF6679"}}>Library Management Web App</Card.Title>
                      <Card.Text >
                        This is a project for library Management using Django for backend,HTML and JavaScript for frontend,MySQL for data management <br></br>
                        <Button href="https://github.com/SujayST/Obstacle-Nature-Identifying-Blind-Guiding-Bot-" >View Project</Button> 
                      </Card.Text>         
                    </Card.Body>
                  </Card>
                </Slide>
                <Slide className="sl2">
                  <Card className="sl1">
                    <Card.Img variant="top" src={bot} style={{width: "max" , height: 240}}/>
                    <Card.Body>
                      <Card.Title  style={{color: "#CF6679"}}>Blind Guiding Bot</Card.Title>
                      <Card.Text >
                        It is a device to facilitate navigational guidance to the visually impaired people.Obstacle nature identification using OpenCV and ML algorithms  <br></br>
                        <Button href="https://github.com/SujayST/Obstacle-Nature-Identifying-Blind-Guiding-Bot-" >View Project</Button>
                      </Card.Text> 
                    </Card.Body> 
                  </Card>
                </Slide>
                <Slide className="sl2">
                  <Card className="sl1">
                    <Card.Img variant="top" src={resume} style={{marginLeft:100,width: 700 , height: 240}}/>
                    <Card.Body>
                    <Card.Title  style={{color: "#CF6679"}}>Resume Maker</Card.Title>
                    <Card.Text >
                      A flutter Application for creating and managing resumes and also coverting them into downloadable pdf format              <br></br>
                      <Button href="https://github.com/SujayST/Android_project_Flutter_Application" >View Project</Button>
                    </Card.Text> 
                    </Card.Body>
                  </Card>
                </Slide>
                <Slide className="sl2">
                  <Card className="sl1">
                    <Card.Img variant="top" src={fiveg} style={{width: "max" , height: 240}}/>
                    <Card.Body>
                      <Card.Title  style={{color: "#CF6679"}}>Energy Efficient Beamforming for 5g</Card.Title>
                      <Card.Text >
                        Design of  an efficient antennae array,loading it into Raytracing channel model for parameter evaluation in MATLAB.
                        <br></br>
                        <Button href="https://github.com/SindhuRBagal/Energy-efficient-beamforming-for-5g" >View Project</Button>
                      </Card.Text> 
                    </Card.Body>
                  </Card>
                </Slide>
                <Slide className="sl2">
                  <Card className="sl1">
                    <Card.Img variant="top" src={gesture} style={{width: "max" , height: 240}}/>  
                    <Card.Body>
                      <Card.Title  style={{color: "#CF6679"}}>Gesture based robotic arm</Card.Title>
                      <Card.Text >
                        Gesture based robotic arm prototype to pick and place objects by remotely controlling the model using a device.
                        <br></br>
                        <Button href="https://github.com/shivaninazare/Gesture-Controlled-Robotic-Arm" >View Project</Button>
                      </Card.Text> 
                    </Card.Body>
                  </Card>
                </Slide>
            </SlidingContainer>
        </div>
    </div>
</div>
  )
}