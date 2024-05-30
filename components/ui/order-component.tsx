import useListOrders from "@/store/list-order";
import { TrashIcon } from "@heroicons/react/24/outline";
import { ChangeEvent, FormEvent, useState } from "react";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

const countOccurrences = (arr: any, key: string) => {
  return arr.reduce((acc: any, obj: any) => {
    const value = obj[key];
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});
};

const OrderComponent = () => {
  const orders = useListOrders((state: any) => state.orders);
  const clearOrder = useListOrders((state: any) => state.clearData);
  const deleteOrder = useListOrders((state: any) => state.deleteOrder);
  const renderedIds = new Set();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    items: [],
    total_price: 0.0,
    total_tax: 0.0,
    total_payment: 0.0,
    cash: 0.0,
    change_cash: 0.0,
  });

  const ordersCount = countOccurrences(orders, "id");

  let totalPrice = orders
    .map((product: any) => {
      return product.price;
    })
    .reduce((total: any, num: any) => total + num, 0);

  let totalTax = (2 * totalPrice) / 100;

  let totalPayment = totalTax + totalPrice;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      items: orders,
      total_price: parseFloat(parseFloat(totalPrice.toString()).toFixed(2)),
      total_tax: parseFloat(parseFloat(totalTax.toString()).toFixed(2)),
      total_payment: parseFloat(parseFloat(totalPayment.toString()).toFixed(2)),
      change_cash: parseFloat(
        parseFloat(
          (
            parseFloat(parseFloat(formData.cash.toString()).toFixed(2)) -
            parseFloat(parseFloat(totalPayment.toString()).toFixed(2))
          ).toString(),
        ).toFixed(2),
      ),
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData({
      ...formData,
      items: orders,
      total_price: parseFloat(parseFloat(totalPrice.toString()).toFixed(2)),
      total_tax: parseFloat(parseFloat(totalTax.toString()).toFixed(2)),
      cash: parseFloat(parseFloat(formData.cash.toString()).toFixed(2)),
      total_payment: parseFloat(parseFloat(totalPayment.toString()).toFixed(2)),
      change_cash: parseFloat(
        parseFloat(
          (
            parseFloat(parseFloat(formData.cash.toString()).toFixed(2)) -
            parseFloat(parseFloat(totalPayment.toString()).toFixed(2))
          ).toString(),
        ).toFixed(2),
      ),
    });

    if (
      parseFloat(parseFloat(formData.cash.toString()).toFixed(2)) <
      parseFloat(parseFloat(formData.total_payment.toString()).toFixed(2))
    ) {
      return toast({
        title: "Failed",
        variant: "failure",
        description: "your money not enough to pay",
        action: (
          <ToastAction altText="See Detail Transaction">See Detail</ToastAction>
        ),
      });
    } else {
      clearOrder();
      setFormData({
        ...formData,
        cash: 0.0,
        change_cash: 0.0,
      });

      return toast({
        title: "Success",
        variant: "destructive",
        description: "Thankyou for your order",
        action: (
          <ToastAction altText="See Detail Transaction">See Detail</ToastAction>
        ),
      });
    }
  };

  return (
    <div className="sticky top-28 mx-2 my-2 flex flex-col rounded-xl bg-neutral-200 px-5 py-2">
      <h1 className="my-2 font-semibold">Order List</h1>
      <div>
        <ul className="h-56 list-disc overflow-y-auto pl-5">
          {orders.length < 1 ? (
            <div className="flex h-full flex-col items-center justify-center">
              <p className="text-xs italic">*please choose menu first</p>
            </div>
          ) : (
            orders.map((order: any, index: any) => {
              if (!renderedIds.has(order.id)) {
                renderedIds.add(order.id);
                return (
                  <li key={order.id}>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-xs">
                        {order.name} ( {order.price}$ x {ordersCount[order.id]}{" "}
                        )
                      </span>

                      <button
                        className="rounded-full bg-red-800 px-2 py-2 text-white"
                        onClick={() => deleteOrder(index)}
                      >
                        <TrashIcon width={15} />
                      </button>
                    </div>
                  </li>
                );
              }
              return null;
            })
          )}
        </ul>
      </div>

      <form onSubmit={handleSubmit} method="POST">
        <div className="mt-2">
          <h2 className="pt-4 font-semibold">Payment</h2>
          <h4 className="my-2">
            Total Order: <span>{totalPrice.toFixed(2)}$</span>
          </h4>
          <h4 className="my-2">
            Tax Admin 2%: <span>( {totalTax.toFixed(2)}$ )</span>
          </h4>
          <h4 className="my-2">
            Total Payment: <span>{totalPayment.toFixed(2)}$</span>
          </h4>
          <h4 className="my-2 flex items-center gap-4">
            <span>Cash:</span>
            <input
              name="cash"
              type="float"
              className="rounded-xl px-4 py-2 outline-none"
              placeholder="Input here"
              value={formData.cash}
              onChange={handleChange}
            />
          </h4>
          <div className="flex items-center justify-between gap-3">
            <p className="text-xs italic">
              *make sure your cash is enough, happy a cheers!
            </p>
            <button
              type="submit"
              className="mx-2 my-2 rounded-xl bg-yellow-400 px-8 py-3 text-xs font-bold text-neutral-600"
              disabled={orders.length < 1}
            >
              Checkout
            </button>
          </div>
        </div>
      </form>
      <Toaster />
    </div>
  );
};

export default OrderComponent;
