import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="home-overlay">
        <h1 className="home-title">Welcome to <span className="brand-name">FoodieMart</span></h1>
        <p className="home-subtitle">Wholesome Meals, Delivered Fast 🍽️</p>
        <p className="home-description">
          From farm-fresh veggies to sizzling meat delicacies, FoodieMart brings culinary joy to your doorstep. 
          Trust us for taste, speed, and satisfaction – every time you order.
        </p>
        <div className="home-buttons">
          <a href="/veg" className="home-button green">🌱 Explore Veg</a>
          <a href="/nonveg" className="home-button red">🍖 Explore Non-Veg</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
