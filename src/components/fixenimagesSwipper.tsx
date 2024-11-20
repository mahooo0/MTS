import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

interface CustomAbsoluteSwiperProps {
    images: string[];
    currentIndex: number;
    isOpen: boolean;
    onclose: () => void;
}

const CustomAbsoluteSwiper: React.FC<CustomAbsoluteSwiperProps> = ({
    images,
    currentIndex,
    isOpen,
    onclose,
}) => {
    if (!isOpen) return null;
    const baseurl = 'https://mts.caratcons.az/';
    let swiperRef = useRef<any>();

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
    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.6)',

                zIndex: 1000, // Make sure the Swiper is on top
            }}
            className="flex h-[100vh] justify-center items-center relative "
        >
            <Swiper
                className="z-[50]"
                ref={swiperRef}
                initialSlide={currentIndex}
                spaceBetween={30}
                slidesPerView={1}
                onSlideChange={(swiper) =>
                    console.log('Slide index changed:', swiper.activeIndex)
                }
                onSwiper={(swiper) => console.log('Swiper instance:', swiper)}
            >
                {images?.map((image, index) => (
                    <SwiperSlide
                        key={index}
                        className=" !w-full !h-[100vh] !flex !justify-center !items-center"
                    >
                        <img
                            src={baseurl + image}
                            alt={`Slide ${index}`}
                            style={{
                                width: '80%',
                                height: '80%',
                                // objectFit: 'contain',
                            }}
                            className="rounded-2xl object-contain"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div>
                <img
                    onClick={onclose}
                    src={'/svg/close.svg'}
                    alt="close"
                    width={40}
                    className=" absolute z-[999999999990] top-5 right-5 "
                />
            </div>
            <div className="flex flex-row justify-between w-full absolute z-[40] px-8">
                <img
                    onClick={handlePrev}
                    src={'/svg/strelka1.svg'}
                    alt="strelka"
                    style={{ transform: 'rotate(180deg)' }}
                    className="lg:w-[60px] w-[30px]"
                />
                <img
                    src={'/svg/strelka1.svg'}
                    alt="strelka"
                    className="lg:w-[60px] w-[30px]"
                    onClick={handleNext}
                />
            </div>
        </div>
    );
};

export default CustomAbsoluteSwiper;
