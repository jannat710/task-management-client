import { Helmet } from "react-helmet-async";
import SectionTitle from "../Shared/SectionTitle";


const About = () => {
    return (
        <div>
            <Helmet>
                <title>TaskFlow | About</title>
            </Helmet>
            <SectionTitle heading="About" ></SectionTitle>
        </div>
    );
};

export default About;