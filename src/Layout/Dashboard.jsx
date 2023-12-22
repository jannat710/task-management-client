import { FaEnvelope, FaHome, FaPhone,  FaTasks } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { MdOutlineAssignmentTurnedIn } from "react-icons/md";
import { FaAnglesRight } from "react-icons/fa6";


const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-[#173bb7] text-white">
                <ul className="menu p-4">
                    <li><NavLink to='/dashboard/task'><FaTasks></FaTasks>All Tasks</NavLink></li>
                    <li><NavLink to='/dashboard/assignTask'><MdOutlineAssignmentTurnedIn />Assign Task</NavLink></li>
                    <li><NavLink to='/dashboard/todo'><FaAnglesRight />To-Do List</NavLink></li>

                    {/* shared nav link */}
                    <div className="divider divide-red-50">Or Back To</div>
                    <li>
                        <NavLink to="/" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-white font-medium bg-[#173bb7]" : "font-medium"
                        }>
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-white font-medium bg-[#173bb7]" : "font-medium"
                        }>
                            <FaEnvelope></FaEnvelope>
                            About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-white font-medium bg-[#173bb7]" : "font-medium"
                        }>
                            <FaPhone></FaPhone>
                            Contact</NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;