import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Tushar Pandey </span>
            from <span className="purple">Uttarakhand, India.</span>
            <br />
            I am a final-year B.Tech student.
            <br />
            I am pursuing my degree at Alliance University, Bangalore.
            <br />
            <br />
            Apart from coding, here are a few things I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Football/Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">Tushar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
