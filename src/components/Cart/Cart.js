// Cart.js
import React, { useState } from "react";
import ModalUI from "../UI/ModalUI";

const dummyArray = [
  {
    id: "1",
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "blue",
  },
];

const Cart = (props) => {
  const [showCart, setShowCart] = useState(false);

  const handleToggleCart = () => {
    setShowCart((prevShowCart) => !prevShowCart);
  };

  return (
    <div>
      {dummyArray.map((item) => (
        <ModalUI show={props.show} OnHide={props.OnHide}>
          {dummyArray.map((item) => (
            <li>{item.title}</li>
          ))}
        </ModalUI>
      ))}
    </div>
  );
};

export default Cart;
