import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../../provider/Provider';
import {
  Container,
  Form,
  FContainer,
  Input,
  Textarea,
  Table,
  Header,
  TD,
  Box,
  Div,
  Button,
  Tcontainer,
} from './Checkout.styled';

const Checkout = () => {
  const { cartItems } = useProducts();
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    let price = 0;
    cartItems.forEach((item) => {
      price += item.quantity * item.data.price;
    });
    setTotal(price.toFixed(2));
  }, [cartItems, total, setTotal]);

  const handleClick = () => {
    navigate({ pathname: '/cart' });
  };
  return (
    <Container>
      <h2>Checkout</h2>
      <FContainer>
        <h3>Contact Information</h3>
        <Form>
          <label htmlFor="full-name">
            Full name
            <Input type="text" />
          </label>
          <label htmlFor="email">
            Email
            <Input type="email" />
          </label>
          <label htmlFor="zip-code">
            Zip code
            <Input type="text" />
          </label>
          <label htmlFor="notes">
            Notes
            <Textarea rows="5" />
          </label>
        </Form>
      </FContainer>
      <FContainer>
        <h3>Order Summary</h3>
        <Tcontainer>
          <Table>
            <Header>
              <tr>
                <TD>Item</TD>
                <TD>Price</TD>
                <TD>Quantity</TD>
                <TD>Sub total</TD>
              </tr>
            </Header>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <TD>
                    <Box>
                      <p>{item.data.name}</p>
                    </Box>
                  </TD>
                  <TD>${item.data.price}</TD>
                  <TD>{item.quantity}</TD>
                  <TD> ${(item.quantity * item.data.price).toFixed(2)}</TD>
                </tr>
              ))}
            </tbody>
          </Table>
        </Tcontainer>

        <Div>
          <h3>Total: ${total} </h3>
          <Button onClick={handleClick}>Go back to cart</Button>
        </Div>
      </FContainer>
    </Container>
  );
};

export default Checkout;
