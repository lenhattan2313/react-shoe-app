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
  const [count, setCount] = useState(0);
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
    // setProducts(items);
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
    setCart((prevState) =>
      prevState.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            count: item.count + 1,
            total: item.price * (item.count + 1),
          };
        }
        return item;
      })
    );
  };
  const decrement = (id) => {
    setCart((prevState) =>
      prevState.map((item) => {
        if (item.id === id) {
          if (item.count === 1) {
            removeItem(id);
          }
          return {
            ...item,
            count: item.count - 1,
            total: item.price * (item.count - 1),
          };
        }
        return item;
      })
    );
  };
  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };
  const clearCart = () => {
    setCart([]);
  };
  const addTotals = () => {
    let subTotal = 0;
    cart.map((item) => (subTotal += item.total));
    const tax = parseFloat((subTotal * 0.1).toFixed(2));
    const total = tax + subTotal;
    setCartTotal(total);
    setCartSubTotal(subTotal);
    setCartTax(tax);
    totalCountCart();
  };
  const toggleFavorite = (id) => {
    setProducts((prevState) =>
      products.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            isFavorite: !product.isFavorite,
          };
        }
        return product;
      })
    );
  };
  const totalCountCart = () => {
    setCount(
      cart.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.count;
      }, 0)
    );
  };
  useEffect(() => addTotals(), [cart]);
  useEffect(() => {
    setProducts((prev) => [...storeProducts]);
    setDetails(detailProduct);
  }, []);
  return (
    <Context.Provider
      value={{
        products,
        details,
        cart,
        addToCart,
        handleDetail,
        modalOpen,
        openModal,
        closeModal,
        modalProduct,
        increment,
        decrement,
        removeItem,
        clearCart,
        cartSubTotal,
        cartTax,
        cartTotal,
        toggleFavorite,
        count,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
export { ContextProvider, Context };
