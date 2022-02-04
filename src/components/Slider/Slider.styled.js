import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const MySwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
`;

export const MySlide = styled(SwiperSlide)`
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  & img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Img = styled.img`
  height: 200px;
  width: 100%;
`;
