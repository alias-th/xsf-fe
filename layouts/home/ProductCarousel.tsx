import CustomButton from "@/components/Button";
import StyledCarouselButton from "@/components/CarouselButton";
import NextIcon from "@/components/Icons/NextIcon";
import PrevIcon from "@/components/Icons/PrevIcon";
import ProductCard from "@/components/ProductCard";
import { usePrevNextButtons } from "@/hooks/EmblaCarouselArrowButtons";
import { useDotButton } from "@/hooks/EmblaCarouselDotButton";
import useEmblaCarousel from "embla-carousel-react";
import styled from "styled-components";

const StyledCarousel = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1100px;
  height: 100%;
  width: 100%;
  justify-content: center;
  position: relative;
`;

const StyledViewport = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  /* margin-left: -16px; */
`;

const StyledCarouselContainer = styled.div`
  display: flex;
  touch-action: pan-y pinch-zoom;
  margin-left: -16px;
  padding-bottom: 16px;
  padding-right: 12px;
`;

type StyledCarouselItemProps = {
  $enableVariableWidth?: boolean;
};
const StyledCarouselItem = styled.div<StyledCarouselItemProps>`
  flex: 0 0 calc(100% / 5);
  min-width: 0px;
  padding-left: 20px;

  &:first-child {
    flex: ${({ $enableVariableWidth }) =>
      $enableVariableWidth ? "0 0 668px" : "0 0 calc(100% / 5)"};
  }
`;

const StyledCarouselButtonContainer = styled.div`
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 16px;
`;

const StyledCarouselPrevButtonContainer = styled.div`
  position: absolute;
  left: -50px;
  top: 47%;
  transform: translateY(-50%);
`;

const StyledCarouselNextButtonContainer = styled.div`
  position: absolute;
  right: -50px;
  top: 47%;
  transform: translateY(-50%);
`;

type ProductCarouselProps = {
  products: Array<any>;
  enableVariableWidth?: boolean;
};
const ProductCarousel = ({
  products,
  enableVariableWidth,
}: ProductCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    dragFree: true,
    slidesToScroll: "auto",
    align: "center",
  });

  const {
    nextBtnDisabled,
    onNextButtonClick,
    onPrevButtonClick,
    prevBtnDisabled,
  } = usePrevNextButtons(emblaApi);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  return (
    <StyledCarousel>
      <StyledViewport ref={emblaRef}>
        <StyledCarouselContainer>
          {products.map((product) => {
            if (enableVariableWidth && product.id === 0) {
              return (
                <StyledCarouselItem
                  key={product.id}
                  $enableVariableWidth={enableVariableWidth}
                >
                  <ProductCard isImageOnly />
                </StyledCarouselItem>
              );
            }
            return (
              <StyledCarouselItem key={product.id}>
                <ProductCard />
              </StyledCarouselItem>
            );
          })}
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
            $backgroundColor="var(--white-1)"
            $width="42px"
            $height="42px"
            $borderRadius="50%"
            onClick={onNextButtonClick}
          >
            <NextIcon />
          </CustomButton>
        </StyledCarouselNextButtonContainer>
      )}

      {!prevBtnDisabled && (
        <StyledCarouselPrevButtonContainer>
          <CustomButton
            $backgroundColor="var(--white-1)"
            $width="42px"
            $height="42px"
            $borderRadius="50%"
            onClick={onPrevButtonClick}
          >
            <PrevIcon />
          </CustomButton>
        </StyledCarouselPrevButtonContainer>
      )}
    </StyledCarousel>
  );
};

export default ProductCarousel;
