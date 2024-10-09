import React, { useRef, useState } from 'react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import layner_png from '../../public/images/layner2.png';
import { White_to_blue } from './btns';
import CustomPagination from './slider_custom pagiation';
import News_bunner from './News_bunner';
export const NewsSwiper = ({ data, lang }: { data: any; lang: string }) => {
    const swiperRef = useRef<any>(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const handleSlideChange = (index: number) => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideTo(index);
            setCurrentSlide(index);
        }
    };
    function groupArrayInPairs(arr: any[]): any[][] {
        const result: any[][] = [];

        for (let i = 0; i < arr.length; i += 2) {
            // Push a pair of objects (or remaining objects if the length is odd)
            result.push(arr.slice(i, i + 2));
        }

        return result;
    }
    const handleSwiperChange = (swiper: any) => {
        setCurrentSlide(swiper.activeIndex);
    };
    const NEwArr = groupArrayInPairs(data);
    console.log(NEwArr);

    return (
        <div className="relative w-full lg:px-[100px] md:px-[60px] px-[30px]">
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
                {NEwArr.map((item: any) => (
                    <SwiperSlide>
                        <div className="w-full flex lg:justify-between lg:flex-row flex-col gap-5 items-center ">
                            {item.map(
                                (item: any) => (
                                    <News_bunner data={item} lang={lang} />
                                )
                                // console.log(item);
                            )}
                            {/* <News_bunner data={item[0]} lang={lang} /> */}

                            {/* <News_bunner data={item[1]} lang={lang} /> */}
                        </div>
                    </SwiperSlide>
                ))}

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
