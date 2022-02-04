import React from 'react';
import {
  MyCard,
  CardTitle,
  CardImage,
  CardContent,
} from './CategoryCard.styled';

const CategoryCard = ({ url }) => {
  return (
    <MyCard>
      <CardImage src={url} />
      <CardContent>
        <CardTitle>some title</CardTitle>
      </CardContent>
    </MyCard>
  );
};

export default CategoryCard;
