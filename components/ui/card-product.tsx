import useListOrders from "@/store/list-order";
import { EyeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";

const CardProduct = ({ product }: any) => {
  const setOrder = useListOrders((state: any) => state.setOrder);
  const router = useRouter();
  return (
    <div className="flex w-56 flex-col">
      <div className="relative inline-block cursor-pointer">
        <Image
          src={`${product.image_url}`}
          width={200}
          height={200}
          className="h-32 w-56 rounded-t-xl border-l-2 border-r-2 border-t-2"
          alt={product.name}
        />
        <div
          onClick={() => {
            router.push(`/detail/${product.id}`);
          }}
          className="absolute inset-0 flex items-center justify-center rounded-t-xl bg-black bg-opacity-20 opacity-0 transition-opacity duration-300 hover:opacity-100"
        >
          <EyeIcon width={24} className="text-4xl text-white" />
        </div>
      </div>
      <div className="rounded-b-xl border-2 px-5 py-3">
        <h1 className="text-md font-semibold">{product.name}</h1>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-sm text-gray-500">
            <span className="font-semibold"></span>
            {product.price}$
          </p>
          <button
            className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100"
            onClick={() => setOrder(product)}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
