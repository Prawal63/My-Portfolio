import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import weather from "../../Assets/Projects/weather.jpeg";
import netflix from "../../Assets/Projects/movix-verse.png";
import gymfitness from "../../Assets/Projects/gymfitness.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Some <strong className="purple">Works </strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="movix-verse"
              description="It is a front end project. Reactjs, Tailwind css, javascript , APIs used for movies list, Redux Toolkit is used. "
              ghLink="https://github.com/Prawal63/movix"
              demoLink="https://movix-verse.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gymfitness}
              isBlog={false}
              title="Gym Fitness website"
              description="It is simple gym interface website. HTML, CSS, javascript and animation is used"

              
              ghLink="https://github.com/Prawal63/Gym"
              demoLink="https://gym-fitnesss.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard 
              imgPath={weather}
              isBlog={false}
              title="Weather Report"
              description="Tells the weather information of cities. HTML, CSS, javascript and API is used."
              ghLink="https://github.com/Prawal63/weather-report"
              demoLink="https://prawal63.github.io/weather-report/"
            />
          </Col>

         

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
