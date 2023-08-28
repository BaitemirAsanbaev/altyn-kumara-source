import SimpleButton from "../../../components/UI/Button/SimpleButton";
import Title from "../../../components/UI/Title/Title";
import Line from "./Line/Line";
import Slider from "./Slider/Swiper";

export const MenuSlider = () => {
  return ( <div>
    <Title>Откройте <span>Меню</span></Title>
    <Slider/>
    <Line/>
    <SimpleButton link='/menu'>ВСЁ МЕНЮ</SimpleButton>
  </div> );
}