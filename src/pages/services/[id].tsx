import React, { useEffect, useState } from 'react';
import strelka from '../../../public/svg/strelka_black.svg';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Services_img_swipper from '@/components/Services_img_swipper';
import Services_aside from '@/components/services_aside';
import { FAQ } from '@/components/FAQ';
import { useSelector } from 'react-redux';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/router';
import Link from 'next/link';
import CustomAbsoluteSwiper from '@/components/fixenimagesSwipper';

export default function Services_id() {
    const [data, setdata] = useState<any>();
    const [currentimgid, setcurrentimgid] = useState<number>(1);
    const [currentsection, setcurrentsection] = useState<any>(null);
    const [isopen, setisopen] = useState<boolean>(false);
    // let currenntService = useSelector(
    //     (state: any) => state.counter.Currentservice
    // );
    console.log(data);

    const router = useRouter();
    const { id } = router.query;
    console.log(id);

    useEffect(() => {
        (async () => {
            if (id) {
                try {
                    const res = await fetch(
                        `https://mts.caratcons.az/api/service-detail/${id}`
                    );

                    const data = await res.json();
                    setdata(data.data);
                } catch (error) {
                    console.log(error);
                }
            }
        })();
    }, [id]);

    const [lang, setlang] = useState<string>('az');
    // const [id, setid] = useState<string>();
    const [reset, setreset] = useState<boolean>(false);

    console.log('data', data);

    const baseurl = 'https://mts.caratcons.az/';
    useEffect(() => {
        const lng = localStorage.getItem('language') || 'en';
        setlang(lng);
    }, [reset]);
    // const Services = data.services;
    // if (!currenntService) {
    //     return <></>;
    // }
    if (!data) {
        return <></>;
    }
    const currenntService = data.service;
    const Services = data.services;

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
                    <Link href={'/'}>
                        <h5>{data.translates.home[lang]}</h5>
                    </Link>
                    <Image
                        src={strelka}
                        alt="strelka"
                        className=" opacity-60"
                    />
                    <Link href={'/services'}>
                        <h5>{data.translates.our_services[lang]}</h5>
                    </Link>
                    <Image
                        src={strelka}
                        alt="strelka"
                        className=" opacity-60"
                    />
                    <h6 className=" opacity-60">
                        {currenntService.title[lang]}
                    </h6>
                </div>
                <h1 className="text-[#050B20] lg:text-[40px] md:text-[30px] text-[24px] font-semibold mt-10">
                    {currenntService.title[lang]}
                </h1>
                <div className="flex justify-start lg:flex-row flex-col-reverse gap-5">
                    {/* <Services_img_swipper data={currenntService.images} /> */}
                    <div className="w-full  flex lg:flex-row flex-col gap-3">
                        {currenntService.images.map(
                            (item: any, i: number, list: any) => {
                                console.log('item', item);
                                return (
                                    <img
                                        src={baseurl + item}
                                        onClick={() => {
                                            setcurrentimgid(i);
                                            setcurrentsection(list);
                                            setisopen(true);
                                        }}
                                        className="lg:w-1/2 w-full rounded-lg"
                                        alt=""
                                    />
                                );
                            }
                        )}
                    </div>
                    <Services_aside
                        translates={data.translates}
                        lang={lang}
                        currenntService={currenntService}
                        action={() => {}}
                        Services={Services}
                    />
                </div>

                <div
                    className="text-[16px] font-normal text-black text-opacity-80 text-start   felx flex-col lg:w-[75%] w-full mt-14 pb-[100px]  "
                    dangerouslySetInnerHTML={{
                        __html: currenntService.description[lang],
                    }}
                />
            </main>
            {/* <Footer /> */}
            <Footer data={data.translates} lang={lang} contact={data.contact} />
            <CustomAbsoluteSwiper
                onclose={() => setisopen(false)}
                images={currentsection}
                isOpen={isopen}
                currentIndex={currentimgid}
            />
        </div>
    );
}
