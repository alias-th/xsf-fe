import Footer from "@/layouts/home/Footer";
import Navbar from "@/layouts/navbar/Navbar";
import UploadProduct from "@/layouts/upload-product/UploadProduct";
import UploadProductLayout from "@/layouts/upload-product/UploadProductLayout";

export default function UploadProductPage() {
  return (
    <UploadProductLayout>
      <Navbar />
      <UploadProduct />
      <Footer />
    </UploadProductLayout>
  );
}
