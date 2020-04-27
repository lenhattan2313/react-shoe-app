import React from "react";
import styled from "styled-components";
import { Context } from "./Context";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";
const Modal = () => {
  const { modalOpen, closeModal, modalProduct } = React.useContext(Context);
  const { img, title, price } = modalProduct;
  if (!modalOpen) {
    return null;
  } else {
    return (
      <ModalContainer>
        <div className="container">
          <div className="row">
            <div
              id="modal"
              className="col-8 mx-auto col-md-6 col-lg-4 text-center text-cap"
            >
              <h5>item added to the cart</h5>
              <img src={img} alt="img" className="img-fluid" />
              <h5>{title}</h5>
              <h5 className="text-muted">price : $ {price}</h5>
              <Link to="/">
                <ButtonContainer onClick={() => closeModal()}>
                  store
                </ButtonContainer>
              </Link>
              <Link to="/cart">
                <ButtonContainer cart onClick={() => closeModal()}>
                  go to cart
                </ButtonContainer>
              </Link>
            </div>
          </div>
        </div>
      </ModalContainer>
    );
  }
};
const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`;
export default Modal;
