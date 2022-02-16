import React from 'react';
import {
  MyCard,
  CardTitle,
  CardImage,
  CardDescription,
  CardContent,
  Button,
  Box,
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
        <Box>
          <Button>Add to Cart</Button>
        </Box>
      </MyCard>
    </>
  );
};

export default ProductCard;
