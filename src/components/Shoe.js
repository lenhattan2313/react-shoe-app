import React from "react";
import styled from "styled-components";
const Shoe = () => {
  return (
    <ShoeWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3 position-relative">
      <div class="card">
        <div class="imgBox ">
          <img src="img/running_shoes.png" alt="" />
        </div>
        <div class="contentBox">
          <h2>Nike Shoes</h2>
          <div class="size">
            <h3>Size:</h3>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
          </div>
          <div class="color">
            <h3>Color:</h3>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <a href="" class="buy">
            Buy
          </a>
        </div>
      </div>
    </ShoeWrapper>
  );
};
const ShoeWrapper = styled.div`
  img {
    width: 220px;
    height: 100%;
  }
  .card {
    position: relative;
    width: 320px;
    height: 450px;
    background: #232323 !important;
    border-radius: 20px;
    overflow: hidden;
  }
  .card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #9bdc28;
    clip-path: circle(150px at 80% 20%);
    transition: 0.5s all ease;
  }
  .card:hover::before {
    clip-path: circle(300px at 80% -20%);
  }
  .card::after {
    content: "Nike";
    position: absolute;
    top: 30%;
    left: -12%;
    font-weight: 800;
    font-size: 12em;
    font-style: italic;
    color: rgba(255, 255, 255, 0.04);
  }
  .card .imgBox {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: 0.5s;
    z-index: 3;
    width: 100%;
    height: 220px;
  }
  .card:hover .imgBox {
    top: 0;
    transform: translateY(0%);
  }
  .card .imgBox img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(25deg);
  }
  .card .contentBox {
    position: absolute;
    bottom: 0;
    text-align: center;
    width: 100%;
    height: 100px;
    transition: 0.5s;
    z-index: 10;
  }
  .card:hover .contentBox {
    height: 210px;
  }
  .card .contentBox h2 {
    position: relative;
    color: #fff;
    font-weight: 600;
    letter-spacing: 1px;
  }
  .card .contentBox .size,
  .card .contentBox .color {
    display: flex;
    justify-content: center;
    transition: 0.5s;
    padding: 8px 20px;
    align-items: center;
    opacity: 0;
  }
  .card:hover .contentBox .size {
    opacity: 1;
    transition-delay: 0.5s;
  }
  .card:hover .contentBox .color {
    opacity: 1;
    transition-delay: 0.6s;
  }
  .card .contentBox .size h3,
  .card .contentBox .color h3 {
    text-transform: uppercase;
    font-weight: 300;
    letter-spacing: 1px;
    font-size: 13px;
    color: #fff;
    margin-right: 5px;
  }
  .card .contentBox .size span {
    background: #fff;
    color: #000;
    margin-right: 10px;
    padding: 3px 5px;
    border-radius: 4px;
    transition: 0.5s;
  }
  .card .contentBox .size span:hover {
    background: #9bdc28;
    cursor: pointer;
  }
  .card .contentBox .color span {
    width: 20px;
    height: 20px;
    background: #ff0;
    border-radius: 50%;
    margin-right: 5px;
    cursor: pointer;
  }
  .card .contentBox .color span:nth-child(2) {
    background: #9bdc28;
  }
  .card .contentBox .color span:nth-child(3) {
    background: #03a9f4;
  }
  .card .contentBox .color span:nth-child(4) {
    background: #e91e63;
  }
  .card .contentBox a {
    display: inline-block;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #000;
    background: #fff;
    margin-top: 20px;
    border-radius: 4px;
    transition: 0.5s;
    padding: 10px 20px;
    transform: translateY(50px);
    opacity: 0;
  }
  .card:hover .contentBox a {
    opacity: 1;
    transform: translateY(0px);
    transition-delay: 0.75s;
  }
`;
export default Shoe;
