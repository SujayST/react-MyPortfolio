import "./projects.scss"

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";



import su1 from "../../assets/Projects/su11.png";
import su2 from "../../assets/Projects/su2.jpg";
import su3 from "../../assets/Projects/su3.jpg";
import si4 from "../../assets/Projects/si11.png";
import sh5 from "../../assets/Projects/sh5.jpg";

function Projects() {
  return (
    <div className="projects" id="projects">
    <Container fluid className="project-section">
      
      <Container>
        <h1 className="project-heading">
          My Projects <strong className="purple"> </strong>
        </h1>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={su1}
              isBlog={false}
              title="Library Management Web App"
              description="This is a project for library Management using Django for backend,HTML and JavaScript for frontend,MySQL for data management."
              link="https://github.com/SujayST/Department_library-Django_project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={su2}
              isBlog={false}
              title="Blind Guiding Bot"
              description="It is a device to facilitate navigational guidance to the visually impaired people.Obstacle nature identification using OpenCV and ML algorithms."
              link="https://github.com/SujayST/Obstacle-Nature-Identifying-Blind-Guiding-Bot-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={su3}
              isBlog={false}
              title="Resume Maker"
              description="A flutter Application for creating and managing resumes and also coverting them into downloadable pdf format."
              link="https://github.com/SujayST/Android_project_Flutter_Application"
            />
          </Col>

       {/*<Col md={4} className="project-card">
            <ProjectCard
              imgPath={si4}
              isBlog={false}
              title="Energy Efficient Beamforming for 5g"
              description="Design of  an efficient antennae array,loading it into Raytracing channel model for parameter evaluation in MATLAB."
              link="https://github.com/SindhuRBagal/Energy-efficient-beamforming-for-5g"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sh5}
              isBlog={false}
              title="Gesture based robotic arm"
              description="Gesture based robotic arm prototype to pick and place objects by remotely controlling the model using a device."
              link="https://github.com/shivaninazare/Gesture-Controlled-Robotic-Arm"
            />
          </Col>*/}
        </Row>
        
      </Container>
    </Container>
    </div>
  );
}

export default Projects;
