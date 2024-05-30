import create from "zustand";

const useListOrders = create((set) => ({
  orders: [],
  setOrder: (newItem: any) =>
    set((state: any) => ({ orders: [...state.orders, newItem] })),
  deleteOrder: (index: any) =>
    set((state: any) => {
      const newOrders = [...state.orders];
      if (index > -1 && index < newOrders.length) {
        newOrders.splice(index, 1);
      }
      return { orders: newOrders };
    }),
}));

export default useListOrders;
