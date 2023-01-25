import React from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Portfolio.css";
// Assets
import WORK from "../assets/images/work.gif";
import SOCIAL from "../assets/images/social1.png";
import PASSWORD from "../assets/images/password.gif";
import COMING from "../assets/images/coming.gif";

const Portfolio = () => {
  const cardData = [
    {
      img: WORK,
      altText: "An animation showing use of the work plan app",
      title: "Work Planner",
      deployed: "https://inaiak.github.io/Work-planner/",
      description:
        " A simple calendar application that allows a user to save events for each hour of the day. Included JQuery Moment.js.",
    },
    {
      img: SOCIAL,
      altText: "An image showing many icons from social media app",
      title: "Social Network ",
      deployed: "https://github.com/InaiaK/NoSQL-Social-Network",
      description:
        "API for a social network web application where users can share their thoughts, react to friends’ thoughts.",
    },

    {
      img: PASSWORD,
      altText: "An animation showing use of the Password app",
      title: "Password Generator",
      deployed: "https://inaiak.github.io/Password-generator/",
      description:
        " An application that enables employees to generate random passwords based on criteria that they’ve selected. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code.clean and polished, responsive user interface that adapts to multiple screen sizes.",
    },
    {
      img: COMING,
      altText: "An animation showing coming word",
      title: "Future Project",
      deployed: " ",
      description: " ",
    },
  ];

  const renderCard = ({img, altText, title, description, deployed}, index) => {
    return (
      <Card key={`portfolio-card-${index}`} className="card-box">
        <Card.Img  src={img} alt={altText} />
        <Card.Body className="card-body">
          <Button variant="dark" className="bttn-portfolio">
            <a
              className="a-portfolio"
              href={deployed}
              target="_blank"
              rel="noreferrer noopener"
            >
              {title}
            </a>
          </Button>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    );
  };

  return <div className="grid"> {cardData.map(renderCard)}</div>;
};

export default Portfolio;
