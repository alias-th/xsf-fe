import { useDotButton } from "@/hooks/EmblaCarouselDotButton";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import styled from "styled-components";

const StyledCarousel = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

const StyledCarouselContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

type StyledCarouselItemProps = {
  $backgroundImage?: string;
};
const StyledCarouselItem = styled.div<StyledCarouselItemProps>`
  flex: 0 0 100%;
  background-image: url(${(props) => props.$backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const StyledCarouselButtonContainer = styled.div`
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 16px;
`;

type StyledCarouselButtonProps = {
  $active: boolean;
};
const StyledCarouselButtonItem = styled.button<StyledCarouselButtonProps>`
  border-radius: 2px;
  height: 4px;
  width: 32px;
  background-color: ${(props) =>
    props.$active ? "var(--color-8)" : "var(--white-1)"};
`;

const BannerCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({}, [
    Autoplay({ playOnInit: true, delay: 5000 }),
  ]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  // const {
  //   prevBtnDisabled,
  //   nextBtnDisabled,
  //   onPrevButtonClick,
  //   onNextButtonClick,
  // } = usePrevNextButtons(emblaApi);

  const images = [
    "/assets/banner-3.jpg",
    "/assets/banner-4.jpg",
    "/assets/banner-5.jpg",
  ];

  return (
    <StyledCarousel ref={emblaRef}>
      <StyledCarouselContainer>
        {images.map((image) => (
          <StyledCarouselItem key={image} $backgroundImage={image} />
        ))}
      </StyledCarouselContainer>
      <StyledCarouselButtonContainer>
        {scrollSnaps.map((_, index) => (
          <StyledCarouselButtonItem
            key={index}
            $active={index === selectedIndex}
            onClick={() => onDotButtonClick(index)}
          />
        ))}
      </StyledCarouselButtonContainer>
    </StyledCarousel>
  );
};

export default BannerCarousel;
