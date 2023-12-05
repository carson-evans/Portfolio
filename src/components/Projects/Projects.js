import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import calculator from "../../Assets/Projects/calculator.png";
import drumKit from "../../Assets/Projects/drumKit.png";
import markdown from "../../Assets/Projects/markdown.png";
import quote from "../../Assets/Projects/quote.png";
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
              imgPath={quote}
              isBlog={false}
              title="Quote Generator"
              description="A simple quote generator built with React.js. It fetches the quotes from an API and displays it on the screen."
              ghLink="https://github.com/carson-evans"
              demoLink="https://codepen.io/carson-evans/pen/dyagrVv"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculator}
              isBlog={false}
              title="Calculator"
              description="Calculator built with React.js. It takes the input from the user and performs the calculation."
              ghLink="https://github.com/carson-evans/"
              demoLink="https://codepen.io/carson-evans/pen/xxMyBOG"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={drumKit}
              isBlog={false}
              title="Drum Kit"
              description="A simple drum kit built with React.js. It takes the input from the user and plays the corresponding sound"
              ghLink="https://github.com/carson-evans/"
              demoLink="https://codepen.io/carson-evans/pen/JjxmzyK"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={markdown}
              isBlog={false}
              title="React Markdown Previewer"
              description="A simple markdown previewer built with React.js. It takes the markdown text as input and renders it as html."
              ghLink="https://github.com/carson-evans"
              demoLink="https://codepen.io/carson-evans/pen/jOdeJLd"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
