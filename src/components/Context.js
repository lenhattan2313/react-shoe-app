import React, { useState, useEffect } from "react";
import { storeProducts, detailProduct } from "../data";

const Context = React.createContext();

const ContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [details, setDetails] = useState({});
  const [cart, setCart] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState(detailProduct);
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const [cartTax, setCartTax] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  // function tester() {
  //   setProducts(
  //     products.map((product) => {
  //       if (product.id === 1) {
  //         return {
  //           ...product,
  //           inCart: !product.inCart,
  //         };
  //       }
  //       return product;
  //     })
  //   );
  // }
  const getItems = (id) => {
    const product = products.find((product) => product.id === id);
    return product;
  };
  const handleDetail = (id) => {
    const product = getItems(id);
    setDetails(product);
  };
  const addToCart = (id) => {
    const items = products.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          inCart: !product.inCart,
          count: product.count + 1,
          total: product.price,
        };
      }
      return product;
    });
    const inCart = items.find((product) => product.id === id);
    setProducts(items);

    setCart((prevState) => [...prevState, inCart]);
  };

  const openModal = (id) => {
    const product = getItems(id);
    setModalProduct(product);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const increment = (id) => {
    console.log("incre");
  };
  const decrement = (id) => {
    console.log("decre");
  };
  useEffect(() => {
    setProducts(storeProducts);
    setDetails(detailProduct);
  }, []);
  return (
    <Context.Provider
      value={{
        products,
        details,
        addToCart,
        handleDetail,
        modalOpen,
        openModal,
        closeModal,
        modalProduct,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
export { ContextProvider, Context };
