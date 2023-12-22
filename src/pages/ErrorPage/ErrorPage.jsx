import Lottie from "lottie-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import error from '../../assets/Animation/error.json'


const ErrorPage = () => {
    return (
        <div className='max-w-7xl mx-auto'>
        <Helmet>
            <title>TaskFlow | Error Page</title>
        </Helmet>
        <Lottie className='h-1/3 w-1/3 mx-auto' animationData={error}></Lottie>
        <h1 className='text-center font-bold'>404-PAGE NOT FOUND</h1>
        <p className='py-5 text-center'>The page you are looking for might have been removed <br></br>had its name changed or is temporary unavailable</p>
        <button className="btn text-black text-center flex justify-center items-center mx-auto border-2 border-black rounded-none"><Link to='/'>Go Home</Link></button>
    </div>
    );
};

export default ErrorPage;