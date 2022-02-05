import React, { useState, useEffect } from 'react';
import { Container } from './CardContainer.styled';
import ProductCard from '../ProductCard/ProductCard';
import { fetchdata } from '../../api/fetchData';

const CardContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchdata(
      'https://raw.githubusercontent.com/wizelineacademy/react-apprenticeship-capstone4/main/mocks/en-us/featured-products.json'
    ).then((data) => setProducts(data.results));
  }, []);
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
