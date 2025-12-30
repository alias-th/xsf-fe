import styled from "styled-components";

type CenterProps = {
  $direction?: "row" | "column";
  $height?: string;
  $width?: string;
  $gap?: string;
  $justifyContent?: string;
  $alignItems?: string;
  $backgroundColor?: string;
  $flex?: string;
};
const Center = styled.div<CenterProps>`
  display: flex;
  justify-content: ${({ $justifyContent }) => $justifyContent || "center"};
  align-items: ${({ $alignItems }) => $alignItems || "center"};
  height: ${({ $height }) => $height || "auto"};
  width: ${({ $width }) => $width || "auto"};
  gap: ${({ $gap }) => $gap || "0"};
  background-color: ${({ $backgroundColor }) => $backgroundColor || "none"};
  flex-direction: ${({ $direction }) => $direction || "row"};
  flex: ${({ $flex }) => $flex || "initial"};
`;

export default Center;
