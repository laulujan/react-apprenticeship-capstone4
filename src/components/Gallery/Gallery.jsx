import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Img, ImgSmall } from './Gallery.styled';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs, Pagination } from 'swiper';

const Gallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <div>
        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
            maxWidth: '600px',
            zIndex: '0',
          }}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination, FreeMode, Thumbs]}
          className="mySwiper"
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper }}
        >
          <SwiperSlide>
            <Img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <Img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <Img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <Img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </SwiperSlide>
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
          style={{
            height: '10%',
            boxSizing: 'border-box',
            padding: '10px 0',
            zIndex: '0',
            maxWidth: '600px',
          }}
        >
          <SwiperSlide>
            <ImgSmall src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <ImgSmall src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <ImgSmall src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <ImgSmall src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <ImgSmall src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Gallery;
