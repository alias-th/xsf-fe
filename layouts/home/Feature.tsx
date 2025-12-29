"use client";
import CustomButton from "@/components/Button";
import { Typography } from "@/components/Typography";
import Image from "next/image";
import styled from "styled-components";

const Wrapper = styled.section`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  border-radius: 24px;
  overflow: hidden;
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.6) 33.33%,
      rgba(0, 0, 0, 0) 100%
    ),
    url("/assets/banner-2.jpg");

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  justify-content: space-between;
  padding: 55px 100px;
`;

const FeatureImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* height: 173px; */
`;

const Arrow = () => {
  return (
    <svg
      width="41"
      height="8"
      viewBox="0 0 41 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.5 3.18188C0.223858 3.18188 -2.41411e-08 3.40574 0 3.68188C2.41411e-08 3.95803 0.223858 4.18188 0.5 4.18188L0.5 3.68188L0.5 3.18188ZM40.8536 4.03543C41.0488 3.84017 41.0488 3.52359 40.8536 3.32833L37.6716 0.146348C37.4763 -0.0489146 37.1597 -0.0489145 36.9645 0.146348C36.7692 0.34161 36.7692 0.658192 36.9645 0.853455L39.7929 3.68188L36.9645 6.51031C36.7692 6.70557 36.7692 7.02215 36.9645 7.21742C37.1597 7.41268 37.4763 7.41268 37.6716 7.21742L40.8536 4.03543ZM0.5 3.68188L0.5 4.18188L40.5 4.18188L40.5 3.68188L40.5 3.18188L0.5 3.18188L0.5 3.68188Z"
        fill="white"
      />
    </svg>
  );
};

const FeatureItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 68px;
  width: 50%;
`;

const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: var(--white-1);
  margin-top: 55px;
`;
const text = `บริการตกแต่งผนังที่ให้คุณได้เลือกสไตล์ วัสดุ และ accessories ได้เอง\n
            โดยมีระบบการผลิตที่เป็นมาตราฐานโดยใช้เครื่องจักรและการกำหนดค่า \n
            ที่มีความละเอียดสูง รวมไปถึงระบบการติดตั้งที่ง่ายและรวดเร็ว\n
            เพื่อให้คุณได้ผนังสวยถูกใจเหมือนมีผู้ออกแบบมืออาชีพมาทำให้\n
            บ้านของคุณสวยด้วย Wallplast`;

const Feature = () => {
  return (
    <Wrapper>
      <Background>
        <FeatureItem>
          <FeatureImage>
            <Image
              src={"/assets/banner-6.png"}
              width={132}
              height={117}
              alt="feature image"
            />
            <Line />
          </FeatureImage>

          <Typography
            $whiteSpace
            $width="568px"
            $fontFamily="var(--font-poppins)"
            $color="var(--white-1)"
            $fontSize="1rem"
            $fontWeight="500"
            $lineHeight=".8"
          >
            {text}
          </Typography>

          <CustomButton
            $gap="20px"
            $height="40px"
            $width="280px"
            $border="1px solid var(--white-1)"
            $borderRadius="20px"
            $backgroundColor="transparent"
          >
            <Typography
              $variant="p"
              $color="var(--white-1)"
              $fontFamily="var(--font-poppins)"
            >
              View More
            </Typography>

            <Arrow />
          </CustomButton>
        </FeatureItem>
        <FeatureImage />
      </Background>
    </Wrapper>
  );
};

export default Feature;
