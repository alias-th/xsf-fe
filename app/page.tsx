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
import { Pagination, Category as CategoryType } from "@/types";
import { unstable_cache } from "next/cache";

const getCategories = unstable_cache(
  async () => {
    const response = await apiClient.get<{
      data: CategoryType[];
      pagination: Pagination;
    }>("/categories");
    return response.data;
  },
  ["categories"],
  { revalidate: 60, tags: ["categories"] }
);

export default async function Home() {
  const categories = await getCategories();
  return (
    <HomeLayout>
      <Navbar />
      <Banner />
      <Category categories={categories} />
      <LatestView />
      <PopularProduct />
      <DealProduct />
      <Collection />
      <Feature />
      <WorkWithUs />
      <Footer />
    </HomeLayout>
  );
}
