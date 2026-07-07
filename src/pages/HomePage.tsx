import landingImage from "../assets/landing.png";
import appDownloadImage from "../assets/appDownload.png";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";
import { Clock, Utensils, Shield, Truck } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Lightning Fast",
    description: "Average delivery in under 30 minutes",
  },
  {
    icon: Utensils,
    title: "Fresh & Quality",
    description: "Curated restaurants with the highest standards",
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "100% safe and encrypted transactions",
  },
  {
    icon: Truck,
    title: "Live Tracking",
    description: "Track your order every step of the way",
  },
];

const HomePage = () => {
  const navigate = useNavigate();

  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };

  return (
    <div className="flex flex-col gap-16">
      {/* Search Section */}
      <div className="md:px-20 lg:px-32 glass-card rounded-2xl py-10 px-6 flex flex-col gap-5 text-center -mt-16 relative z-10 animate-slide-up">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
          Craving Something
          <span className="gradient-text block md:inline md:ml-2">Delicious?</span>
        </h1>
        <p className="text-lg text-gray-500 max-w-lg mx-auto">
          Explore restaurants near you and get your favourite food delivered fast
        </p>
        <SearchBar
          placeHolder="Search by City or Town"
          onSubmit={handleSearchSubmit}
        />
      </div>

      {/* Features Section */}
      <div className="animate-fade-in">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Why Choose <span className="gradient-text">MenuMagic</span>?
          </h2>
          <p className="text-gray-500 mt-2">Everything you need for the perfect meal</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 stagger-children">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-violet-50 card-hover group"
            >
              <div className="w-14 h-14 rounded-2xl gradient-warm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-7 w-7 text-violet-500" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
              <p className="text-sm text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* App Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="rounded-2xl overflow-hidden shadow-xl card-hover">
          <img src={landingImage} className="w-full h-full object-cover" alt="Food delivery" />
        </div>
        <div className="flex flex-col items-center md:items-start justify-center gap-5 text-center md:text-left">
          <span className="font-extrabold text-3xl md:text-4xl tracking-tight text-gray-900">
            Order Even
            <span className="gradient-text block">Faster!</span>
          </span>
          <p className="text-gray-500 max-w-md">
            Download the MenuMagic App for faster ordering and personalised
            recommendations tailored just for you.
          </p>
          <img
            src={appDownloadImage}
            className="cursor-pointer hover:opacity-80 transition-opacity duration-200"
            alt="Download the app"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
