import { useState } from "react";
import { Button, Card } from "react-bootstrap";
const CardUI = (props) => {
  const [data, setData] = useState([]);
  const dataHandler = () => {
    const dataStore = {
      id: props.id,
      title: props.title,
      price: props.price,
    };
    props.OnColor(dataStore);
  };
  return (
    <div>
      <Card style={{ width: "25rem" }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>
            <h4>{props.title}</h4>
          </Card.Title>
          <Card.Text>
            <h4>Price-${props.price}</h4>
          </Card.Text>
        </Card.Body>
        <div className="d-grid gap-2">
          <Button variant="primary" size="lg" onClick={dataHandler}>
            ADD TO CART
          </Button>
        </div>
      </Card>
    </div>
  );
};
export default CardUI;
