import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Features from "./Features";
import Testimonials from "./Testimonials";
import UsersCategory from "./UsersCategory";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>TaskFlow | Home</title>
            </Helmet>
            <Banner></Banner>
            <UsersCategory></UsersCategory>
            <Features></Features>
            <Testimonials></Testimonials>
          this is home  
        </div>
    );
};

export default Home;