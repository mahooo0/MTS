import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import strelka from '../../public/svg/strelka_black.svg';
import dnk from '../../public/svg/dnk.svg';
import dnk2 from '../../public/svg/dnk2.svg';
import container from '../../public/images/container.png';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Employee_card from '@/components/Employee_card';
import Sertificat from '@/components/Sertificats';

function about_us({ apiData }: { apiData: any }) {
    const [reset, setreset] = useState<boolean>(false);
    const [lang, setlang] = useState<string>('az');
    const baseurl = 'https://mts.caratcons.az/';
    useEffect(() => {
        const id = localStorage.getItem('scrollto');
        if (id) {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            localStorage.removeItem('scrollto');
        }
        const lng = localStorage.getItem('language') || 'en';
        setlang(lng);
    }, [reset]);
    const data = apiData.data;
    console.log(data);

    return (
        <div>
            <Header
                active={2}
                setReset={() => setreset((prew) => !prew)}
                data={data.translates}
            />
            <div className="bg-[#FBFBFB] h-[90px] w-full "></div>

            <main>
                <div className="w-full  flex lg:flex-row flex-col relative bg-[#F7F7F8]">
                    <div className="lg:w-1/2 lg:pl-[100px] md:px-[60px] px-[30px]">
                        <div className="flex flex-row text-[18px] gap-3 mt-[41px] ">
                            <h5>{data.translates.home[lang]}</h5>
                            <Image
                                src={strelka}
                                alt="strelka"
                                className=" opacity-60"
                            />
                            <h6 className=" opacity-60">
                                {data.translates.about[lang]}
                            </h6>
                        </div>
                        <h1 className="lg:text-[48px] md:text-[48px]  text-[32px] font-semibold mt-7">
                            {data.about.title[lang]}
                        </h1>
                        <div
                            className=" text-[15px] font-normal opacity-80 lg:pr-[20px] pr-0 mt-5 lg:mt-0"
                            dangerouslySetInnerHTML={{
                                __html: data.about.text_upper[lang],
                            }}
                        />
                    </div>
                    <div className="lg:w-1/2 lg:h-[587px] h-fit  ">
                        <img
                            src={`${baseurl}${data.about.image}`}
                            alt="container"
                            className=" object-cover lg:h-full md:h-3/5 w-full h-1/2 lg:mb-0 mb-6 lg:mt-0 mt-6"
                        />
                    </div>
                    <div className="bg-[#F7F7F8] lg:h-[128px]  h-fit  lg:w-3/5 w-full md:justify-around lg:absolute z-30 bottom-0 left-[100px] border-b border-black flex lg:justify-between justify-around items-center lg:pr-[40px] pr-0 lg:flex-row md:flex-row flex-row ">
                        {data.statistics.map((item: any) => (
                            <div className="flex flex-col  flex-wrap w-fit lg:mt-0 mt-4">
                                <h4 className="lg:text-[32px] md:text-[32px] text-[24px] font-semibold gap-3 lg:text-start text-center">
                                    {item.value}+
                                </h4>
                                <p className="lg:text-[16px] md:text-[16px] text-[10px] font-normal">
                                    {item.title[lang]}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full lg:px-[100px] md:px-[60px] px-[30px] pt-[20px] pn-[40px]">
                    <div
                        className=" text-[16px] font-normal opacity-80 lg:pr-[20px]"
                        dangerouslySetInnerHTML={{
                            __html: data.about.text_below[lang],
                        }}
                    />
                </div>

                <div className="p-5 bg-white relative " id="structure">
                    <div className="pt-[100px] flex flex-col justify-center items-center bg-[#F3F7FF] pb-[100px] relative">
                        <Image
                            src={dnk}
                            alt="dnk"
                            className=" absolute top-0 "
                        />
                        <h2 className="text-[40px] font-semibold text-center mb-[40px] z-20">
                            {data.translates.structure[lang]}
                        </h2>
                        <div className="z-20 flex flex-col  justify-center items-center">
                            {data.teams.map((item: any) => {
                                console.log(item);

                                if (item.prioritet === 1) {
                                    return (
                                        <Employee_card data={item} lng={lang} />
                                    );
                                }
                            })}

                            <div className="  gap-[60px] pt-5 flex flex-row flex-wrap justify-center items-center mt-[40px]">
                                {data.teams.map((item: any) => {
                                    console.log(item);

                                    if (item.prioritet === 2) {
                                        return (
                                            <Employee_card
                                                data={item}
                                                lng={lang}
                                            />
                                        );
                                    }
                                })}
                                {/* <Employee_card />
                                <Employee_card /> */}
                            </div>
                            <div className="  gap-[60px] pt-5   flex flex-row flex-wrap justify-center items-center  mt-[40px]">
                                {data.teams.map((item: any) => {
                                    console.log(item);

                                    if (item.prioritet === 3) {
                                        return (
                                            <Employee_card
                                                data={item}
                                                lng={lang}
                                            />
                                        );
                                    }
                                })}
                            </div>
                            <div className="  gap-[60px] pt-5  flex flex-row flex-wrap justify-center items-center mt-[40px]">
                                {data.teams.map((item: any) => {
                                    console.log(item);

                                    if (item.prioritet === 4) {
                                        return (
                                            <Employee_card
                                                data={item}
                                                lng={lang}
                                            />
                                        );
                                    }
                                })}
                            </div>
                            <div className="  gap-[60px] pt-5 flex flex-row flex-wrap justify-center items-center  mt-[40px]">
                                {data.teams.map((item: any) => {
                                    console.log(item);

                                    if (item.prioritet === 5) {
                                        return (
                                            <Employee_card
                                                data={item}
                                                lng={lang}
                                            />
                                        );
                                    }
                                })}
                            </div>
                        </div>
                        <Image
                            src={dnk2}
                            alt="dnk"
                            className=" absolute  bottom-0 w-full"
                        />
                    </div>
                </div>

                <div className="pt-[100px]  bg-[#F6F7F8] " id="sertificatlar">
                    <h2 className="text-[40px] font-semibold text-center mb-[40px]">
                        {data.translates.certificates[lang]}
                    </h2>
                    <div className="flex items-center justify-evenly  flex-wrap pb-[100px] gap-[20px] lg:px-[100px] md:px-[60px]  px-[30px] ">
                        {data.certificates.map((item: any) => (
                            <Sertificat data={item} lang={lang} />
                        ))}
                        {/* <Sertificat />
                        <Sertificat />
                        <Sertificat />
                        <Sertificat /> */}
                    </div>
                </div>
            </main>

            <Footer data={data.translates} contact={data.contact} lang={lang} />
        </div>
    );
}
export async function getServerSideProps() {
    const res = await fetch('https://mts.caratcons.az/api/about');
    const data = await res.json();
    console.log(data);

    // Pass data to the page via props
    return { props: { apiData: data } };
}
export default about_us;
