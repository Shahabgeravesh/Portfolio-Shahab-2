import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";


function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        // upadteSpojRank(res.data.message[0].spojRank);
        // upadteHackerank(res.data.message[1].hackerrank);
        // upadteCgpa(res.data.message[2].cgpa);
        // upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="VMware. Inc (Contract) Program Manager- Data Analysts"
              date="Mar 2019 - Present"
              content={[
                " Interpreted and analyzed global incident data with python, and Apache Spark",
                " Developed deep learning architectures such as CNN and RNN Machine learning algorithms to classify global incidents data",
                " Collaborated with the data analytics team to extract and validate the global badging data and report the global employee attendance by site during pandemic",
                " Delivered various Ad-Hoc reports by writing complex SQL queries from multiple databases and developed dashboards by data visualization tools such as Power BI and Tableau",
                " Established and tracked department metrics and KPIs by building interactive dashboards with Tableau and Power BI",
                " Oversaw $3M plus budget, incident data, training and compliance, workday data, global alarm data, access control and badging data and ensured the data quality, and consistency",
                " Maintained database, processed, and refined raw data by using Python modules and Java for data analysis",
                " Wrote python program usage guides and manual for technical and non-technical audience",
                " Oversee the day-to-day operations of the Physical Security program at VMware headquarters, a 105-acre tech campus that has 21 buildings and 50+ Security personnel",
                " Lead and conduct investigations; serve as an escalation point for operational emergencies, incidents, thefts and all issues or concerns"
              ]}
            />
            <Resumecontent
              title="Graduate Data Science Researcher"
              date="Apr 2019 to January 2021"
              content={[
                " Developed probabilistic Machine Learning models such as Convolutional neural networks, Bayesian sentiment to classify opinions from a text which detects emotions and sarcasm by assigning polarity to a piece of text",
                " Designed a simple architecture of MLP which can recognize 6 human activities accurately and measured the accuracy, precision, recall, f1 score and Cohn’s Kappa to evaluate the model. The model has the accuracy of 95%."

              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="MS Data Science Engineering, UC Riverside"
              date="Jan 2021"
              content={[]}
            />
            <Resumecontent
              title="BS Business Information Systems, UC Riverside"
              date="Mar 2019"
              content={[]}
            />
            <Resumecontent
              title="Coding BootCamp, UC Berekley "
              date="EXP 2021"
              content={[]}
            />
          </Col>
        </Row>

      </Container>
    </Container>
  );
}

export default Resume;
