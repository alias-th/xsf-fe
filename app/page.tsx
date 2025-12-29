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

export default function Home() {
  return (
    <HomeLayout>
      <Navbar />
      <Banner />
      <Category />
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
