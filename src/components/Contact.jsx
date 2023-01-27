import React from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";
//FaMailBulk, FaLinkedin, FaGithub
// Assets
import LOGO from "../assets/images/logo.png";
import GMAIL from "../assets/images/Gmail-Logo.png";

const Contact = () => {
  const cardData = [
    {
      img: LOGO,
      altText: "linkedin logo",
      title: "Carolina Vieira",
      deployed: "www.linkedin.com/in/mariacsvieira",
     },
     {
      img: GMAIL,
      altText: "gmail logo",
      title: "Carolina Vieira",
      deployed: "ca.simoesvieira@gmail.com",
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

export default Contact;


    // {
    //   title: "CONTACT",
    //   description: (
    //     <ul className="hide">
    //       <li>
    //         <FaMailBulk></FaMailBulk> inaiakenia15@gmail.com
    //       </li>
    //       <li>
    //         <FaGithub></FaGithub>
    //         <a
    //           href="https://github.com/InaiaK"
    //           className="github"
    //           target="_blank"
    //           rel="noreferrer"
    //         >
    //           GitHub
    //         </a>
    //       </li>
    //       <li>
    //         <FaLinkedin></FaLinkedin>
    //         <a
    //           href="https://www.linkedin.com/in/inaia-martin/"
    //           className="linkedin"
    //           target="_blank"
    //           rel="noreferrer"
    //         >
    //           Linkedin
    //         </a>
    //       </li>
    //     </ul>
    //   ),
    // },