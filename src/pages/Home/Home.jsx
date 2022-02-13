import React, { useEffect } from 'react';
import Slider from '../../components/Slider/Slider';
import CategorySlider from '../../components/CategorySlider/CategorySlider';
import CardContainer from '../../components/CardContainer/CardContainer';
import { Container, Title, Button, LinkTo } from './Home.styled';
import { useProducts } from '../../provider/Provider';
import { useLatestAPI } from '../../utils/hooks/useLatestAPI';

const Home = () => {
  const { fetchFeaturedProducts, products } = useProducts();
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }
    fetchFeaturedProducts(apiRef);
  }, [isApiMetadataLoading]);
  return (
    <Container>
      {console.log(products)}
      <Slider />
      <Title>Categories</Title>
      <CategorySlider />
      <Title>Featured Products</Title>
      <CardContainer products={products} />
      <Button>
        <LinkTo to="/products">View all products</LinkTo>
      </Button>
    </Container>
  );
};

export default Home;
