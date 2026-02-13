import { Header } from '../../components/Header';
import { Link, useParams } from 'react-router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './TrackingPage.css';
import dayjs from 'dayjs';

export function TrackingPage({cart}) {

  let isPreparing = false;
  let isShipped = false;
  let isDelivered = false;

  const {orderId, productId} = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {

      const response = await axios.get(`api/orders/${orderId}?expand=products`);
      setOrder(response.data);
    }
    fetchOrders();
  }, [orderId]);

  if (!order) {
    return null;
  }

  const orderProduct = order.products.find((product) => {
    return product.productId === productId
  });

  const totalDeliveryTimeMs = orderProduct.estimatedDeliveryTimeMs - order.orderTimeMs;
  const timePassedMs = dayjs().valueOf() - order.orderTimeMs;

  let deliveryPercent = (timePassedMs / totalDeliveryTimeMs) * 100;

  if (!isFinite(deliveryPercent)) {
    deliveryPercent = 100;
  }

  if (deliveryPercent < 33) {
    isPreparing = true;
  }
  else if (deliveryPercent >= 33 && deliveryPercent <= 66){
    isShipped = true;
  }
  else {
    isDelivered = true;
  }
  console.log(deliveryPercent);

  return (
    <>
      <title>Tracking</title>
      <link rel="icon" type="images/svg+xml" href="tracking-favicon.png" />

      <Header cart={cart}/>

      <div className="tracking-page">
        <div className="order-tracking">
          <Link className="back-to-orders-link link-primary" to="/orders">
            View all orders
          </Link>

          <div className="delivery-date">
            {isDelivered ? 'Deliverd on ' : 'Arriving on '}
            {dayjs(orderProduct.estimatedDeliveryTimeMs).format('dddd, MMMM d')}
          </div>

          <div className="product-info">
            {orderProduct.product.name}
          </div>

          <div className="product-info">
            Quantity: {orderProduct.quantity}
          </div>

          <img className="product-image" src={orderProduct.product.image} />

          <div className="progress-labels-container">
            
            <div className={`progress-label ${isPreparing && 'current-status'}`}>
              Preparing
            </div>
            <div className={`progress-label ${isShipped && 'current-status'}`}>
              Shipped
            </div>
            <div className={`progress-label ${isDelivered && 'current-status'}`}>
              Delivered
            </div>
          </div>

          <div className="progress-bar-container">
            <div className="progress-bar" style={{width: `${deliveryPercent}%`}}></div>
          </div>
        </div>
      </div>
    </>
  );
}