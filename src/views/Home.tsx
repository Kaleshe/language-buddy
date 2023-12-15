import { Link } from "react-router-dom";

import Container from "../components/Container.jsx";
import Heading from "../components/Heading.jsx";
import Button from "../components/Button.jsx";

const Home = () => (
  <Container className="space-y-8 text-center">
    <Heading>Get Started</Heading>

    <Button>
      <Link to="/signup">Sign up</Link>
    </Button>
  </Container>
);

export default Home;
