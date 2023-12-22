import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/Shared/SectionTitle";


const Todo = () => {
    return (
        <div>
            <Helmet>
                <title>TaskFlow | To-Do</title>
            </Helmet>
            <SectionTitle heading="To-Do Task" ></SectionTitle>
        </div>
    );
};

export default Todo;