import styled from "styled-components";
import { Typography } from "./Typography";
import Center from "./Center";
import SpaceBetween from "./SpaceBetween";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const DiscountText = styled.s`
  line-height: 1;
  font-size: 10px;
  font-weight: 400;
  color: var(--color-8);
`;
const ProductPrice = () => {
  return (
    <Wrapper>
      <DiscountText>฿500</DiscountText>
      <SpaceBetween>
        <Center $gap="3px">
          <Typography
            $fontSize="16px"
            $fontWeight="600"
            $color="var(--color-9)"
          >
            ฿500
          </Typography>
          <Typography
            $lineHeight="1"
            $fontSize="14px"
            $fontWeight="400"
            $color="var(--color-8)"
            $fontFamily="var(--font-prompt)"
          >
            /ตร.ม.
          </Typography>
        </Center>

        <Typography
          $fontSize="12px"
          $fontWeight="400"
          $color="var(--color-10)"
          $fontFamily="var(--font-poppins)"
        >
          In stock
        </Typography>
      </SpaceBetween>
    </Wrapper>
  );
};
export default ProductPrice;
