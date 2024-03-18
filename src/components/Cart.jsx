import { useNavigate } from "react-router-dom";
import Cartitem from "./Cartitem";
import { useState } from "react";
import BottomNav from "./BottomNav";
import ReactConfetti from "react-confetti";
import { useDispatch, useSelector } from "react-redux";
import { addCart, delCart } from "../redux/action";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Cart() {
  const [checkOut, setCheckout] = useState(false);
  const notify = () => toast.success("Your Order has been Placed successfuly");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.handleCart);

  function clearCart() {
    cart.length = "";
    setCheckout(!checkOut);
    notify();
  }

  function addingToCart(item) {
    dispatch(addCart(item));
  }

  function deletingFromCart(item) {
    dispatch(delCart(item));
  }

  return (
    <>
      <div className="bg-slate-50 h-screen w-screen overflow-hidden">
        {cart.length === 0 && EmptyCart()}
        <div className="flex w-[90%]  items-center fixed top-8 left-5 mx-auto justify-between">
          <button
            onClick={() => {
              navigate(-1);
            }}
            className="bg-purple-200 flex items-center justify-center py-2 px-2 rounded-full text-black"
          >
            <ion-icon name="arrow-back-outline"></ion-icon>
          </button>
          <h1>Cart</h1>

          <div className="bg-slate-50 flex items-center justify-center py-2 px-2 rounded-full"></div>
        </div>
        <div className="mx-auto w-[90%] relative top-[7rem] h-[26rem] flex flex-col gap-10 overflow-scroll mb-1">
          {/* cart item */}
          {cart.map((item) => (
            <Cartitem
              key={item.id}
              title={item.title}
              price={item.price}
              img={item.image}
              qty={item.qty}
              item={item}
              addingToCart={addingToCart}
              deletingFromCart={deletingFromCart}
            />
          ))}
        </div>
        {/* continue btn */}
        <div className="w-[90%]  fixed bottom-[5rem] left-[5%] flex flex-col gap-5 items-center">
          {cart.length > 0 && (
            <button
              onClick={() => {
                clearCart();
              }}
              className=" bg-primary text-white w-full py-4 rounded-full"
            >
              CheckOut
            </button>
          )}
          {checkOut && (
            <>
              <button
                onClick={() => navigate("/products")}
                className="bg-slate-300 flex items-center   fixed  bottom-[10.5rem]  justify-center py-4   text-black rounded-full w-[60px] h-[60px] "
              >
                <ion-icon name="arrow-back-outline" size="small"></ion-icon>
              </button>
              <p className="relative bottom-12">Go Back</p>
            </>
          )}
        </div>
        {/* summary */}
        {checkOut && (
          <div>
            <ReactConfetti tweenDuration={10} run={true} numberOfPieces={100} />
          </div>
        )}
        <BottomNav />
      </div>
      <ToastContainer
        transition={Zoom}
        position="top-center"
        autoClose={3500}
      />
    </>
  );
}

function EmptyCart() {
  return (
    <div className="relative top-[16rem] mx-auto bg-slate-50 flex justify-center flex-col text-slate-600 items-center text-xl gap-5 font-medium ">
      <h1 className="">YOUR CART IS EMPTY </h1>
      <ion-icon name="bag-outline" size="large"></ion-icon>
    </div>
  );
}

export default Cart;
