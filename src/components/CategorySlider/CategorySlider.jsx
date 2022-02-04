import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import CategoryCard from '../CategoryCard/CategoryCard';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Navigation } from 'swiper';

const CategorySlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <CategoryCard
            url={
              'https://images.prismic.io/wizeline-academy/5df875b5-3e43-4cf0-97b9-06ed73ed6d9b_sanibell-bv-530lZQXMKGw-unsplash-web+%281%29.jpg?auto=compress,format&rect=0,24,1920,1231&w=621&h=398'
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard
            url={
              'https://images.prismic.io/wizeline-academy/5df875b5-3e43-4cf0-97b9-06ed73ed6d9b_sanibell-bv-530lZQXMKGw-unsplash-web+%281%29.jpg?auto=compress,format&rect=0,24,1920,1231&w=621&h=398'
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard
            url={
              'https://images.prismic.io/wizeline-academy/5df875b5-3e43-4cf0-97b9-06ed73ed6d9b_sanibell-bv-530lZQXMKGw-unsplash-web+%281%29.jpg?auto=compress,format&rect=0,24,1920,1231&w=621&h=398'
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard
            url={
              'https://images.prismic.io/wizeline-academy/5df875b5-3e43-4cf0-97b9-06ed73ed6d9b_sanibell-bv-530lZQXMKGw-unsplash-web+%281%29.jpg?auto=compress,format&rect=0,24,1920,1231&w=621&h=398'
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard
            url={
              'https://images.prismic.io/wizeline-academy/5df875b5-3e43-4cf0-97b9-06ed73ed6d9b_sanibell-bv-530lZQXMKGw-unsplash-web+%281%29.jpg?auto=compress,format&rect=0,24,1920,1231&w=621&h=398'
            }
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default CategorySlider;
