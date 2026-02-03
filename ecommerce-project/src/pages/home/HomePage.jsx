import axios from 'axios';
import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { ProductsGrid } from './ProductsGrid';
import './HomePage.css';

export function HomePage({cart}) {

  const [products, setProducts] = useState([]);
  

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

      const response = await axios.get('/api/products')
      setProducts(response.data);
    }
    getHomeData();
  }, []);

  return (
    <>
      <title>Ecommerce Project</title>
      <link rel="icon" type="image/svg+xml" href="home-favicon.png" />

      <Header cart={cart}/>

      <div className="home-page">
        <ProductsGrid products={products} />
      </div>
    </>
  );
}