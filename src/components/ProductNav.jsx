// eslint-disable-next-line react/prop-types
function ProductNav({ filter, setFilter, products }) {
  function filterProduct(cat) {
    // eslint-disable-next-line react/prop-types
    const filteredProducts = products.filter(
      (product) => product.category === cat
    );
    setFilter(filteredProducts);
  }

  return (
    <div className="relative top-[8rem] flex justify-between gap-2 w-full">
      <div
        id="slider"
        className="w-full overflow-x-scroll  whitespace-nowrap  scroll-smooth flex gap-3 scroll-none no-scrollbar animation ease-linear"
      >
        <button
          onClick={() => setFilter(products)}
          className="px-3 py-1 rounded-lg border-slate-300 border-2 text-slate-500 text-sm inline-block ml-6 focus:bg-primaryDark focus:text-white focus:border-primaryDark"
        >
          All
        </button>
        <button
          onClick={() => filterProduct("men's clothing")}
          className="px-3 py-1 rounded-lg border-slate-300 border-2 text-slate-500 text-sm inline-block focus focus:bg-primaryDark focus:text-white focus:border-primaryDark"
        >
          Men&apos;s Clothing
        </button>
        <button
          onClick={() => filterProduct("women's clothing")}
          className="px-3 py-1 rounded-lg border-slate-300 border-2 text-slate-500 text-sm inline-block focus:bg-primaryDark focus:text-white focus:border-primaryDark "
        >
          Women&apos;s Clothing
        </button>
        <button
          onClick={() => filterProduct("jewelery")}
          className="px-3 py-1 rounded-lg border-slate-300 border-2 text-slate-500 text-sm inline-block focus:bg-primaryDark focus:text-white focus:border-primaryDark"
        >
          Jewelery
        </button>
        <button
          onClick={() => filterProduct("electronics")}
          className="px-3 py-1 rounded-lg border-slate-300 border-2 text-slate-500 text-sm inline-block focus:bg-primaryDark focus:text-white focus:border-primaryDark mr-5 "
        >
          Electronic
        </button>
      </div>
    </div>
  );
}

export default ProductNav;
