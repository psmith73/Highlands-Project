import React from 'react';
import ProductItem from './ProductItem';


const ProductContainer = props => {
  const products = props.products;

  return (
    <div className="prod">
      {products.map((product, index) => {
        return <ProductItem 
                key={index} 
                data={product} 
                search={props.search}                     
                />;
      })}
    </div>
  );
};

export default ProductContainer;