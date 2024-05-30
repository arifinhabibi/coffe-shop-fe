"use client";

import Navbar from "@/components/ui/navbar";
import ProductComponent from "@/components/ui/product-component";
import OrderComponent from "@/components/ui/order-component";

import axios from "axios";
import { useState, useEffect, Suspense } from "react";
import ProductSkeleton from "@/components/ui/skeletons";

const fetchData = async () => {
  return await axios.get("https://fake-coffee-api.vercel.app/api");
};

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData()
      .then((resp: any) => {
        setProducts(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main>
      <Navbar />
      <div className="flex pt-24">
        <div className="basis-3/4">
          <Suspense fallback={<ProductSkeleton />}>
            <ProductComponent props={products} />
          </Suspense>
        </div>
        <div className="basis-1/4">
          <OrderComponent />
        </div>
      </div>
    </main>
  );
}
