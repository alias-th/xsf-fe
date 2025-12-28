import Banner from "@/layouts/home/Banner";
import HomeLayout from "@/layouts/home/HomeLayout";
import Navbar from "@/layouts/navbar/Navbar";

export default function Home() {
  return (
    <HomeLayout>
      <Navbar />
      <Banner />
    </HomeLayout>
  );
}
