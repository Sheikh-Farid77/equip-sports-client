import { Link } from "react-router";
import Logo from "../assets/EquipSports Logo Design.png";
import BarIcon from "./svg/BarIcon";
import { useAuth } from "../provider/AuthProvider";

export default function Nav() {
  const { authInfo } = useAuth();
  return (
    <div className="navbar bg-gray-300 shadow-sm text-gray-800">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <BarIcon />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">All Equipment</Link>
            </li>
            <li>
              <Link to="/my_products">My Equipment</Link>
            </li>

            <li>
              <Link to="/add_equipment">Add Equipment</Link>
            </li>
          </ul>
        </div>
        <Link to="/">
          <img src={Logo} alt="logo" className="h-14 w-14 lg:w-20 lg:h-20" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">All Equipment</Link>
          </li>
          <li>
            <Link to="/my_products">My Equipment</Link>
          </li>
          <li>
            <Link to="/add_equipment">Add Equipment</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
       <div className="flex items-center gap-3 flex-wrap sm:flex-nowrap">
  {authInfo ? (
    <>
      {/* User photo */}
      <img
        className="h-12 w-12 sm:h-16 sm:w-16 border-2 border-red-600 rounded-full object-cover"
        src={authInfo.photo}
        alt={authInfo.name}
      />

      {/* Logout button */}
      <button className="px-3 sm:px-4 py-2 text-base sm:text-lg font-semibold rounded-md bg-gray-700 text-gray-300 hover:bg-gray-600 transition-colors w-full sm:w-auto cursor-pointer">
        Logout
      </button>
    </>
  ) : (
    <>
      <Link to="/login" className="w-full sm:w-auto">
        <button className="px-3 sm:px-4 py-2 text-base sm:text-lg font-semibold rounded-md bg-gray-700 text-gray-300 hover:bg-gray-600 transition-colors w-full sm:w-auto cursor-pointer">
          Login
        </button>
      </Link>
    </>
  )}
</div>

      </div>
    </div>
  );
}
