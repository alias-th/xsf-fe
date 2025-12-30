"use client";
import CategoryCard from "@/components/CategoryCard";
import { Category as CategoryType, Pagination } from "@/types";
import { useMemo } from "react";
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

const Category = ({
  categories,
}: {
  categories: {
    data: CategoryType[];
    pagination: Pagination;
  };
}) => {
  // const categories = [
  //   { title: "Laminate", imageUrl: "/images/category1.jpg" },
  //   { title: "Tile", imageUrl: "/images/category2.jpg" },
  //   { title: "Stone", imageUrl: "/images/category3.jpg" },
  //   { title: "Wood", imageUrl: "/images/category3.jpg" },
  //   { title: "Mirror", imageUrl: "/images/category3.jpg" },
  //   { title: "WPC", imageUrl: "/images/category3.jpg" },
  //   { title: "Metal", imageUrl: "/images/category3.jpg" },
  //   { title: "All Product", imageUrl: "/images/category3.jpg" },
  // ];

  const transformedCategories = useMemo(() => {
    const transformedCategories = categories.data.filter((category) => {
      return category.id !== "658af1b2c3d4e5f6a7b8c9d7";
    });

    transformedCategories.push({
      id: "all-products",
      name: "All Products",
      description: "All Products",
      imageUrl: "wood.jpg",
    });

    return transformedCategories;
  }, [categories.data]);

  return (
    <StyledCategoryContainer>
      {transformedCategories.map((category) => {
        return (
          <CategoryCard
            key={category.id}
            title={category.name}
            imageUrl={category.imageUrl}
          />
        );
      })}
    </StyledCategoryContainer>
  );
};

export default Category;
