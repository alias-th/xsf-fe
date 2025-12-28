"use client";
import CategoryCard from "@/components/CategoryCard";
import styled from "styled-components";

const StyledCategoryContainer = styled.section`
  /* background-color: #f5f5f5; */
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

const Category = () => {
  const categories = [
    { title: "Laminate", imageUrl: "/images/category1.jpg" },
    { title: "Tile", imageUrl: "/images/category2.jpg" },
    { title: "Stone", imageUrl: "/images/category3.jpg" },
    { title: "Wood", imageUrl: "/images/category3.jpg" },
    { title: "Mirror", imageUrl: "/images/category3.jpg" },
    { title: "WPC", imageUrl: "/images/category3.jpg" },
    { title: "Metal", imageUrl: "/images/category3.jpg" },
    { title: "All Product", imageUrl: "/images/category3.jpg" },
  ];
  return (
    <StyledCategoryContainer>
      {categories.map((category) => {
        return (
          <CategoryCard
            key={category.title}
            title={category.title}
            imageUrl={category.imageUrl}
          />
        );
      })}
    </StyledCategoryContainer>
  );
};

export default Category;
