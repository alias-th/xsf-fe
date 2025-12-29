import styled from "styled-components";

type SingleLineTextProps = {
  $width: string;
};
const SingleLineText = styled.span<SingleLineTextProps>`
  width: ${(props) => props.$width || "92px"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export default SingleLineText;
