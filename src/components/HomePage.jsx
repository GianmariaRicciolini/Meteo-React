import AlertHelp from "./AlertHelp";
import { Container } from "react-bootstrap";

function HomePage() {
  return (
    <Container fluid style={{ minHeight: "100vh" }}>
      <AlertHelp />
    </Container>
  );
}

export default HomePage;
