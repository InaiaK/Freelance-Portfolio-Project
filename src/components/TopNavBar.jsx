import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
import "./TopNavBar.css";
// Componentes
import "./Home";
import "./About";
import "./Contact";
import { VscAccount } from "react-icons/vsc";

function TopNavBar() {
  return (
    <Navbar className="navbar" expand="lg">
  <LinkContainer to="home">
        <Navbar.Brand className="brand"> <VscAccount></VscAccount> Carolina Vieira</Navbar.Brand>
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
          <LinkContainer to="/contact">
            <Nav.Link>Contact</Nav.Link>
          </LinkContainer>
        </Nav>    
      </Navbar.Collapse>
    </Navbar>
  );
}

export default TopNavBar;
