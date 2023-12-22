import Lottie from "lottie-react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import loadingAnimation from '../assets/Animation/loading.json'

const PrivateRoute = ({children}) => {
    const { user, loading } = useAuth();

    const location = useLocation();

    if (loading) {
        return <div><Lottie className="h-96 w-96 mx-auto" animationData={loadingAnimation}></Lottie></div>;
    }

    if (!loading && !user?.email) {
        return <Navigate to='/login' state={{from: location}} replace></Navigate>;

    }


    return children;
};

export default PrivateRoute;