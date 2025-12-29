"use client";
import BannerCarousel from "@/components/SimpleCarousel";
import styled from "styled-components";

const Wrapper = styled.section`
  background: papayawhip;
  /* max-width: 1440px; */
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0px auto;
`;

const Banner = () => {
  return (
    <Wrapper>
      <BannerCarousel />
    </Wrapper>
  );
};

export default Banner;
