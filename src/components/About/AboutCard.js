import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Chirag Simkhada </span>
            from <span className="purple"> Kathmandu, Nepal.</span>
            <br />I am a Senior pursuing BSc(Hons) in Computing from Coventry University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Swimming
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Everyday is an opportunity to do something new!"{" "}
          </p>
          <footer className="blockquote-footer">Chirag</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
