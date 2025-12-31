import ProductList from "@/layouts/product-list/ProductList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore Our Wide Range of Products",
};

const ProductListPage = () => {
  return <ProductList />;
};

export default ProductListPage;
