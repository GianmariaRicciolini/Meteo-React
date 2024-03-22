import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

function MyNav() {
  return (
    <Navbar expand="lg" className="bg-info-subtle">
      <Container>
        <Navbar.Brand>MyMeteo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
          </Nav>
          <SearchBar />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;
