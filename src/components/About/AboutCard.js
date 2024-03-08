import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone, I am <span className="purple">Carson Evans </span>
            from <span className="purple"> Carrollton, Texas.</span>
            <br />
            I am currently <span className="purple">seeking an internship in the Boston area.</span>
            <br />
            I am a <span className="purple">sophomore at Fisher College</span> studying <span className="purple">Software Engineering.</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Guitar
            </li>
            <li className="about-activity">
              <ImPointRight /> UGA Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Look forward to hearing from you."{" "}
          </p>
          <footer className="blockquote-footer">Carson Evans</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
