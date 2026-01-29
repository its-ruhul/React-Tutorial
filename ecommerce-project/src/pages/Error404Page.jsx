import { Header } from "../components/Header";
import './Error404Page.css';

export function Error404Page() {
  return (
    <>
      <Header />

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