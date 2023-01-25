import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
import "./TopNavBar.css";
// Componentes
import "./Home";
import "./About";
import "./Portfolio";
import { FaCode } from "react-icons/fa";

function TopNavBar() {
  return (
    <Navbar className="navbar" expand="lg">
      <LinkContainer to="home">
        <Navbar.Brand className="brand"> <FaCode></FaCode> Inaia Martin</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/home">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/portfolio">
            <Nav.Link>Portfolio</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default TopNavBar;
