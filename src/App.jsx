import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css"; 
import Cart from "./Cart";

import Home from "./Home";
import Veg from "./Veg";
import NonVeg from "./Nonveg";
import About from "./About";
import Contact from "./Contact";
import { useSelector } from "react-redux";

function App() {
  const cartItems = useSelector((state) => state.cart); // ✅ renamed to avoid conflict
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0); // ✅

  return (
    <Router>
      <div className="app">
        {/* Navbar */}
        <nav className="navbar">
          <div className="logo">
            <Link to="/">FoodieMart</Link>
          </div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/veg">Veg</Link></li>
            <li><Link to="/nonveg">Nonveg</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/cart">Cart ({totalItems})</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/veg" element={<Veg />} />
          <Route path="/nonveg" element={<NonVeg />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
