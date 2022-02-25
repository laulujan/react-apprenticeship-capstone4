import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from '../../components/Slider/Slider';
import CategorySlider from '../../components/CategorySlider/CategorySlider';
import CardContainer from '../../components/CardContainer/CardContainer';
import { Container, Title, Button } from './Home.styled';
import { useProducts } from '../../provider/Provider';

const Home = () => {
  const {
    fetchFeaturedProducts,
    featuredProducts,
    setFilters,
    apiMetadata,
    getApiMetadata,
  } = useProducts();
  const { ref: apiRef, isLoading: isApiMetadataLoading } = apiMetadata;
  const navigate = useNavigate();

  useEffect(() => {
    getApiMetadata();
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    fetchFeaturedProducts(apiRef);
  }, [isApiMetadataLoading]);

  const handleClick = () => {
    setFilters('');
    navigate({
      pathname: '/products',
    });
  };
  return (
    <Container>
      <Slider />
      <Title>Categories</Title>
      <CategorySlider />
      <Title>Featured Products</Title>
      <CardContainer products={featuredProducts} />
      <Button onClick={handleClick}>View all products</Button>
    </Container>
  );
};

export default Home;
