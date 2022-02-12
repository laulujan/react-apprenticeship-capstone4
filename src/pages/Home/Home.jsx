import React, { useState, useEffect } from 'react';
import Slider from '../../components/Slider/Slider';
import CategorySlider from '../../components/CategorySlider/CategorySlider';
import CardContainer from '../../components/CardContainer/CardContainer';
import { Container, Title, Button, LinkTo } from './Home.styled';
import { fetchdata } from '../../api/fetchData';

const Home = () => {
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
      <Button>
        <LinkTo to="products">View all products</LinkTo>
      </Button>
    </Container>
  );
};

export default Home;
