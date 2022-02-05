import React from 'react';
import {
  MyCard,
  CardTitle,
  CardImage,
  CardDescription,
  CardContent,
} from './ProductCard.styled';

const ProductCard = ({ product }) => {
  return (
    <>
      <MyCard>
        <CardImage src={product.data.mainimage.url} />
        <CardContent>
          <CardTitle>{product.data.name}</CardTitle>
          <CardDescription>Price: ${product.data.price}</CardDescription>
        </CardContent>
      </MyCard>
    </>
  );
};

export default ProductCard;
