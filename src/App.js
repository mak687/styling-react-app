import React from 'react';
import ProductCatalog from './components/ProductCatalog';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="App">
      <h1 className="text-center my-4">Product Catalog</h1>
      <ProductCatalog />
    </div>
  );
};

export default App;
