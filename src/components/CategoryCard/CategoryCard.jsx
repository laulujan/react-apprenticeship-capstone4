import React from 'react';
import {
  MyCard,
  CardTitle,
  CardImage,
  CardContent,
} from './CategoryCard.styled';

const CategoryCard = ({ category }) => {
  return (
    <MyCard>
      <CardImage src={category.main_image.url} alt={category.main_image.alt} />
      <CardContent>
        <CardTitle>{category.name}</CardTitle>
      </CardContent>
    </MyCard>
  );
};

export default CategoryCard;
