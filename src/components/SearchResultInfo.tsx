import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

type Props = {
  total: number;
  city: string;
};

const SearchResultInfo = ({ total, city }: Props) => {
  return (
    <div className="text-lg font-bold flex flex-col gap-2 justify-between lg:items-center lg:flex-row">
      <span className="flex items-center gap-2 text-gray-900">
        <MapPin className="h-5 w-5 text-violet-500 flex-shrink-0" />
        <span>
          {total} Restaurant{total !== 1 ? "s" : ""} found in{" "}
          <span className="gradient-text">{city}</span>
        </span>
        <Link
          to="/"
          className="ml-2 text-sm font-semibold text-violet-500 hover:text-violet-600 underline underline-offset-2 transition-colors duration-200"
        >
          Change Location
        </Link>
      </span>
    </div>
  );
};

export default SearchResultInfo;
