// src/Cart.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, remove } from "./Store";
import "./Cart.css";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h1>Your Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                <img src={`images/${item.image}`} alt={item.name} />
                <p>{item.name}</p>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => dispatch(increment(item))}>+</button>
                <button onClick={() => dispatch(decrement(item))}>-</button>
                <button onClick={() => dispatch(remove(item))}>remove</button>
              </li>
            ))}
          </ul>
        )}
        {cart.length > 0 && (
          <div className="cart-total">Total: ${total.toFixed(2)}</div>
        )}
      </div>
    </div>
  );
};

export default Cart;
