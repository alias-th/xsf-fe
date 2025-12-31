"use client";
import { getProductDetail } from "@/actions/product";
import SimpleCarousel from "@/components/SimpleCarousel";
import { Typography } from "@/components/Typography";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";

type Props = {
  productId: string;
};

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  min-height: 100vh;
  max-width: 1240px;
  /* margin: 0 auto; */
  gap: 48px;
`;

const CarouselWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  height: 500px;
  background-color: #f5f5f5;
  border-radius: 24px;
  overflow: hidden;
`;

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ProductDetails = ({ productId }: Props) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["product-details", productId],
    queryFn: () => getProductDetail({ id: productId }),
    refetchOnWindowFocus: false,
  });

  return (
    <Wrapper>
      <CarouselWrapper>
        <SimpleCarousel images={data?.data?.images || []} />
      </CarouselWrapper>
      <ProductWrapper>
        <div>
          <Typography $variant="h2"> Product Details </Typography>
          <Typography>(Not implemented, for demonstration) </Typography>
        </div>
        <Typography
          $fontFamily="var(--font-poppins)"
          $fontSize="32px"
          $fontWeight="600"
          $color="var(--color-1)"
        >
          {data?.data?.name || "Unnamed Product"}
        </Typography>
        <Typography>{data?.data?.code || "No code available."}</Typography>
        <Typography>
          {data?.data?.description || "No description available."}
        </Typography>
        <Typography
          $fontFamily="var(--font-poppins)"
          $fontSize="24px"
          $fontWeight="600"
          $color="var(--color-1)"
        >
          ฿{data?.data?.pricing.price_per_unit || "0.00"}
        </Typography>
      </ProductWrapper>
    </Wrapper>
  );
};

export default ProductDetails;
