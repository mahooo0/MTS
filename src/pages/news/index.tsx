import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Image from 'next/image';
import React from 'react';
import strelka from '../../../public/svg/strelka_black.svg';
import NewsSwiper from '@/components/news_swipper';
import News_card from '@/components/news_card';
export default function news() {
    return (
        <div>
            <Header active={7} />
            <div className="bg-[#FBFBFB] h-[90px] w-full "></div>
            <main>
                <div className="flex flex-row text-[18px] gap-3 mt-[41px]  ml-[100px]">
                    <h5>Ana səhifə</h5>
                    <Image
                        src={strelka}
                        alt="strelka"
                        className=" opacity-60"
                    />
                    <h6 className=" opacity-60">Xəbərlər</h6>
                </div>
                <h1 className="text-[48px] font-semibold text-[#050B20] mb-[48px] mt-[28px] ml-[100px]">
                    Xəbərlər və yeniliklər{' '}
                </h1>
                <NewsSwiper />
                <div className="mt-[82px]">
                    <h1 className="text-[36px] font-semibold text-[#050B20] mb-[48px]  ml-[100px]">
                        Digər xəbərlər{' '}
                    </h1>
                    <div className=" grid grid-cols-4 px-[100px] justify-between gap-5 mb-10">
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
            </main>
            <Footer />
        </div>
    );
}
