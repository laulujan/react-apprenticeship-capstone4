import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';
import CategoryCard from '../CategoryCard/CategoryCard';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper';
import { useProducts } from '../../provider/Provider';

const CategorySlider = () => {
  const { fetchCategories, categories, updatePage, apiMetadata } =
    useProducts();
  const { ref: apiRef, isLoading: isApiMetadataLoading } = apiMetadata;
  const navigate = useNavigate();

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }
    fetchCategories(apiRef);
  }, [isApiMetadataLoading]);

  const handleClick = (id, categorySlug) => {
    updatePage(1);
    navigate({
      pathname: '/products',
      search: `?category=${categorySlug}`,
    });
  };
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
              <CategoryCard category={category} handleClick={handleClick} />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};
export default CategorySlider;
