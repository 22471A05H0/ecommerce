import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <section className="section animated fade-in">
        <h1 className="text-4xl font-bold mb-4 text-green-700">About FoodieMart</h1>
        <p className="text-lg">
          <strong>FoodieMart</strong> is your trusted online destination for fresh and delicious food. Whether you love wholesome vegetarian dishes or flavorful non-veg meals, we bring the best of both worlds right to your doorstep.
        </p>
        <p className="mt-2">
          Our ingredients are carefully sourced, hygiene-tested, and quality-checked — giving you a premium food experience, every time.
        </p>
      </section>

      <section className="section animated slide-in-left">
        <h2 className="text-3xl font-semibold mb-4 text-green-600">🥦 Vegetarian Selections</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Fresh produce like tomatoes, spinach, broccoli, and more</li>
          <li>Seasonal and tropical fruits</li>
          <li>Vegan & plant-based ready meals (e.g., Veg Biryani, Soya Curry)</li>
          <li>Organic grains, pulses, and health-conscious options</li>
          <li>Dairy-free alternatives</li>
        </ul>
      </section>

      <section className="section animated slide-in-right">
        <h2 className="text-3xl font-semibold mb-4 text-red-600">🍗 Non-Vegetarian Delights</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Farm-fresh chicken, mutton, and eggs</li>
          <li>Fresh and frozen seafood options</li>
          <li>Ready-to-cook meat packs and BBQ specials</li>
          <li>Protein-rich frozen meals for busy days</li>
        </ul>
      </section>

      <section className="section animated zoom-in">
        <h2 className="text-3xl font-semibold mb-4 text-blue-600">🚚 Fast & Safe Delivery</h2>
        <p className="text-lg">
          Our logistics partners ensure timely and safe delivery with temperature-controlled packaging to preserve freshness and flavor.
        </p>
      </section>

      <section className="section animated fade-in-up">
        <h2 className="text-3xl font-semibold mb-4 text-purple-600">❤️ Our Commitment</h2>
        <p className="text-lg">
          At FoodieMart, our mission is to promote convenient, healthy, and delightful eating. We’re not just an eCommerce store — we’re your food partner.
        </p>
      </section>
    </div>
  );
}

export default About;
