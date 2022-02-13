import React from 'react';
import {
  Button,
  Text,
  Container,
  LeftIcon,
  RightIcon,
} from './Pagination.styled';
import { useProducts } from '../../provider/Provider';

const Pagination = ({ page, setPage }) => {
  const { totalPages } = useProducts();
  const onIncrement = () => {
    if (page < totalPages) {
      setPage(++page);
    }
  };

  const onDecrement = () => {
    if (page >= 2) {
      setPage(--page);
    }
  };
  return (
    <Container>
      {page > 1 ? (
        <Button onClick={onDecrement} id="previous-page">
          <LeftIcon />
        </Button>
      ) : (
        <></>
      )}

      <Text>Page {page}</Text>

      {page < totalPages ? (
        <Button onClick={onIncrement} id="next-page">
          <RightIcon />
        </Button>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default Pagination;
