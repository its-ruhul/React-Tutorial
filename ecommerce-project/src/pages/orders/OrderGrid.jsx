import { OrderHeader } from "./OrderHeader";
import { OrdersDetailGrid } from "./OrdersDetailGrid";

export function OrdersGrid({orders, buyAgain}) {
  return (
    <div className="orders-grid">

      {orders.map((order) => {
        return (
          <div key={order.id} className="order-container">

            <OrderHeader order={order} />

            <OrdersDetailGrid order={order} buyAgain={buyAgain} />
          </div>
        );
      })}
    </div>
  );
}