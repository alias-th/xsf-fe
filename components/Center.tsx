import styled from "styled-components";

type CenterProps = {
  $height?: string;
  $width?: string;
  $gap?: string;
};
const Center = styled.div<CenterProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ $height }) => $height || "auto"};
  width: ${({ $width }) => $width || "auto"};
  gap: ${({ $gap }) => $gap || "0"};
`;

export default Center;
