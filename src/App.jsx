import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Pizzas from "./pages/Pizzas";
import Pizza from "./pages/Pizza";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizzas" element={<Pizzas />} />
          <Route path="/pizzas/:id" element={<Pizza />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<h1>Not Found 404</h1>} />
        </Routes>
      </div>
    </>
  );
}