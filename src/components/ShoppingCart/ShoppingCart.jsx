import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartButton, CartIcon, Badge } from './ShoppingCart.sytled';
import { useProducts } from '../../provider/Provider';

const ShoppingCart = () => {
  const { cartItems } = useProducts();
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    let count = 0;
    cartItems.forEach((item) => (count += item.quantity));
    setCartCount(count);
  }, [cartItems]);

  const handleClick = () => {
    navigate({
      pathname: '/cart',
    });
  };
  return (
    <>
      <CartButton onClick={handleClick}>
        <Badge id="targetEl" value="0">
          {cartCount}
        </Badge>
        <CartIcon />
      </CartButton>
    </>
  );
};

export default ShoppingCart;
