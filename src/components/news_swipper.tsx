import React, { useRef, useState } from 'react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import layner_png from '../../public/images/layner2.png';
import { White_to_blue } from './btns';
import CustomPagination from './slider_custom pagiation';
import News_bunner from './News_bunner';
export const NewsSwiper = () => {
    const swiperRef = useRef<any>(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const handleSlideChange = (index: number) => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideTo(index);
            setCurrentSlide(index);
        }
    };

    const handleSwiperChange = (swiper: any) => {
        setCurrentSlide(swiper.activeIndex);
    };
    return (
        <div className="relative w-full">
            <Swiper
                ref={swiperRef}
                spaceBetween={20}
                slidesPerView={1}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                    el: '.custom-pagination', // Custom class for pagination
                    bulletClass: 'custom-bullet', // Custom class for bullets
                    bulletActiveClass:
                        'h-[6px] w-[40px] rounded-lg bg-[#2961B1]', // Custom class for active bullets
                    renderBullet: (index, className) => {
                        return `<span class="${className} "></span>`;
                    },
                }}
            >
                <SwiperSlide>
                    <div className="w-full flex justify-around flex-row">
                        <News_bunner />

                        <News_bunner />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full flex justify-around flex-row">
                        <News_bunner />

                        <News_bunner />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full flex justify-around flex-row">
                        <News_bunner />

                        <News_bunner />
                    </div>
                </SwiperSlide>

                {/* Add more slides as needed */}
            </Swiper>

            {/* Custom Pagination */}
            <div className="mt-10">
                <CustomPagination
                    totalSlides={3} // Set this to the number of slides you have
                    currentSlide={currentSlide}
                    onSlideChange={handleSlideChange}
                />
            </div>
        </div>
    );
};

export default NewsSwiper;
