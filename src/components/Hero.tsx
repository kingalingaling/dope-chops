import heroImg from "/assets/images/bg-hero.jpg";

const Hero = () => {
  return (
    <div className="max-w-[1640] mx-auto p-0 px-4 lg:px-0">
      <div className="relative max-h-[500px]">
        {/* Overlay */}
        <div className="absolute bg-black/50 w-full h-full font-bold text-gray-200 flex flex-col justify-center">
          <h1 className="px-4 text-4xl md:text-5xl lg:text-6xl">Only The</h1>
          <h1 className="px-4 text-4xl md:text-5xl lg:text-6xl text-orange-500">Best Snacks</h1>
          <p className="px-4">Your favorite snacks prepared and delivered</p>
        </div>
        <img className="w-full max-h-[500px] object-cover" src={heroImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
