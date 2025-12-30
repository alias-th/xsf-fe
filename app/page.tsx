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

const getPopularityProducts = unstable_cache(
  async () => {
    const response = await apiClient.get<{
      data: Types.Product[];
      pagination: Types.Pagination;
    }>("/products?limit=10&page=1&sortBy=view&sortOrder=ASC");
    return response.data;
  },
  ["popularity-products"],
  { revalidate: 60, tags: ["popularity-products"] }
);

const getDealProducts = unstable_cache(
  async () => {
    const response = await apiClient.get<{
      data: Types.DealList[];
    }>("/deals/exclusive");
    const deals = response.data;
    const dealProducts: Types.Product[] = [];
    for (const deal of deals.data) {
      for (const product of deal.products) {
        dealProducts.push({
          ...product,
          deal: [
            {
              id: deal.id,
              description: deal.description,
              discount_percentage: deal.discount_percentage,
              name: deal.name,
            },
          ],
        });
      }
    }
    return dealProducts;
  },
  ["products-deal"],
  { revalidate: 60, tags: ["products-deal"] }
);

export default async function Home() {
  const categories = await getCategories();
  const popularityProducts = await getPopularityProducts();
  const deals = await getDealProducts();

  return (
    <HomeLayout>
      <Navbar />
      <Banner />
      <Category categories={categories} />
      <LatestView products={popularityProducts} />
      <PopularProduct products={popularityProducts} />
      <DealProduct products={deals} />
      <Collection />
      <Feature />
      <WorkWithUs />
      <Footer />
    </HomeLayout>
  );
}
