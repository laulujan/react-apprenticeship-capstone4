import React from 'react';
import Slider from '../../components/Slider/Slider';
import CategorySlider from '../../components/CategorySlider/CategorySlider';
import CardContainer from '../../components/CardContainer/CardContainer';
import { Container, Title } from './Home.styled';

const Home = () => {
  return (
    <Container>
      <Slider />
      <Title>Categories</Title>
      <CategorySlider />
      <Title>Featured Products</Title>
      <CardContainer />
    </Container>
  );
};

export default Home;
