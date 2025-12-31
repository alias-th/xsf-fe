import UploadProduct from "@/layouts/upload-product/UploadProduct";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Upload New Product",
};

export default function UploadProductPage() {
  return <UploadProduct />;
}
