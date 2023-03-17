import "./App.css";
import Layout from "./components/Layout.jsx";
import Heading from "./components/Heading.jsx";
import Container from "./components/Container.jsx";
import Input from "./components/Input.jsx";

function App() {
  return (
    <div>
      <Layout>
        <Container>
          <Heading>Sign up</Heading>
          <form>
            <Input name="fname" type="text" label="First name" />
          </form>
        </Container>
      </Layout>
    </div>
  );
}

export default App;
