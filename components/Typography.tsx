import styled, { css } from "styled-components";

type TypographyVariant =
  | "span"
  | "p"
  | "p-xs"
  | "p-sm"
  | "p-l"
  | "p-xl"
  | "p-2xl"
  | "h3";

interface TypographyProps {
  $variant?: TypographyVariant;
  $color?: string;
  $align?: "left" | "center" | "right";
  $fontFamily?: string;
  $fontSize?: string;
  $fontWeight?: string;
  $width?: string;
  $truncate?: boolean;
}

const variantStyles = {
  h3: css`
    font-size: 0.875rem; // 14px
    font-weight: 600;
    line-height: 1.6;
  `,
  span: css`
    font-size: 0.75rem; // 12px
    font-weight: 400;
    line-height: 1.6;
  `,

  ["p-xs"]: css`
    font-size: 0.75rem; // 12px
    font-weight: 400;
    line-height: 1.6;
  `,
  ["p-sm"]: css`
    font-size: 0.875rem; // 14px
    font-weight: 400;
    line-height: 1.6;
  `,
  p: css`
    font-size: 1rem; // 16px
    font-weight: 400;
    line-height: 1.6;
  `,

  ["p-l"]: css`
    font-size: 1.125rem; // 18px
    font-weight: 400;
    line-height: 1.6;
  `,
  ["p-xl"]: css`
    font-size: 1.25rem; // 20px
    font-weight: 400;
    line-height: 1.6;
  `,

  ["p-2xl"]: css`
    font-size: 1.5rem; // 24px
    font-weight: 400;
    line-height: 1.6;
  `,
};
const truncateStyles = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Typography = styled.p<TypographyProps>`
  color: ${({ $color }) => $color || "inherit"};
  text-align: ${({ $align }) => $align || "left"};
  font-family: ${({ $fontFamily }) => $fontFamily || "inherit"};
  font-size: ${({ $fontSize }) => $fontSize || "inherit"};
  font-weight: ${({ $fontWeight }) => $fontWeight || "inherit"};
  margin: 0;
  width: ${({ $width }) => $width || "auto"};
  ${({ $variant }) => variantStyles[$variant || "p"]}
  ${({ $truncate }) => $truncate && truncateStyles}
`;
