import React from 'react';
import {
  MyCard,
  CardTitle,
  CardImage,
  CardDescription,
  CardContent,
} from './ProductCard.styled';

const ProductCard = () => {
  return (
    <>
      <MyCard>
        <CardImage src="https://images.prismic.io/wizeline-academy/fa394f7d-4d89-4c90-86b3-832de74928fa_1.webp?auto=compress,format" />
        <CardContent>
          <CardTitle>some title</CardTitle>
          <CardDescription>price</CardDescription>
        </CardContent>
      </MyCard>
    </>
  );
};

export default ProductCard;
