import React from 'react';

const AllCart = ({ cart }) => {
  const total = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div>
      <h2>Your Cart </h2>
      <ul>
        {cart.map(product => (
          <li key={product.id}>{product.name} - ${product.price}</li>
        ))}
      </ul>
      <p>Total Price: ${total.toFixed(2)}</p>
    </div>
  );
};

export default AllCart;