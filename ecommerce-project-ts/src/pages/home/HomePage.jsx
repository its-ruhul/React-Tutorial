import axios from 'axios';
import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { ProductsGrid } from './ProductsGrid';
import { useSearchParams } from 'react-router';
import './HomePage.css';

export function HomePage({cart, loadCart}) {

  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search');
  
  useEffect(() => {

    const getHomeData = async () => {
        
      
      //built in function to fetch data from backend
      //fetch returns a promise
      //.then() function runs when the data is fetched

      /*
      fetch('http://localhost:3000/api/products').then((response) => {

        //we get the data in response response.json() which is also asynchronous
        return response.json()
        }).then((data) => {
          console.log(data);
        });
      */

      if (search) {
        const response = await axios.get(`/api/products?search=${search}`)
        setProducts(response.data);
      }
      else {
        const response = await axios.get('/api/products')
        setProducts(response.data);
      }
    }
    getHomeData();
  }, [search]);

  return (
    <>
      <title>Ecommerce Project</title>
      <link rel="icon" type="image/svg+xml" href="home-favicon.png" />

      <Header cart={cart}/>

      <div className="home-page">
        <ProductsGrid products={products} loadCart={loadCart} />
      </div>
    </>
  );
}