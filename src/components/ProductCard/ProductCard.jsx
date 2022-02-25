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
  const { fetchProductById, apiMetadata, addToCart, cartItems } = useProducts();
  const { ref: apiRef, isLoading: isApiMetadataLoading } = apiMetadata;

  const handleClick = (id) => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }
    fetchProductById(apiRef, id);
    navigate({
      pathname: `/product/${id}`,
    });
  };

  const addProduct = (product) => {
    addToCart(product, cartItems, 1);
  };

  return (
    <>
      <MyCard>
        <div onClick={() => handleClick(product.id)}>
          <CardImage src={product.data.mainimage.url} />
          <CardContent>
            <CardTitle>{product.data.name}</CardTitle>
            <CardDescription>Price: ${product.data.price}</CardDescription>
          </CardContent>
        </div>
        <Box>
          <Button
            onClick={() => {
              addProduct(product);
            }}
          >
            Add to Cart
          </Button>
        </Box>
      </MyCard>
    </>
  );
};

export default ProductCard;
