import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Image from 'next/image';
import React from 'react';
import strelka from '../../../public/svg/strelka_black.svg';
import Galery_Img from '@/components/Galery_Img';

export default function media() {
    return (
        <div>
            <Header active={7} />
            <div className=" h-[90px] w-full "></div>
            <main>
                <div className="flex flex-row text-[18px] gap-3 mt-[41px]  ml-[100px]">
                    <h5>Ana səhifə</h5>
                    <Image
                        src={strelka}
                        alt="strelka"
                        className=" opacity-60"
                    />
                    <h6 className=" opacity-60">Qalereya</h6>
                </div>
                <h1 className="text-[48px] font-semibold text-[#050B20] mb-[48px] mt-[28px] ml-[100px]">
                    Qalereya
                </h1>
                <div className="mt-[40px] flex justify-center  bg-[#F2F7FF]">
                    <div className="w-[581px] h-[187px] flex flex-col justify-center">
                        <h1 className="text-[32px] font-semibold text-center">
                            Kateqoriyalar
                        </h1>
                        <div className="flex flex-row  justify-between mt-10">
                            <button className="px-6 py-3 rounded-lg border border-black border-opacity-10 hover:bg-[#2961B1] hover:text-white hover:border-none">
                                Hamısı
                            </button>
                            <button className="px-6 py-3 rounded-lg border border-black border-opacity-10  hover:bg-[#2961B1] hover:text-white hover:border-none">
                                Tədbirlər
                            </button>
                            <button className="px-6 py-3 rounded-lg border border-black border-opacity-10  hover:bg-[#2961B1] hover:text-white hover:border-none">
                                İş prosesi
                            </button>
                            <button className="px-6 py-3 rounded-lg border border-black border-opacity-10  hover:bg-[#2961B1] hover:text-white hover:border-none">
                                Digər
                            </button>
                        </div>
                    </div>
                </div>
                <div className="px-[100px] mt-10 grid flex-row grid-cols-4 justify-between gap-5 mb-10">
                    <Galery_Img />
                    <Galery_Img />
                    <Galery_Img />
                    <Galery_Img />
                    <Galery_Img />
                    <Galery_Img />
                    <Galery_Img />
                    <Galery_Img />
                    <Galery_Img />
                    <Galery_Img />
                    <Galery_Img />
                    <Galery_Img />
                    <Galery_Img />
                    <Galery_Img />
                    <Galery_Img />
                    <Galery_Img />
                    <Galery_Img />
                    <Galery_Img />
                    <Galery_Img />
                    <Galery_Img />
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
            </main>
            <Footer />
        </div>
    );
}
