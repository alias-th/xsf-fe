import styled from "styled-components";

const SpaceBetween = styled.div<{
  $gap?: string;
  $width?: string;
  $height?: string;
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ $gap }) => $gap || "0px"};
  width: ${({ $width }) => $width || "auto"};
  height: ${({ $height }) => $height || "auto"};
`;

export default SpaceBetween;
