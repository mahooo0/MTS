import strelka2 from '../../../public/svg/strelka2.svg';

import CAnteiner from '../../../public/images/container.png';
import Rounded_Swipper from '@/components/Rounded_Swipper';
import Request_blanck from '@/components/Request_blanck';
import { useRouter } from 'next/router';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import strelka from '../../../public/svg/strelka_black.svg';
import NewsSwiper from '@/components/news_swipper';
import News_card from '@/components/news_card';
import Pagination from '../../components/DinamicPagination';
import { useDispatch } from 'react-redux';
import { setCurrenVacansy } from '@/redux/slices/PassSlice';
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
        return <div>loading..</div>;
    }
    return (
        <div className="max-w-[1600px]">
            <Header
                setReset={() => setreset((prew) => !prew)}
                active={6}
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
                                className="px-4 py-2 rounded-lg border border-black border-opacity-10 bg-[#2961B1] text-white hover:border-none"
                            >
                                {data.translates.career[lang]}
                            </button>
                            <button
                                onClick={() => {
                                    router.push('/karyera/cours');
                                }}
                                className="px-4 py-2 rounded-lg border border-black border-opacity-10 hover:bg-[#2961B1] hover:text-white hover:border-none"
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

                <div className="lg:px-[100px] md:px-[60px] px-[30px]">
                    <h1 className="text-[36px] font-semibold text-center mt-[100px]">
                        {data.translates.career[lang]}
                    </h1>
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 justify-center  gap-5 mt-10">
                        {data.vacancies.map((item: any) => (
                            <div
                                onClick={() => {
                                    dispatch(setCurrenVacansy(item));
                                    router.push(`/karyera/${item.id}`);
                                }}
                                className="w-[295px] h-[195px] p-5 flex flex-col justify-between bg-[#F7F8FA] rounded-lg"
                            >
                                <h6 className="text-[18px] font-semibold w-[255px] h-fit whitespace-normal">
                                    {item.title[lang]}
                                </h6>
                                <div className="flex flex-row justify-between items-center">
                                    <p className="text-[14px] font-normal opacity-70 ">
                                        {item.start_date}
                                    </p>
                                    <div className="bg-white w-8 h-8 rounded-full flex justify-center items-center">
                                        <Image
                                            src={strelka2}
                                            alt="strelka 2"
                                            width={16}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Pagination
                        totalPages={data.total_pages}
                        setPage={setpage}
                        currentPage={page}
                    />
                    {/* <div className="flex mb-[100px] justify-center mt-10">
                        <div className="flex flex-row gap-5">
                            <Image
                                src={strelka}
                                alt="strelka"
                                style={{ transform: 'rotate(180deg)' }}
                            />
                            <div className="flex flex-row gap-3">
                                <div className="w-10 h-10 rounded-full flex justify-center items-center border border-black border-opacity-10">
                                    1
                                </div>
                                <div className="w-10 h-10 rounded-full flex justify-center items-center text-[#2961B1] border border-[#2961B1] ">
                                    2
                                </div>
                                <div className="w-10 h-10 rounded-full flex justify-center items-center border border-black border-opacity-10">
                                    3
                                </div>
                            </div>
                            <Image src={strelka} alt="strelka" />
                        </div>
                    </div> */}
                </div>
            </main>
            {/* <Footer data={data.translates} lang={lang} contact={data.contact} /> */}
        </div>
    );
}
// export async function getServerSideProps() {
//     const res = await fetch('https://mts.caratcons.az/api/blog?page=1');
//     const data = await res.json();
//     console.log(data);

//     // Pass data to the page via props
//     return { props: { apiData: data } };
// }
