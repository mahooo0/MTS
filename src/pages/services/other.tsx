import React, { useEffect, useState } from 'react';
import strelka from '../../../public/svg/strelka_black.svg';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Services_img_swipper from '@/components/Services_img_swipper';
import Services_aside from '@/components/services_aside';
import { FAQ } from '@/components/FAQ';
import { useSelector } from 'react-redux';

export default function Services_id({ apiData }: { apiData: any }) {
    const [variant, setvariant] = useState<1 | 2 | 3>(1);
    const currenntService = useSelector(
        (state: any) => state.counter.Currentservice
    );
    const [lang, setlang] = useState<string>('az');
    const [reset, setreset] = useState<boolean>(false);
    const data = apiData.data;
    console.log('data', data);

    const baseurl = 'http://mts.caratcons.az/';
    useEffect(() => {
        const lng = localStorage.getItem('language') || 'en';
        setlang(lng);
    }, [reset]);
    const Services = data.services;
    console.log(currenntService, Services);
    return (
        <div>
            <Header
                setReset={() => setreset((prew) => !prew)}
                active={3}
                data={data.translates}
            />
            <div className="bg-[#FBFBFB] h-[90px] w-full "></div>
            <main className="lg:px-[100px] md:px-[60px] px-[30px] bg-white">
                <div className="flex flex-row flex-wrap text-[18px] gap-3 pt-[41px] ">
                    <h5>{data.translates.home[lang]}</h5>
                    <Image
                        src={strelka}
                        alt="strelka"
                        className=" opacity-60"
                    />
                    <h5>{data.translates.our_services[lang]}</h5>
                    <Image
                        src={strelka}
                        alt="strelka"
                        className=" opacity-60"
                    />
                    <h6 className=" opacity-60">
                        {data.translates.other_services[lang]}
                    </h6>
                </div>
                <h1 className="text-[#050B20] lg:text-[40px] md:text-[36px] text-[28px] font-semibold mt-10">
                    {data.translates.our_services[lang]}
                </h1>
                <div className="flex justify-start lg:flex-row flex-col-reverse gap-5 pb-[100px]">
                    <FAQ lang={lang} Services={Services} />
                    <Services_aside
                        Services={Services}
                        lang={lang}
                        action={() => {
                            setvariant(1);
                        }}
                    />
                </div>
            </main>
            {/* <Footer /> */}
            <Footer data={data.translates} lang={lang} contact={data.contact} />
        </div>
    );
}
export async function getServerSideProps() {
    const res = await fetch('http://mts.caratcons.az/api/service?page=1');
    const data = await res.json();
    console.log(data);

    // Pass data to the page via props
    return { props: { apiData: data } };
}
