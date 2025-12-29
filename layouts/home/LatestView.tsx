"use client";

import { Typography } from "@/components/Typography";
import styled from "styled-components";
import LatestCarousel from "./LatestCarousel";

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  max-width: 1240px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const LatestView = () => {
  return (
    <Wrapper>
      <Typography $variant="p-2xl" $fontFamily="var(--font-prompt)">
        ดูล่าสุด
      </Typography>
      <LatestCarousel />
    </Wrapper>
  );
};

export default LatestView;
