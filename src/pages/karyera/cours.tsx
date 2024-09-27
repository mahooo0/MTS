import Header from '@/components/Header';
import Image from 'next/image';
import React, { useState } from 'react';
import strelka from '../../../public/svg/strelka_black.svg';
import strelka2 from '../../../public/svg/strelka2.svg';
import Footer from '@/components/Footer';
import CAnteiner from '../../../public/images/container.png';
import Rounded_Swipper from '@/components/Rounded_Swipper';
import Request_blanck from '@/components/Request_blanck';
import { useRouter } from 'next/router';
export default function index() {
    const [variant, setvariant] = useState<1 | 2 | 3>(3);
    const router = useRouter();

    return (
        <div className="bg-white">
            <Header active={6} />
            <div className="bg-[#FBFBFB] h-[90px] w-full "></div>
            <main className="">
                <div className="flex flex-row lg:px-[100px] md:px-[60px] px-[30px]">
                    <div className="flex flex-col lg:w-1/2 w-full">
                        <div className="flex flex-row text-[18px] gap-3 mt-[41px] ">
                            <h5>Ana səhifə</h5>
                            <Image
                                src={strelka}
                                alt="strelka"
                                className=" opacity-60"
                            />
                            <h6 className=" opacity-60">Karyera</h6>
                        </div>
                        <h1 className="lg:text-[48px] md:text-[36px] text-[28px]  font-semibold mt-[68px]">
                            Karyerana ilk addımını “Marine Technical Solutions”
                            QSC-də at!
                        </h1>
                        <p className="lg:text-[18px] text-[16px] text-wrap font-normal lg:w-[467px] mt-[20px]">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. 
                        </p>
                        <div className="mt-[124px] flex flex-row flex-wrap text-nowrap gap-3 justify-center">
                            <button
                                onClick={() => router.push('/karyera')}
                                className="px-4 py-2 rounded-lg border border-black border-opacity-10 hover:bg-[#2961B1] hover:text-white hover:border-none"
                            >
                                Vakansiyalar
                            </button>
                            <button
                                onClick={() => router.push('/karyera/cours')}
                                className="px-4 py-2 rounded-lg border border-black border-opacity-10 bg-[#2961B1] text-white hover:border-none"
                            >
                                Peşəkar inkişaf və təlim
                            </button>
                            <button
                                onClick={() =>
                                    router.push('/karyera/request_blanck')
                                }
                                className="px-4 py-2 rounded-lg border border-black border-opacity-10 hover:bg-[#2961B1] hover:text-white hover:border-none"
                            >
                                Müraciət blankı
                            </button>
                        </div>
                    </div>
                    <div className="lg:flex hidden justify-center items-center p-10 pb-0 w-1/2">
                        <Image
                            src={CAnteiner}
                            alt="CAnteiner"
                            className="h-full object-cover rounded-lg "
                        />
                    </div>
                </div>

                <>
                    <div className="lg:py-[100px] py-[40px] lg:px-[100px] md:px-[60px] px-[30px]">
                        <div className="bg-[#F7F8FA] lg:h-[700px] h-fit w-full rounded-lg flex flex-row">
                            <div className="w-2/5 p-10  lg:block hidden  h-full rounded-lg overflow-hidden ">
                                <Image
                                    src={CAnteiner}
                                    alt="continer"
                                    className=" object-cover w-full h-full rounded-lg"
                                />
                            </div>
                            <div className="lg:w-3/5 w-full p-10 ">
                                <div className="lg:mt-[76px] mt-[40px]  lg:text-[16px] md:text-[16px] text-[12px] font-normal">
                                    <h4 className=" lg:text-[48px] md:text-[32px] text-[28px] font-semibold">
                                        Peşəkar inkişaf və təlim
                                    </h4>
                                    <p>
                                        Şirkətimiz işçi heyətinin peşəkar
                                        inkişafını və bacarıqlarının
                                        yüksəldilməsini daim ön planda
                                        saxlayaraq yeni Peşəkar İnkişaf və Təlim
                                        Layihəsinə start verir. Bu layihənin
                                        məqsədi, heyətimizin texniki bilik və
                                        təcrübəsini daha da inkişaf etdirərək
                                        müştərilərimizə göstərdiyimiz xidmətin
                                        keyfiyyətini artırmaqdır.
                                    </p>
                                    <br />
                                    <p>
                                        Layihə çərçivəsində aşağıdakı sahələrdə
                                        təlimlər və inkişaf proqramları həyata
                                        keçiriləcək:
                                    </p>
                                    <br />

                                    <ul className=" list-disc text-[16px] font-normal gap-4 ml-[18px]">
                                        <li>
                                            Texniki bacarıqların
                                            təkmilləşdirilməsi: Gəmi təmiri və
                                            texniki xidmət sahəsində yeni
                                            texnologiyaların və avadanlıqların
                                            tətbiqi üzrə təlimlər
                                        </li>
                                        <li>
                                            Texniki bacarıqların
                                            təkmilləşdirilməsi: Gəmi təmiri və
                                            texniki xidmət sahəsində yeni
                                            texnologiyaların və avadanlıqların
                                            tətbiqi üzrə təlimlər
                                        </li>{' '}
                                        <li>
                                            Texniki bacarıqların
                                            təkmilləşdirilməsi: Gəmi təmiri və
                                            texniki xidmət sahəsində yeni
                                            texnologiyaların və avadanlıqların
                                            tətbiqi üzrə təlimlər
                                        </li>
                                    </ul>
                                    <br />

                                    <p>
                                        Bu layihə sayəsində işçilərimiz həm
                                        texniki, həm də peşəkar bacarıqlarını
                                        təkmilləşdirərək, gəmi təmir sektorunda
                                        daha rəqabətqabiliyyətli və müştəri
                                        məmnuniyyətinə yönəlmiş xidmət
                                        göstərəcəklər.
                                        <br /> <br />
                                        Biz daim inkişafa və innovasiyalara
                                        açığıq və əməkdaşlarımızın peşəkar
                                        səviyyədə yüksəlməsini dəstəkləməyə
                                        davam edəcəyik.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" mb-[100px] bg-[#131E41] h-[708px] w-full flex flex-col justify-center items-center overflow-hidden relative mt-[80px]">
                        <h3 className=" lg:text-[48px] text-[32px] text-white font-semibold  text-center absolute z-[101] top-20">
                            Təlimlərdən görüntülər
                        </h3>
                        <Rounded_Swipper />
                        <button className="flex flex-row gap-2 items-center w-[200px] h-[50px] bg-white text-[#2961B1] text-[20px] font-[500px] justify-center rounded-lg  absolute  bottom-[78px] z-[10333]">
                            Daha ətraflı <Image src={strelka2} alt="strelka" />
                        </button>
                    </div>
                </>
            </main>
            <Footer />
        </div>
    );
}
