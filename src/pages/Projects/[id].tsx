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
import CustomSwiper from '@/components/News_img_swipper';
import teleqram_icon from '../../../public/svg/teleqram.svg';
import wp_icon from '../../../public/svg/wp.svg';
import link_icon from '../../../public/svg/link.svg';
import ProductSwipper from '@/components/projectsSwipper';
import { useRouter } from 'next/router';
import CustomAbsoluteSwiper from '@/components/fixenimagesSwipper';
export default function Projectsid() {
    const [data, setdata] = useState<any>({});
    const [page, setpage] = useState<number>(1);
    const [category_id, setcategory_id] = useState<number>(0);
    const [lang, setlang] = useState<string>('az');
    const [reset, setreset] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState(true);
    const baseurl = 'https://mts.caratcons.az/';
    const router = useRouter();
    const [currentimgid, setcurrentimgid] = useState<number>(1);
    const [currentsection, setcurrentsection] = useState<any>(null);
    const [isopen, setisopen] = useState<boolean>(false);
    const { id } = router.query;
    useEffect(() => {
        const lng = localStorage.getItem('language') || 'en';
        setlang(lng);
        const cat = localStorage.getItem('category');
        if (cat === 'Təlim') {
            setcategory_id(4);
        }
    }, [reset]);
    useEffect(() => {
        if (id) {
            (async () => {
                try {
                    setIsLoading(true);

                    const res = await fetch(
                        `https://mts.caratcons.az/api/project-detail/${id}`
                    );
                    const newdata = await res.json();
                    const NewDATA = await newdata.data;
                    setdata(NewDATA);
                } catch (error) {
                    console.log(error);
                } finally {
                    setIsLoading(false);
                }
            })();
        }
    }, [id, category_id, page]);

    if (isLoading) {
        return <div></div>;
    }
    const SwippwerData = [
        'uploads/galleries/78195841.webp',
        'uploads/galleries/78195841.webp',
    ];
    // Function to share to Telegram
    const shareToTelegram = () => {
        const shareUrl = window.location.href;
        const message = `Check out this news: {currentNew.title[lang]}`;
        const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(
            shareUrl
        )}&text=${encodeURIComponent(message)}`;
        window.open(telegramUrl, '_blank');
    };

    // Function to share to WhatsApp
    const shareToWhatsApp = () => {
        const shareUrl = window.location.href;
        const message = `Check out this news: {currentNew.title[lang]} - ${shareUrl}`;
        const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
            message
        )}`;
        window.open(whatsappUrl, '_blank');
    };

    // Function to copy the page link
    const copyPageLink = () => {
        const pageUrl = window.location.href;
        navigator.clipboard.writeText(pageUrl).then(
            () => {
                alert('Link copied to clipboard!');
            },
            () => {
                alert('Failed to copy the link');
            }
        );
    };
    console.log(data);
    let status;
    if (!isLoading && data) {
        if (data.project.status === 'Davam edir') {
            switch (lang) {
                case 'az':
                    status = 'Davam edir';
                    break;
                case 'en':
                    status = 'Cantinue';
                    break;
                case 'ru':
                    status = 'Продолжается';
                    break;
            }
        } else {
            switch (lang) {
                case 'az':
                    status = 'Bitib';
                    break;
                case 'en':
                    status = 'Аinished';
                    break;
                case 'ru':
                    status = 'законченный';
                    break;
            }
        }
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
                        <h5>{data.translates?.home[lang]}</h5>
                    </Link>

                    <Image
                        src={strelka}
                        alt="strelka"
                        className=" opacity-60"
                    />
                    <h6 className=" opacity-60">
                        {data.translates?.Projects[lang]}
                    </h6>
                </div>

                <div className=" relative   mt-[28px]">
                    {/* <CustomSwiper data={data.project.images} /> */}
                    <div className="w-full  lg:px-[100px] md:px-[60px] px-[30px] flex flex-row flex-wrap gap-3 justify-center ">
                        {data.project.images.map(
                            (item: any, i: number, list: any) => {
                                console.log('item', item);
                                return (
                                    <img
                                        src={baseurl + item}
                                        alt=""
                                        onClick={() => {
                                            setcurrentimgid(i);
                                            setcurrentsection(list);
                                            setisopen(true);
                                        }}
                                        className="w-[300px] h-[360px] object-cover rounded-lg"
                                    />
                                );
                            }
                        )}
                    </div>
                    <div className=" mt-[24px]  top-0 left-0 lg:px-[100px] md:px-[60px] px-[30px] w-full flex items-center z-10 h-fit lg:justify-start md:justify-start  justify-center">
                        <div className="  w-full bg-[#F5F5F5]  rounded-lg h-[95%]  right-[100px] px-[20px] py-[30px] ">
                            {/* <h6 className="text-[#050B20] font-[700] text-[20px]">
                                {data.translates.ProjectDetails[lang]}
                            </h6> */}
                            <div className="flex lg:flex-row md:flex-row flex-col  gap-3 ">
                                <div className="flex flex-row h-[60px] pr-[40px] gap-3 border-r w-fit   border-opacity-10 border-black  items-center">
                                    <div className=" w-[48px] h-[48px] flex justify-center items-center bg-[#2961B1] rounded-lg">
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="white"
                                                stroke-width="1.5"
                                            />
                                            <path
                                                d="M8.5 12.5L10.5 14.5L15.5 9.5"
                                                stroke="white"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-[12px] font-normal text-opacity-60">
                                            {data.translates.Status[lang]}
                                        </p>
                                        <h6 className="text-[18px] text-nowrap font-medium text-[#2961B1]">
                                            {status}
                                        </h6>
                                    </div>
                                </div>{' '}
                                <div className="flex flex-row h-[60px] w-full gap-3  border-opacity-10 border-black items-center">
                                    <div className=" w-[48px] h-[48px] flex justify-center items-center bg-[#2961B1] rounded-lg">
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V12Z"
                                                stroke="white"
                                                stroke-width="1.5"
                                            />
                                            <path
                                                d="M7 4V2.5"
                                                stroke="white"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                            />
                                            <path
                                                d="M17 4V2.5"
                                                stroke="white"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                            />
                                            <path
                                                d="M2.5 9H21.5"
                                                stroke="white"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                            />
                                        </svg>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-[12px] font-normal text-opacity-60">
                                            {data.translates.Date[lang]}
                                        </p>
                                        <h6 className="text-[18px] font-medium text-[#2961B1]">
                                            {data.project.start_date}
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className="text-[48px] font-semibold text-[#050B20] mb-[48px] mt-[28px] lg:ml-[100px] md:ml-[60px] ml-[30px]">
                    {data.project.title[lang]}
                </h1>
                <div
                    className="text-[16px] opacity-80  lg:px-[100px] md:px-[60px] px-[30px]"
                    dangerouslySetInnerHTML={{
                        __html: data.project.description[lang],
                    }}
                ></div>
                <div className="flex flex-col lg:pl-[100px] md:pl-[60px] pl-[30px] mb-[100px]">
                    <p className="mt-12 mb-4 text-[12px] font-normal">
                        Paylaş:
                    </p>
                    <div className="flex flex-row gap-5">
                        <div
                            className="w-10 h-10 rounded-full flex justify-center items-center bg-[#E5F7FF] cursor-pointer"
                            onClick={shareToTelegram}
                        >
                            <Image src={teleqram_icon} alt="teleqram_icon" />
                        </div>
                        <div
                            className="w-10 h-10 rounded-full flex justify-center items-center bg-[#ECFFF5] cursor-pointer"
                            onClick={shareToWhatsApp}
                        >
                            <Image src={wp_icon} alt="wp" />
                        </div>
                        <div
                            className="w-10 h-10 rounded-full flex justify-center items-center bg-[#F5F5F5] cursor-pointer"
                            onClick={copyPageLink}
                        >
                            <Image src={link_icon} alt="copy_link" />
                        </div>
                    </div>
                </div>
                <div className="pb-[60px] bg-[#F6F7F8] pt-[60px] mb-[100px] lg:pl-[100px] md:pl-[60px] pl-[30px]">
                    <h2 className="text-[36px] font-semibold text-[#050B20] mb-[48px] mt-[28px] ">
                        {data.translates.Other_Projects[lang]}
                    </h2>
                    <ProductSwipper data={data.other_projects} />
                </div>
            </main>
            <Footer data={data.translates} lang={lang} contact={data.contact} />
            <CustomAbsoluteSwiper
                onclose={() => setisopen(false)}
                images={currentsection}
                isOpen={isopen}
                currentIndex={currentimgid}
            />
        </div>
    );
}
