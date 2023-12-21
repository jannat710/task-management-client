import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/nav-logo.png'

const Navbar = () => {
    const navlink = <>
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#173bb7] border-b-2 border-[#173bb7] rounded-none font-semibold" : "font-semibold rounded-none"}>
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#173bb7] border-b-2 border-[#173bb7] rounded-none font-semibold" : "font-semibold rounded-none"}>
                About
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/contact"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#173bb7] border-b-2 border-[#173bb7] rounded-none font-semibold" : "font-semibold rounded-none"}>
                Contact
            </NavLink>
        </li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navlink}
                        </ul>
                    </div>
                    <img className='w-28' src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlink}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='/signIn'><a className="btn text-[#173bb7] border-2 border-[#173bb7] rounded-none">Let&apos;s Explore</a></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;