import React from "react";
import { Link } from "react-router-dom";
import { Context } from "./Context";
import styled from "styled-components";
import { PropTypes } from "prop-types";
const Product = (props) => {
  const {
    addToCart,
    handleDetail,
    openModal,
    cart,
    toggleFavorite,
  } = React.useContext(Context);
  const { id, title, img, price, isFavorite, color } = props.product;
  const alreadyToCart = cart.some((item) => item.id === id);
  const [hovered, setHovered] = React.useState(false);
  const iconHeart = () => {
    if (hovered && isFavorite) {
      return (
        <i className="ri-heart-2-fill" onClick={() => toggleFavorite(id)}></i>
      );
    } else if (hovered) {
      return (
        <i className="ri-heart-2-line" onClick={() => toggleFavorite(id)}></i>
      );
    }
  };
  return (
    <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
      <div
        className="card"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="img-container p-5" onClick={() => handleDetail(id)}>
          <Link to="/details">
            <img src={img} alt="img" className="card-img-top" />
          </Link>
          {iconHeart()}
          <button
            className="cart-btn"
            disabled={alreadyToCart}
            onClick={() => {
              addToCart(id);
              openModal(id);
            }}
          >
            {alreadyToCart ? (
              <p className="text-capitalize mb-0" disabled>
                in Cart
              </p>
            ) : (
              <i className="fa fa-cart-plus" />
            )}
          </button>
        </div>
        <div className="card-footer justify-content-between">
          <p className="align-self-center mb-0">{title}</p>
          <p className="align-self-center mb-0">${price}</p>
          <br />
          <p className="align-self-center mb-0 text-footer">{color} colors</p>
        </div>
      </div>
    </ProductWrapper>
  );
};
Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};
const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 0.3s linear;
    overflow: hidden;
    border-radius: 0 !important;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 0.3s linear;
  }
  &:hover {
    .card {
      border: 0.1rem solid black;
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: 0.3s all linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    transform: translate(102%, 0);
    transition: all 0.3s linear;
  }
  .ri-heart-2-fill,
  .ri-heart-2-line {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0.4rem 0.8rem;
    cursor: pointer;
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
  .cart-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
`;
export default Product;
