<<<<<<< HEAD
// CartSummary.js
=======
>>>>>>> 0cccea65ae057d3d16467c00feb14d62c6a4e321
import React from 'react';

const CartSummary = ({ cart }) => {
  // Calculate total price
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div>
      <h2>Cart Summary</h2>
      <ul>
        {cart.map(product => (
          <li key={product.id}>{product.name} - ${product.price}</li>
        ))}
      </ul>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
    </div>
  );
};
<<<<<<< HEAD

export default CartSummary;
=======
>>>>>>> 0cccea65ae057d3d16467c00feb14d62c6a4e321
