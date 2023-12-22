import axios from "axios";

const axiosOpen = axios.create({
    baseURL: 'https://task-management-server-seven-chi.vercel.app'
})
const useAxiosOpen = () => {
    return axiosOpen;
};

export default useAxiosOpen;