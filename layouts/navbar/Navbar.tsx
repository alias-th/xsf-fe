"use client";

import SearchBar from "@/components/SearchBar";
import styled from "styled-components";
import NavItem from "./NavItem";
import CustomButton from "@/components/Button";
import { Typography } from "@/components/Typography";
import Image from "next/image";

const Wrapper = styled.nav`
  width: 100%;
  max-width: 1240px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  margin: 0 auto;
`;

const MoreOptionsIcon = () => {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="4.5" cy="10.5" r="1.5" fill="#252525" />
      <circle cx="10.5" cy="10.5" r="1.5" fill="#252525" />
      <circle cx="16.5" cy="10.5" r="1.5" fill="#252525" />
    </svg>
  );
};

const Navbar = () => {
  return (
    <Wrapper>
      <Image
        src="/assets/logo.svg"
        alt="Logo"
        width={155}
        height={30}
        loading="eager"
      />
      <SearchBar />
      <NavItem />
      <CustomButton
        $height="40px"
        $width="79px"
        $backgroundColor="var(--color-7)"
      >
        <>
          <Typography
            $variant="p"
            $color="var(--white-1)"
            $align="center"
            $fontFamily="var(--font-poppins)"
            $fontSize="16px"
          >
            Log in
          </Typography>
        </>
      </CustomButton>
      <CustomButton $height="21px" $width="21px" $backgroundColor="transparent">
        <MoreOptionsIcon />
      </CustomButton>
    </Wrapper>
  );
};

export default Navbar;
