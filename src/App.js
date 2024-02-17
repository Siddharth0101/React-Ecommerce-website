import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-bootstrap";
import Header from "./components/Layout/Header";
import Colors from "./components/Colors/Colors";

function App() {
  return (
    <div>
      <Header />
      <Colors />
    </div>
  );
}

export default App;
