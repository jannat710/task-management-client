import banner from '../../assets/banner.jpg'

const Banner = () => {
    return (
        <div className="">
            <div className="bg-[#173bb7] h-[80vh] w-[75vw] text-white px-10 pt-10 md:px-20 md:pt-20 lg:px-20 lg:pt-20" alt="" >
                <h1 className='w-2/3 text-sm md:text-base lg:text-4xl font-semibold'>Stay Organized and Productive with Effective Task Management</h1>
                <p className='py-10 w-2/3 text-xs md:text-sm lg:text-xl'>Task management is key to staying organized, prioritizing tasks, and accomplishing goals effectively. By implementing proven strategies, you can optimize your workflow and achieve success.</p>
                <a className="p-3 text-white border-2 border-white rounded-none">Get Started</a>
            </div>

            <img className='bg-fixed lg:visible mr-0 -mt-96 h-[70vh] w-2/5 mx-auto' src={banner} alt="" />
        </div>
    );
};

export default Banner;