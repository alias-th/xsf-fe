import styled, { css } from "styled-components";

type TypographyVariant = "h1" | "h2" | "span" | "body" | "p" | "caption";

interface TypographyProps {
  $variant?: TypographyVariant;
  $color?: string;
  $align?: "left" | "center" | "right";
  $fontFamily?: string;
  $fontSize?: string;
  $fontWeight?: string;
}

const variantStyles = {
  h1: css`
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1.2;
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  `,
  h2: css`
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.3;
  `,
  body: css`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.6;
  `,
  span: css`
    font-size: 12px;
    font-weight: 400;
    line-height: 1.6;
  `,
  p: css`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.6;
  `,
  caption: css`
    font-size: 0.875rem;
    color: #64748b;
  `,
};

export const Typography = styled.p<TypographyProps>`
  ${({ $variant }) => variantStyles[$variant || "body"]}
  color: ${({ $color }) => $color || "inherit"};
  text-align: ${({ $align }) => $align || "left"};
  font-family: ${({ $fontFamily }) => $fontFamily || "inherit"};
  font-size: ${({ $fontSize }) => $fontSize || "inherit"};
  font-weight: ${({ $fontWeight }) => $fontWeight || "inherit"};
  margin: 0;
`;
