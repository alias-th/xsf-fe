import styled from "styled-components";
import { Typography } from "./Typography";
import Image from "next/image";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  cursor: pointer;
`;

const ImageContainer = styled(Image)`
  width: 96px;
  height: 96px;
  background-color: var(--color-6);
  border-radius: 16px;
`;

type CategoryCardProps = {
  title: string;
  imageUrl: string;
};
const CategoryCard = ({ title, imageUrl }: CategoryCardProps) => {
  const imageSrc = process.env.NEXT_PUBLIC_IMAGE_URL + "/" + imageUrl;
  return (
    <Wrapper>
      <ImageContainer
        src={imageSrc || "/assets/placeholder-1.png"}
        alt={title}
        width={96}
        height={96}
      />
      <Typography
        $color="var(--text)"
        $variant="p"
        $fontWeight="500"
        $fontFamily="var(--font-poppins)"
        $fontSize="1rem"
      >
        {title}
      </Typography>
    </Wrapper>
  );
};

export default CategoryCard;
