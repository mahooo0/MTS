import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';
import strelka from '../../public/svg/strelka_black.svg';
import strelka2 from '../../public/svg/strelka1.svg';
import location from '../../public/svg/location.svg';
import phone from '../../public/svg/phone_white.svg';
import map_png from '../../public/images/map.png';
import locationREd from '../../public/svg/location_red.svg';
import mail from '../../public/svg/gmail.svg';
import Image from 'next/image';
type Props = {};

export default function contact({}: Props) {
    return (
        <div>
            <Header active={9} />

            <div className="bg-[#FBFBFB] h-[90px] w-full "></div>
            <div className="flex flex-row text-[18px] gap-3 mt-[41px]  ml-[100px]">
                <h5>Ana səhifə</h5>
                <Image src={strelka} alt="strelka" className=" opacity-60" />
                <h6 className=" opacity-60">Əlaqə</h6>
            </div>
            <h1 className="text-[48px] font-semibold text-[#050B20] mb-[48px] mt-[28px] ml-[100px]">
                Bizimlə əlaqə
            </h1>
            <div className="flex flex-row px-[100px] justify-between">
                <div className="flex flex-row gap-[11.5px] mb-[24px] items-center pr-[75px] bg-[#e0e1e1] rounded-lg">
                    <div className="flex justify-center items-center bg-[#7DB3FF] w-11 h-11 rounded-lg">
                        <Image src={location} alt="location" />
                    </div>
                    <p className=" text-[16px] font-medium">
                        AZ1023, Bakı Səbail ray., Salyan şosesi 12
                    </p>
                </div>
                <div className="flex flex-row gap-[11.5px] mb-[24px] items-center pr-[75px] bg-[#e0e1e1] rounded-lg">
                    <div className="flex justify-center items-center bg-[#7DB3FF] w-11 h-11 rounded-lg">
                        <Image src={phone} alt="phone" />
                    </div>
                    <p className=" text-[16px] font-medium">
                        +99412 525 85 42 / +99410 250 94 94
                    </p>
                </div>
                <div className="flex flex-row gap-[11.5px] mb-[24px] items-center pr-[75px] bg-[#e0e1e1] rounded-lg">
                    <div className="flex justify-center items-center bg-[#7DB3FF] w-11 h-11 rounded-lg">
                        <Image src={mail} alt="mail" />
                    </div>
                    <p className=" text-[16px] font-medium">
                        reception@marinets.az
                    </p>
                </div>
            </div>
            <div className="h-[655px]  overflow-hidden mt-[100px] rounded-lg relative mb-[100px] ">
                <Image src={map_png} alt="map_png " className="w-full" />

                <div className="w-[455px] h-[94%] bg-white rounded-lg absolute top-[26px] left-[100px] bottom-5  z-30 pt-7 pl-6 pr-[14px] flex flex-col">
                    <h3 className="text-[#050B20] text-[28px] font-semibold mb-3">
                        Sualın var? Biz zəng edək
                    </h3>
                    <p className="text-[16px] font-normal mb-10">
                        Sualın var? Bizimlə əlaqə saxla və ya formu doldur, ən
                        qısa zamanda sizə geri dönüş edək.
                    </p>
                    <div className="mt-10 flex flex-col gap-3">
                        <input
                            type="text"
                            name=""
                            id=""
                            className="w-full h-[55px] rounded-lg bg-[#F5F5F5] p-4  focus:outline-none focus:border-transparent"
                            placeholder="Ad və soyad"
                        />
                        <input
                            type="text"
                            name=""
                            id=""
                            className="w-full h-[55px] rounded-lg bg-[#F5F5F5] p-4    focus:outline-none focus:border-transparent"
                            placeholder="Ad və soyad"
                        />
                        <div className="flex flex-row w-full h-[55px] rounded-lg bg-[#F5F5F5] items-center pl-3">
                            +994
                            <input
                                type="tel"
                                pattern="[0-9]*"
                                inputMode="numeric"
                                placeholder="00 000 00 00"
                                className="h-[55px] w-full bg-[#F5F5F5] p-4 focus:outline-none focus:ring-0"
                            />
                        </div>

                        <textarea
                            name=""
                            id=""
                            className="h-[112px] w-full rounded-lg bg-[#F5F5F5] p-4 focus:outline-none focus:border-transparent resize-none overflow-auto"
                        ></textarea>
                        <button className="flex flex-row gap-2 items-center w-full h-[50px] bg-[#2961B1] text-white text-[20px] font-[500px] justify-center rounded-lg mt-3 ">
                            Daha ətraflı <Image src={strelka2} alt="strelka2" />
                        </button>
                    </div>
                </div>
                <Image
                    src={locationREd}
                    alt="locationREd"
                    className=" absolute top-[311px] right-[525px]"
                />
            </div>
            <Footer />
        </div>
    );
}
