import axios from 'axios';
import { Routes, Route } from 'react-router';
import {useState, useEffect } from 'react';
import { HomePage } from './pages/home/HomePage';
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import { OrdersPage } from './pages/orders/OrdersPage';
import { TrackingPage } from './pages/tracking/TrackingPage';
import './App.css';
import { Error404Page } from './pages/Error404Page';

function App() {
  const [cart, setCart] = useState([]);

  const loadCart = async () => {

    const response = await axios.get('/api/cart-items?expand=product');
    setCart(response.data);
  }
  useEffect(() => {
    loadCart();
  }, []);

  return (
    <Routes>
      <Route index  element={<HomePage cart={cart} loadCart={loadCart} />} />
      <Route path="/checkout" element={<CheckoutPage cart={cart} loadCart={loadCart} />} />
      <Route path="/orders" element={<OrdersPage cart={cart}/>} />
      <Route path="/tracking/:orderId/:productId" element={<TrackingPage cart={cart}/>} />
      <Route path="*" element={<Error404Page cart={cart}/>}/>
    </Routes>
    
  );
}

export default App
