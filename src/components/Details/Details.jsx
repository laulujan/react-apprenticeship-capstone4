import React from 'react';
import {
  Title,
  Label,
  Tag,
  Button,
  Text,
  ButtonAdd,
  Box,
} from './Details.styled';
import { useProducts } from '../../provider/Provider';

const Details = () => {
  const { product } = useProducts();

  return (
    <div>
      <Title>{product.data.name}</Title>
      <Label>
        <b>Price</b> ${product.data.price}
      </Label>
      <Label>
        <b>SKU:</b> {product.data.sku}
      </Label>
      <Label>
        <b>Category:</b> {product.data.category.slug}
      </Label>
      <Label>
        <b>Tags:</b>
        {product.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Label>
      <Label>
        <b>Quantity:</b>
      </Label>
      <Box>
        <Button>-</Button>
        <Label> 1 </Label>
        <Button>+</Button>
      </Box>

      <ButtonAdd>Add to cart</ButtonAdd>
      <Label>
        <b>Description:</b>
        <Text>{product.data.description[0].text}</Text>
      </Label>
      <Label>
        <b>Specs:</b>
        <ul>
          {product.data.specs.map((spec) => (
            <li key={spec.spec_name}>
              <b>{spec.spec_name}</b> : {spec.spec_value}
            </li>
          ))}
        </ul>
      </Label>
    </div>
  );
};

export default Details;
