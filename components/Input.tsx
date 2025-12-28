import styled from "styled-components";

interface StyledInputProps {
  $width?: string;
  $minWidth?: string;
  $maxWidth?: string;
}

const CustomInput = styled.input<StyledInputProps>`
  width: ${(props) => props.$width || "100%"};
  min-width: ${(props) => props.$minWidth || "0px"};
  max-width: ${(props) => props.$maxWidth || "100%"};
  border: none;
  min-height: 24px;
  font-size: 1rem;
  outline: none;
  font-weight: 400;

  &::placeholder {
    color: var(--color-5);
    font-family: var(--font-prompt);
  }
`;

export default CustomInput;
