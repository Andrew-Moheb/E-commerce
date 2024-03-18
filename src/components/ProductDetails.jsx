import { useNavigate, useParams } from "react-router-dom";
import Loader from "./Loader";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../redux/action";
// toaster is here :
import { Bounce, Slide, ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProductDetails() {
  function notify() {
    toast.success("Add to Cart successfuly");
  }

  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [isloading, setLoading] = useState(false);

  const state = useSelector((state) => state.handleCart);

  const dispatch = useDispatch();
  function addProduct(product) {
    dispatch(addCart(product));
    notify();
  }

  useEffect(() => {
    async function getProduct() {
      try {
        setLoading(true);
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
        setLoading(false);
        console.log(data);
      } catch (error) {
        alert(error);
      }
    }
    getProduct();
  }, [id]);

  return (
    <>
      {isloading ? (
        <Loader />
      ) : (
        <div className="h-screen w-screen relative bg-slate-50">
          {/* Top nav */}
          <div className="flex w-[90%] items-center relative top-5 mx-auto justify-between">
            <button
              onClick={() => {
                navigate(-1);
              }}
              className="bg-purple-200 flex items-center justify-center py-2 px-3 rounded-full text-black"
            >
              <ion-icon name="arrow-back-outline"></ion-icon>
            </button>
            <h1>Product Details</h1>

            <button
              onClick={() => {
                navigate("/cart");
              }}
              className="bg-purple-200 flex items-center gap-2 justify-center py-2 px-2 rounded-full text-black"
            >
              <ion-icon name="bag-outline"></ion-icon>
              <p className="font-semibold">{state.length}</p>
            </button>
          </div>
          {/* product image */}
          <div className="w-full mx-auto relative top-[4rem]">
            <img
              src={product?.image}
              alt="product image"
              className="rounded-full w-[17rem] h-[17rem] mx-auto"
            />
          </div>

          <div className="bg-white relative top-[4rem] drop-shadow h-[44%] rounded rounded-t-[50px] flex flex-col gap-5">
            <div className="flex mt-5 justify-between items-center w-[90%] mx-auto">
              <h1 className="text-lg">{product?.title}</h1>
              <div
                className="flex  items-center gap-2 text-yellow-500
              "
              >
                <p className="text-md text-slate-500 mt-[2px]">
                  {product?.rating?.rate}
                </p>
                <ion-icon name="star" size="small"></ion-icon>
              </div>
            </div>
            <p className="text-sm font-light w-[90%]  flex items-center justify-center text-left mx-auto">
              {product?.description.substring(0, 200)}
            </p>
            <div className="flex items-center justify-between w-[90%] mx-auto">
              <h1 className="text-3xl">
                <span className="text-primaryDark">$</span>
                {Math.trunc(product?.price)}
              </h1>
              <button
                onClick={() => addProduct(product)}
                className="bg-primary text-white flex items-center gap-3 justify-center text-sm px-5 py-4 rounded-full animate-bounce"
              >
                <ion-icon name="bag-outline"></ion-icon>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
      <ToastContainer
        autoClose={1800}
        position="top-center"
        transition={Zoom}
      />
    </>
  );
}

export default ProductDetails;
