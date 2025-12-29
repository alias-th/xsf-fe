import styled from "styled-components";
import { Typography } from "./Typography";
import SingleLineText from "./TextTruncate";

const ImageContainer = styled.img`
  height: 128px;
  border-radius: 16px;
  border: 1px solid #e0e0e0;
`;

const TextContainer = styled.div`
  display: flex;
  gap: 4px;
  align-items: baseline;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 8px;
`;

const LatestProductCard = () => {
  return (
    <Wrapper>
      <ImageContainer src="/assets/placeholder-1.png" alt="Sample Product" />
      <Typography
        $variant="span"
        $fontFamily="var(--font-poppins)"
        $width="92px"
        $truncate
      >
        Product name test
      </Typography>

      <TextContainer>
        <Typography
          $fontFamily="var(--font-prompt)"
          $variant="h3"
          $color="var(--color-1)"
        >
          ฿550
        </Typography>
        <Typography
          $fontFamily="var(--font-prompt)"
          $variant="p-xs"
          $color="var(--color-8)"
        >
          /ตร.ม.
        </Typography>
      </TextContainer>
    </Wrapper>
  );
};

export default LatestProductCard;
