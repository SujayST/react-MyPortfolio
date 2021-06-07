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
import "react-sliding-container/lib/main.css";
import { BiLinkExternal } from "react-icons/bi";
import Button from "react-bootstrap/Button";



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
                <Slide  background-size="100% 100%"
                    backgroundImage="url('https://images.indianexpress.com/2020/04/books_759.jpg')"
                   
                >
                  <div classname="content1">
                    <h1>Library Management Web App</h1>
                    <p>This is a project for library Management using Django for backend,HTML and JavaScript for frontend,MySQL for data management.</p>
                  </div>
                    <div classname="b1" style={{position: "absolute", bottom:0, left:400 }}>
                    <Button href="https://github.com/SujayST/Department_library-Django_project" >
                    
                   "View Project"
                     </Button>
                    </div>
                </Slide>
                <Slide
                    backgroundImage="url('https://miro.medium.com/max/1600/1*g_q6YfRZfzJITJjU4enxdw.png')"
                >
                   <div classname="content2">
                    <h1 >Blind Guiding Bot</h1>
                    <p>It is a device to facilitate navigational guidance to the visually impaired people.Obstacle nature identification using OpenCV and ML algorithms</p>
                  </div>
                    <div classname="b1" style={{position: "absolute", bottom:0, left:400 }}>
                    <Button href="https://github.com/SujayST/Obstacle-Nature-Identifying-Blind-Guiding-Bot-" >
                    
                   "View Project"
                     </Button>
                    </div> 
                </Slide>
                <Slide
                    backgroundImage="url('data:image/png;base64,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')"
                >
                    <div classname="content3">
                    <h1 >Resume Maker</h1>
                    <p>A flutter Application for creating and managing resumes and also coverting them into downloadable pdf format.</p>
                  </div>
                    <div classname="b1" style={{position: "absolute", bottom:0, left:400 }}>
                    <Button href="https://github.com/SujayST/Obstacle-Nature-Identifying-Blind-Guiding-Bot-" >
                    
                   "View Project"
                     </Button>
                    </div> 
                </Slide>
                <Slide
                    backgroundImage="url('https://images.financialexpress.com/2021/04/a74.jpg')"
                >
                    <div classname="content4">
                    <h1 >Energy Efficient Beamforming for 5g</h1>
                    <p>Design of  an efficient antennae array,loading it into Raytracing channel model for parameter evaluation in MATLAB.</p>
                  </div>
                    <div classname="b1" style={{position: "absolute", bottom:0, left:400 }}>
                    <Button href="https://github.com/SindhuRBagal/Energy-efficient-beamforming-for-5g" >
                    
                   "View Project"
                     </Button>
                    </div> 
                </Slide>
                <Slide
                    backgroundImage="url('https://hackaday.com/wp-content/uploads/2015/07/687474703a2f2f7261796b616d702e6769746875622e696f2f47657374757265436f6e74726f6c6c6564526f626f7441726d2f696d616765732f70696e63682e6a7067.jpg?w=800')"
                >
                   <div classname="content5">
                    <h1 >Gesture based robotic arm</h1>
                    <p>Gesture based robotic arm prototype to pick and place objects by remotely controlling the model using a device.</p>
                  </div>
                    <div classname="b1" style={{position: "absolute", bottom:0, left:400 }}>
                    <Button href="https://github.com/shivaninazare/Gesture-Controlled-Robotic-Arm" >
                    
                   "View Project"
                     </Button>
                    </div> 
                    </Slide>
            </SlidingContainer>
        </div>
    </div>
</div>
  )
}