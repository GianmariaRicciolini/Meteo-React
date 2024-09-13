import React, { useEffect, useState } from "react";
import AlertHelp from "./AlertHelp";
import { Container } from "react-bootstrap";
import RadomCity from "./RandomCity";

function HomePage() {
  return (
    <Container fluid style={{ minHeight: "100vh" }}>
      <AlertHelp />
      <RadomCity />
    </Container>
  );
}

export default HomePage;
