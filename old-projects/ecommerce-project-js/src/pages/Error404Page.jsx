import { Header } from "../components/Header.tsx";
import './Error404Page.css';

export function Error404Page({cart}) {
  return (
    <>
      <Header cart={cart}/>

      <div className="error-404-page">
        <div className="title">
          Error 404
        </div>

        <div className="subtitle">
          Page not found
        </div>
      </div>
    </>
  );
}