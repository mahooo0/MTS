import React from 'react';
import logo from '../../public/svg/Logo.svg';
import Image from 'next/image';
import mail from '../../public/svg/gmail.svg';
import phone from '../../public/svg/phone_white.svg';
import insta from '../../public/svg/insta.svg';
import facebock from '../../public/svg/facebock.svg';
import wp from '../../public/svg/wp.svg';
import location from '../../public/svg/location.svg';
export default function () {
    return (
        <div className=" w-full h-[477px] bg-[#131E41]">
            <div className="pt-[48px] px-20 flex flex-row justify-between">
                <div className="flex flex-col gap-5 ">
                    <div className="w-[90px] h-[90px] bg-[#FFFFFFE5] rounded-full flex justify-center items-center">
                        <Image src={logo} alt="logo" />
                    </div>
                    <p className="w-[295px] text-white text-[16px] font-normal">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                    </p>
                </div>
                <div className=" flex flex-row gap-11 ">
                    <div className="flex flex-col text-[16px] text-white font-normal gap-[14px]">
                        <h4 className="mb-[16px] text-[18px] font-semibold">
                            Vacib keçidlər
                        </h4>
                        <p>Haqqımızda</p>
                        <p>Xidmətlərimiz</p>
                        <p>Stuktur</p>
                        <p>Sertifikatlar</p>
                        <p>Tərəftaşlar</p>
                        <p>Qalereya</p>
                        <p>Əlaqə</p>
                    </div>
                    <div className="text-white">
                        <h4 className="mb-[16px] text-[18px] font-semibold">
                            Əlaqə məlumatları
                        </h4>
                        <div className="flex flex-row gap-[11.5px] mb-[24px] items-center">
                            <div className="flex justify-center items-center bg-[#FFFFFF1F] w-11 h-11 rounded-lg">
                                <Image src={phone} alt="phone" />
                            </div>
                            <p className=" text-[16px] font-medium">
                                +99412 525 85 42 / +99410 250 94 94
                            </p>
                        </div>
                        <div className="flex flex-row gap-[11.5px] mb-[24px] items-center">
                            <div className="flex justify-center items-center bg-[#FFFFFF1F] w-11 h-11 rounded-lg">
                                <Image src={location} alt="location" />
                            </div>
                            <p className=" text-[16px] font-medium flex flex-wrap w-[291px]">
                                AZ1023, Azərbaycan, Bakı Səbail ray., Salyan
                                şosesi 12
                            </p>
                        </div>
                        <div className="flex flex-row gap-[11.5px] mb-[24px] items-center">
                            <div className="flex justify-center items-center bg-[#FFFFFF1F] w-11 h-11 rounded-lg">
                                <Image src={mail} alt="mail" />
                            </div>
                            <p className=" text-[16px] font-medium flex flex-wrap w-[291px]">
                                reception@marinets.az
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col text-white">
                        <h4 className="mb-[20px] text-[18px] font-semibold">
                            Bizi izlə
                        </h4>
                        <div className="flex flex-row gap-[16px] ">
                            <div className="flex justify-center items-center bg-[#FFFFFF1F] w-11 h-11 rounded-lg">
                                <Image src={insta} alt="insta" />
                            </div>
                            <div className="flex justify-center items-center bg-[#FFFFFF1F] w-11 h-11 rounded-lg">
                                <Image src={facebock} alt="facebock" />
                            </div>
                            <div className="flex justify-center items-center bg-[#FFFFFF1F] w-11 h-11 rounded-lg">
                                <Image src={wp} alt="wp" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    );
}
