import SectionTitle from '../../components/Shared/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';
import quote from '../../assets/icon/quote-left 1.svg';

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('/public/reviews.json')
      .then(res => res.json())
      .then(data => setReviews(data));
  }, []);

  return (
    <section className="my-20">
      <SectionTitle heading={'Testimonials'} />
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map(review => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col items-center mx-24 my-16">
              <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
              <img className="w-20 pt-4" src={quote} alt="" />
              <p className="py-8">{review.details}</p>
              <h3 className="text-2xl text-orange-400">{review.name}</h3>
            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;