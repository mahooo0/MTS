import React, { useState } from 'react';
import strelka from '../../../public/svg/strelka_black.svg';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Services_img_swipper from '@/components/Services_img_swipper';
import Services_aside from '@/components/services_aside';
import { FAQ } from '@/components/FAQ';

export default function Services_id() {
    const [variant, setvariant] = useState<1 | 2 | 3>(1);
    if (variant === 1) {
        return (
            <div>
                <Header active={3} />
                <div className="bg-[#FBFBFB] h-[90px] w-full "></div>
                <main className="lg:px-[100px] md:px-[60px] px-[30px] bg-white">
                    <div className="flex flex-row flex-wrap text-[18px] gap-3 pt-[41px] ">
                        <h5>Ana səhifə</h5>
                        <Image
                            src={strelka}
                            alt="strelka"
                            className=" opacity-60"
                        />
                        <h5>Xidmətlər</h5>
                        <Image
                            src={strelka}
                            alt="strelka"
                            className=" opacity-60"
                        />
                        <h6 className=" opacity-60">Xidmətlər</h6>
                    </div>
                    <h1 className="text-[#050B20] lg:text-[40px] md:text-[30px] text-[24px] font-semibold mt-10">
                        Elektrik avadanlıqlarının diaqnostikası və tarirovkası
                    </h1>
                    <div className="flex justify-start lg:flex-row flex-col gap-5">
                        <Services_img_swipper />
                        <Services_aside
                            action={() => {
                                setvariant(2);
                            }}
                        />
                    </div>

                    <div className="text-[16px] font-normal text-black text-opacity-80 text-start   felx flex-col lg:w-[75%] w-full mt-11 pb-[100px]  ">
                        <p>
                            Metal konstruksiyaların quraşdırılması gəmi
                            sahəsində dayanıqlı və müstəqil strukturların inşası
                            üçün əhəmiyyətli bir prosesdir.  Çünki metal
                            sütunlar və kirişlər gəmi strukturasının
                            dayanıqlılığını təmin edir. Polad materiallardan
                            istifadə edərək istehsal olunan metal
                            konstruksiyalar uzunmüddətli istismar və təmir
                            xərcləri tələb etmədən uyğun bir şəraitdə
                            hazırlanır. Metal konstruksiyanın ən vacib
                            xüsusiyyəti, möhkəm və elastik olmasıdır. Ağır və
                            yüngül polad materiallardan istifadə edərək istehsal
                            olunan metal konstruksiyalar uzunmüddətli istifadə
                            edilə biləcək xüsusiyyətlərə sahibdir.
                        </p>
                        <br />
                        <p>
                            Metal konstruksiyaların quraşdırılması gəmi
                            sahəsində dayanıqlı və müstəqil strukturların inşası
                            üçün əhəmiyyətli bir prosesdir.  Çünki metal
                            sütunlar və kirişlər gəmi strukturasının
                            dayanıqlılığını təmin edir. Polad materiallardan
                            istifadə edərək istehsal olunan metal
                            konstruksiyalar uzunmüddətli istismar və təmir
                            xərcləri tələb etmədən uyğun bir şəraitdə
                            hazırlanır. Metal konstruksiyanın ən vacib
                            xüsusiyyəti, möhkəm və elastik olmasıdır. Ağır və
                            yüngül polad materiallardan istifadə edərək istehsal
                            olunan metal konstruksiyalar uzunmüddətli istifadə
                            edilə biləcək xüsusiyyətlərə sahibdir.
                        </p>
                    </div>
                </main>
                <Footer />
            </div>
        );
    } else if (variant === 2) {
        return (
            <div>
                <Header active={3} />
                <div className="bg-[#FBFBFB] h-[90px] w-full "></div>
                <main className="lg:px-[100px] md:px-[60px] px-[30px] bg-white">
                    <div className="flex flex-row flex-wrap text-[18px] gap-3 pt-[41px] ">
                        <h5>Ana səhifə</h5>
                        <Image
                            src={strelka}
                            alt="strelka"
                            className=" opacity-60"
                        />
                        <h5>Xidmətlər</h5>
                        <Image
                            src={strelka}
                            alt="strelka"
                            className=" opacity-60"
                        />
                        <h6 className=" opacity-60">Xidmətlər</h6>
                    </div>
                    <h1 className="text-[#050B20] lg:text-[40px] md:text-[30px] text-[24px] font-semibold mt-10">
                        Elektrik avadanlıqlarının diaqnostikası və tarirovkası
                    </h1>
                    <div className="flex justify-start lg:flex-row flex-col gap-5">
                        <Services_img_swipper />
                        <Services_aside
                            action={() => {
                                setvariant(3);
                            }}
                        />
                    </div>

                    <div className="text-[16px] font-normal text-black text-opacity-80  felx flex-col w-[75%]  mt-11 pb-[100px]">
                        <ul className=" list-disc text-[16px] font-normal gap-4">
                            <li>
                                Hər növ hidravlik nasosların, motorların,
                                klapanların, silindrlərin,
                                akkumulyatorların, yoxlanılması , təmir olunması
                                və test edilməsi
                            </li>
                            <li>
                                Hər növ hidravlik nasosların, motorların,
                                klapanların, silindrlərin,
                                akkumulyatorların, yoxlanılması , təmir olunması
                                və test edilməsi
                            </li>
                            <li>
                                Hər növ hidravlik nasosların, motorların,
                                klapanların, silindrlərin,
                                akkumulyatorların, yoxlanılması , təmir olunması
                                və test edilməsi
                            </li>
                            <li>
                                Hər növ hidravlik nasosların, motorların,
                                klapanların, silindrlərin,
                                akkumulyatorların, yoxlanılması , təmir olunması
                                və test edilməsi
                            </li>
                        </ul>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
    return (
        <div>
            <Header active={3} />
            <div className="bg-[#FBFBFB] h-[90px] w-full "></div>
            <main className="lg:px-[100px] md:px-[60px] px-[30px] bg-white">
                <div className="flex flex-row flex-wrap text-[18px] gap-3 pt-[41px] ">
                    <h5>Ana səhifə</h5>
                    <Image
                        src={strelka}
                        alt="strelka"
                        className=" opacity-60"
                    />
                    <h5>Xidmətlər</h5>
                    <Image
                        src={strelka}
                        alt="strelka"
                        className=" opacity-60"
                    />
                    <h6 className=" opacity-60">Xidmətlər</h6>
                </div>
                <h1 className="text-[#050B20] lg:text-[40px] md:text-[36px] text-[28px] font-semibold mt-10">
                    Digər xidmətlərimiz
                </h1>
                <div className="flex justify-start lg:flex-row flex-col-reverse gap-5 mb-[100px]">
                    <FAQ />
                    <Services_aside
                        action={() => {
                            setvariant(1);
                        }}
                    />
                </div>
            </main>
            <Footer />
        </div>
    );
}
