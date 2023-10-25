import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./Components/Homepage";
import Swap from "./Components/Swap";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element ={<Homepage />}>
        </Route>
        <Route
          path="/swap"
          element = {<Swap />}>
        </Route>
      </Routes>
    </>
  );
}

export default App;
