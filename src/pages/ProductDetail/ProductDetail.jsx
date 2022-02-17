import React, { useEffect } from 'react';
import Gallery from '../../components/Gallery/Gallery';
import Details from '../../components/Details/Details';
import { Container, RightSide, LeftSide } from './ProductDetail.styled';
import { useProducts } from '../../provider/Provider';
import { useLatestAPI } from '../../utils/hooks/useLatestAPI';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { fetchProductById } = useProducts();
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const params = useParams();

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }
    const id = params.id;
    fetchProductById(apiRef, id);
    console.log(id);
  }, [isApiMetadataLoading]);

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
