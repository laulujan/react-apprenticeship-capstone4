import React from 'react';
import { Container } from './CardContainer.styled';
import ProductCard from '../ProductCard/ProductCard';

const CardContainer = ({ products }) => {
  return (
    <>
      <Container>
        {products &&
          products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </Container>
    </>
  );
};

export default CardContainer;
