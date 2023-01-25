import React from "react";
import { Card } from "react-bootstrap";
import { FaMailBulk, FaLinkedin, FaGithub, FaSave } from "react-icons/fa";
import "./About.css";
// Assets
import INAIA_IMG from "../assets/images/inaia.jpeg";
import CONTACT from "../assets/images/contact.webp";
import SKILL from "../assets/images/skillimg.jpg";
import QR_CODE from "../assets/images/qrcode.svg";

// Functional component.
const About = () => {
  const aboutData = [
    {
      img: INAIA_IMG,
      altText: "profile picture of Inaia Martin",
      description:
        "I am Inaia Martin  a dedicated professional looking for a front end developer role following my completion of the University of Denver’s FullStack BootCamp. I’m a dynamic learner (I speak native Portuguese, English and Spanish), and hard working (I completed DU’s bootcamp while working full time), and I’m excited to learn and grow in this new career. Currently working as a Freelance to improve my skills.",
    },
    {
      img: SKILL,
      altText: "animation image representing skills",
      description: (
        <ul className="hide">
          <li>HTML5</li>
          <li>CSS</li>
          <li>Bootstrap</li>
          <li>React.js</li>
          <li>JavaScript</li>
          <li>Express.js</li>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>MySQL</li>
          <li>Git</li>
          <li>Heroku</li>
        </ul>
      ),
    },

    {
      img: CONTACT,
      altText: "animation image saying: Let's Talk",
      description: (
        <ul className="hide">
          <li>
            <FaMailBulk></FaMailBulk> inaiakenia15@gmail.com
          </li>
          <li>
            <FaGithub></FaGithub>
            <a
              href="https://github.com/InaiaK"
              className="github"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <FaLinkedin></FaLinkedin>
            <a
              href="https://www.linkedin.com/in/inaia-martin/"
              className="linkedin"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
          </li>
        </ul>
      ),
    },
    {
      img: QR_CODE,
      altText: "image of MERN stack as my skills",
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

  const renderAbout = ({ img, altText, description }, index) => {
    return (
      <Card key={`about-card-${index}`} className="about-box" bg="dark">
        <Card.Img className="about-img" src={img} alt={altText} />
        <Card.Body className="card-body">
          <Card.Text className="about-text">{description}</Card.Text>
        </Card.Body>
      </Card>
    );
  };

  return <div className="grid">{aboutData.map(renderAbout)}</div>;
};

export default About;
