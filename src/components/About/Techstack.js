import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,


} from "react-icons/di";
import { SiPytorch, SiTensorflow, SiPowerbi, SiTableau } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h6> JavaScirpt</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h6> Node.js</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h6> React.js</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <h6> MongoDB</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <h6> python</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch />
        <h6> pytorch</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
        <h6> Tensorflow</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTableau />
        <h6> Tableau</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi />
        <h6> PowerBI</h6>
      </Col>
    </Row>
  );
}

export default Techstack;
