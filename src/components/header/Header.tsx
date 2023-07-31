import Search from "../search/Search";
import "./Header.styles.css";

const Header = () => {
  return (
    <header className="container header">
      <div className="header-logo">KabHotel</div>

      <div className="header-search">
        <Search />
      </div>

      {/* Implement user accounts */}
      <div className="header-account">Account</div>
    </header>
  );
};
export default Header;
