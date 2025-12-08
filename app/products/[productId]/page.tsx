import React from "react";

async function ProductDetails({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  return <div>ProductDetails: Product {productId}</div>;
}

export default ProductDetails;
