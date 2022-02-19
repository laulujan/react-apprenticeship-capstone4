import React, { useEffect } from 'react';
import Gallery from '../../components/Gallery/Gallery';
import Details from '../../components/Details/Details';
import Loader from '../../components/Loader/Loader';
import { Container, RightSide, LeftSide } from './ProductDetail.styled';
import { useProducts } from '../../provider/Provider';

const ProductDetail = () => {
  const { loading } = useProducts();

  useEffect(() => {
    return () => {};
  }, [loading]);

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        <>
          <LeftSide>
            <Gallery />
          </LeftSide>
          <RightSide>
            <Details />
          </RightSide>
        </>
      )}
    </Container>
  );
};

export default ProductDetail;
