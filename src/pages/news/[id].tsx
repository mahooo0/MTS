import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import strelka from '../../../public/svg/strelka_black.svg';
import container_pn from '../../../public/images/container.png';
import calendar_icon from '../../../public/svg/calendar.svg';
import aye_icon from '../../../public/svg/aye.svg';
import teleqram_icon from '../../../public/svg/teleqram.svg';
import wp_icon from '../../../public/svg/wp.svg';
import link_icon from '../../../public/svg/link.svg';
import News_img_Swiper from '@/components/News_img_swipper';
import News_card from '@/components/news_card';
import { Blue_to_blue, White_to_blue } from '@/components/btns';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
export default function id({ apiData }: { apiData: any }) {
    const router = useRouter();
    const currenntService = useSelector(
        (state: any) => state.counter.Currentservice
    );
    const [lang, setlang] = useState<string>('az');
    const [reset, setreset] = useState<boolean>(false);
    const data = apiData.data;

    const baseurl = 'http://mts.caratcons.az/';
    useEffect(() => {
        const lng = localStorage.getItem('language') || 'en';
        setlang(lng);
    }, [reset]);
    const currentNew = useSelector((state: any) => state.counter.CurrentNew);
    console.log('currentNew', currentNew);

    return (
        <div>
            <Header
                setReset={() => setreset((prew) => !prew)}
                active={6}
                data={data.translates}
            />
            <div className="bg-[#FBFBFB] h-[90px] w-full "></div>
            <main>
                <div className="flex flex-row  flex-wrap text-[18px] gap-3 mt-[41px]  lg:ml-[100px] md:ml-[60px] ml-[30px]">
                    <h5>{data.translates.home[lang]}</h5>
                    <Image
                        src={strelka}
                        alt="strelka"
                        className=" opacity-60"
                    />
                    <h5>{data.translates.news[lang]}</h5>
                    <Image
                        src={strelka}
                        alt="strelka"
                        className=" opacity-60"
                    />
                    <h6 className=" opacity-60">{currentNew.title[lang]}</h6>
                </div>
                <div className="lg:px-[100px] md:px-[60px] px-[30px] mt-12 flex  flex-col items-center">
                    <img
                        src={`http://mts.caratcons.az/${currentNew.image}`}
                        alt="container_pn"
                        className="w-full h-full"
                    />
                    <div className="lg:h-[172px] md:h-[150px] h-[100px] lg:w-[80%] md:w-[80%] w-full bg-white bg-opacity-80 lg:p-6 md:p-6 p-0 flex flex-col lg:gap-4 md:gap-4 gap-2 lg:-mt-[110px] md:-mt-[110px] mt-0 z-20 rounded-lg">
                        <h4 className=" lg:text-[32px] md:text-[24px] text-[16px] font-semibold">
                            {currentNew.title[lang]}
                        </h4>
                        <div className="flex flex-row text-[16px] font-normal">
                            <Image
                                src={calendar_icon}
                                alt="calendar_icon"
                                className="mr-2"
                            />
                            <p className="mr-7">{currentNew.date}</p>
                            <Image
                                src={aye_icon}
                                alt="aye_icon"
                                className="mr-[10px]"
                            />
                            <p>{currentNew.view} baxış</p>
                        </div>
                    </div>
                </div>
                <div className="lg:px-[100px] md:px-[60px] px-[30px] mt-[52px]">
                    <h6 className="text-[20px] font-semibold mb-4">
                        {currentNew.title[lang]}
                    </h6>
                    <div
                        className="text-[16px] font-normal"
                        dangerouslySetInnerHTML={{
                            __html: currentNew.description[lang],
                        }}
                    />
                </div>
                <News_img_Swiper data={currentNew.images} />
                <div
                    className="text-[16px] mt-[53px] font-normal top-[53px] lg:px-[100px] md:px-[60px] px-[30px] "
                    dangerouslySetInnerHTML={{
                        __html: currentNew.below_description[lang],
                    }}
                />
                <div className="flex flex-col lg:pl-[100px] md:pl-[60px] pl-[30px]">
                    <p className="mt-12 mb-4 text-[12px] font-normal">
                        Paylaş:
                    </p>
                    <div className="flex flex-row gap-5">
                        <div className="w-10 h-10 rounded-full flex justify-center items-center bg-[#E5F7FF]">
                            <Image src={teleqram_icon} alt="teleqram_icon" />
                        </div>
                        <div className="w-10 h-10 rounded-full flex justify-center items-center bg-[#ECFFF5]">
                            <Image src={wp_icon} alt="wp" />
                        </div>
                        <div className="w-10 h-10 rounded-full flex justify-center items-center bg-[#F5F5F5]">
                            <Image src={link_icon} alt="copy_linck" />
                        </div>
                    </div>
                </div>{' '}
                <div className="lg:px-[100px] md:px-[60px] px-[30px]    mt-[100px] mb-[100px]">
                    <div className="flex lg:flex-row md:flex-row flex-col justify-between items-center">
                        <h3 className="lg:text-[48px] md:text-[48px] text-[28px] font-semibold">
                            Xəbərlər və yeniliklər
                        </h3>
                        <Blue_to_blue
                            action={() => router.push('/contact')}
                            text=" Bizimlə əlaq"
                        />
                    </div>
                    <div className="flex lg:flex-row md:flex-row flex-col gap-3   justify-between mt-12">
                        {/* <News_card />
                        <News_card />
                        <News_card />
                        <News_card /> */}
                    </div>
                </div>
            </main>
            <Footer data={data.translates} lang={lang} contact={data.contact} />
        </div>
    );
}
export async function getServerSideProps() {
    const res = await fetch('http://mts.caratcons.az/api/home');
    const data = await res.json();
    console.log(data);

    // Pass data to the page via props
    return { props: { apiData: data } };
}
