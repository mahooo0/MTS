// components/CustomSwiper.tsx
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import strelka2 from '../../public/svg/strelka2.svg';
import container_png from '../../public/images/container.png';
import Image from 'next/image';
import CustomPagination from './slider_custom pagiation';

const Services_img_swipper = ({ data }: { data: any }) => {
    const swiperRef = useRef<any>(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const baseurl = 'https://mts.caratcons.az/';
    console.log('DAta', data);

    const handleNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const handlePrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

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
        <div className="relative lg:w-[75%] w-full  mt-10">
            <Swiper
                ref={swiperRef}
                onSlideChange={handleSwiperChange}
                loop={true}
                slidesPerView={1}
                spaceBetween={10}
            >
                {data.map((item: any) => (
                    <SwiperSlide>
                        <img
                            src={`${baseurl}${item}`}
                            width={100}
                            height={100}
                            alt="container_png"
                            className="w-full lg:h-[486px] h-fit"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="flex flex-row  absolute lg:bottom-0 md:bottom-0 -bottom-[40%] right-0  gap-3">
                <button
                    onClick={handlePrev}
                    style={{ transform: 'rotate(180deg)' }}
                    className="w-[60px] h-8 flex justify-center items-center bg-[#EFF6FF] rounded-[100px]"
                >
                    <Image src={strelka2} alt="strelka2" />
                </button>
                <button
                    onClick={handleNext}
                    className="w-[60px] h-8 flex justify-center items-center bg-[#EFF6FF] rounded-[100px]"
                >
                    <Image src={strelka2} alt="strelka2" />
                </button>
            </div>
            <div className="mt-10 lg:block md:block hidden ">
                <CustomPagination
                    totalSlides={3} // Set this to the number of slides you have
                    currentSlide={currentSlide}
                    onSlideChange={handleSlideChange}
                />
            </div>
        </div>
    );
};

export default Services_img_swipper;
