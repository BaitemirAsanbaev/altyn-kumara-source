import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import Card from "../../../../components/Card/Card";
import { data } from "../../../../store/test";
import { useEffect, useRef } from "react";
import SwiperCore, { Autoplay } from "swiper";

// Install Swiper modules
SwiperCore.use([Autoplay]);

const Slider = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef && swiperRef.current) {
      swiperRef.current.swiper.autoplay.start();
    }
  }, []);

  return (
    <div>
      <Swiper
        
        ref={swiperRef}
        spaceBetween={50}
        slidesPerView={5}
        effect="fade"
        // centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          1250: {
            slidesPerView: 5,
          },
          950: {
            slidesPerView: 4,
          },
          750: {
            slidesPerView: 3,
          },
          550: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        }}
      >
        {data.map((item) => {
          return (
            <SwiperSlide style={{
              transform: 'translateX(100px)',
            }} key={item.id}>
              <Card item={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
