// import Swiper core and required modules
import { A11y, Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const SwiperComponent = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      className="max-h-[380px] border mt-1"
      onSwiper={swiper => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide className="bg-red-100 max-h-[380px]">
        <img
          src="/swiper.png"
          alt=""
          className="object-contain w-full h-full"
        />
      </SwiperSlide>
      <SwiperSlide className="max-h-[380px] h-full">Slide 2</SwiperSlide>
      <SwiperSlide className="max-h-[380px] h-full">Slide 3</SwiperSlide>
      <SwiperSlide className="max-h-[380px] h-full">Slide 4</SwiperSlide>
    </Swiper>
  );
};
