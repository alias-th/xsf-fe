"use client";

import { Typography } from "@/components/Typography";
import styled from "styled-components";
import LatestCarousel from "./LatestCarousel";
import * as Types from "@/types";

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  max-width: 1240px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0 16px;
`;

type LatestViewProps = {
  products: {
    data: Types.Product[];
    pagination: Types.Pagination;
  };
};
const LatestView = (props: LatestViewProps) => {
  return (
    <Wrapper>
      <Typography $variant="p-2xl" $fontFamily="var(--font-prompt)">
        ดูล่าสุด
      </Typography>
      <LatestCarousel products={props.products} />
    </Wrapper>
  );
};

export default LatestView;
