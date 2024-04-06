// Cart.js
import React from 'react';

function Cart({ cart }) {
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      {cart.map(item => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>${item.price}</p>
        </div>
      ))}
      <h3>Total Price: ${totalPrice}</h3>
    </div>
  );
}

export default Cart; 
