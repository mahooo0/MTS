import Header from '@/components/Header';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import strelka from '../../../public/svg/strelka_black.svg';
import strelka2 from '../../../public/svg/strelka2.svg';
import Footer from '@/components/Footer';
import CAnteiner from '../../../public/images/container.png';
import Rounded_Swipper from '@/components/Rounded_Swipper';
import Request_blanck from '@/components/Request_blanck';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import Rounded_Swipper2 from '@/components/Rounded_Swipper2';
import Link from 'next/link';
export default function news() {
    const [lang, setlang] = useState<string>('az');
    const [reset, setreset] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState(true);
    const [data, setdata] = useState<any>({});
    const [page, setpage] = useState<number>(1);
    const router = useRouter();
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
                    `https://mts.caratcons.az/api/vacancy?page=${page}`
                );
                const newdata = await res.json();

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
    console.log(data.translates?.home);
    const dispatch = useDispatch();
    // const lang = localStorage.getItem('language') || 'en';
    if (isLoading) {
        return <div></div>;
    }
    return (
        <div className="bg-white">
            <Header
                setReset={() => setreset((prew) => !prew)}
                active={7}
                data={data.translates}
            />
            <div className="bg-white h-[90px] w-full "></div>

            <main className="">
                <div className="flex flex-row lg:px-[100px] md:px-[60px] px-[30px]">
                    <div className="flex flex-col lg:w-1/2 w-full">
                        <div className="flex flex-row text-[18px] gap-3 mt-[41px] ">
                            <Link href={'/'}>
                                <h5>{data.translates.home[lang]}</h5>
                            </Link>
                            <Image
                                src={strelka}
                                alt="strelka"
                                className=" opacity-60"
                            />
                            <Link href={'/karyera'}>
                                <h5>{data.translates.career[lang]}</h5>
                            </Link>
                            <Image
                                src={strelka}
                                alt="strelka"
                                className=" opacity-60"
                            />
                            <h6 className=" opacity-60">
                                {data.translates.training[lang]}
                            </h6>
                        </div>
                        <h1 className="lg:text-[48px] md:text-[36px] text-[28px]  font-semibold mt-[68px]">
                            {data.career.title[lang]}
                        </h1>
                        <p className="lg:text-[18px] text-[16px] text-wrap font-normal lg:w-[467px] mt-[20px]">
                            {data.career.sub_title[lang]}
                        </p>

                        <div className="mt-[80px] flex flex-row flex-wrap text-nowrap gap-3 justify-center">
                            <button
                                onClick={() => {
                                    router.push('/karyera');
                                }}
                                className="px-4 py-2 rounded-lg border border-black border-opacity-10 hover:bg-[#2961B1] hover:text-white hover:border-none"
                            >
                                {data.translates.career[lang]}
                            </button>
                            <button
                                onClick={() => {
                                    router.push('/karyera/cours');
                                }}
                                className="px-4 py-2 rounded-lg border border-black border-opacity-10 bg-[#2961B1] text-white  hover:border-none"
                            >
                                {data.translates.training[lang]}
                            </button>
                            <button
                                onClick={() => {
                                    router.push('/karyera/request_blanck');
                                }}
                                className="px-4 py-2 rounded-lg border border-black border-opacity-10 hover:bg-[#2961B1] hover:text-white hover:border-none"
                            >
                                {data.translates.application_form[lang]}
                            </button>
                        </div>
                    </div>
                    <div className="lg:flex hidden justify-center items-center p-10 pb-0 w-1/2">
                        <img
                            src={`${baseurl}${data.career.image}`}
                            alt="CAnteiner"
                            className="h-full object-cover rounded-lg "
                        />
                    </div>
                </div>

                <>
                    <div className="lg:my-[100px] my-[40px] lg:mx-[100px] md:px-[60px] mx-[30px] bg-[#F7F8FA] rounded-lg">
                        <div className="bg-[#F7F8FA] lg:h-[700px] h-fit w-full rounded-lg flex flex-row">
                            <div className="w-2/5 p-10  lg:block hidden  h-full rounded-lg overflow-hidden ">
                                <img
                                    src={`${baseurl}${data.training.image}`}
                                    alt="continer"
                                    className=" object-cover w-full h-full rounded-lg"
                                />
                            </div>
                            <div className="lg:w-3/5 w-full p-10 pl-14 ">
                                <div className="lg:mt-[76px] mt-[40px]  lg:text-[16px] md:text-[16px] text-[12px] font-normal">
                                    <h4 className=" lg:text-[48px] md:text-[32px] text-[28px] font-semibold">
                                        {data.training.title[lang]}
                                    </h4>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: data.training.description[
                                                lang
                                            ],
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" mb-[100px] bg-[#131E41] h-[708px] w-full flex flex-col justify-center items-center overflow-hidden relative mt-[80px]">
                        <h3 className=" lg:text-[48px] text-[32px] text-white font-semibold  text-center absolute z-[101] top-20">
                            {data.translates.training_wiue[lang]}
                        </h3>
                        <Rounded_Swipper data={data.training.images} />
                        <button
                            onClick={() => {
                                localStorage.setItem('category', 'Təlim');
                                router.push('/media');
                            }}
                            className="flex flex-row gap-2 items-center w-[200px] h-[50px] bg-white text-[#2961B1] text-[20px] font-[500px] justify-center rounded-lg  absolute  bottom-[78px] z-[10333]"
                        >
                            {data.translates.see_more[lang]}
                            <Image src={strelka2} alt="strelka" />
                        </button>
                    </div>
                </>
            </main>
            <Footer data={data.translates} lang={lang} contact={data.contact} />
        </div>
    );
}
