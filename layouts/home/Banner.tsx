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
      <BannerCarousel
        initImages={[
          "/assets/banner-3.jpg",
          "/assets/banner-4.jpg",
          "/assets/banner-5.jpg",
        ]}
      />
    </Wrapper>
  );
};

export default Banner;
