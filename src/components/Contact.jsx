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
      description: (    <a
        className="a-portfolio"
        href={"https://www.linkedin.com/in/mariacsvieira/"}
        target="_blank"
        rel="noreferrer noopener"
      >
     Carolina Vieira. 
      </a>),
     },
     {
      img: GMAIL,
      altText: "gmail logo",
      description: "ca.simoesvieira@gmail.com",
     },
    
  ];

  const renderCard = ({img, altText,description}, index) => {
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