import React from "react";
import './Nonveg.css';

import { useDispatch, useSelector } from "react-redux";
import { addtocart } from "./Store";

function Nonveg() {
  const dispatch = useDispatch();
  const nonvegProducts = useSelector((state) => state.products.nonveg);

  const handleAddToCart = (product) => {
    dispatch(addtocart(product));
  };

  return (
    <div className="page-content">
      <h1>Non-Veg Items</h1>
      <ul className="product-list">
        {nonvegProducts.map((product, index) => (
          <li key={index} className="product-item">
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <img src={`images/${product.image}`} alt={product.name} width="100" />
            <button onClick={() => handleAddToCart(product)}>Add to cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Nonveg;
