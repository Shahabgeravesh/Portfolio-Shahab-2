import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Shahab Geravesh</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} SG</h3>
        </Col>
        <Col md="4" className="footer-copywright">

          <a
            href="https://github.com/Shahabgeravesh"
            target="_blank"
            rel="noreferrer"
            className="footer-copywright"
          >
            <AiFillGithub />
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a
            href="https://www.linkedin.com/in/shahabgeravesh/"
            target="_blank"
            rel="noreferrer"
            className="footer-copywright"
          >
            <FaLinkedinIn />
          </a>

        </Col>

      </Row>
    </Container>
  );
}

export default Footer;
