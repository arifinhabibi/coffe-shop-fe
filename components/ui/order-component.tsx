import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/outline";

const OrderComponent = () => {
  return (
    <div className="sticky top-2 mx-2 my-2 flex flex-col rounded-xl bg-neutral-200 px-5 py-2">
      <h1 className="font-semibold">Order List</h1>

      <div>
        <ul className="h-56 list-disc overflow-y-auto px-4">
          <li>
            <div className="flex items-center justify-between py-2">
              <span>Mie ayam 5.000 x 2</span>
              <div className="flex gap-2">
                <button className="rounded-full bg-yellow-300 px-2 py-1 text-white">
                  <PencilSquareIcon width={15} />
                </button>
                <button className="rounded-full bg-red-800 px-2 py-1 text-white">
                  <TrashIcon width={15} />
                </button>
              </div>
            </div>
          </li>{" "}
          <li>
            <div className="flex items-center justify-between py-2">
              <span>Mie ayam 15.000 x 2</span>
              <div className="flex gap-2">
                <button className="rounded-full bg-yellow-300 px-2 py-1 text-white">
                  <PencilSquareIcon width={15} />
                </button>
                <button className="rounded-full bg-red-800 px-2 py-1 text-white">
                  <TrashIcon width={15} />
                </button>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-center justify-between py-2">
              <span>Mie ayam 15.000 x 2</span>
              <div className="flex gap-2">
                <button className="rounded-full bg-yellow-300 px-2 py-1 text-white">
                  <PencilSquareIcon width={15} />
                </button>
                <button className="rounded-full bg-red-800 px-2 py-1 text-white">
                  <TrashIcon width={15} />
                </button>
              </div>
            </div>
          </li>{" "}
          <li>
            <div className="flex items-center justify-between py-2">
              <span>Mie ayam 5.000 x 2</span>
              <div className="flex gap-2">
                <button className="rounded-full bg-yellow-300 px-2 py-1 text-white">
                  <PencilSquareIcon width={15} />
                </button>
                <button className="rounded-full bg-red-800 px-2 py-1 text-white">
                  <TrashIcon width={15} />
                </button>
              </div>
            </div>
          </li>{" "}
          <li>
            <div className="flex items-center justify-between py-2">
              <span>Mie ayam 5.000 x 2</span>
              <div className="flex gap-2">
                <button className="rounded-full bg-yellow-300 px-2 py-1 text-white">
                  <PencilSquareIcon width={15} />
                </button>
                <button className="rounded-full bg-red-800 px-2 py-1 text-white">
                  <TrashIcon width={15} />
                </button>
              </div>
            </div>
          </li>{" "}
          <li>
            <div className="flex items-center justify-between py-2">
              <span>Mie ayam 5.000 x 2</span>
              <div className="flex gap-2">
                <button className="rounded-full bg-yellow-300 px-2 py-1 text-white">
                  <PencilSquareIcon width={15} />
                </button>
                <button className="rounded-full bg-red-800 px-2 py-1 text-white">
                  <TrashIcon width={15} />
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div className="mt-2">
        <h2 className="pt-4 font-semibold">Payment</h2>
        <h4 className="my-2">
          Total Order: <span>Rp. 20.000</span>
        </h4>
        <h4 className="my-2">
          Tax Admin: <span>2%</span>
        </h4>
        <h4 className="my-2">
          Total Payment: <span>Rp. 20.000</span>
        </h4>
        <h4 className="my-2 flex items-center gap-4">
          <span>Cash:</span>
          <input
            type="number"
            className="rounded-xl px-4 py-2 outline-none"
            placeholder="Input here"
          />
        </h4>
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs italic">
            *make sure your cash is enough, happy cheers!
          </p>
          <button className="mx-2 my-2 rounded-xl bg-yellow-400 px-8 py-3 text-neutral-600">
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderComponent;
