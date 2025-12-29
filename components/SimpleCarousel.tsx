import StyledCarouselButton, {
  StyledCarouselButtonProps,
} from "@/components/CarouselButton";
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

type StyledCarouselButtonContainerProps = {
  $bottom?: string;
  $gap?: string;
};
const StyledCarouselButtonContainer = styled.div<StyledCarouselButtonContainerProps>`
  position: absolute;
  bottom: ${({ $bottom }) => $bottom || "16px"};
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: ${({ $gap }) => $gap || "16px"};
`;

type SimpleCarouselProps = {
  images?: string[];
  autoplay?: boolean;
  containerButton?: StyledCarouselButtonContainerProps;
  carouselButton?: Partial<StyledCarouselButtonProps>;
};
const SimpleCarousel = ({
  autoplay = true,
  images = [
    "/assets/banner-3.jpg",
    "/assets/banner-4.jpg",
    "/assets/banner-5.jpg",
  ],
  containerButton,
  carouselButton,
}: SimpleCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({}, [
    Autoplay({ playOnInit: autoplay, delay: 5000 }),
  ]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  // const {
  //   prevBtnDisabled,
  //   nextBtnDisabled,
  //   onPrevButtonClick,
  //   onNextButtonClick,
  // } = usePrevNextButtons(emblaApi);

  return (
    <StyledCarousel ref={emblaRef}>
      <StyledCarouselContainer>
        {images.map((image) => (
          <StyledCarouselItem key={image} $backgroundImage={image} />
        ))}
      </StyledCarouselContainer>
      <StyledCarouselButtonContainer {...containerButton}>
        {scrollSnaps.map((_, index) => (
          <StyledCarouselButton
            key={index}
            $active={index === selectedIndex}
            onClick={() => onDotButtonClick(index)}
            {...carouselButton}
          />
        ))}
      </StyledCarouselButtonContainer>
    </StyledCarousel>
  );
};

export default SimpleCarousel;
