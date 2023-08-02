import { Link } from "react-router-dom";
import Search from "../search/Search";
import "./Header.styles.css";

const Header = () => {
  return (
    <header className="container header">
      <div className="header-logo">
        <Link to="/">KaBooking</Link>
      </div>

      <div className="header-search">
        <Search />
      </div>

      {/* Implement user accounts */}
      <div className="header-account">Account</div>
    </header>
  );
};
export default Header;
