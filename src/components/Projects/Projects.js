import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import CarPooling from "../../Assets/Projects/car.png";
import Face from "../../Assets/Projects/attendence.png";
import editor from "../../Assets/Projects/codeEditor.png";
import Photography from "../../Assets/Projects/photography.png";
import music from "../../Assets/Projects/music.png";
import finance from "../../Assets/Projects/finance.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Photography}
              isBlog={false}
              title="Photography"
              description="A Photography Website built with HTML, CSS, and JavaScript showcases portfolios with a responsive design, featuring galleries, about sections, and interactive elements like image sliders and contact forms."
              ghLink="https://github.com/Tusharpandey716/photography_website-"
              demoLink="https://ornate-kangaroo-4dddee.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={finance}
              isBlog={false}
              title="Finance-tracker"
              description="The Personal Finance Tracker is a MERN stack application designed to manage expenses and income effectively. It features an intuitive interface for tracking transactions, setting budgets, and visualizing spending with charts. Users can add, edit, or delete entries, ensuring financial control and planning with ease. Perfect for personal financial management."
              ghLink="https://github.com/Tusharpandey716/Finance-Tracker"
              //demoLink="https:///"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/Tusharpandey716/Editor-io"
              //demoLink="https:///"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CarPooling}
              isBlog={false}
              title="CarPooling"
              description="The carpooling project in Java facilitates ride-sharing by connecting drivers and passengers traveling along similar routes. It features a user-friendly interface, secure login, and real-time ride management. The system promotes cost-efficiency, reduces traffic congestion, and minimizes environmental impact by optimizing vehicle usage through effective route matching and user coordination."
              ghLink="https://github.com/Tusharpandey716/Carpooling"
              //demoLink="https://            /"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={music}
              isBlog={false}
              title="Music Player"
              description="A Music Player built using Django allows users to stream, organize, and manage their music collection. It features a user-friendly interface, playlist creation, song search, and playback controls. The backend manages data through Django models, offering a seamless experience for managing and playing music tracks."
              ghLink="https://github.com/Tusharpandey716/Music_Player"
              // demoLink="https://
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Face}
              isBlog={false}
              title="Smart_Attendance_System"
              description="The smart attendance system utilizes image recognition with OpenCV to automate attendance management. It leverages real-time facial recognition to accurately track attendance, ensuring seamless, secure, and efficient monitoring. This system enhances user convenience while maintaining data security and reducing manual errors."
              ghLink="https://github.com/Tusharpandey716/Smart_Attendance_System"
              // demoLink="https:///"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
