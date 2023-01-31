import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

function Welcome() {
  return (
    <Jumbotron>
      <h1>Ben's bookshop</h1>
      <p>Lorem Ipsum</p>
      <p>
        <Button variant="primary">Learn more</Button>
      </p>
    </Jumbotron>
  );
}

export default Welcome;
