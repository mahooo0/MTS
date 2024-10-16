// components/CustomSwiper.tsx
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import strelka2 from '../../public/svg/strelka2.svg';
import container_png from '../../public/images/container.png';
import Image from 'next/image';
import CustomPagination from './slider_custom pagiation';
import ProjectCard from './ProjectCard';

const ProductSwipper = ({ data }: { data: any }) =>
    //
    {
        const swiperRef = useRef<any>(null);
        const [currentSlide, setCurrentSlide] = useState(0);

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
            <div className="relative  mt-10">
                <Swiper
                    ref={swiperRef}
                    onSlideChange={handleSwiperChange}
                    // loop={true}
                    slidesPerView={'auto'}
                    spaceBetween={20}
                >
                    {data.map((item: any) => (
                        <SwiperSlide className="!w-fit  ">
                            <ProjectCard data={item} lang="az" />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="flex flex-row  absolute lg:top-[-100px] md:top-[-100px] -top-[50px] lg:right-[100px] md:right-[60px]  right-0 gap-3">
                    <button
                        onClick={handlePrev}
                        style={{ transform: 'rotate(180deg)' }}
                        className="w-[60px] h-8 flex justify-center items-center bg-[#ffffff] rounded-[100px]"
                    >
                        <Image src={strelka2} alt="strelka2" />
                    </button>
                    <button
                        onClick={handleNext}
                        className="w-[60px] h-8 flex justify-center items-center bg-[#ffffff] rounded-[100px]"
                    >
                        <Image src={strelka2} alt="strelka2" />
                    </button>
                </div>
            </div>
        );
    };

export default ProductSwipper;
