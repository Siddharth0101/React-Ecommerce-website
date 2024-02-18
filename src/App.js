import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Button } from "react-bootstrap";
import Header from "./components/Layout/Header";
import Colors from "./components/Colors/Colors";
import Cart from "./components/Cart/Cart";
import { useState } from "react";

function App() {
  const [modalShow, setModalShow] = React.useState(false);
  const cartShow = () => {
    setModalShow(true);
  };
  const cartHide = () => {
    setModalShow(false);
  };
  return (
    <div>
      <Header OnShow={cartShow} />
      <Colors />
      {modalShow && <Cart OnHide={cartHide} show={modalShow} />}
    </div>
  );
}

export default App;
