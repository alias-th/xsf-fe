import CustomButton from "@/components/Button";
import StyledCarouselButton from "@/components/CarouselButton";
import NextIcon from "@/components/Icons/NextIcon";
import PrevIcon from "@/components/Icons/PrevIcon";
import LatestProductCard from "@/components/LatestProductCard";
import { usePrevNextButtons } from "@/hooks/EmblaCarouselArrowButtons";
import { useDotButton } from "@/hooks/EmblaCarouselDotButton";
import useEmblaCarousel from "embla-carousel-react";
import styled from "styled-components";
import * as Types from "@/types";
import Link from "next/link";

const StyledCarousel = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 888px;
  height: 100%;
  width: 100%;
  justify-content: center;
  position: relative;
  --slide-spacing: 1rem;
`;

const StyledViewport = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  margin-left: -16px;
`;

const StyledCarouselContainer = styled.div`
  display: flex;
  touch-action: pan-y pinch-zoom;
  margin-left: -1px;
`;

const StyledCarouselItem = styled.div`
  flex: 0 0 calc(100% / 6);
  min-width: 0;
  padding-left: 16px;
`;

const StyledCarouselButtonContainer = styled.div`
  position: absolute;
  bottom: 56px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 16px;
`;

const StyledCarouselNextButtonContainer = styled.div`
  position: absolute;
  right: -150px;
  top: 25%;
  transform: translateY(-50%);
`;

const StyledCarouselPrevButtonContainer = styled.div`
  position: absolute;
  left: -150px;
  top: 25%;
  transform: translateY(-50%);
`;

type LatestCarouselProps = {
  products: {
    data: Types.Product[];
    pagination: Types.Pagination;
  };
};
const LatestCarousel = ({ products }: LatestCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    dragFree: true,
    slidesToScroll: "auto",
    align: "start",
  });

  const {
    nextBtnDisabled,
    onNextButtonClick,
    onPrevButtonClick,
    prevBtnDisabled,
  } = usePrevNextButtons(emblaApi);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  // const products = Array.from({ length: 24 }).map((_, index) => ({
  //   id: index + 1,
  //   name: `Product ${index + 1}`,
  // }));

  return (
    <StyledCarousel>
      <StyledViewport ref={emblaRef}>
        <StyledCarouselContainer>
          {products.data.map((product) => (
            <StyledCarouselItem key={product.id}>
              <Link href={`/products/${product.id}`} key={product.id}>
                <LatestProductCard product={product} />
              </Link>
            </StyledCarouselItem>
          ))}
        </StyledCarouselContainer>
      </StyledViewport>

      <StyledCarouselButtonContainer>
        {scrollSnaps.map((_, index) => (
          <StyledCarouselButton
            key={index}
            $active={index === selectedIndex}
            $inactiveColor="var(--border-1)"
            onClick={() => onDotButtonClick(index)}
          />
        ))}
      </StyledCarouselButtonContainer>

      {!nextBtnDisabled && (
        <StyledCarouselNextButtonContainer>
          <CustomButton
            $width="42px"
            $height="42px"
            $borderRadius="50%"
            $backgroundColor="transparent"
            onClick={onNextButtonClick}
          >
            <NextIcon />
          </CustomButton>
        </StyledCarouselNextButtonContainer>
      )}

      {!prevBtnDisabled && (
        <StyledCarouselPrevButtonContainer>
          <CustomButton
            $width="42px"
            $height="42px"
            $borderRadius="50%"
            $backgroundColor="transparent"
            onClick={onPrevButtonClick}
          >
            <PrevIcon />
          </CustomButton>
        </StyledCarouselPrevButtonContainer>
      )}
    </StyledCarousel>
  );
};

export default LatestCarousel;
