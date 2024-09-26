import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Image from 'next/image';
import React from 'react';
import strelka from '../../../public/svg/strelka_black.svg';
import NewsSwiper from '@/components/news_swipper';
import News_card from '@/components/news_card';
export default function news() {
    return (
        <div className="max-w-[1600px]">
            <Header active={6} />
            <div className="bg-[#FBFBFB] h-[90px] w-full "></div>
            <main>
                <div className="flex flex-row text-[18px] gap-3 mt-[41px]  lg:ml-[100px] md:ml-[60px] ml-[30px] ">
                    <h5>Ana səhifə</h5>
                    <Image
                        src={strelka}
                        alt="strelka"
                        className=" opacity-60"
                    />
                    <h6 className=" opacity-60">Xəbərlər</h6>
                </div>
                <h1 className=" lg:text-[48px] md:text-[36px] text-[24px] font-semibold text-[#050B20] mb-[48px] mt-[28px] lg:ml-[100px] md:ml-[60px] ml-[30px]">
                    Xəbərlər və yeniliklər{' '}
                </h1>
                <NewsSwiper />
                <div className="mt-[82px] flex flex-col lg:items-start items-center ">
                    <h1 className="lg:text-[48px] md:text-[36px] text-[24px]  font-semibold text-[#050B20] mb-[48px]  lg:ml-[100px] md:ml-[60px] ml-[0px]">
                        Digər xəbərlər{' '}
                    </h1>
                    <div className="w-full flex flex-col justify-center items-center">
                        <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:px-[100px] md:px-[60px] px-[30px] justify-between gap-5 mb-10">
                            <News_card />
                            <News_card />
                            <News_card />
                            <News_card />
                            <News_card />
                            <News_card />
                            <News_card />
                            <News_card />
                            <News_card />
                            <News_card />
                            <News_card />
                            <News_card />
                            <News_card />
                            <News_card />
                            <News_card />
                            <News_card />
                        </div>
                        <div className="flex mb-[100px] justify-center">
                            <div className="flex flex-row gap-5">
                                <Image
                                    src={strelka}
                                    alt="strelka"
                                    style={{ transform: 'rotate(180deg)' }}
                                />
                                <div className="flex flex-row gap-3">
                                    <div className="w-10 h-10 rounded-full flex justify-center items-center border border-black border-opacity-10">
                                        1
                                    </div>
                                    <div className="w-10 h-10 rounded-full flex justify-center items-center text-[#2961B1] border border-[#2961B1] ">
                                        2
                                    </div>
                                    <div className="w-10 h-10 rounded-full flex justify-center items-center border border-black border-opacity-10">
                                        3
                                    </div>
                                </div>
                                <Image src={strelka} alt="strelka" />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
