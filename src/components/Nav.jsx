import { Link } from 'react-router';
import Logo from '../assets/EquipSports Logo Design.png'
import BarIcon from './svg/BarIcon';

export default function Nav() {
    
  return (
    <div className="navbar bg-base-100 shadow-sm">
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
              <a>Item 1</a>
            </li>
              <li>
              <a>Item 2</a>
            </li>

            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <Link to='/'>
        <img src={Logo} alt="logo" className='h-14 w-14 lg:w-20 lg:h-20' />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Item 1</a>
          </li>
          <li>
             <a>Item 2</a>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
}
