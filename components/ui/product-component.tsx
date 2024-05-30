"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import CardProduct from "@/components/ui/card-product";
import { useState } from "react";

const ProductComponent = ({ props }: any) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchByCategory, setSearchByCategory] = useState<string[]>([]);

  const filteredProducts = props.filter((product: any) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const categories: any[] = [];

  props.forEach((item: any) => {
    item.grind_option.forEach((option: any) => {
      const findOpt = categories.find((category) => category === option);
      if (!findOpt) {
        categories.push(option);
      }
    });
  });

  return (
    <div className="mx-2 my-2 px-2 py-2">
      <div className="flex items-end justify-between py-4">
        <h1 className="font-semibold">Categories</h1>
        <div className="flex h-10 w-80 items-center gap-3 rounded-xl bg-neutral-200 pl-4">
          <label htmlFor="find">
            <MagnifyingGlassIcon width={24} className="text-black" />
          </label>
          <input
            type="text"
            id="find"
            className="h-10 w-full rounded-r-xl bg-neutral-200 text-neutral-500 outline-none"
            placeholder="Find here"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="my-3 flex flex-wrap gap-4">
        <button
          className="rounded-xl border-2 px-4 py-2 hover:bg-neutral-100"
          onClick={() => setSearchByCategory([])}
        >
          All
        </button>
        {categories.map((category: string, index: any) => (
          <button
            className="rounded-xl border-2 px-4 py-2 hover:bg-neutral-100"
            onClick={() => setSearchByCategory([...searchByCategory, category])}
            key={index}
          >
            {category}
          </button>
        ))}
      </div>

      {/* list */}
      <div className="mt-5 flex flex-wrap justify-start gap-4">
        {filteredProducts.map((product: any, index: any) => (
          <CardProduct key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductComponent;
