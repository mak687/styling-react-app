import React from 'react';
import ProductCard from './ProductCard';
import styles from './../css/ProductCatalog.module.css';

const products = [
  {
    id: 1,
    name: 'Smartphone',
    price: '$299',
    description: 'Latest model with all-new features.',
    image: 'https://image.similarpng.com/very-thumbnail/2020/09/Nokia-8-black-mobile-phone-on-transparent-background-PNG.png',
    category: 'Electronics',
    rating: 4,
  },
  {
    id: 2,
    name: 'T-shirt',
    price: '$19',
    description: '100% cotton, very comfortable.',
    image: 'https://www.pngplay.com/wp-content/uploads/12/Crew-Neck-T-Shirt-Background-PNG.png',
    category: 'Clothing',
    rating: 3,
  },
  {
    id: 3,
    name: 'T-shirt-2',
    price: '$15',
    description: '100% cotton, very comfortable.',
    image: 'https://www.pngplay.com/wp-content/uploads/12/Crew-Neck-T-Shirt-Background-PNG.png',
    category: 'Others',
    rating: 4,
  },
];

const ProductCatalog = () => {
  return (
    <div className={`container ${styles.catalogContainer}`}>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;
