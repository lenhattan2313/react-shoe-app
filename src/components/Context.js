import React, { useState, useEffect } from "react";
import { storeProducts, detailProduct } from "../data";

const Context = React.createContext();

const ContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [detail, setDetail] = useState({});

  useEffect(() => {
    setProducts(storeProducts);
    setDetail(detailProduct);
  }, []);
  return (
    <Context.Provider value={{ products, detail }}>
      {props.children}
    </Context.Provider>
  );
};
export { ContextProvider, Context };
