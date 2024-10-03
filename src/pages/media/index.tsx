import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import strelka from '../../../public/svg/strelka_black.svg';
import Galery_Img from '@/components/Galery_Img';
import axios from 'axios';
import Pagination from '../../components/DinamicPagination';

export default function media() {
    const [data, setdata] = useState<any>({});
    const [page, setpage] = useState<number>(1);
    const [category_id, setcategory_id] = useState<number>(1);
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
                    `https://mts.caratcons.az/api/gallery?page=${page}&category_id=${category_id}`
                );
                const newdata = await res.json();
                // const newdata = await axios.get(
                //     `https://mts.caratcons.az/api/gallery?page=${page}&category_id=${category_id}`
                // );
                // console.log(newdata.data.data.categories[0]?.name['az'], 'data my');
                console.log('newdata', newdata);
                console.log('newdata.data', newdata.data);
                console.log('newdata.data.translates', newdata.data.translates);
                console.log(
                    'newdata.data.translates.home',
                    newdata.data.translates.home
                );
                const NewDATA = await newdata.data;
                setdata(NewDATA);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        })();
    }, [category_id, page]);

    if (isLoading) {
        return <div></div>;
    }
    return (
        <div>
            <Header
                setReset={() => setreset((prew) => !prew)}
                active={6}
                data={data.translates}
            />

            <div className=" h-[90px] w-full "></div>
            <main>
                <div className="flex flex-row text-[18px] gap-3 mt-[41px]  lg:ml-[100px] md:ml-[60px] ml-[30px]">
                    <h5>{data.translates.home[lang]}</h5>

                    <Image
                        src={strelka}
                        alt="strelka"
                        className=" opacity-60"
                    />
                    <h6 className=" opacity-60">
                        {data.translates.gallery[lang]}
                    </h6>
                </div>
                <h1 className="text-[48px] font-semibold text-[#050B20] mb-[48px] mt-[28px] lg:ml-[100px] md:ml-[60px] ml-[30px]">
                    {data.translates.gallery[lang]}
                </h1>
                <div className="mt-[40px] flex justify-center  bg-[#F2F7FF]">
                    <div className="w-[581px] h-[187px] flex flex-col justify-center">
                        <h1 className="text-[32px] font-semibold text-center">
                            {data.translates.Categories[lang]}
                        </h1>
                        <div className="flex flex-row flex-wrap  lg:justify-between  justify-center gap-4 mt-10">
                            {data.categories.map((item: any) => (
                                <button
                                    onClick={() => setcategory_id(item.id)}
                                    className={`px-6 py-3 rounded-lg border border-black border-opacity-10 ${
                                        item.id === category_id
                                            ? 'bg-[#2961B1] text-white'
                                            : ''
                                    }  hover:border-none`}
                                >
                                    {item.name[lang]}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="lg:px-[100px] md:px-[60px] px-[30px]  mt-10 grid flex-row lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 justify-between gap-5 mb-10">
                        {data.galleries.map((item: any) => (
                            <Galery_Img
                                data={item}
                                title={item.title[lang]}
                                image={`${baseurl}${item.image}`}
                                category={item.category.name[lang]}
                                slug={item.slug[lang]}
                            />
                        ))}
                    </div>
                </div>

                {/* <div className="flex mb-[100px] justify-center">
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
                        <Image
                            src={strelka}
                            alt="strelka"
                            onClick={() => setpage((prew) => prew + 1)}
                        />
                    </div>
                </div> */}
                <Pagination
                    totalPages={data.total_pages}
                    currentPage={page}
                    setPage={setpage}
                />
            </main>
            <Footer data={data.translates} lang={lang} contact={data.contact} />
        </div>
    );
}
