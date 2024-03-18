import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types :

function Item({ imgUrl, title, price, id }) {
  return (
    <NavLink
      to={`/products/${id}`}
      className="w-[47%] flex  flex-col items-center gap-3 mb-4"
    >
      <img
        src={imgUrl}
        alt="productItem"
        className="w-full rounded-md h-[9rem] text-white"
      />
      <h1 className="text-lg font-medium text-slate-500">
        {title.substring(0, 12)}
      </h1>
      <p className="text-base font-semibold">${Math.trunc(price)}</p>
    </NavLink>
  );
}

export default Item;
