// components/CustomSwiper.tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import strelka from '../../public/svg/strelka1.svg';
import close from '../../public/svg/close.svg';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
const Zoom_swipper = ({
    display,
    setdisplay,
    data,
    index,
}: {
    display: boolean;
    setdisplay: (par: boolean) => void;
    data: any;
    index: number;
}) => {
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
            className="w-full h-[708px]  bg-black bg-opacity-60 flex justify-center items-center absolute z-[999999999990] -top-[183px]"
            style={display ? { display: '' } : { display: 'none' }}
        >
            <Swiper
                ref={swiperRef}
                spaceBetween={20}
                slidesPerView={1}
                centeredSlides={true}
                loop={true}
                className="w-full h-[708px] flex justify-center items-center"
            >
                {data.map((item: any, i: any) => (
                    <SwiperSlide>
                        <div className=" h-full flex  justify-center items-center">
                            <img
                                src={`http://mts.caratcons.az/${item.image}`}
                                alt="Slide 1"
                                className="w-3/5  "
                            />
                        </div>
                    </SwiperSlide>
                ))}

                {/* Add more slides here */}
            </Swiper>
            <div className="flex flex-row justify-between w-full absolute z-[999999999990] px-8">
                <Image
                    onClick={handlePrev}
                    src={strelka}
                    alt="strelka"
                    style={{ transform: 'rotate(180deg)' }}
                    className="lg:w-[60px] w-[30px]"
                />
                <Image
                    src={strelka}
                    alt="strelka"
                    className="lg:w-[60px] w-[30px]"
                    onClick={handleNext}
                />
            </div>
            <Image
                onClick={() => setdisplay(false)}
                src={close}
                alt="close"
                width={40}
                className=" absolute z-[999999999990] top-5 right-5"
            />
            {/* Navigation Buttons */}
        </div>
    );
};

const Rounded_Swipper2 = ({ data }: { data: any }) => {
    const [show, setshow] = useState<boolean>(false);
    const [index, setindex] = useState<number>(0);
    const [slidesPerView, setSlidesPerView] = useState(5);
    useEffect(() => {
        const updateSlidesPerView = () => {
            if (window.innerWidth <= 640) {
                setSlidesPerView(3); // Show 3 slides on mobile
            } else {
                setSlidesPerView(5); // Show 5 slides on larger screens
            }
        };

        // Add a listener to handle screen resizing
        window.addEventListener('resize', updateSlidesPerView);

        // Set initial value
        updateSlidesPerView();

        // Cleanup the listener on unmount
        return () => {
            window.removeEventListener('resize', updateSlidesPerView);
        };
    }, []);
    return (
        <>
            <div className="w-full swiper-container relative">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={slidesPerView}
                    centeredSlides={true}
                    loop={true}
                    navigation={false}
                    autoplay={{ delay: 1000, disableOnInteraction: false }} // Enable autoplay
                    speed={1000}
                    breakpoints={{
                        // when window width is <= 640px (mobile)
                        640: {
                            slidesPerView: 3, // Show 3 slides on mobile
                        },
                        // when window width is <= 1024px (tablet)
                        1024: {
                            slidesPerView: 4, // Show 4 slides on tablets (optional)
                        },
                    }}
                >
                    {data.map((item: any, i: any) => (
                        <SwiperSlide>
                            <img
                                onClick={() => {
                                    setshow(true);
                                    setindex(i);
                                }}
                                src={`http://mts.caratcons.az/${item.image}`}
                                alt="Slide 1"
                                className="w-[344px] h-[346px] object-cover"
                            />
                        </SwiperSlide>
                    ))}

                    {/* Add more slides here */}
                </Swiper>

                {/* Navigation Buttons */}
                <Zoom_swipper
                    display={show}
                    setdisplay={setshow}
                    data={data}
                    index={index}
                />
            </div>
        </>
    );
};

export default Rounded_Swipper2;
