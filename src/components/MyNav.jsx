import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

function MyNav({ uniqueCities }) {
  return (
    <Navbar expand="md" className="bg-black text-light">
      {/* Navbar for medium screens and above */}
      <Container fluid className="d-none d-md-flex justify-content-between">
        <Nav className="me-auto">
          <Nav.Link className="text-light fw-bold" as={Link} to="/">
            <p className="m-0 fs-2 ms-4">Home</p>
          </Nav.Link>
        </Nav>
        <SearchBar uniqueCities={uniqueCities} />
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
            <SearchBar uniqueCities={uniqueCities} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;
