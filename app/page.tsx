import Banner from "@/layouts/home/Banner";
import Category from "@/layouts/home/Category";
import HomeLayout from "@/layouts/home/HomeLayout";
import LatestView from "@/layouts/home/LatestView";
import PopularProduct from "@/layouts/home/PopularProdcut";
import Navbar from "@/layouts/navbar/Navbar";

export default function Home() {
  return (
    <HomeLayout>
      <Navbar />
      <Banner />
      <Category />
      <LatestView />
      <PopularProduct />
    </HomeLayout>
  );
}
