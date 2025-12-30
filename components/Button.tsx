"use client";
import styled from "styled-components";
import { Typography } from "./Typography";
import { JSX } from "react";
import Loading from "./Loading";

interface StyledInputProps {
  $marginLeft?: string;
  $height?: string;
  $width?: string;
  $minWidth?: string;
  $backgroundColor?: string;
  icon?: JSX.Element;
  text?: string;
  children?: React.ReactNode;
  $borderRadius?: string;
  $border?: string;
  $gap?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  htmlType?: "button" | "submit" | "reset";
}

const StyledButton = styled.button<StyledInputProps>`
  width: ${(props) => props.$width || "auto"};
  min-width: ${(props) => props.$minWidth || "auto"};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.$gap || "8px"};
  background-color: ${(props) => props.$backgroundColor || "var(--color-6)"};
  height: ${(props) => props.$height || "100%"};
  align-items: center;
  border-radius: 16px;
  margin-left: ${(props) => props.$marginLeft || "0px"};
  border-radius: ${(props) => props.$borderRadius || "24px"};
  border: ${(props) => props.$border || "none"};

  &:disabled {
    color: var(--white-1);
    background-color: var(--color-3);
    cursor: not-allowed;
  }

  &:hover {
    opacity: 0.7;
    transition: all 0.3s ease-in-out;
  }
`;

const CustomButton = ({
  loading,
  htmlType,
  disabled,
  onClick,
  ...rest
}: StyledInputProps) => {
  if (loading) {
    return (
      <StyledButton {...rest} type={htmlType}>
        <Loading />
      </StyledButton>
    );
  }
  return (
    <StyledButton
      {...rest}
      type={htmlType}
      onClick={onClick}
      disabled={disabled}
    >
      {rest?.icon}
      {rest?.children}
    </StyledButton>
  );
};

export default CustomButton;
