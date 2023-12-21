// import features from '../../assets/feature.jpg'
import SectionTitle from '../../components/Shared/SectionTitle';
import './Features.css';

const Features = () => {
    return (
        <div>
            <div className='featured-item bg-fixed text-center pt-5'>
            <SectionTitle heading="Features" ></SectionTitle>
                <div className="md:flex justify-center items-center bg-black bg-opacity-60 pb-20 pt-12 m-20 px-36">
                    {/* <div>
                    <img src={features} alt="" />
                </div> */}
                    <div className="md:ml-10 text-white">
                        <p>Dec 20, 2023</p>
                        <p className="uppercase">Where can i get some?</p>
                        <p className='py-5'>Boost your productivity with our task management features. Stay organized with intuitive task creation, set deadlines, assign tasks to team members, track progress, and receive notifications. Effortlessly manage your tasks and achieve your goals efficiently with our user-friendly platform.</p>
                        <button className="p-3 text-white border-2 border-white rounded-none ">Read More</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Features;