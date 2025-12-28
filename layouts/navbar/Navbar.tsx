"use client";

import SearchBar from "@/components/SearchBar";
import styled from "styled-components";
import NavItem from "./NavItem";

const Wrapper = styled.nav`
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
`;

const Navbar = () => {
  return (
    <Wrapper>
      <div>Logo</div>
      <SearchBar />
      <NavItem />
    </Wrapper>
  );
};

export default Navbar;
