import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Img, TextContent, Container } from './Slider.styled';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper';
import Loader from '../Loader/Loader';
import { useFeaturedBanners } from '../../utils/hooks/useFeaturedBanners';

const Slider = () => {
  const { data, isLoading } = useFeaturedBanners();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
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
          modules={[Autoplay, Pagination]}
          className="mySwiper"
          style={{ zIndex: 0 }}
        >
          {data &&
            data.results.map((banner) => (
              <SwiperSlide key={banner.id}>
                <Container>
                  <Img
                    src={banner.data.main_image.url}
                    alt={banner.data.main_image.alt}
                  />
                  <TextContent>
                    <h2>{banner.data.description[0].text}</h2>
                  </TextContent>
                </Container>
              </SwiperSlide>
            ))}
        </Swiper>
      )}
    </>
  );
};

export default Slider;
