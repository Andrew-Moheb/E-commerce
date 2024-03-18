import { useEffect, useState } from "react";
import BottomNav from "./BottomNav";
import Item from "./Item";
import Loader from "./Loader";
import ProductNav from "./ProductNav";

function Home() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getProducts() {
      try {
        setLoading(true);
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        setFilter(data);
        setLoading(false);
        console.log(data);
        console.log(data[0].image);
      } catch (error) {
        alert(error);
      }
    }
    getProducts();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="relative h-screen w-screen">
          {/* header */}
          <div className="absolute py-2  top-0 w-full bg-slate-100  mx-auto  flex items-center justify-center">
            <h1 className="text-2xl font-semibold text-primary ">Kutuko</h1>
          </div>
          {/* top image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/634538/pexels-photo-634538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="image offers"
              className="items-center w-[85%] mx-auto relative top-[4rem] rounded-lg"
            />
            <p className="absolute top-[5rem] left-[38px] bg-yellow-200 px-4 py-1 rounded-md text-sm font-medium">
              Sale 50%
            </p>
          </div>
          {/* product title */}
          <div className="w-full relative flex items-center justify-center">
            <h1 className="absolute top-20 font-medium">Latest Products</h1>
          </div>
          {/* Product Nav*/}
          <ProductNav
            setFilter={setFilter}
            filter={filter}
            products={products}
          />
          {/* bottom nav */}
          <BottomNav />
          <div className="flex flex-row flex-wrap  items-center  gap-[5%] w-[90%] mx-auto relative top-[10rem]">
            {filter.map((product) => (
              <Item
                key={product.id}
                imgUrl={product.image}
                title={product.title}
                price={product.price}
                id={product.id}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
