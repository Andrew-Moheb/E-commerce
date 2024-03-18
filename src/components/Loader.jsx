import { DotLoader } from "react-spinners";
function Loader() {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-white z z-40">
      <DotLoader color="#514EB7" speedMultiplier={1.5} />
    </div>
  );
}

export default Loader;
