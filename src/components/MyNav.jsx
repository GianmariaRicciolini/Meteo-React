import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

function MyNav() {
  return (
    <Navbar expand="md" className="bg-black text-light">
      {/* Navbar for medium screens and above */}
      <Container fluid className="d-none d-md-flex justify-content-between">
        <Nav className="me-auto">
          <Nav.Link className="text-light fw-bold" as={Link} to="/">
            <p className="m-0 fs-2">Home</p>
          </Nav.Link>
        </Nav>
        <SearchBar />
      </Container>

      {/* Burger Navbar for small screens */}
      <Container fluid className="d-flex d-md-none justify-content-end">
        {/* Toggle button for burger menu */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 bg-light me-4">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        {/* Collapsible menu */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="text-light fw-bold text-end" as={Link} to="/">
              <p className="m-0 fs-2 me-4">Home</p>
            </Nav.Link>
            {/* Right side (SearchBar on small screens) */}
            <SearchBar />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;
