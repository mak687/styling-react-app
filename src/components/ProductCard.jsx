import React from 'react';
import styles from './../css/ProductCard.module.css';

const ProductCard = ({ product }) => {
  const { name, price, description, image, category, rating } = product;

  
  const categoryBackground = category === 'Electronics' ? 'bg-light' : category === 'Clothing' ? 'bg-success' : 'bg-info';

  return (

    <div className={`card ${categoryBackground} ${styles.productCard}`}>
      <div>
        <img src={image} alt={name} className="card-img" />
      </div>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">{price}</p>
        <div className={styles.rating}>
          {Array(rating)
            .fill()
            .map((_, index) => (
              <span key={index} className="text-warning">&#9733;</span> 
            ))}
        </div>
      </div>
    </div>
   
  );
};

export default ProductCard;
