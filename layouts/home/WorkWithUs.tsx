"use client";
import { Typography } from "@/components/Typography";
import Image from "next/image";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 704px;
  margin: 56px auto 80px auto;
  gap: 56px;
`;

const Items = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 64px;
  row-gap: 56px;
  width: 100%;
  flex-wrap: wrap;
`;

const Item = styled.div`
  width: 128px;
  height: 128px;
  background-color: var(--color-6);
  border-radius: 16px;
`;

const WorkWithUs = () => {
  const imageUrl = "placeholder-1.png";
  const imageSrc = process.env.NEXT_PUBLIC_IMAGE_URL
    ? `${process.env.NEXT_PUBLIC_IMAGE_URL}/${imageUrl}`
    : imageUrl;

  const items = Array.from({ length: 7 }).map((_, index) => {
    return { id: index };
  });
  return (
    <Wrapper>
      <Typography $variant="p-2xl"> ร้านค้าที่ร่วมขายกับเรา</Typography>
      <Items>
        {items.map((item) => (
          <Item key={item.id}>
            {/* <Image src={imageSrc} alt="work-with-us" width={128} height={128} /> */}
          </Item>
        ))}
      </Items>
    </Wrapper>
  );
};

export default WorkWithUs;
