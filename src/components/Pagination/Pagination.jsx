import React from 'react';
import {
  Button,
  Text,
  Container,
  LeftIcon,
  RightIcon,
} from './Pagination.styled';

const Pagination = () => {
  return (
    <Container>
      <Button>
        <LeftIcon />
      </Button>
      <Text>Page 1</Text>
      <Button>
        <RightIcon />
      </Button>
    </Container>
  );
};

export default Pagination;
