import Banner from "@/layouts/home/Banner";
import Category from "@/layouts/home/Category";
import Collection from "@/layouts/home/Collection";
import DealProduct from "@/layouts/home/DealProduct";
import Feature from "@/layouts/home/Feature";
import Footer from "@/layouts/home/Footer";
import HomeLayout from "@/layouts/home/HomeLayout";
import LatestView from "@/layouts/home/LatestView";
import PopularProduct from "@/layouts/home/PopularProdcut";
import WorkWithUs from "@/layouts/home/WorkWithUs";
import Navbar from "@/layouts/navbar/Navbar";
import apiClient from "@/lib/axios";
import * as Types from "@/types";
import { unstable_cache } from "next/cache";

const getCategories = unstable_cache(
  async () => {
    const response = await apiClient.get<{
      data: Types.Category[];
      pagination: Types.Pagination;
    }>("/categories");
    return response.data;
  },
  ["categories"],
  { revalidate: 60, tags: ["categories"] }
);

const getProducts = unstable_cache(
  async () => {
    const response = await apiClient.get<{
      data: Types.Product[];
      pagination: Types.Pagination;
    }>("/products?limit=10&page=1&sortBy=view&sortOrder=ASC");
    return response.data;
  },
  ["products"],
  { revalidate: 60, tags: ["products"] }
);

export default async function Home() {
  const categories = await getCategories();
  const products = await getProducts();
  return (
    <HomeLayout>
      <Navbar />
      <Banner />
      <Category categories={categories} />
      <LatestView products={products} />
      <PopularProduct products={products} />
      <DealProduct />
      <Collection />
      <Feature />
      <WorkWithUs />
      <Footer />
    </HomeLayout>
  );
}
