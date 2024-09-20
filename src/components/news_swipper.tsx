import React from 'react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import layner_png from '../../public/images/layner2.png';
import { White_to_blue } from './btns';
export const NewsSwiper = () => {
    return (
        <div className="relative w-full">
            <Swiper
                modules={[Pagination]}
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
                        <div className="relative w-[610px] h-[320px]  overflow-hidden rounded-lg  ">
                            <div
                                className="bg-cover bg-center  overflow-hidden  transition-transform duration-500 hover:scale-110 text-white "
                                style={{
                                    backgroundImage: `url('/images/layner2.png')`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    width: '610px',
                                    height: '320px',
                                    // or any height you need
                                }}
                            >
                                {/* <Image ca/> */}

                                {/* <button></button> */}
                            </div>
                            <div className="text-white absolute top-[92px] left-8 ">
                                <p className="text-[14px] font-normal mb-[16px]">
                                    12 iyul 2024
                                </p>
                                <h5 className="text-[20px] font-semibold mb-[12px]">
                                    Lorem Ipsum is simply dummy text of the
                                    printing.
                                </h5>
                                <p className="text-4 font-normal">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.
                                </p>
                                <White_to_blue text="Ətraflı bax" />
                            </div>
                        </div>

                        <div className="relative w-[610px] h-[320px]  overflow-hidden rounded-lg ">
                            <div
                                className="bg-cover bg-center  overflow-hidden  transition-transform duration-500 hover:scale-110 text-white "
                                style={{
                                    backgroundImage: `url('/images/layner2.png')`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    width: '610px',
                                    height: '320px',
                                    // or any height you need
                                }}
                            >
                                {/* <Image ca/> */}

                                {/* <button></button> */}
                            </div>
                            <div className="text-white absolute top-[92px] left-8 ">
                                <p className="text-[14px] font-normal mb-[16px]">
                                    12 iyul 2024
                                </p>
                                <h5 className="text-[20px] font-semibold mb-[12px]">
                                    Lorem Ipsum is simply dummy text of the
                                    printing.
                                </h5>
                                <p className="text-4 font-normal">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.
                                </p>
                                <White_to_blue text="Ətraflı bax" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full flex justify-around flex-row">
                        <div className="relative w-[610px] h-[320px]  overflow-hidden rounded-lg  ">
                            <div
                                className="bg-cover bg-center  overflow-hidden  transition-transform duration-500 hover:scale-110 text-white "
                                style={{
                                    backgroundImage: `url('/images/layner2.png')`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    width: '610px',
                                    height: '320px',
                                    // or any height you need
                                }}
                            >
                                {/* <Image ca/> */}

                                {/* <button></button> */}
                            </div>
                            <div className="text-white absolute top-[92px] left-8 ">
                                <p className="text-[14px] font-normal mb-[16px]">
                                    12 iyul 2024
                                </p>
                                <h5 className="text-[20px] font-semibold mb-[12px]">
                                    Lorem Ipsum is simply dummy text of the
                                    printing.
                                </h5>
                                <p className="text-4 font-normal">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.
                                </p>
                                <White_to_blue text="Ətraflı bax" />
                            </div>
                        </div>

                        <div className="relative w-[610px] h-[320px]  overflow-hidden rounded-lg ">
                            <div
                                className="bg-cover bg-center  overflow-hidden  transition-transform duration-500 hover:scale-110 text-white "
                                style={{
                                    backgroundImage: `url('/images/layner2.png')`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    width: '610px',
                                    height: '320px',
                                    // or any height you need
                                }}
                            >
                                {/* <Image ca/> */}

                                {/* <button></button> */}
                            </div>
                            <div className="text-white absolute top-[92px] left-8 ">
                                <p className="text-[14px] font-normal mb-[16px]">
                                    12 iyul 2024
                                </p>
                                <h5 className="text-[20px] font-semibold mb-[12px]">
                                    Lorem Ipsum is simply dummy text of the
                                    printing.
                                </h5>
                                <p className="text-4 font-normal">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.
                                </p>
                                <White_to_blue text="Ətraflı bax" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full flex justify-around flex-row">
                        <div className="relative w-[610px] h-[320px]  overflow-hidden rounded-lg  ">
                            <div
                                className="bg-cover bg-center  overflow-hidden  transition-transform duration-500 hover:scale-110 text-white "
                                style={{
                                    backgroundImage: `url('/images/layner2.png')`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    width: '610px',
                                    height: '320px',
                                    // or any height you need
                                }}
                            >
                                {/* <Image ca/> */}

                                {/* <button></button> */}
                            </div>
                            <div className="text-white absolute top-[92px] left-8 ">
                                <p className="text-[14px] font-normal mb-[16px]">
                                    12 iyul 2024
                                </p>
                                <h5 className="text-[20px] font-semibold mb-[12px]">
                                    Lorem Ipsum is simply dummy text of the
                                    printing.
                                </h5>
                                <p className="text-4 font-normal">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.
                                </p>
                                <White_to_blue text="Ətraflı bax" />
                            </div>
                        </div>

                        <div className="relative w-[610px] h-[320px]  overflow-hidden rounded-lg ">
                            <div
                                className="bg-cover bg-center  overflow-hidden  transition-transform duration-500 hover:scale-110 text-white "
                                style={{
                                    backgroundImage: `url('/images/layner2.png')`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    width: '610px',
                                    height: '320px',
                                    // or any height you need
                                }}
                            >
                                {/* <Image ca/> */}

                                {/* <button></button> */}
                            </div>
                            <div className="text-white absolute top-[92px] left-8 ">
                                <p className="text-[14px] font-normal mb-[16px]">
                                    12 iyul 2024
                                </p>
                                <h5 className="text-[20px] font-semibold mb-[12px]">
                                    Lorem Ipsum is simply dummy text of the
                                    printing.
                                </h5>
                                <p className="text-4 font-normal">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.
                                </p>
                                <White_to_blue text="Ətraflı bax" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Add more slides as needed */}
            </Swiper>

            {/* Custom Pagination */}
            <div className="custom-pagination flex justify-center gap-2 mt-4  mb-4"></div>
        </div>
    );
};

export default NewsSwiper;
