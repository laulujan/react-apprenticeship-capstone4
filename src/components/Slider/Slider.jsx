import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Img, TextContent, Container } from './Slider.styled';
import { fetchdata } from '../../api/fetchData';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

const Slider = () => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    fetchdata(
      'https://raw.githubusercontent.com/wizelineacademy/react-apprenticeship-capstone4/main/mocks/en-us/featured-banners.json'
    ).then((data) => setBanners(data.results));
  }, []);
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
        {banners &&
          banners.map((banner) => (
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
    </>
  );
};

export default Slider;
