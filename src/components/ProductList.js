import React, { useContext } from "react";
import Product from "./Product";
import { Context } from "./Context";
import Title from "./Title";

const ProductList = () => {
  const { products } = useContext(Context);
  const productItems = products.map((product) => (
    <Product key={product.id} product={product} />
  ));
  return (
    <>
      <div className="py-5">
        <div className="container">
          <Title name="men's" title="shoes" />
          <div className="row">{productItems}</div>
        </div>
      </div>
    </>
  );
};
export default ProductList;
