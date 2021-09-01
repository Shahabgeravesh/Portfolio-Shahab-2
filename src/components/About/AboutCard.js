import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shahab Geravesh </span>
            <br />I am a new MS Data Science graduate from UC Riverside and currently enrolled in UC Berkeley coding Bootcamp.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Play Tennis
            </li>
            <li className="about-activity">
              <ImPointRight /> Swim in the Ocean
            </li>
            <li className="about-activity">
              <ImPointRight /> Learn a new Technology
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
