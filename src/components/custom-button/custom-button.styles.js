import styled, { css } from "styled-components";

const baseStyles = css`
  color: white;
  background-color: black;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;

  &:hover {
    background-color: black;
    color: white;
    border: none;
    opacity: 0.85;
    display: flex;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  } else if (props.inverted) {
    return invertedStyles;
  } else {
    return baseStyles;
  }
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px;
  font-size: 15px;
  font-family: "Open Sans";
  text-transform: uppercase;
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${getButtonStyles}
`;
