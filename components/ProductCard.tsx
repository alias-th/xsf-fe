import styled from "styled-components";
import BadgeDeal from "./BadgeDeal";
import { Typography } from "./Typography";
import SpaceBetween from "./SpaceBetween";
import Center from "./Center";
import ProductPrice from "./ProductPrice";
import SimpleCarousel from "./SimpleCarousel";
import * as Types from "@/types";
import Image from "next/image";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 6px 0px #00000033;
  border-radius: 12px;
  overflow: auto;
`;

type ImageWrapperProps = {
  $showCarouselActive?: boolean;
  $height?: string;
};
const ImageWrapper = styled.div<ImageWrapperProps>`
  position: relative;
  width: 100%;
  height: ${({ $height }) => $height || "200px"};
  background-color: var(--color-2);
  padding: ${({ $showCarouselActive }) =>
    $showCarouselActive ? "0px" : "0px"};
`;

const InfoWrapper = styled.div`
  height: 140px;
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

type BadgeDiscountProps = {
  discountPercentage?: number;
};
const BadgeDiscount = ({ discountPercentage }: BadgeDiscountProps) => {
  return (
    <svg
      width="34"
      height="16"
      viewBox="0 0 34 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30 0C32.2091 0 34 1.79086 34 4V12C34 14.2091 32.2091 16 30 16H4C1.79086 16 0 14.2091 0 12V4C0 1.79086 1.79086 8.0532e-09 4 0H30ZM3 2C2.44772 2 2 2.44772 2 3C2 3.55228 2.44772 4 3 4C3.55228 4 4 3.55228 4 3C4 2.44772 3.55228 2 3 2Z"
        fill="#D70015"
      />

      <text
        x="17"
        y="12"
        fontFamily="var(--font-poppins)"
        fontSize="10"
        fill="white"
        textAnchor="middle"
        fontWeight="500"
        fontStyle="medium"
      >
        -{discountPercentage}%
      </text>
    </svg>
  );
};

const BadgeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  z-index: 2;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  padding: 10px 16px 0px 15px;
`;

const AddIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.496 3.627C18.9357 3.78152 19.3166 4.06877 19.586 4.44907C19.8554 4.82937 20.0001 5.28394 20 5.75V15.75C20 16.8772 19.5522 17.9582 18.7552 18.7552C17.9582 19.5522 16.8772 20 15.75 20H5.75C5.28394 20.0001 4.82937 19.8554 4.44907 19.586C4.06877 19.3166 3.78152 18.9357 3.627 18.496L5.724 18.5H15.75C16.4793 18.5 17.1788 18.2103 17.6945 17.6945C18.2103 17.1788 18.5 16.4793 18.5 15.75V5.75L18.496 5.699V3.627ZM15.246 0C15.8427 0 16.415 0.237053 16.837 0.65901C17.2589 1.08097 17.496 1.65326 17.496 2.25V15.247C17.496 15.8437 17.2589 16.416 16.837 16.838C16.415 17.2599 15.8427 17.497 15.246 17.497H2.25C1.65326 17.497 1.08097 17.2599 0.65901 16.838C0.237053 16.416 0 15.8437 0 15.247V2.25C0 1.65326 0.237053 1.08097 0.65901 0.65901C1.08097 0.237053 1.65326 0 2.25 0H15.247H15.246ZM15.246 1.5H2.25C2.05109 1.5 1.86032 1.57902 1.71967 1.71967C1.57902 1.86032 1.5 2.05109 1.5 2.25V15.247C1.5 15.661 1.836 15.997 2.25 15.997H15.247C15.4459 15.997 15.6367 15.918 15.7773 15.7773C15.918 15.6367 15.997 15.4459 15.997 15.247V2.25C15.997 2.05109 15.918 1.86032 15.7773 1.71967C15.6367 1.57902 15.4459 1.5 15.247 1.5H15.246ZM8.75 4.75C8.94891 4.75 9.13968 4.82902 9.28033 4.96967C9.42098 5.11032 9.5 5.30109 9.5 5.5V8H12C12.1989 8 12.3897 8.07902 12.5303 8.21967C12.671 8.36032 12.75 8.55109 12.75 8.75C12.75 8.94891 12.671 9.13968 12.5303 9.28033C12.3897 9.42098 12.1989 9.5 12 9.5H9.5V12C9.5 12.1989 9.42098 12.3897 9.28033 12.5303C9.13968 12.671 8.94891 12.75 8.75 12.75C8.55109 12.75 8.36032 12.671 8.21967 12.5303C8.07902 12.3897 8 12.1989 8 12V9.5H5.5C5.30109 9.5 5.11032 9.42098 4.96967 9.28033C4.82902 9.13968 4.75 8.94891 4.75 8.75C4.75 8.55109 4.82902 8.36032 4.96967 8.21967C5.11032 8.07902 5.30109 8 5.5 8H8V5.5C8 5.30109 8.07902 5.11032 8.21967 4.96967C8.36032 4.82902 8.55109 4.75 8.75 4.75Z"
        fill="#6C6C70"
      />
    </svg>
  );
};

const ViewIcon = () => {
  return (
    <svg
      width="9"
      height="5"
      viewBox="0 0 9 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.5 0C1.54755 0 0 2.15714 0 2.5C0 2.84196 1.54755 5 4.5 5C7.452 5 9 2.84196 9 2.5C9 2.15714 7.452 0 4.5 0ZM4.5 4.42277C3.39525 4.42277 2.49975 3.56205 2.49975 2.5C2.49975 1.43795 3.39525 0.576339 4.5 0.576339C5.60475 0.576339 6.4998 1.43795 6.4998 2.5C6.4998 3.56205 5.60475 4.42277 4.5 4.42277ZM4.5 2.5C4.31685 2.30045 4.79835 1.53839 4.5 1.53839C3.9474 1.53839 3.49965 1.9692 3.49965 2.5C3.49965 3.0308 3.9474 3.46161 4.5 3.46161C5.05215 3.46161 5.50035 3.0308 5.50035 2.5C5.50035 2.2558 4.6557 2.6692 4.5 2.5Z"
        fill="#6C6C70"
      />
    </svg>
  );
};

type ProductCardProps = {
  product: Types.Product;
  isImageOnly?: boolean;
  showCarousel?: {
    images: string[];
  };
};
const ProductCard = ({
  isImageOnly,
  showCarousel,
  product,
}: ProductCardProps) => {
  const showCarouselActive = showCarousel && showCarousel.images.length > 1;
  const hasDiscount = product.deal && product.deal[0]?.discount_percentage > 0;
  const discountPercentage = product.deal?.[0]?.discount_percentage;
  const imageUrl = product.images?.[0] || "/images/placeholder.png";
  const imageSrc = process.env.NEXT_PUBLIC_IMAGE_URL
    ? `${process.env.NEXT_PUBLIC_IMAGE_URL}/${imageUrl}`
    : imageUrl;

  if (isImageOnly) {
    return (
      <Wrapper>
        <ImageWrapper $height="100%"></ImageWrapper>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {/* Image */}
      <ImageWrapper $showCarouselActive={showCarouselActive}>
        {!showCarouselActive && hasDiscount && (
          <BadgeWrapper>
            <BadgeDeal>
              <Typography
                $color="var(--color-7)"
                $variant="p-xxs"
                $lineHeight="1"
                $fontFamily="var(--font-poppins)"
                $fontWeight="500"
              >
                X
              </Typography>
              <Typography
                $color="var(--white-1)"
                $variant="p-xxs"
                $lineHeight="1"
                $fontFamily="var(--font-poppins)"
                $fontWeight="500"
              >
                clusive Deal
              </Typography>
            </BadgeDeal>

            <BadgeDiscount discountPercentage={discountPercentage} />
          </BadgeWrapper>
        )}
        {showCarouselActive && (
          <SimpleCarousel
            images={showCarousel.images}
            autoplay={false}
            containerButton={{ $bottom: "8px", $gap: "4px" }}
            carouselButton={{ $height: "2px", $width: "16px" }}
          />
        )}
        {!showCarouselActive && (
          <Image
            src={imageSrc}
            alt={product.name}
            width={201}
            height={200}
            style={{
              objectFit: "cover",
            }}
            priority
          />
        )}
      </ImageWrapper>

      {/* Info */}
      <InfoWrapper>
        <SpaceBetween>
          <Typography
            $fontSize="14px"
            $fontWeight="600"
            $fontFamily="var(--font-poppins)"
            $truncate
            $width="130px"
          >
            {product.name}
          </Typography>
          <AddIcon />
        </SpaceBetween>
        <SpaceBetween>
          <Typography
            $fontSize="12px"
            $fontWeight="400"
            $fontFamily="var(--font-prompt)"
            $color="var(--color-8)"
          >
            {product.code}
          </Typography>
          <Center $gap="4px">
            <ViewIcon />
            <Typography
              $fontSize="10px"
              $fontWeight="400"
              $fontFamily="var(--font-prompt)"
              $color="var(--color-8)"
            >
              {product.view || 0}
            </Typography>
          </Center>
        </SpaceBetween>

        <div>
          <Typography
            $fontSize="10px"
            $fontWeight="400"
            $fontFamily="var(--font-prompt)"
            $color="var(--color-8)"
            $lineHeight="1"
          >
            {product.category?.[0]?.name}
          </Typography>
          <Typography
            $fontSize="12px"
            $fontWeight="400"
            $fontFamily="var(--font-prompt)"
            $color="var(--color-1)"
            $truncate
          >
            {product.category?.[0].description}
          </Typography>
        </div>

        <ProductPrice product={product} />
      </InfoWrapper>
    </Wrapper>
  );
};

export default ProductCard;
