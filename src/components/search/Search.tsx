import "./Search.styles.css";
import { SearchIcon } from "lucide-react";

const Search = () => {
  return (
    <div className="search">
      <div className="location item">Location</div>

      <div className="booking-date item">Dates</div>

      <div className="guests-wrapper item">
        <div className="guests item">Guests</div>

        <button className="search-btn item" data-testid="little-search-icon">
          <SearchIcon />
        </button>
      </div>
    </div>
  );
};
export default Search;
