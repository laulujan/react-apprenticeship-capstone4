import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useProducts } from '../../provider/Provider';

import {
  Table,
  Row,
  Header,
  TD,
  Body,
  Img,
  Box,
  Container,
  Icon,
  CircleButton,
  Tcontainer,
  Div,
  Button,
} from './ShoppingCart.styled';

const ShoppingCart = () => {
  const { cartItems, removeFromCart, updateCart } = useProducts();
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    let price = 0;
    cartItems.forEach((item) => {
      price += item.quantity * item.data.price;
    });
    setTotal(price.toFixed(2));
  }, [cartItems, total, setTotal]);

  const removeItem = (product) => {
    removeFromCart(product, cartItems);
  };
  const updateItem = (product, qty) => {
    updateCart(product, cartItems, qty);
  };

  const handleClick = () => {
    navigate({ pathname: '/checkout' });
  };
  return (
    <Container>
      <h2>Shopping Cart</h2>
      {cartItems.length < 1 ? (
        <div>
          Your cart is empty, go to <Link to="/home">Home</Link> to continue
          shopping
        </div>
      ) : (
        <>
          <Tcontainer>
            <Table>
              <Header>
                <Row>
                  <TD></TD>
                  <TD>Item</TD>
                  <TD>Price</TD>
                  <TD>Quantity</TD>
                  <TD>Sub total</TD>
                </Row>
              </Header>
              <Body>
                {cartItems.map((item) => (
                  <Row key={item.id}>
                    <TD>
                      <CircleButton onClick={() => removeItem(item)}>
                        <Icon />
                      </CircleButton>
                    </TD>
                    <TD>
                      <Box>
                        <Img
                          src={item.data.mainimage.url}
                          alt={item.data.mainimage.alt}
                        />
                        <Box>
                          <p>{item.data.name}</p>
                        </Box>
                      </Box>
                    </TD>
                    <TD>${item.data.price}</TD>
                    <TD>
                      <input
                        type="number"
                        max={item.data.stock}
                        min="1"
                        value={item.quantity}
                        onChange={(e) => {
                          updateItem(item, parseInt(e.target.value));
                        }}
                      />
                    </TD>
                    <TD> ${(item.quantity * item.data.price).toFixed(2)}</TD>
                  </Row>
                ))}
              </Body>
            </Table>
          </Tcontainer>
          <Div>
            <h3>Total: ${total} </h3>
            <Button onClick={handleClick}>Checkout</Button>
          </Div>
        </>
      )}
    </Container>
  );
};

export default ShoppingCart;
