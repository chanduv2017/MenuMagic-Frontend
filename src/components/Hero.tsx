import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <img
        src={hero}
        className="w-full h-[350px] md:h-[500px] object-cover"
        alt="Delicious food spread"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-violet-900/30 to-transparent" />

      {/* Hero content */}
      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight animate-slide-up">
            Discover Your Next
            <span className="block text-indigo-400 mt-1">Favourite Meal</span>
          </h2>
          <p className="text-white/80 text-lg md:text-xl mt-3 max-w-xl animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Fresh, fast, and delivered to your door
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;