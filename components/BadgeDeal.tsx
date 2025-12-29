import styled from "styled-components";
import { Typography } from "./Typography";
import Center from "./Center";

const Bg = () => {
  return (
    <svg
      width="70"
      height="16"
      viewBox="0 0 70 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M68 0C69.1046 0 70 0.895431 70 2V4.7998C68.3432 4.7998 67.0001 6.14306 67 7.7998C67 9.45666 68.3431 10.7998 70 10.7998V14C70 15.1046 69.1046 16 68 16H2C0.895431 16 0 15.1046 0 14V10.7998C1.65685 10.7998 3 9.45666 3 7.7998C2.99987 6.14306 1.65677 4.7998 0 4.7998V2C0 0.895431 0.895431 6.0399e-09 2 0H68Z"
        fill="url(#paint0_linear_213_57)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_213_57"
          x1="-8"
          y1="8.00001"
          x2="71.5"
          y2="8"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#252525" />
          <stop offset="1" stopColor="#252525" stopOpacity="0.65" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

type BadgeDealProps = {
  children?: React.ReactNode;
};
const BadgeDeal = ({ children }: BadgeDealProps) => {
  return (
    <Wrapper>
      <Bg />
      <TextContainer>
        <Center>{children}</Center>
      </TextContainer>
    </Wrapper>
  );
};

export default BadgeDeal;
