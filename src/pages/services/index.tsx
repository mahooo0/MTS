import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import strelka from '../../../public/svg/strelka_black.svg';
import Services_card from '@/components/Services_card';
import { useAppDispatch } from '@/redux/store';
import { useSelector } from 'react-redux';
import Link from 'next/link';

export default function () {
    const [data, setdata] = useState<any>({});
    const [page, setpage] = useState<number>(1);

    const [lang, setlang] = useState<string>('az');
    const [reset, setreset] = useState<boolean>(false);
    const [stringval, setStringVal] = useState<string>('');
    const [isLoading, setIsLoading] = useState(true);
    const baseurl = 'https://mts.caratcons.az/';
    useEffect(() => {
        const lng = localStorage.getItem('language') || 'en';
        setlang(lng);
    }, [reset]);
    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true);
                const res = await fetch(
                    `https://mts.caratcons.az/api/service?page=${page}`
                );
                const newdata = await res.json();
                // const newdata = await axios.get(
                //     `https://mts.caratcons.az/api/gallery?page=${page}&category_id=${category_id}`
                // );
                // console.log(newdata.data.data.categories[0]?.name['az'], 'data my');
                console.log('newdata', newdata);

                const NewDATA = await newdata.data;
                setdata(NewDATA);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        })();
    }, [page]);
    console.log(data.service_title?.description);
    if (isLoading) {
        return <div></div>;
    }

    return (
        <div>
            <Header
                active={3}
                setReset={() => setreset((prew) => !prew)}
                data={data.translates}
            />
            <div className="bg-[#FBFBFB] h-[90px] w-full "></div>
            <main className="lg:px-[100px] md:px-[60px] px-[30px] flex flex-col justify-center">
                <div className="flex flex-row text-[18px] gap-3 mt-[41px] ">
                    <Link href={'/'}>
                        <h5>{data.translates.home[lang]}</h5>
                    </Link>
                    <Image
                        src={strelka}
                        alt="strelka"
                        className=" opacity-60"
                    />
                    <h6 className=" opacity-60">
                        {data.translates.our_services[lang]}
                    </h6>
                </div>
                <div
                    className="w-full lg:h-[380px] h-fit rounded-lg overflow-hidden mt-10"
                    style={{
                        backgroundImage: `url('/images/trubı.png')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',

                        // or any height you need
                    }}
                >
                    <div className="bg-[#050B20] w-full h-full bg-opacity-60 flex flex-col items-center justify-center text-white text-center gap-5">
                        <h4 className="lg:w-3/5 w-4/5 lg:text-[40px] md:text-[36px] text-[24px] font-semibold">
                            {data.service_title.title[lang]}
                        </h4>
                        <div
                            className="lg:w-1/2 w-9/12 text-[18divx] font-medium"
                            dangerouslySetInnerHTML={{
                                __html: data.service_title.description[lang],
                            }}
                        />
                    </div>
                </div>

                <div className="mt-10 grid lg:grid-cols-4 md:grid-cols-2  lg:justify-between justify-center mb-[100px] ">
                    {data.services
                        .filter((item: any, i: number) => i < 5)
                        .map((item: any) => (
                            <Services_card
                                data={item}
                                lang={lang}
                                ser={data.services}
                            />
                        ))}
                </div>
            </main>
            <Footer data={data.translates} lang={lang} contact={data.contact} />
        </div>
    );
}
