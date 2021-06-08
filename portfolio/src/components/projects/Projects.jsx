import "./projects.scss"
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//import ProjectCard from "./ProjectCards";
import SlidingContainer from "react-sliding-container";
import Slide from "react-sliding-container/lib/components/Slide";
//import HorizontalScroller from 'react-horizontal-scroll-container';
//import HorizontalSlider from 'react-horizontal-slider';
import su1 from "../../assets/Projects/su11.png";
import su2 from "../../assets/Projects/su2.jpg";
import su3 from "../../assets/Projects/su3.jpg";
import si4 from "../../assets/Projects/si11.png";
import sh5 from "../../assets/Projects/sh5.jpg";
import Arrow from "react-sliding-container";

import fiveg from  "../../assets/images/5g.jpg";
import bot from  "../../assets/images/bot.png";
import gesture from  "../../assets/images/gesture.jpg";
import books from  "../../assets/images/books.png";
import resume from "../../assets/images/resume.png";
import "react-sliding-container/lib/main.css";
import { BiLinkExternal } from "react-icons/bi";
import Button from "react-bootstrap/Button";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";



    /*<div className="projects" id="projects">
    <Container fluid="true" className="project-section">
      
      <Container fluid="true">
        <h1 className="project-heading"  >
          My Projects <strong className="purple"> </strong>
        </h1>
        
        <Row lg={4} style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <HorizontalScroller>
          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={su1}
              isBlog={false}
              title="Library Management Web App"
              description="Gesture based robotic arm prototype to pick and place objects by remotely controlling the model using a device."
              link="https://github.com/SujayST/Department_library-Django_project"
            />
          </Col>

          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={su2}
              isBlog={false}
              title="Blind Guiding Bot"
              description="It is a device to facilitate navigational guidance to the visually impaired people.Obstacle nature identification using OpenCV and ML algorithms."
              link="https://github.com/SujayST/Obstacle-Nature-Identifying-Blind-Guiding-Bot-"
            />
          </Col>

          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={su3}
              isBlog={false}
              title="Resume Maker"
              description="A flutter Application for creating and managing resumes and also coverting them into downloadable pdf format."
              link="https://github.com/SujayST/Android_project_Flutter_Application"
            />
          </Col>

       <Col md={3} className="project-card">
            <ProjectCard
              imgPath={si4}
              isBlog={false}
              title="Energy Efficient Beamforming for 5g"
              description="Design of  an efficient antennae array,loading it into Raytracing channel model for parameter evaluation in MATLAB."
              link="https://github.com/SindhuRBagal/Energy-efficient-beamforming-for-5g"
            />
          </Col>

          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={sh5}
              isBlog={false}
              title="Gesture based robotic arm"
              description="Gesture based robotic arm prototype to pick and place objects by remotely controlling the model using a device."
              link="https://github.com/shivaninazare/Gesture-Controlled-Robotic-Arm"
            />
          </Col>
          </HorizontalScroller>
        </Row>
        
      </Container>
    </Container>
    </div>
  );
}*/

export default function Projects(){
  return (
    <div className="projects" id="projects">
    <div className="row">
        <div className="col-12 text-center py-5">
            <h1 className="display1">My Projects</h1>
            <SlidingContainer
                options={{
                    className: "my-slider",
                    height: "350px",
                    slideXMarginPx: 0,
                    showArrows: true,
                    slideYMarginPx: 0,
                    width:"1000px"

                }}
            >
                <Slide  background-size="100% 100%">
                  <Card>
                   <Card.Img variant="top" src={books} style={{width: "max" , height: 240}}/>
                   <Card.Body>
                   <Card.Title  style={{color: "#CF6679"}}>Library Management Web App</Card.Title>
                   <Card.Text >
                   This is a project for library Management using Django for backend,HTML and JavaScript for frontend,MySQL for data management <br></br>
                   <Button href="https://github.com/SujayST/Obstacle-Nature-Identifying-Blind-Guiding-Bot-" >
                    
                    "View Project"
                      </Button>
                   
                   </Card.Text> 
                           
                   </Card.Body>
                   <Card.Footer>
                  
                   </Card.Footer>
                   
                 </Card>
                
                </Slide>
                <Slide>
                   <Card>
                   <Card.Img variant="top" src={bot} style={{width: "max" , height: 240}}/>
                   <Card.Body>
                   <Card.Title  style={{color: "#CF6679"}}>Blind Guiding Bot</Card.Title>
                   <Card.Text >
                   It is a device to facilitate navigational guidance to the visually impaired people.Obstacle nature identification using OpenCV and ML algorithms  <br></br>
                   <Button href="https://github.com/SujayST/Obstacle-Nature-Identifying-Blind-Guiding-Bot-" >
                    
                    "View Project"
                      </Button>
                   
                   </Card.Text> 
                           
                   </Card.Body>
                   <Card.Footer>
                  
                   </Card.Footer>
                   
                 </Card>
                </Slide>
                <Slide>
                <Card>
                <Card.Img variant="top" src={resume} style={{marginLeft:100,width: 700 , height: 240}}/>
                   <Card.Body>
                   <Card.Title  style={{color: "#CF6679"}}>Resume Maker</Card.Title>
                   <Card.Text >
                   A flutter Application for creating and managing resumes and also coverting them into downloadable pdf format              <br></br>
                   <Button href="https://github.com/SujayST/Android_project_Flutter_Application" >
                    
                    "View Project"
                      </Button>
                   
                   </Card.Text> 
                           
                   </Card.Body>
                   <Card.Footer>
                  
                   </Card.Footer>
                   
                 </Card>
              
                   
                </Slide>
                <Slide>
                   <Card>
                   <Card.Img variant="top" src={fiveg} style={{width: "max" , height: 240}}/>
                   <Card.Body>
                   <Card.Title  style={{color: "#CF6679"}}>Energy Efficient Beamforming for 5g</Card.Title>
                   <Card.Text >
                   Design of  an efficient antennae array,loading it into Raytracing channel model for parameter evaluation in MATLAB.
                   <br></br>
                   <Button href="https://github.com/SindhuRBagal/Energy-efficient-beamforming-for-5g" >
                    
                    "View Project"
                      </Button>
                   
                   </Card.Text> 
                           
                   </Card.Body>
                   <Card.Footer>
                  
                   </Card.Footer>
                   
                 </Card>
                   
               
                </Slide>
                <Slide>
                <Card>
                <Card.Img variant="top" src={gesture} style={{width: "max" , height: 240}}/>  <Card.Body>
                   <Card.Title  style={{color: "#CF6679"}}>Gesture based robotic arm</Card.Title>
                   <Card.Text >
                   Gesture based robotic arm prototype to pick and place objects by remotely controlling the model using a device.
                   <br></br>
                   <Button href="https://github.com/shivaninazare/Gesture-Controlled-Robotic-Arm" >
                    
                   "View Project"
                     </Button>
                   
                   </Card.Text> 
                           
                   </Card.Body>
                   <Card.Footer>
                  
                   </Card.Footer>
                   
                 </Card>
                    </Slide>
            </SlidingContainer>
        </div>
    </div>
</div>
  )
}