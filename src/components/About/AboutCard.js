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
            I am a <span className="purple">senior </span> studying <span className="purple">Information Technology at UMass Boston.</span>
            <br />
            <br />
          </p>


        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
