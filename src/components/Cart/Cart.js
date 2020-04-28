import React from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import { Context } from "../Context";
import CartList from "./CartList";
import CartTotal from "./CartTotal";
const Cart = (props) => {
  const { cart } = React.useContext(Context);

  return (
    <section className="container">
      {cart.length > 0 ? (
        <>
          <Title name="Your" title="Cart" />
          <CartColumns />
          <CartList cart={cart} />
          <CartTotal history={props.history} />
        </>
      ) : (
        <EmptyCart />
      )}
    </section>
  );
};
export default Cart;
