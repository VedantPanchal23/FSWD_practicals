import React from 'react';
import './ProductCard.css';

function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.title} className="card-image" />
      <div className="card-body">
        <h3 className="card-title">{product.title}</h3>
        <p className="card-price">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default ProductCard;