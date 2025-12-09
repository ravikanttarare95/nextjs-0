import React from "react";
import { notFound } from "next/navigation";

async function Review({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;

  if (parseInt(reviewId) > 1000) {
    notFound();
  }
  
  return (
    <div>
      Review: {reviewId} , for Product:{productId}
    </div>
  );
}

export default Review;
