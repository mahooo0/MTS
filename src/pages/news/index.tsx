import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import strelka from '../../../public/svg/strelka_black.svg';
import NewsSwiper from '@/components/news_swipper';
import News_card from '@/components/news_card';
import Pagination from '../../components/DinamicPagination';
export default function news() {
    const [lang, setlang] = useState<string>('az');
    const [reset, setreset] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState(true);
    const [data, setdata] = useState<any>({});
    const [page, setpage] = useState<number>(1);

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
                    `http://mts.caratcons.az/api/blog?page=${page}`
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
    // const lang = localStorage.getItem('language') || 'en';
    if (isLoading) {
        return <div>loading..</div>;
    }
    return (
        <div className="max-w-[1600px]">
            {/* <Header active={6} /> */}
            <Header
                setReset={() => setreset((prew) => !prew)}
                active={6}
                data={data.translates}
            />
            <div className="bg-[#FBFBFB] h-[90px] w-full "></div>
            <main>
                <div className="flex flex-row text-[18px] gap-3 mt-[41px]  lg:ml-[100px] md:ml-[60px] ml-[30px] ">
                    <h5>{data.translates.home[lang]}</h5>
                    <Image
                        src={strelka}
                        alt="strelka"
                        className=" opacity-60"
                    />
                    <h6 className=" opacity-60">
                        {data.translates.news[lang]}
                    </h6>
                </div>
                <h1 className=" lg:text-[48px] md:text-[36px] text-[24px] font-semibold text-[#050B20] mb-[48px] mt-[28px] lg:ml-[100px] md:ml-[60px] ml-[30px]">
                    {data.translates.news[lang]}
                </h1>
                <NewsSwiper data={data.latest_blogs} lang={lang} />
                <div className="mt-[82px] flex flex-col lg:items-start items-center ">
                    <h1 className="lg:text-[48px] md:text-[36px] text-[24px]  font-semibold text-[#050B20] mb-[48px]  lg:ml-[100px] md:ml-[60px] ml-[0px]">
                        {data.translates.other_news[lang]}
                    </h1>
                    <div className="w-full flex flex-col justify-center items-center">
                        <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:px-[100px] md:px-[60px] px-[30px] justify-between gap-5 mb-10">
                            {data.other_blogs.map((item: any) => (
                                <News_card
                                    data={item}
                                    lang={lang}
                                    translates={data.translates}
                                />
                            ))}{' '}
                        </div>
                        <Pagination
                            totalPages={data.total_pages}
                            currentPage={page}
                            setPage={setpage}
                        />
                    </div>
                </div>
            </main>
            <Footer data={data.translates} lang={lang} contact={data.contact} />
        </div>
    );
}
// export async function getServerSideProps() {
//     const res = await fetch('http://mts.caratcons.az/api/blog?page=1');
//     const data = await res.json();
//     console.log(data);

//     // Pass data to the page via props
//     return { props: { apiData: data } };
// }
