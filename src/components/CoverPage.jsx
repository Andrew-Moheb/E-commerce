import { Link } from "react-router-dom";

function CoverPage() {
  return (
    <div className="h-screen bg bg-primary w-screen justify-start flex items-center flex-col gap-3 relative">
      <h1 className="text-[white] text-3xl font-semibold mt-[10rem]">Kutuko</h1>
      <h2 className="text-sm text-gray-50 font font-light">
        Any Shopping just from Home
      </h2>

      <Link
        to="/products"
        className="w-[80%] bg-white mt-20 py-4 text-primaryDark font-medium rounded-full flex justify-center"
      >
        Start Now
      </Link>

      <footer className="text-xs text-gray-50 absolute bottom-7">
        version 0.0.1
      </footer>
    </div>
  );
}

export default CoverPage;
