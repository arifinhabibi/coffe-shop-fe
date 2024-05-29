import Navbar from "@/components/ui/navbar";
import ProductComponent from "@/components/ui/product-component";
import OrderComponent from "@/components/ui/order-component";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="flex">
        <div className="basis-3/4">
          <ProductComponent />
        </div>
        <div className="basis-1/4">
          <OrderComponent />
        </div>
      </div>
    </main>
  );
}
