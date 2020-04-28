import styled from "styled-components";
export const ButtonCart = styled.button`
  position: relative;
  border: none;
  background: transparent;
  font-size: 1.6rem;
  font-weight: 300;
  &:focus {
    outline: none;
  }
  span {
    font-size: 0.8rem;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    background: #5068a9;
    color: white;
  }
`;
