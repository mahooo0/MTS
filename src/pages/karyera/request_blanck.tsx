import Header from '@/components/Header';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import strelka from '../../../public/svg/strelka_black.svg';
import strelka2 from '../../../public/svg/strelka2.svg';
import Footer from '@/components/Footer';
import CAnteiner from '../../../public/images/container.png';
import Rounded_Swipper from '@/components/Rounded_Swipper2';
import Request_blanck from '@/components/Request_blanck';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import Request_blanck2 from '@/components/Request_blanck2';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function news() {
    const [lang, setlang] = useState<string>('az');
    const [reset, setreset] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState(true);
    const [data, setdata] = useState<any>({});
    const [page, setpage] = useState<number>(1);
    const router = useRouter();
    const baseurl = 'http://mts.caratcons.az/';
    useEffect(() => {
        const lng = localStorage.getItem('language') || 'en';
        setlang(lng);
    }, [reset]);
    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true);
                const res = await fetch(
                    `http://mts.caratcons.az/api/vacancy?page=${page}`
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
    console.log(data.vacancy_features);

    if (isLoading) {
        return <div>loading..</div>;
    }
    return (
        <div className="max-w-[1600px]">
            <Header
                setReset={() => setreset((prew) => !prew)}
                active={7}
                data={data.translates}
            />
            <div className="bg-[#FBFBFB] h-[90px] w-full "></div>

            <main className="">
                <div className="flex flex-row lg:px-[100px] md:px-[60px] px-[30px]">
                    <div className="flex flex-col lg:w-1/2 w-full">
                        <div className="flex flex-row text-[18px] gap-3 mt-[41px] ">
                            <h5>{data.translates.home[lang]}</h5>
                            <Image
                                src={strelka}
                                alt="strelka"
                                className=" opacity-60"
                            />
                            <h6 className=" opacity-60">
                                {data.translates.career[lang]}
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
                                className="px-4 py-2 rounded-lg border border-black  hover:bg-[#2961B1] hover:text-white border-opacity-10 hover:border-none"
                            >
                                {data.translates.training[lang]}
                            </button>
                            <button
                                onClick={() => {
                                    router.push('/karyera/request_blanck');
                                }}
                                className="px-4 py-2 rounded-lg border border-black border-opacity-10  bg-[#2961B1] text-white  hover:border-none"
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

                <div className="lg:px-[100px] md:px-[60px] px-[30px] mt-[100px] mb-[100px]">
                    <div className="flex flex-row">
                        <div className="w-2/5 lg:block hidden h-[600px]">
                            <img
                                src={`${baseurl}${data.work_process.image}`}
                                alt="container"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                        <div className="flex flex-col py-[74px] pl-[24px]">
                            <h4 className="text-[40px] font-semibold">
                                {data.work_process.title[lang]}
                            </h4>
                            <div
                                className="text-[18px] font-medium opacity-50  mt-5 lg:w-[712px] w-fit"
                                dangerouslySetInnerHTML={{
                                    __html: data.work_process.description[lang],
                                }}
                            />

                            <div className="mt-10 flex flex-col gap-6">
                                {data.vacancy_features.map((item: any) => (
                                    <div className=" flex flex-row gap-5 ">
                                        <div
                                            style={{ background: item.color }}
                                            className={`w-12 h-12  flex justify-center items-center rounded-lg`}
                                        >
                                            <img
                                                src={`${baseurl}${item.icon}`}
                                                alt="strelka2"
                                            />
                                        </div>
                                        <div className="flex flex-col lg:w-[600px] w-fit text-[#000000] gap-[14px]">
                                            <h5 className="text-[18px] font-medium">
                                                {item.title[lang]}
                                            </h5>
                                            <p className="text-[16px] font-normal opacity-50">
                                                {item.text[lang]}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className=" text-center bg-[#F7F8FA] rounded-lg mt-[100px]">
                        <h1 className="text-[36px] font-semibold pt-[60px] ">
                            Müraciət blankı
                        </h1>
                        <Request_blanck2 />
                    </div>
                </div>
            </main>
            <Footer data={data.translates} lang={lang} contact={data.contact} />
            <ToastContainer />
        </div>
    );
}
