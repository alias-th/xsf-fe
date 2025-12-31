import styled from "styled-components";
import { Typography } from "./Typography";
import Center from "./Center";
import SpaceBetween from "./SpaceBetween";
import * as Types from "@/types";
import { useMemo } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

type DiscountTextProps = {
  $visibility?: "visible" | "hidden";
};
const DiscountText = styled.s<DiscountTextProps>`
  line-height: 1;
  font-size: 10px;
  font-weight: 400;
  color: var(--color-8);
  visibility: ${({ $visibility }) => $visibility || "hidden"};
`;

type ProductPriceProps = {
  product: Types.Product;
};
const ProductPrice = ({ product }: ProductPriceProps) => {
  const priceWithDiscount = useMemo(() => {
    const discountPercent = product.deal?.discount_percentage || 0;
    const price = product.pricing?.price_per_unit || 0;
    if (discountPercent > 0) {
      const discountedPrice = price - (price * discountPercent) / 100;
      return discountedPrice;
    }
    return price;
  }, [product]);

  const priceWithoutDiscount = product.pricing?.price_per_unit || 0;
  const hasDiscount = product.deal?.discount_percentage > 0;
  const inStock = product.stock_quantity > 0;
  return (
    <Wrapper>
      <DiscountText $visibility={hasDiscount ? "visible" : "hidden"}>
        ฿{priceWithoutDiscount.toLocaleString()}
      </DiscountText>
      <SpaceBetween>
        <Center $gap="3px">
          <Typography
            $fontSize="16px"
            $fontWeight="600"
            $color="var(--color-9)"
          >
            ฿{priceWithDiscount?.toLocaleString() || "0"}
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
          {inStock ? "In stock" : "Out of stock"}
        </Typography>
      </SpaceBetween>
    </Wrapper>
  );
};
export default ProductPrice;
