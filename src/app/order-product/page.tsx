"use client";
import React from "react";
import { useRouter } from "next/navigation";

const orderProduct = () => {
  const router = useRouter();

  function handleClick() {
    console.log("Order placed");
    router.push("/");
  }

  return (
    <>
      <div>Please place your Order</div>
      <button onClick={handleClick}>Place Order</button>
    </>
  );
};

export default orderProduct;
