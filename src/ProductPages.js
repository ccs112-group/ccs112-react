// ProductPages.js
import React from 'react';
import Product from './Product';

const ProductPages = ({ products, addToCart }) => {
  return (
    <div>
      {products.map(product => (
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          description={product.description}
          price={product.price}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
};

<<<<<<< HEAD
export default ProductPages;
=======
export default ProductPages
>>>>>>> ad8131fdee3bcf08933dd5a9dc3a5f5675bbecb5
