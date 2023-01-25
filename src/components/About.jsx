import React from "react";
import { Card } from "react-bootstrap";
import { FaSave } from "react-icons/fa";
import "./About.css";

// Functional component.
const About = () => {
  const aboutData = [
    {
      title: "ABOUT",
      description: (
        <p className="hide">
          I am Carolina XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
        </p>
      ),
    },

    {
      title: "SKILLS",
      description: (
        <ul className="hide">
          <li>HTML5</li>
          <li>CSS</li>
          <li>Bootstrap</li>
          <li>React.js</li>
          <li>JavaScript</li>
        </ul>
      ),
    },

    {
      title: "RESUME",
      description: (
        <p className="hide">
          <FaSave></FaSave>
          <a
            href="https://drive.google.com/file/d/1LhkbCpvVfNl6QlyBv85pk1q_oZ3mW99g/view?usp=share_link"
            className="resume"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </p>
      ),
    },
  ];

  const renderAbout = ({ title, description }, index) => {
    return (
      <Card key={`about-card-${index}`} className="about-box" bg="dark">
        <Card.Body className="card-body">
          {title}
          <Card.Text className="about-text">{description}</Card.Text>
        </Card.Body>
      </Card>
    );
  };

  return <div className="grid">{aboutData.map(renderAbout)}</div>;
};

export default About;