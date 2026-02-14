import axios from 'axios'
import { useState, useEffect, Fragment } from 'react';
import { Header } from '../../components/Header.tsx';
import buyAgain from '../../assets/images/icons/buy-again.png';
import './OrdersPage.css';
import { OrdersGrid } from './OrderGrid';

export function OrdersPage({cart, loadCart}) {

  const [orders, setOrders] = useState([]);

  useEffect(() => {

    const fetchOrders = async () => {

      const response = await axios.get('/api/orders?expand=products');
      setOrders(response.data);
    }
    fetchOrders();
  }, []);

  return (
    <>
      <title>Orders</title>
      <link rel="icon" type="image/svg+xml" href="/orders-favicon.png" />

      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <OrdersGrid 
          orders={orders} 
          buyAgain={buyAgain}
          loadCart={loadCart}
        />
      </div>
    </>
  );
}