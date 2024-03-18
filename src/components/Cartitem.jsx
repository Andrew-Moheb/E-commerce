import { useState } from "react";

function Cartitem({
  price,
  title,
  img,
  qty,
  item,
  addingToCart,
  deletingFromCart,
}) {
  const [intialNumber, setIntialNumber] = useState(1);
  //   Add
  function add() {
    setIntialNumber(intialNumber + 1);
  }
  //   Minus
  function minus() {
    if (intialNumber === 0) {
      return 0;
    }
    setIntialNumber(intialNumber - 1);
  }
  console.log(`item is here`, item);
  //
  return (
    <div className="flex gap-5 relative w-[90%] mx-auto">
      <img src={img} alt="itemImage" className="h-20 w-20 rounded" />

      <div className="flex flex-col gap-2">
        <h1 className="text-slate-600">{title.substring(0, 11)}</h1>
        <div className="bg-slate-200 p-1 flex justify-between mt-2 items-center rounded-full w-[6.5rem]">
          <button
            onClick={() => deletingFromCart(item)}
            className="bg-white px-3 py-1 rounded-full"
          >
            -
          </button>
          {/* the number is here */}
          <h1 className="font-semibold">{qty}</h1>
          <button
            onClick={() => addingToCart(item)}
            className="bg-white px-3 py-1 rounded-full"
          >
            +
          </button>
        </div>
      </div>
      <h1 className="fixed  right-8 font-semibold ">
        {Math.trunc(price) * qty} $
      </h1>
    </div>
  );
}

export default Cartitem;
