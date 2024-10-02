import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import strelka from '../../../public/svg/strelka_black.svg';
import ship from '../../../public/images/ship.png';
import grid2 from '../../../public/svg/grid2.svg';
import grid4 from '../../../public/svg/grid4.svg';
import { useAppDispatch } from '@/redux/store';
import { useSelector } from 'react-redux';

export default function id({ apiData }: { apiData: any }) {
    const [grid_cols, setgrid_cols] = useState<2 | 4>(2);
    const [reset, setreset] = useState<boolean>(false);
    const [lang, setlang] = useState<string>('az');
    const baseurl = 'http://mts.caratcons.az/';
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
    const dispatch = useAppDispatch();
    const blog = useSelector((state: any) => state.counter.blog);
    console.log(blog.images);

    return (
        <div>
            <Header
                setReset={() => setreset((prew) => !prew)}
                active={6}
                data={data.translates}
            />
            <div className="bg-[#FBFBFB] h-[90px] w-full "></div>
            <main>
                <div className="flex flex-row lg:text-[18px] md:text-[18px] text-[12px] items-center gap-3 mt-[41px]  lg:ml-[100px] md:ml-[60px] ml-[30px]">
                    <h5>{data.translates.home[lang]}</h5>
                    <Image
                        src={strelka}
                        alt="strelka"
                        className=" opacity-60"
                    />
                    <h5>{data.translates.gallery[lang]}</h5>
                    <Image
                        src={strelka}
                        alt="strelka"
                        className=" opacity-60"
                    />
                    <h6 className=" opacity-60">{blog.title[lang]}</h6>
                </div>
                <h1 className="lg:text-[48px] md:text-[36px] text-[24px] font-semibold text-[#050B20] mb-[48px] mt-[28px] lg:ml-[100px] md:ml-[60px] ml-[30px]">
                    {data.translates.gallery[lang]}
                </h1>
                <div className="lg:px-[100px] md:px-[60px] px-[30px]">
                    <div className="w-full lg:flex  hidden   justify-end">
                        <div className="flex flex-row gap-3">
                            <Image
                                className={
                                    grid_cols === 2
                                        ? ' border-b border-black '
                                        : ''
                                }
                                src={grid2}
                                alt="grid2"
                                onClick={() => setgrid_cols(2)}
                            />
                            <Image
                                className={
                                    grid_cols === 4
                                        ? ' border-b border-black '
                                        : ''
                                }
                                src={grid4}
                                alt="grid4"
                                onClick={() => setgrid_cols(4)}
                            />
                        </div>
                    </div>
                    <div
                        className={
                            grid_cols === 2
                                ? ` grid flex-row justify-between w-full lg:grid-cols-2 md:grid-cols-2 grid-cols-1  gap-5 mt-7 mb-[100px] `
                                : ` grid flex-row justify-between w-full grid-cols-4 gap-5 mt-7 mb-[100px] `
                        }
                    >
                        {blog.images.map((item: any) => (
                            <div
                                className={
                                    grid_cols === 4
                                        ? ''
                                        : 'w-full h-[310px] overflow-hidden rounded-lg '
                                }
                            >
                                <img
                                    src={`http://mts.caratcons.az/${item}`}
                                    alt="ship"
                                    className={
                                        grid_cols === 4
                                            ? 'rounded-lg aspect-square'
                                            : 'w-full h-full rounded-lg object-fill'
                                    }
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer data={data.translates} contact={data.contact} lang={lang} />
        </div>
    );
}

export async function getServerSideProps() {
    const res = await fetch('http://mts.caratcons.az/api/home');
    const data = await res.json();
    console.log(data);

    // Pass data to the page via props
    return { props: { apiData: data } };
}
