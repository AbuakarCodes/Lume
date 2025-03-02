import ProductName from "../../NAME";

function MainBG() {
  return (
    <div className="absolute top-[45%] w-full lg:w-auto px-3 left-[50%] -translate-x-1/2 -translate-y-1/2 ">
      <h1 className="text-3xl md:text-4xl lg:text-5xl  text-center font-bold bg-gradient-to-r w from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
        Hello, It's {ProductName}
      </h1>
    </div>
  );
}

export default MainBG;
