import styled from "styled-components";
import { Typography } from "./Typography";
import SingleLineText from "./TextTruncate";
import * as Types from "@/types";
import Image from "next/image";

const ImageContainer = styled(Image)`
  border-radius: 16px;
  border: 1px solid #e0e0e0;
  object-fit: cover;
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
  cursor: pointer;
`;

type LatestProductCardProps = {
  product: Types.Product;
};
const LatestProductCard = ({ product }: LatestProductCardProps) => {
  const imageUrl = process.env.NEXT_PUBLIC_IMAGE_URL + "/" + product.images[0];
  return (
    <Wrapper>
      <ImageContainer
        priority
        src={imageUrl || "/assets/placeholder-1.png"}
        alt={product.name}
        width={128}
        height={128}
      />
      <Typography
        $variant="span"
        $fontFamily="var(--font-poppins)"
        $width="92px"
        $truncate
      >
        {product.name}
      </Typography>

      <TextContainer>
        <Typography
          $fontFamily="var(--font-prompt)"
          $variant="h3"
          $color="var(--color-1)"
        >
          {`฿${product.pricing.price_per_unit.toLocaleString()}`}
        </Typography>
        <Typography
          $fontFamily="var(--font-prompt)"
          $variant="p-xs"
          $color="var(--color-8)"
        >
          /{product.pricing.unit_label}
        </Typography>
      </TextContainer>
    </Wrapper>
  );
};

export default LatestProductCard;
