import React from 'react';
import Gallery from '../../components/Gallery/Gallery';
import Details from '../../components/Details/Details';
import { Container, RightSide, LeftSide } from './ProductDetail.styled';

const ProductDetail = () => {
  return (
    <Container>
      <LeftSide>
        <Gallery />
      </LeftSide>
      <RightSide>
        <Details />
      </RightSide>
    </Container>
  );
};

export default ProductDetail;
