"use client";

import Footer from "@/layouts/home/Footer";
import Navbar from "@/layouts/navbar/Navbar";
import styled from "styled-components";

const Layout = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 64px 1fr 500px;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 50px auto;
  gap: 32px;
  display: flex;
  flex-direction: column;
`;

type ProductLayoutProps = {
  children: React.ReactNode;
};
const ProductLayout = ({ children }: ProductLayoutProps) => {
  return (
    <Layout>
      <Navbar />
      <Wrapper>{children}</Wrapper>
      <Footer />
    </Layout>
  );
};

export default ProductLayout;
