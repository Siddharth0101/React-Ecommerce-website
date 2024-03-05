import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Store from "./pages/Store/Store";
import { useState } from "react";
import Cart from "./components/Cart/Cart";
import CardProvider from "./store/CardProvider";

function App() {
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
  return (
    <CardProvider>
      <div
        style={{
          backgroundColor: "grey",
          height: "100vh",
          width: "100vw",
        }}
      >
        {showOffcanvas && (
          <Cart show={showOffcanvas} OnHide={hideOffcanvasHandler} />
        )}

        <RouterProvider router={router} />
      </div>
    </CardProvider>
  );
}

export default App;
