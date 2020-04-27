import React from "react";
import CartItem from "./CartItem";
const CartList = ({ cart }) => {
  const cartItem = cart.map((item) => <CartItem key={item.id} item={item} />);
  return <div className="container-fluid">{cartItem}</div>;
};
export default CartList;
