import { Helmet } from "react-helmet-async";
import SectionTitle from "../Shared/SectionTitle";


const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>TaskFlow | Contact</title>
            </Helmet>
            <SectionTitle heading="Contact Us" ></SectionTitle>
        </div>
    );
};

export default Contact;