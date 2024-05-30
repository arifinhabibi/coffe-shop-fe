"use client";

import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";
import axios from "axios";

const fetchCoffe = async (id: string) => {
  return await axios.get(`https://fake-coffee-api.vercel.app/api/${id}`);
};

const ProductDetail = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const [products, setProducts] = useState<any>([]);

  useEffect(() => {
    fetchCoffe(params.id)
      .then((resp) => {
        setProducts(resp.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="py-10">
      <button
        className="rounded-full border-2 px-2 py-2 hover:bg-neutral-100"
        onClick={() => router.back()}
      >
        <ChevronLeftIcon width={24} />
      </button>
      <div className="py-10">
        {products.map((product: any) => (
          <div key={product.id}>
            <div className="flex gap-6">
              <div>
                <Image
                  src={`${product.image_url}`}
                  width={200}
                  height={200}
                  alt={product.name}
                  className="h-64 w-64 border-2"
                />
                <h1 className="py-4 text-xl font-semibold">{product.name}</h1>
              </div>
              <div>
                <div>
                  <h4 className="font-semibold capitalize">summary</h4>
                  <p className="w-96 italic text-neutral-500">
                    {product.description}
                  </p>
                </div>
                <div className="py-2">
                  <h4 className="font-semibold capitalize">
                    price:{" "}
                    <span className="text-neutral-500">{product.price}$</span>
                  </h4>
                </div>
                <div className="py-2">
                  <h4 className="font-semibold capitalize">
                    region:{" "}
                    <span className="text-neutral-500">{product.region}</span>
                  </h4>
                </div>
                <div className="py-2">
                  <h4 className="font-semibold capitalize">
                    weight:{" "}
                    <span className="text-neutral-500">{product.weight}gr</span>
                  </h4>
                </div>
                <div className="py-2">
                  <h4 className="font-semibold capitalize">
                    roast level:{" "}
                    <span className="text-neutral-500">
                      {product.roast_level == 1
                        ? "light"
                        : product.roast_level == 2
                          ? "light medium"
                          : product.roast_level == 3
                            ? "medium"
                            : product.roast_level == 4
                              ? "medium dark"
                              : product.roast_level == 5
                                ? "dark"
                                : ""}
                    </span>
                  </h4>
                </div>
                <div className="py-2">
                  <h4 className="font-semibold capitalize">Category</h4>
                  <div className="flex flex-wrap gap-2 py-2">
                    {product.grind_option.map((opt: any, index: any) => (
                      <p
                        className="rounded-full border-2 px-4 py-2"
                        key={index}
                      >
                        {opt}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;
