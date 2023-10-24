import React from "react";
import ItemsElement from "../component/ItemsElement";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import Image from "../assets/img/slide-1.jpg";
import PromoElement from "../component/PromoElement";
import CardPembayaran from "../component/CardPembayaran";

function HomePages() {
    return (
        <div className="home-page container pt-3 w-50">
            <div className="swiper-element">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                      }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"> 
                    <SwiperSlide>
                        <img src={Image} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Image} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Image} alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="items-element">
                <ItemsElement />
            </div>
            <div className="promo-element">
                <PromoElement/>
            </div>
            <div className="pembayaran-element">
                <CardPembayaran/>
            </div>
        </div>
    );
}

export default HomePages;
