import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import strelka from '../../../public/svg/strelka_black.svg';

export default function MediaPage({ apiData }: { apiData: any }) {
    const [lang, setLang] = useState<string>('az');
    const [reset, setReset] = useState<boolean>(false);
    const data = apiData.data;
    const baseurl = 'https://mts.caratcons.az/';

    // Check if videos exist to avoid runtime errors
    const [mainvid, setMainVid] = useState<string>(
        data?.videos?.[0]?.url || ''
    );

    useEffect(() => {
        const lng = localStorage.getItem('language') || 'en';
        setLang(lng);
    }, [reset]);

    // Check if the data is available before rendering components
    if (!data) {
        return <div></div>;
    }

    React.useEffect(() => {
        console.log(`${baseurl}${mainvid}`);
    }, [baseurl, mainvid]);

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
                    <h5>{data?.translates?.home[lang]}</h5>
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
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-5">
                        {data?.videos?.map((video: any, index: number) => (
                            <div
                                key={index}
                                className="aspect-square cursor-pointer"
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
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center mt-[20px] mb-[100px]">
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
                    </div>
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
export async function getServerSideProps() {
    const res = await fetch('https://mts.caratcons.az/api/video');
    const data = await res.json();

    // Pass data to the page via props
    return { props: { apiData: data } };
}
