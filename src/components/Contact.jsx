import React from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";

// Assets
import LOGO from "../assets/images/logo.png";
import GMAIL from "../assets/images/Gmail-Logo.png";

const Contact = () => {
  const cardData = [
    {
      img: LOGO,
      altText: "linkedin logo",
      description: (
        <a
          className="a-portfolio"
          href={"https://www.linkedin.com/in/mariacsvieira/"}
          target="_blank"
          rel="noreferrer noopener"
        >
          Carolina Vieira.
        </a>
      ),
    },
    {
      img: GMAIL,
      altText: "gmail logo",
      description: (
        <div
          onClick={(e) => {
            window.location.href = "mailto:ca.simoesvieira@gmail.com";
          }}
        >
          ca.simoesvieira@gmail.com{" "}
        </div>
      ),
    },
  ];

  const renderCard = ({ img, altText, description }, index) => {
    return (
      <Card key={`portfolio-card-${index}`} className="card-box">
        <Card.Img className="card-img-c" src={img} alt={altText} />
        <Card.Body className="card-body">
          <Button variant="dark" className="bttn-portfolio">
            {description}
          </Button>
          <Card.Text></Card.Text>
        </Card.Body>
      </Card>
    );
  };

  return <div className="grid-contact"> {cardData.map(renderCard)}</div>;
};

export default Contact;
