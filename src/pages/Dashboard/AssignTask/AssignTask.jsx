import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/Shared/SectionTitle";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosOpen from "../../../hooks/useAxiosOpen";
import { useNavigate } from "react-router-dom";


const AssignTask = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const axiosOpen = useAxiosOpen();
    const navigate = useNavigate();


    const onSubmit = data => {
        console.log(data)
        const userInfo = {
            title: data.title,
            details: data.details,
            priority: data.priority,
            deadline:data.deadline

        }
        axiosOpen.post('/assign', userInfo)
            .then(res => {
                if (res.data.insertedId) {
                    console.log('Task added to the database');
                    reset();
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "User created successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });

                    navigate('/');
                }
            })
    }
    return (
        <div>
            <Helmet>
                <title>TaskFlow | Assign Tasks</title>
            </Helmet>
            <SectionTitle heading="Assign Tasks" ></SectionTitle>

            <form onSubmit={handleSubmit(onSubmit)} className="card-body w-full">

                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Title</span>
                    </label>
                    <input type="text"  {...register("title", { required: true })} name="title" placeholder="Title" className="input input-bordered" />
                    {errors.title && <span className="text-red-600">Title is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Details</span>
                    </label>
                    <input type="text" {...register("details", { required: true })} name="details" placeholder="Details" className="input input-bordered" />
                    {errors.details && <span className="text-red-600">Details is required</span>}
                </div>



                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Deadline</span>
                    </label>
                    <input type="date" {...register("deadline", { required: true })} name="deadline" className="input input-bordered" />
                    {errors.deadline && <span className="text-red-600">Deadline is required</span>}
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Priority</span>
                    </label>
                    <select {...register("priority", { required: true })} name="priority" className="select select-bordered">
                        <option value="">Select Priority</option>
                        <option value="low">Low</option>
                        <option value="moderate">Moderate</option>
                        <option value="high">High</option>
                    </select>
                    {errors.priority && <span className="text-red-600">Priority is required</span>}
                </div>

                <div className="form-control mt-6">
                    <input className="btn rounded-3xl bg-[#173bb7] text-white" type="submit" value="Submit" />
                </div>

            </form>
        </div>
    );
};

export default AssignTask;