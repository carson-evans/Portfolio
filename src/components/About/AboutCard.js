import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello everyone, my name is <span className="purple">Carson Evans, </span>
            and I'm from <span className="purple"> Dallas, Texas.</span>
            <br />
            I am currently <span className="purple">seeking an internship in the Boston area.</span>
            <br />
            I am a <span className="purple">sophomore </span> studying <span className="purple">Software Engineering at Fisher College.</span>
            <br />
            <br />
            In addition to coding, here are some other activities I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing the Guitar
            </li>
            <li className="about-activity">
              <ImPointRight /> Following UGA Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
