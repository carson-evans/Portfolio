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
            I am currently seeking internship in the Boston area.
            <br />
            I am a sophomore at Fisher College studying Software Engineering.
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
