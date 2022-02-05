import React, { useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import CategoryCard from '../CategoryCard/CategoryCard';
import { fetchdata } from '../../api/fetchData';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Navigation } from 'swiper';

const CategorySlider = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchdata(
      'https://raw.githubusercontent.com/wizelineacademy/react-apprenticeship-capstone4/main/mocks/en-us/product-categories.json'
    ).then((data) => setCategories(data.results));
  }, []);
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1050: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1554: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        style={{ zIndex: 0 }}
      >
        {categories &&
          categories.map((category) => (
            <SwiperSlide key={category.id}>
              <CategoryCard category={category.data} />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};
export default CategorySlider;
