import styled, { css } from "styled-components";

type TypographyVariant =
  | "span"
  | "p"
  | "p-xxs"
  | "p-xs"
  | "p-sm"
  | "p-l"
  | "p-xl"
  | "p-2xl"
  | "h3"
  | "h2";

interface TypographyProps {
  $variant?: TypographyVariant;
  $color?: string;
  $align?: "left" | "center" | "right";
  $fontFamily?: string;
  $fontSize?: string;
  $fontWeight?: string;
  $width?: string;
  $truncate?: boolean;
  $lineHeight?: string;
  $height?: string;
  $whiteSpace?: boolean;
}

const variantStyles = {
  h2: css`
    font-size: 2rem; // 32px
    font-weight: 400;
  `,
  h3: css`
    font-size: 0.875rem; // 14px
    font-weight: 600;
  `,
  span: css`
    font-size: 0.75rem; // 12px
    font-weight: 400;
  `,

  ["p-xxs"]: css`
    font-size: 0.5rem; // 8px
    font-weight: 400;
  `,

  ["p-xs"]: css`
    font-size: 0.75rem; // 12px
    font-weight: 400;
  `,
  ["p-sm"]: css`
    font-size: 0.875rem; // 14px
    font-weight: 400;
  `,
  p: css`
    font-size: 1rem; // 16px
    font-weight: 400;
  `,

  ["p-l"]: css`
    font-size: 1.125rem; // 18px
    font-weight: 400;
  `,
  ["p-xl"]: css`
    font-size: 1.25rem; // 20px
    font-weight: 400;
  `,

  ["p-2xl"]: css`
    font-size: 1.5rem; // 24px
    font-weight: 400;
  `,

  [""]: css``,
};
const truncateStyles = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const whiteSpaceStyles = css`
  white-space: pre-line;
`;

export const Typography = styled.p<TypographyProps>`
  color: ${({ $color }) => $color || "inherit"};
  text-align: ${({ $align }) => $align || "left"};
  font-family: ${({ $fontFamily }) => $fontFamily || "inherit"};
  font-size: ${({ $fontSize }) => $fontSize || "inherit"};
  font-weight: ${({ $fontWeight }) => $fontWeight || "inherit"};
  margin: 0;
  width: ${({ $width }) => $width || "auto"};
  height: ${({ $height }) => $height || "auto"};
  line-height: ${({ $lineHeight }) => $lineHeight || "1.6"};
  ${({ $variant }) => variantStyles[$variant || ""]}
  ${({ $truncate }) => $truncate && truncateStyles}
  ${({ $whiteSpace }) => $whiteSpace && whiteSpaceStyles}
`;
