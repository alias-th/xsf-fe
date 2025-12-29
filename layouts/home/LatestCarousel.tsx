import CustomButton from "@/components/Button";
import StyledCarouselButton from "@/components/CarouselButton";
import LatestProductCard from "@/components/LatestProductCard";
import { usePrevNextButtons } from "@/hooks/EmblaCarouselArrowButtons";
import { useDotButton } from "@/hooks/EmblaCarouselDotButton";
import useEmblaCarousel from "embla-carousel-react";
import styled from "styled-components";

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
  right: -10%;
  top: 25%;
  transform: translateX(-50%);
`;

const StyledCarouselPrevButtonContainer = styled.div`
  position: absolute;
  left: -10%;
  top: 25%;
  transform: translateX(-50%);
`;

const NextIcon = () => {
  return (
    <svg
      width="10"
      height="18"
      viewBox="0 0 10 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.75 0.749999L8.75 8.75L0.750002 16.75"
        stroke="#E13B30"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const PrevIcon = () => {
  return (
    <svg
      width="10"
      height="18"
      viewBox="0 0 10 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.75 16.75L0.75 8.75L8.75 0.75"
        stroke="#E13B30"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const LatestCarousel = () => {
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

  const products = Array.from({ length: 24 }).map((_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
  }));

  return (
    <StyledCarousel>
      <StyledViewport ref={emblaRef}>
        <StyledCarouselContainer>
          {products.map((product) => (
            <StyledCarouselItem key={product.id}>
              <LatestProductCard />
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
