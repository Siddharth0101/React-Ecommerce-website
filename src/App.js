import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Store from "./pages/Store/Store";
import { useState } from "react";
import Cart from "./components/Cart/Cart";
import CardProvider from "./store/CardProvider";
import { Alert, Button } from "react-bootstrap";

function App() {
  const [show, setShow] = useState(true);
  const [errorDisplay, setErrorDisplay] = useState();
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const showOffcanvasHandler = () => {
    setShowOffcanvas(true);
  };
  const hideOffcanvasHandler = () => {
    setShowOffcanvas(false);
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/home" replace />,
    },
    {
      path: "/",
      element: <Header onShow={showOffcanvasHandler} />,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/store",
          element: <Store />,
        },
      ],
    },
  ]);
  const doubleErrorHandler = (errorCheck) => {
    setErrorDisplay(errorCheck);
  };
  return (
    <CardProvider OnDoubleError={doubleErrorHandler}>
      <div
        style={{
          backgroundColor: "grey",
          height: "117vh",
          width: "100vw",
        }}
      >
        {showOffcanvas && (
          <Cart show={showOffcanvas} OnHide={hideOffcanvasHandler} />
        )}
        <RouterProvider router={router} />
        {errorDisplay && (
          <Alert show={show} variant="danger">
            <Alert.Heading>
              <h4>Item Already Exist In Cart</h4>
            </Alert.Heading>
            <p>
              <h5>
                The item that you are trying to add already exist , make sure to
                check the cart
              </h5>
            </p>
            <hr />
            <div className="d-flex justify-content-end">
              <Button onClick={() => setShow(false)} variant="outline-danger">
                Close
              </Button>
            </div>
          </Alert>
        )}
      </div>
    </CardProvider>
  );
}

export default App;
