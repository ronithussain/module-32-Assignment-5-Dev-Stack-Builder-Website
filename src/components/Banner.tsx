import bannerImg from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <header className="container mx-auto px-1 sm:px-0 my-10 sm:my-16 flex flex-col md:flex-row justify-between items-center">
      {/* left site */}
      <div className="space-y-6 sm:space-y-8 text-center sm:text-left">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold ">
          Build Your Ideal <br />
          <span className="bg-gradient-to-r from-red-500 via-pink-600 to-purple-600 bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>
        <p className="text-gray-500">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>
        <div className="flex gap-2 md:gap-4 justify-center sm:justify-start">
          <button className="text-lg md:text-xl text-white rounded-md md:px-4 px-2 md:py-2 py-1 font-semibold bg-gradient-to-r from-red-500 via-pink-600 to-purple-600">
            Explore Tecnologies
          </button>
          <button className="text-lg md:text-xl text-gray-500 rounded-md md:px-4 px-2 md:py-2 py-1 font-semibold border border-gray-200">
            Learn More
          </button>
        </div>
      </div>

      {/* right site */}
      <div className="">
        <img className="w-full h-full" src={bannerImg} alt="" />
      </div>
    </header>
  );
};

export default Banner;
