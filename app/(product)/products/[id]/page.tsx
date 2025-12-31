import ProductDetails from "@/layouts/product-details/ProductDetails";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Product Details",
};

const ProductDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const resolvedParams = await params;
  return (
    <>
      <Link href="/products" style={{ width: "fit-content" }}>
        <p>
          <u>Go to products page</u>
        </p>
      </Link>
      <ProductDetails productId={resolvedParams.id} />
    </>
  );
};
export default ProductDetailsPage;
