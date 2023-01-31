/* eslint-disable no-unreachable */
//
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import items from "../data/fantasy.json";

const AllTheBooks = () => {
  console.log(items);

  return (
    <Container>
      {items.map((books) => {
        return (
          <div>
            <h3> {books.title} </h3>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={books.img} />
              <Card.Body>
                <Card.Title>{books.title}</Card.Title>
                <Card.Text>{books.category}</Card.Text>
                <Button variant="primary">{books.price}</Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </Container>
  );
};

export default AllTheBooks;
