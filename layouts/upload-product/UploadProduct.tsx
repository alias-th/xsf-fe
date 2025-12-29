"use client";

import Center from "@/components/Center";
import { Typography } from "@/components/Typography";
import UploadFile from "@/components/UploadFile";
import styled from "styled-components";
import InputItem from "../../components/InputItem";
import CustomButton from "@/components/Button";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const UploadContainer = styled.div`
  width: 100%;
  max-width: 924px;
  margin: 0 auto;
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const UploadProduct = () => {
  return (
    <>
      <Typography
        $fontFamily="var(--font-poppins)"
        $fontSize="32px"
        $fontWeight="600"
        $color="var(--color-1)"
      >
        Upload Product
      </Typography>
      <UploadContainer>
        <Center
          $gap="10px"
          $justifyContent="flex-start"
          $direction="column"
          $alignItems="flex-start"
        >
          <Typography
            $variant="p"
            $fontFamily="var(--font-poppins)"
            $color="var(--color-1)"
          >
            Upload image
          </Typography>
          <UploadFile />

          <InputContainer>
            <InputItem label="Product name" placeholder="Product name" />
            <InputItem label="Code" placeholder="Code" />
            <InputItem label="Price" placeholder="Price" />
          </InputContainer>

          <Center
            $width="100%"
            $gap="26px"
            style={{ marginTop: "calc(72px - 10px)" }}
            $alignItems="center"
            $justifyContent="center"
          >
            <CustomButton
              $width="190px"
              $height="56px"
              $border="1px solid var(--color-3)"
              $backgroundColor="var(--white-1)"
            >
              <Typography $variant="p" $fontFamily="var(--font-prompt)">
                ยกเลิก
              </Typography>
            </CustomButton>
            <CustomButton
              $width="190px"
              $height="56px"
              $backgroundColor="var(--color-14)"
            >
              <Typography
                $variant="p"
                $color="var(--white-1)"
                $fontFamily="var(--font-prompt)"
              >
                ยืนยัน
              </Typography>
            </CustomButton>
          </Center>
        </Center>
      </UploadContainer>
    </>
  );
};

export default UploadProduct;
