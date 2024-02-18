import { Button, Card } from "react-bootstrap";

const CardUI = (props) => {
  const submitHandler = () => {
    const data = {
      id: props.id,
      title: props.title,
      price: props.price,
    };
    props.data(data);
  };
  return (
    <div>
      <Card style={{ width: "25rem" }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title style={{ textAlign: "center" }}>
            <h2>{props.title}</h2>
          </Card.Title>
          <Card.Text style={{ fontWeight: "bold" }}>
            <h4> Price-${props.price}</h4>
          </Card.Text>
        </Card.Body>
        <Button variant="primary" size="lg" onClick={submitHandler}>
          ADD TO CART
        </Button>
      </Card>
    </div>
  );
};
export default CardUI;
