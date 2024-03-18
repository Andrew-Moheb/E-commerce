import { Route, Routes } from "react-router-dom";

import CoverPage from "./components/CoverPage";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Loader from "./components/Loader";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<CoverPage />} />
        <Route path="products" element={<Home />} />
        <Route path="loader" element={<Loader />} />
        <Route path="products/:id" element={<ProductDetails />} />
        <Route path="home" element={<Home />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
