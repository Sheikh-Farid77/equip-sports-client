import { NavLink, useNavigate } from "react-router";
import Logo from "../assets/EquipSports Logo Design.png";
import BarIcon from "./svg/BarIcon";
import { useAuth } from "../provider/AuthProvider";
import { Link } from "react-router";

export default function Nav() {
  const { authInfo, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  // Reusable class for NavLink
  const navLinkClass = ({ isActive }) =>
    `transition-colors ${
      isActive ? "text-red-500 font-semibold" : "hover:text-red-400"
    }`;

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-md text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo + Mobile Menu */}
        <div className="flex items-center gap-3">
          <div className="dropdown lg:hidden">
            <button
              tabIndex={0}
              role="button"
              className="p-2 rounded-md hover:bg-gray-700 focus:outline-none"
            >
              <BarIcon />
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-gray-800 rounded-lg z-10 mt-3 w-56 p-2 shadow-lg text-white"
            >
              <li>
                <NavLink to="/" className={navLinkClass}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/products" className={navLinkClass}>
                  All Equipment
                </NavLink>
              </li>
              <li>
                <NavLink to="/my_products" className={navLinkClass}>
                  My Equipment
                </NavLink>
              </li>
              <li>
                <NavLink to="/add_equipment" className={navLinkClass}>
                  Add Equipment
                </NavLink>
              </li>
            </ul>
          </div>
          <NavLink to="/">
            <img
              src={Logo}
              alt="logo"
              className="h-12 w-12 lg:h-16 lg:w-16 object-contain"
            />
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-8 text-lg font-medium">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/products" className={navLinkClass}>
            All Equipment
          </NavLink>
          <NavLink to="/my_products" className={navLinkClass}>
            My Equipment
          </NavLink>
          <NavLink to="/add_equipment" className={navLinkClass}>
            Add Equipment
          </NavLink>
        </div>

        {/* Auth Section */}
        <div className="flex items-center gap-4">
          {authInfo ? (
            <>
              <img
                className="h-10 w-10 sm:h-12 sm:w-12 border-2 border-red-500 rounded-full object-cover shadow-md"
                src={authInfo.photo}
                alt={authInfo.name}
              />
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm sm:text-base font-semibold rounded-md bg-red-600 text-white hover:bg-red-700 transition-colors shadow-md"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login">
              <button className="px-4 py-2 text-sm sm:text-base font-semibold rounded-md bg-red-600 text-white hover:bg-red-700 transition-colors shadow-md">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
