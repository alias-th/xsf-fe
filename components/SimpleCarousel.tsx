import StyledCarouselButton, {
  StyledCarouselButtonProps,
} from "@/components/CarouselButton";
import { useDotButton } from "@/hooks/EmblaCarouselDotButton";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import React, { useState } from "react";
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
export const StyledCarouselItem = styled.div<StyledCarouselItemProps>`
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
  initImages?: string[];
};
const SimpleCarousel = ({
  autoplay = false,
  images = [],
  initImages = [],
  containerButton,
  carouselButton,
}: SimpleCarouselProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [imageSrc, setImageSrc] = useState("");

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    img: string
  ) => {
    setImageSrc(img);
    const { top, left, width, height } =
      e.currentTarget.getBoundingClientRect();

    const x = ((e.pageX - left - window.scrollX) / width) * 100;
    const y = ((e.pageY - top - window.scrollY) / height) * 100;

    setCursorPosition({
      x: e.pageX - left - window.scrollX,
      y: e.pageY - top - window.scrollY,
    });
    setPosition({ x, y });
  };

  const [emblaRef, emblaApi] = useEmblaCarousel({}, [
    Autoplay({ playOnInit: autoplay, delay: 5000 }),
  ]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const imagesToShow =
    images.length > 0
      ? images.map((img) => `${process.env.NEXT_PUBLIC_IMAGE_URL}/${img}`)
      : initImages;

  // const {
  //   prevBtnDisabled,
  //   nextBtnDisabled,
  //   onPrevButtonClick,
  //   onNextButtonClick,
  // } = usePrevNextButtons(emblaApi);
  const size = 200;
  const zoom = 3;

  return (
    <StyledCarousel ref={emblaRef}>
      <StyledCarouselContainer>
        {imagesToShow.map((image) => {
          return (
            <React.Fragment key={image}>
              <StyledCarouselItem
                $backgroundImage={image}
                onMouseEnter={() => setShowMagnifier(true)}
                onMouseLeave={() => setShowMagnifier(false)}
                onMouseMove={(e) => {
                  handleMouseMove(e, image);
                }}
              />
            </React.Fragment>
          );
        })}
        {showMagnifier && (
          <div
            style={{
              position: "absolute",
              left: `${cursorPosition.x - size / 2}px`,
              top: `${cursorPosition.y - size / 2}px`,
              pointerEvents: "none",
              width: `${size}px`,
              height: `${size}px`,
              borderRadius: "50%",
              border: "2px solid #fff",
              boxShadow: "0 0 10px rgba(0,0,0,0.25)",
              backgroundColor: "white",
              backgroundImage: `url(${imageSrc})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: `${100 * zoom}% ${100 * zoom}%`,
              backgroundPosition: `${position.x}% ${position.y}%`,
              objectFit: "contain",
            }}
          />
        )}
      </StyledCarouselContainer>
      <StyledCarouselButtonContainer {...containerButton}>
        {scrollSnaps.map((_, index) => (
          <StyledCarouselButton
            key={index}
            $active={index === selectedIndex}
            onClick={(e) => {
              e.stopPropagation();
              onDotButtonClick(index);
            }}
            {...carouselButton}
          />
        ))}
      </StyledCarouselButtonContainer>
    </StyledCarousel>
  );
};

export default SimpleCarousel;
