import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Mousewheel} from 'swiper/modules';
import French from "../../assets/experience/French.jpg";
import Canada from "../../assets/experience/Canada.jpg";
import Greece from "../../assets/experience/Greece.jpg";
import Venice from "../../assets/experience/Venice.jpg";

const SwipeExperience:FC =():JSX.Element=>{
    return (

<Swiper
  slidesPerView={1}
  centeredSlides={true}
  spaceBetween={20}
  grabCursor={true}
  mousewheel={true} 
  modules={[Mousewheel]}
>
  <SwiperSlide>          <img
            className="object-cover max-w-[327px] h-[660px] mr-5 rounded-[20px]"
            src={French}
            alt="Best Way to Travel"
          /></SwiperSlide>
  <SwiperSlide><img
            className="object-cover max-w-[327px] h-[660px] rounded-[20px]"
            src={Canada}
            alt="Best Way to Travel"
          /></SwiperSlide>
  <SwiperSlide><img
            className="object-cover max-w-[327px] h-[660px] rounded-[20px]"
            src={Greece}
            alt="Best Way to Travel"
          /></SwiperSlide>
  <SwiperSlide><img
            className="object-cover max-w-[327px] h-[660px] rounded-[20px]"
            src={Venice}
            alt="Best Way to Travel"
          /></SwiperSlide>

</Swiper>

      );
}

export default SwipeExperience;

