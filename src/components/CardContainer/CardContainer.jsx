import React from 'react';
import { Container } from './CardContainer.styled';
import ProductCard from '../ProductCard/ProductCard';

const CardContainer = () => {
  return (
    <>
      <Container>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Container>
    </>
  );
};

export default CardContainer;
