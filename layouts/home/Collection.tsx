"use client";

import { Typography } from "@/components/Typography";
import styled from "styled-components";
import ProductCarousel from "./ProductCarousel";
import Center from "@/components/Center";
import SMNextIcon from "@/components/Icons/SmNextIcon";

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Container = styled.div`
  margin: auto;
  max-width: 1240px;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 24px 0px;
  gap: 56px;
`;

const BgColor = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 284px;
  background-color: var(--color-2);
  z-index: -1;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: top;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Collection = () => {
  const products = Array.from({ length: 24 }).map((_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
  }));
  const additionalProducts = [{ id: 0, name: "Featured Product" }, ...products];
  return (
    <Wrapper>
      <BgColor />
      <Container>
        <Header>
          <TitleContainer>
            <Center $width="fit-content" $height="36px">
              <Typography
                $color="var(--color-1)"
                $variant="p-2xl"
                $fontFamily="var(--font-poppins)"
              >
                Collections
              </Typography>
            </Center>
            <Center>
              <Typography
                $color="var(--color-1)"
                $variant="p"
                $fontFamily="var(--font-prompt)"
              >
                <span>ค้นหาแรงบันดาลใจ ผ่านการออกแบบ</span> <br />
                <span>และคัดสรรวัสดุที่น่าสนใจเข้าไว้ด้วยกัน</span>
              </Typography>
            </Center>
          </TitleContainer>

          <Center $width="fit-content" $height="24px" $gap="16px">
            <Typography $variant="p" $color="var(--color-7)" $lineHeight="1">
              สินค้าทั้งหมด
            </Typography>
            <SMNextIcon />
          </Center>
        </Header>
        <ProductCarousel
          products={additionalProducts}
          enableVariableWidth={true}
        />
      </Container>
    </Wrapper>
  );
};

export default Collection;
