import React from 'react';
import {
  MyCard,
  CardTitle,
  CardImage,
  CardContent,
} from './CategoryCard.styled';

const CategoryCard = ({ category, handleClick }) => {
  return (
    <MyCard onClick={() => handleClick(category.id, category.data.name)}>
      <CardImage
        src={category.data.main_image.url}
        alt={category.data.main_image.alt}
      />
      <CardContent>
        <CardTitle>{category.data.name}</CardTitle>
      </CardContent>
    </MyCard>
  );
};

export default CategoryCard;
