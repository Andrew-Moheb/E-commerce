import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function BottomNav() {
  const navigate = useNavigate();
  const state = useSelector((state) => state.handleCart);
  return (
    <div className="gap-20 bg-white  drop-shadow fixed bottom-0 py-2 w-full flex justify-center z-20 mt-50 opacity-90">
      <button
        onClick={() => {
          navigate("/products");
        }}
        className="flex flex-col gap-2 items-center justify-center active:text-primaryDark focus:text-primaryDark text-slate-800 focus:font-medium transition-all"
      >
        <ion-icon name="home-outline"></ion-icon>
        <p className="text-base">Home</p>
      </button>
      <button
        onClick={() => {
          navigate("/cart");
        }}
        className="flex flex-col gap-2 items-center justify-center text-slate-800 active:text-primaryDark focus:text-primaryDark focus:font-medium transition-all"
      >
        <ion-icon name="bag-outline"></ion-icon>
        <p className="text-base font-base">
          cart{" "}
          <span className="text-lg font-bold text-primaryDark">
            {state.length}
          </span>
        </p>
      </button>
      <button className="flex flex-col gap-2 items-center justify-center text-slate-800 active:text-primaryDark focus:text-primaryDark focus:font-medium transition-all">
        <ion-icon name="person-outline"></ion-icon>
        <p className="text-base">Profile</p>
      </button>
    </div>
  );
}

export default BottomNav;
