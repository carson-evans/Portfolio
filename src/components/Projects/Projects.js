import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import calculator from "../../Assets/Projects/calculator.png";
import drumKit from "../../Assets/Projects/drumKit.png";
import chatBot from "../../Assets/Projects/chatBot.png";
import quote from "../../Assets/Projects/quote.png";
import azure from "../../Assets/Projects/azure.png";
import emotion from "../../Assets/Projects/emotion.png";
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
              imgPath={emotion}
              isBlog={false}
              title="IBM Watson Emotion Analysis API"
              description="Simple python web application that uses the IBM Watson API to detect emotions in a given text. This application only works on IBM Cloud due to security checks."
              ghLink="https://github.com/carson-evans/AI-Emotion-Detection-IBM-Watson"
              
            />
          </Col>


        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={azure}
              isBlog={false}
              title="GPT-4.0 Azure Chat Bot API"
              description="Developed using Node.js and Express framework, integrating OpenAI's GPT-4.0 for AI-driven conversational capabilities"
              ghLink="https://github.com/carson-evans/GPT-API"
              
            />
          </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatBot}
              isBlog={false}
              title="AI Chat bot"
              description="Building an artificial intelligence using HuggingFace transformers library and Gradio with Microsoft DialoGPT large model."
              ghLink="https://github.com/carson-evans/AI-ChatBot"
              demoLink="https://huggingface.co/spaces/carsonevans/AI-ChatBot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculator}
              isBlog={false}
              title="Calculator"
              description="JavaScript calculator web application built using React.js. It features a user interface for inputting calculations and displays results in real-time, styled with CSS and using React for dynamic interactivity."
              ghLink="https://gist.github.com/carson-evans/d83d5ebaa81f2c1ae37ec39587578c0c"
              demoLink="https://codepen.io/carson-evans/pen/xxMyBOG"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={drumKit}
              isBlog={false}
              title="Drum Kit"
              description="Drum Machine web application built with React.js. It features a user interface that allows users to play different drum sounds and rhythms, with interactive pads and controls for power, volume, and sound selection, styled using CSS."
              ghLink="https://gist.github.com/carson-evans/5afd4c512271e48d278893a2319ddd01"
              demoLink="https://codepen.io/carson-evans/pen/JjxmzyK"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quote}
              isBlog={false}
              title="Random Quote Generator"
              description="The application is a web-based random quote generator designed with HTML, CSS, and JavaScript, leveraging jQuery and AJAX to fetch quotes from an external API. It dynamically displays these quotes and allows users to share them on social media platforms like Twitter and Tumblr."
              ghLink="https://gist.github.com/carson-evans/eed93b9c08f3f6870e8c7a0d6ac0c8ea"
              demoLink="https://codepen.io/carson-evans/pen/dyagrVv"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
