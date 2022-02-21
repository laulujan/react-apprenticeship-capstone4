import React from 'react';

import { CartButton, CartIcon, Badge } from './ShoppingCart.sytled';

const ShoppingCart = () => {
  return (
    <>
      <CartButton>
        <Badge id="targetEl" value="0">
          1
        </Badge>
        <CartIcon />
      </CartButton>
    </>
  );
};

export default ShoppingCart;
