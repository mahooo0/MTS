import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import strelka from '../../../public/svg/strelka_black.svg';
import Galery_Img from '@/components/Galery_Img';
import axios from 'axios';
import Pagination from '../../components/DinamicPagination';
import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';

export default function Projects() {
    const [data, setdata] = useState<any>({});
    const [Projects, setProjects] = useState<any>({});
    const [page, setpage] = useState<number>(1);
    const [category_id, setcategory_id] = useState<number>(0);
    const [lang, setlang] = useState<string>('az');
    const [reset, setreset] = useState<boolean>(false);
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
                    `https://mts.caratcons.az/api/projects?page=${page}`
                );
                const newdata = await res.json();
                const NewDATA = await newdata.data;
                setdata(NewDATA);
                setProjects(NewDATA.projects);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        })();
    }, [page]);

    if (isLoading) {
        return <div></div>;
    }
    return (
        <div className="bg-white">
            <Header
                setReset={() => setreset((prew) => !prew)}
                active={8}
                data={data.translates}
            />

            <div className=" h-[90px] w-full "></div>
            <main>
                <div className="flex flex-row text-[18px] gap-3 mt-[41px]  lg:ml-[100px] md:ml-[60px] ml-[30px]">
                    <Link href={'/'}>
                        <h5>{data.translates.home[lang]}</h5>
                    </Link>

                    <Image
                        src={strelka}
                        alt="strelka"
                        className=" opacity-60"
                    />
                    <h6 className=" opacity-60">
                        {data.translates.Projects[lang]}
                    </h6>
                </div>
                <h1 className="text-[48px] font-semibold text-[#050B20] mb-[48px] mt-[28px] lg:ml-[100px] md:ml-[60px] ml-[30px]">
                    {data.translates.Projects[lang]}
                </h1>
                <div className="mt-[40px] flex justify-center  bg-[#ffffff]">
                    <div className="w-[581px] min-h-[187px] flex flex-col justify-center mb-5">
                        {/* <h1 className="text-[32px] font-semibold text-center">
                            {data.translates.Categories[lang]}
                        </h1> */}
                        <div className="flex flex-row flex-wrap   justify-center gap-4 mt-10 ">
                            <button
                                onClick={() => {
                                    setProjects(data.projects);
                                    setcategory_id(0);
                                }}
                                className={`px-6 py-3 rounded-lg border border-black border-opacity-10 ${
                                    0 === category_id
                                        ? 'bg-[#2961B1] text-white'
                                        : ''
                                }  hover:border-none`}
                            >
                                {data.translates.all_projects[lang]}
                            </button>
                            <button
                                onClick={() => {
                                    setcategory_id(1);

                                    setProjects(
                                        data.projects.filter(
                                            (item: any) =>
                                                item.status === 'Davam edir'
                                        )
                                    );
                                }}
                                className={`px-6 py-3 rounded-lg border border-black border-opacity-10 ${
                                    1 === category_id
                                        ? 'bg-[#2961B1] text-white'
                                        : ''
                                }  hover:border-none`}
                            >
                                {data.translates.continued_projects[lang]}
                            </button>
                            <button
                                onClick={() => {
                                    setcategory_id(2);

                                    setProjects(
                                        data.projects.filter(
                                            (item: any) =>
                                                item.status === 'Bitib'
                                        )
                                    );
                                }}
                                className={`px-6 py-3 rounded-lg border border-black border-opacity-10 ${
                                    2 === category_id
                                        ? 'bg-[#2961B1] text-white'
                                        : ''
                                }  hover:border-none`}
                            >
                                {data.translates.finished_projects[lang]}
                            </button>
                            {/* {[...data.categories].reverse().map((item: any) => (
                                <button
                                    key={item.id} // It's important to have a unique key for React lists
                                    onClick={() => setcategory_id(item.id)}
                                    className={`px-6 py-3 rounded-lg border border-black border-opacity-10 ${
                                        item.id === category_id
                                            ? 'bg-[#2961B1] text-white'
                                            : ''
                                    }  hover:border-none`}
                                >
                                    {item.name[lang]}
                                </button>
                            ))} */}
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="lg:px-[100px] lg:w-full md:w-full w-fit md:px-[60px] px-[30px] place- mt-10 grid flex-row lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 justify-between gap-5 mb-10">
                        {Projects.map((item: any) => (
                            <ProjectCard data={item} lang={lang} />
                        ))}
                    </div>
                </div>

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
