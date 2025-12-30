"use client";
import styled from "styled-components";

interface StyledInputProps {
  $width?: string;
  $minWidth?: string;
  $maxWidth?: string;
  $height?: string;
  $minHeight?: string;
  $placeholderColor?: string;
}

const CustomInput = styled.input<StyledInputProps>`
  width: ${(props) => props.$width || "100%"};
  min-width: ${(props) => props.$minWidth || "0px"};
  max-width: ${(props) => props.$maxWidth || "100%"};
  border: none;
  min-height: ${(props) => props.$minHeight || "24px"};
  height: ${(props) => props.$height || "auto"};
  font-size: 1rem;
  outline: none;
  font-weight: 400;

  /* &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 1000px transparent inset !important;
    -webkit-text-fill-color: var(--color-1) !important;
    transition: background-color 5000s ease-in-out 0s;
  } */

  &::placeholder {
    color: ${(props) => props.$placeholderColor || "var(--color-5)"};
    font-family: var(--font-prompt);
  }
`;

export default CustomInput;
