import { NavLink } from "react-router-dom";
import logo from "../logo.png";
const DashboardNav = () => {
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <div className="nav-logo">
            <img src={logo} className="logo" />
            <h2 className="website-name">The Carbon News</h2>
          </div>
          <NavLink to="/" className="back-home">
            Back to Homepage
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default DashboardNav;
