import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import strelka from '../../../public/svg/strelka_black.svg';
import Pagination from '@/components/DinamicPagination';
import Link from 'next/link';

export default function MediaPage() {
    const [lang, setLang] = useState<string>('az');
    const [reset, setReset] = useState<boolean>(false);
    const [data, setdata] = useState<any>();
    const [page, setpage] = useState<number>(1);
    const baseurl = 'https://mts.caratcons.az/';

    // Check if videos exist to avoid runtime errors
    const [mainvid, setMainVid] = useState<string>(
        data?.videos?.[0]?.url || ''
    );

    useEffect(() => {
        const lng = localStorage.getItem('language') || 'en';
        setLang(lng);
    }, [reset]);
    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(
                    `https://mts.caratcons.az/api/video?page=${page}`
                );
                const apiData = await res.json();
                const data = apiData.data;
                setdata(data);
                setMainVid(data?.videos?.[0]?.url);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);
    // Check if the data is available before rendering components
    if (!data) {
        return <div></div>;
    }

    return (
        <div>
            <Header
                setReset={() => setReset((prev) => !prev)}
                active={6}
                data={data.translates}
            />
            <div className="bg-[#FBFBFB] h-[90px] w-full "></div>

            <main>
                {/* Breadcrumb and title */}
                <div className="flex flex-row text-[18px] gap-3 mt-[41px] lg:ml-[100px] md:ml-[60px] ml-[30px]">
                    <Link href={`/`}>
                        <h5>{data?.translates?.home[lang]}</h5>
                    </Link>

                    <Image
                        src={strelka}
                        alt="strelka"
                        className=" opacity-60"
                    />
                    <h6 className=" opacity-60">
                        {data?.translates?.video[lang]}
                    </h6>
                </div>
                <h1 className="text-[48px] font-semibold text-[#050B20] mb-[48px] mt-[28px] lg:ml-[100px] md:ml-[60px] ml-[30px]">
                    {data?.translates?.video[lang]}
                </h1>

                {/* Main Video Section */}
                <div className="lg:px-[100px]  md:px-[60px] px-[30px]  flex flex-col ">
                    <video
                        controls={true}
                        width="600"
                        muted
                        className="w-full rounded-lg max-h-[500px] "
                        src={`${baseurl}${mainvid}`}
                        disablePictureInPicture
                    />

                    {/* Video Gallery */}
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-5 mb-10">
                        {data?.videos?.map((video: any, index: number) => (
                            <div
                                key={index}
                                className="aspect-square cursor-pointer relative  flex justify-center items-center"
                                onClick={() => {
                                    setMainVid(video.url);
                                    console.log('slsslslsls');
                                }}
                            >
                                <video
                                    controls={false}
                                    width="600"
                                    muted
                                    loop
                                    className="w-full rounded-lg h-full object-fill"
                                >
                                    <source
                                        src={`${baseurl}${video.url}`}
                                        type="video/mp4"
                                    />
                                </video>
                                <img
                                    src="/svg/play.svg"
                                    className=" !absolute  w-[60px] h-[60px]"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <Pagination
                        totalPages={data.total_pages}
                        setPage={setpage}
                        currentPage={page}
                    />
                </div>
            </main>

            {/* Footer */}
            <Footer
                data={data?.translates}
                lang={lang}
                contact={data?.contact}
            />
        </div>
    );
}

// Fetch data server-side
// export async function getServerSideProps() {
//     const res = await fetch('https://mts.caratcons.az/api/video');
//     const data = await res.json();

//     // Pass data to the page via props
//     return { props: { apiData: data } };
// }
