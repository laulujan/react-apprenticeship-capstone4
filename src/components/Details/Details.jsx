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

const Details = () => {
  return (
    <div>
      <Title>PRODUCT TITLE</Title>
      <Label>
        <b>Price</b> $1234
      </Label>
      <Label>
        <b>SKU:</b> #IAUEIRJKDSFJALS
      </Label>
      <Label>
        <b>Category:</b> Decoration
      </Label>
      <Label>
        <b>Tags:</b>
        <Tag>Lighting</Tag>
        <Tag>Modern</Tag>
        <Tag>Cool</Tag>
      </Label>
      <Label>
        <b>Quantity:</b>
      </Label>
      <Box>
        <Button>-</Button>
        <Label> 1 </Label>
        <Button>+</Button>
      </Box>

      <ButtonAdd>add to cart</ButtonAdd>
      <Label>
        <b>Description:</b>
        <Text>some large text that describes the product</Text>
      </Label>
      <Label>
        <b>Specs:</b>
        <Text>a list of specs</Text>
        <Text>for the product </Text>
        <Text>To display on scren</Text>
      </Label>
    </div>
  );
};

export default Details;
