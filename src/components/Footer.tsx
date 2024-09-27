import React from 'react';
import logo from '../../public/svg/Logo.svg';
import Image from 'next/image';
import mail from '../../public/svg/gmail.svg';
import phone from '../../public/svg/phone_white.svg';
import insta from '../../public/svg/insta.svg';
import facebock from '../../public/svg/facebock.svg';
import wp from '../../public/svg/wp.svg';
import location from '../../public/svg/location.svg';
import { useRouter } from 'next/router';
export default function () {
    const router = useRouter();
    return (
        <div className=" w-full lg:min-h-[477px] h-fit bg-[#131E41]">
            <div className="pt-[48px] lg:px-20 px-5 flex flex-row justify-between">
                <div className=" flex lg:flex-row md:flex-column flex-col-reverse  justify-between w-full flex-wrap gap-[55px]  ">
                    <div className="lg:flex   flex-col text-[16px] text-white font-normal gap-[14px]">
                        <h4 className="mb-[16px] text-[18px] font-semibold">
                            Haqqımızda{' '}
                        </h4>
                        <p onClick={() => router.push('/about_us')}>
                            Şirkət tarixçəsi
                        </p>
                        <p onClick={() => router.push('/about_us')}>
                            Sertifikatlar
                        </p>
                        <p onClick={() => router.push('/about_us')}>Stuktur</p>
                    </div>
                    <div className="lg:flex   flex-col text-[16px] w-[210px] text-white font-normal gap-[14px]">
                        <h4 className="mb-[16px] text-[18px] font-semibold">
                            Xidmətlərimiz{' '}
                        </h4>
                        <p onClick={() => router.push('/services/aaa')}>
                            Soyutma sahəsi üzrə
                        </p>
                        <p onClick={() => router.push('/services/aaa')}>
                            Hidravlika sahəsi üzrə
                        </p>
                        <p onClick={() => router.push('/services/aaa')}>
                            Mexanika sahəsi üzrə
                        </p>
                        <p onClick={() => router.push('/services/aaa')}>
                            Avtomatika sahəsi üzrə
                        </p>
                        <p onClick={() => router.push('/services/aaa')}>
                            Elektrik avadanlıqlarının diaqnostikası və
                            tarirovkası
                        </p>
                        <p onClick={() => router.push('/services/aaa')}>
                            Digər
                        </p>
                    </div>
                    <div className="lg:flex  md:flex flex-col   text-[16px] text-white font-normal gap-[14px]">
                        <h4 className="mb-[16px] text-[18px] font-semibold">
                            Media{' '}
                        </h4>
                        <p onClick={() => router.push('/news')}>Xəbərlər</p>
                        <p onClick={() => router.push('/media/images')}>
                            Qalereya
                        </p>
                        <p onClick={() => router.push('/media/videos')}>
                            Video
                        </p>
                    </div>
                    <div className="lg:flex  md:flex flex-col text-[16px] text-white font-normal gap-[14px]">
                        <h4 className="mb-[16px] text-[18px] font-semibold">
                            Karyera
                        </h4>
                        <p onClick={() => router.push('/karyera')}>
                            Vakansiyalar
                        </p>
                        <p onClick={() => router.push('/karyera/cours')}>
                            Peşəkar inkişaf və təlim
                        </p>
                        <p
                            onClick={() =>
                                router.push('/karyera/request_blanck')
                            }
                        >
                            Müraciət blankı.
                        </p>
                    </div>
                    <div className="text-white">
                        <h4 className="mb-[16px] text-[18px] font-semibold">
                            Əlaqə məlumatları
                        </h4>
                        <div className="flex flex-row gap-[11.5px] mb-[24px] items-center">
                            <div className="flex justify-center items-center bg-[#FFFFFF1F] w-11 h-11 rounded-lg">
                                <Image src={phone} alt="phone" />
                            </div>
                            <p className=" text-[16px] font-medium lg:w-fit w-[200px]">
                                +99412 525 85 42 / +99410 250 94 94
                            </p>
                        </div>
                        <div className="flex flex-row gap-[11.5px] mb-[24px] items-center">
                            <div className="flex justify-center items-center bg-[#FFFFFF1F] w-11 h-11 rounded-lg">
                                <Image src={location} alt="location" />
                            </div>
                            <p className=" text-[16px] font-medium flex flex-wrap lg:w-[291px]  w-[200px]">
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
                    <div className="flex  flex-col text-white w-fit ">
                        <h4 className="mb-[20px] text-[18px] font-semibold ">
                            Bizi izlə Əlaqə
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
