import styled from "styled-components";

export type StyledCarouselButtonProps = {
  $active: boolean;
  $activeColor?: string;
  $inactiveColor?: string;
  $height?: string;
  $width?: string;
};
const StyledCarouselButton = styled.button<StyledCarouselButtonProps>`
  border-radius: 2px;
  height: ${({ $height }) => $height || "4px"};
  width: ${({ $width }) => $width || "32px"};
  background-color: ${(props) =>
    props.$active
      ? props.$activeColor || "var(--color-8)"
      : props.$inactiveColor || "var(--white-1)"};
`;

export default StyledCarouselButton;
