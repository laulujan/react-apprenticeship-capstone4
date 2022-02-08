import React, { useState, useEffect } from 'react';
import Slider from '../../components/Slider/Slider';
import CategorySlider from '../../components/CategorySlider/CategorySlider';
import CardContainer from '../../components/CardContainer/CardContainer';
import { Container, Title, Button } from './Home.styled';
import { fetchdata } from '../../api/fetchData';

const Home = ({ onClick }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchdata(
      'https://raw.githubusercontent.com/wizelineacademy/react-apprenticeship-capstone4/main/mocks/en-us/featured-products.json'
    ).then((data) => setProducts(data.results));
  }, []);
  return (
    <Container>
      <Slider />
      <Title>Categories</Title>
      <CategorySlider />
      <Title>Featured Products</Title>
      <CardContainer products={products} />
      <Button onClick={onClick}>View all products</Button>
    </Container>
  );
};

export default Home;
