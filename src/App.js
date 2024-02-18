import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Button } from "react-bootstrap";
import Header from "./components/Layout/Header";
import Colors from "./components/Colors/Colors";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import CardProvider from "./store/CardProvider";

function App() {
  const [modalShow, setModalShow] = React.useState(false);
  const cartShow = () => {
    setModalShow(true);
  };
  const cartHide = () => {
    setModalShow(false);
  };
  return (
    <div
      style={{
        backgroundColor: "gray",
        height: "100vh",
        width: "100vw",
      }}
    >
      <CardProvider>
        <Header OnShow={cartShow} />
        <Colors />
        {modalShow && <Cart OnHide={cartHide} show={modalShow} />}
      </CardProvider>
    </div>
  );
}

export default App;
