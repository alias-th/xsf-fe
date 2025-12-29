import styled from "styled-components";

type CenterProps = {
  $direction?: "row" | "column";
  $height?: string;
  $width?: string;
  $gap?: string;
  $justifyContent?: string;
  $alignItems?: string;
};
const Center = styled.div<CenterProps>`
  display: flex;
  justify-content: ${({ $justifyContent }) => $justifyContent || "center"};
  align-items: ${({ $alignItems }) => $alignItems || "center"};
  height: ${({ $height }) => $height || "auto"};
  width: ${({ $width }) => $width || "auto"};
  gap: ${({ $gap }) => $gap || "0"};
  flex-direction: ${({ $direction }) => $direction || "row"};
`;

export default Center;
