import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MyCard,
  CardTitle,
  CardImage,
  CardDescription,
  CardContent,
  Button,
  Box,
} from './ProductCard.styled';
import { useProducts } from '../../provider/Provider';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { fetchProductById, apiMetadata } = useProducts();
  const { ref: apiRef, isLoading: isApiMetadataLoading } = apiMetadata;

  const handleClic = (id) => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }
    fetchProductById(apiRef, id);
    navigate({
      pathname: `/product/${id}`,
    });
  };
  return (
    <>
      <MyCard onClick={() => handleClic(product.id)}>
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
