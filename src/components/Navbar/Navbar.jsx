import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/nav-logo.png'
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const Navbar = () => {
    const { user, logOut } = useAuth()
    const navigate = useNavigate();
    //Logout
    const handleLogOut = () => {
        logOut()
            .then(result => {
                const user = result.user;
                console.log(user);


            })
            .catch(error => {
                const user = error.user;
                console.log(user)
                Swal.fire("Success!", "Successfully logout user", "success")
                navigate('/');
            }

            );
    }
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

        {
            user?.email && (<div className='flex'>
        <li>
            <NavLink
                to="/dashboard/task"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#173bb7] border-b-2 border-[#173bb7] rounded-none font-semibold" : "font-semibold rounded-none"}>
                My Task
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/dashboard/assignTask"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#173bb7] border-b-2 border-[#173bb7] rounded-none font-semibold" : "font-semibold rounded-none"}>
                Assign Tasks
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/dashboard"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#173bb7] border-b-2 border-[#173bb7] rounded-none font-semibold" : "font-semibold rounded-none"}>
                Dashboard
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/dashboard/todo"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#173bb7] border-b-2 border-[#173bb7] rounded-none font-semibold" : "font-semibold rounded-none"}>
                To-Do
            </NavLink>
        </li>
            </div>)
        }


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
                    
                {
                        user ? <>{/* <span>{user?.displayName}</span> */}
                        <Link to="/dashboard/myProfile"><img className="h-6 w-6 rounded-full m-2" src={user?.photoURL} alt="" /></Link>
                        <button onClick={handleLogOut} className="font-semibold text-sm">Logout</button></> : <><Link to='/signIn'><a className="btn text-[#173bb7] border-2 border-[#173bb7] rounded-none">Let&apos;s Explore</a></Link></>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;