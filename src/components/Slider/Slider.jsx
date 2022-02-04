import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Img } from './Slider.styled';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Img src="https://images.prismic.io/wizeline-academy/edaf28da-2e46-4f75-8a69-a972119f40ed_banner-3-2.jpeg?auto=compress,format&rect=0,0,1429,700&w=1440&h=705" />
        </SwiperSlide>
        <SwiperSlide>
          <Img src="https://images.prismic.io/wizeline-academy/305e2781-5f25-4c00-bef7-1041b49def37_banner-1-2.jpeg?auto=compress,format&rect=103,0,1226,600&w=1440&h=705" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
