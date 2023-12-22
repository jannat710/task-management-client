import { Swiper, SwiperSlide } from 'swiper/react';
import p1 from '../../assets/userscategory/bankers.jpg'
import p2 from '../../assets/userscategory/corporate.jpg'
import p3 from '../../assets/userscategory/developers.jpg'
import p4 from '../../assets/userscategory/professionals.jpg'
import p5 from '../../assets/userscategory/teachers.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

const UsersCategory = () => {
    return (
        <div className=' py-40 md:py-40 lg:py-10 'data-aos="fade-up">
            <h1 className='text-sm md:text-2xl lg:text-4xl font-semibold pb-5'>Discover the Diverse Users <br></br>of Our Website!</h1>
            <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={p1} alt="" />
            <h3 className=' text-sm md:text-2xl lg:text-4xl uppercase text-center text-white -mt-16'>Bankers</h3>
            </SwiperSlide>
        <SwiperSlide>
            <img src={p2} alt="" />
            <h3 className=' text-sm md:text-2xl lg:text-4xl uppercase text-center text-white -mt-16'>Corporate</h3>
            </SwiperSlide>
        <SwiperSlide>
            <img src={p3} alt="" />
            <h3 className=' text-sm md:text-2xl lg:text-4xl uppercase text-center text-white -mt-16'>Developers</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={p4} alt="" />
            <h3 className=' text-sm md:text-2xl lg:text-4xl uppercase text-center text-white -mt-16'>Proffessionals</h3>
            </SwiperSlide>
        <SwiperSlide>
            <img src={p5} alt="" />
            <h3 className=' text-sm md:text-2xl lg:text-4xl uppercase text-center text-white -mt-16'>Teachers</h3>
            </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default UsersCategory;