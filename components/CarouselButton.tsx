import styled from "styled-components";

type StyledCarouselButtonProps = {
  $active: boolean;
  $activeColor?: string;
  $inactiveColor?: string;
};
const StyledCarouselButton = styled.button<StyledCarouselButtonProps>`
  border-radius: 2px;
  height: 4px;
  width: 32px;
  background-color: ${(props) =>
    props.$active
      ? props.$activeColor || "var(--color-8)"
      : props.$inactiveColor || "var(--white-1)"};
`;

export default StyledCarouselButton;
