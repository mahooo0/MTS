import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React, { useEffect, useState } from 'react';
import strelka from '../../../public/svg/strelka_black.svg';
import strelka1 from '../../../public/svg/strelka1.svg';
import calendar from '../../../public/svg/calendar.svg';
import location from '../../../public/svg/Locationn.svg';
import aye from '../../../public/svg/aye.svg';
import Image from 'next/image';
import { useRouter } from 'next/router';
import teleqram_icon from '../../../public/svg/teleqram.svg';
import wp_icon from '../../../public/svg/wp.svg';
import link_icon from '../../../public/svg/link.svg';
import Link from 'next/link';

export default function VakancyId() {
    const [lang, setLang] = useState<string>('az');
    const [reset, setReset] = useState<boolean>(false);
    const [data, setData] = useState<any>();

    const baseurl = 'https://mts.caratcons.az/';
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        const lng = localStorage.getItem('language') || 'en';
        setLang(lng);
    }, [reset]);

    useEffect(() => {
        if (id) {
            (async () => {
                try {
                    const res = await fetch(
                        `https://mts.caratcons.az/api/vacancy-detail/${id}`
                    );
                    await fetch(
                        `https://mts.caratcons.az/api/vacancy/change-view/${id}`
                    );
                    const data = await res.json();
                    setData(data.data);
                } catch (error) {
                    console.error(error);
                }
            })();
        }
    }, [id]);

    if (!data) {
        return <></>;
    }

    const CurrenVacansy = data.vacancy;

    // Function to share to Telegram
    const shareToTelegram = () => {
        const shareUrl = window.location.href;
        const message = `Check out this vacancy: ${CurrenVacansy.title[lang]}`;
        const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(
            shareUrl
        )}&text=${encodeURIComponent(message)}`;
        window.open(telegramUrl, '_blank');
    };

    // Function to share to WhatsApp
    const shareToWhatsApp = () => {
        const shareUrl = window.location.href;
        const message = `Check out this vacancy: ${CurrenVacansy.title[lang]} - ${shareUrl}`;
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

    return (
        <div className="bg-white">
            <Header
                setReset={() => setReset((prev) => !prev)}
                active={7}
                data={data.translates}
            />
            <div className="bg-[#FBFBFB] h-[90px] w-full "></div>
            <main className="lg:px-[100px] md:px-[60px] px-[30px] mb-[40px]">
                {/* Breadcrumb */}
                <div className="flex flex-row flex-wrap text-[18px] gap-3 mt-[41px] ">
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
                    <h6 className=" opacity-60">{CurrenVacansy.title[lang]}</h6>
                </div>

                {/* Vacancy Info */}
                <div className="flex lg:flex-row flex-col lg:justify-between justify-start w-full flex-wrap lg:h-[204px] h-fit px-10 lg:p-0 p-10 bg-[#F7F8FA] rounded-lg lg:items-center items-start lg:px-10 mt-7">
                    <div className="flex flex-col">
                        <h2 className="lg:text-[32px] md:text-[28px] text-[20px] font-semibold text-[#050B20] lg:w-[900px] w-fit">
                            {CurrenVacansy.title[lang]}
                        </h2>
                        <div className="flex lg:flex-row md:flex-col flex-col mt-5 gap-5 ">
                            <div className="flex flex-row gap-2">
                                <Image src={calendar} alt="calendar" />
                                <p>
                                    {CurrenVacansy.start_date}-
                                    {CurrenVacansy.start_date}
                                </p>
                            </div>
                            <div className="flex flex-row gap-2">
                                <Image src={aye} alt="views" />
                                <p>{CurrenVacansy.view}</p>
                            </div>
                            <div className="flex flex-row gap-2">
                                <Image src={location} alt="location" />
                                <p>{CurrenVacansy.address[lang]}</p>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={() =>
                            router.push(
                                `/karyera/vakansiya/${CurrenVacansy.id}`
                            )
                        }
                        className="flex flex-row gap-2 items-center lg:mt-0 mt-5 w-[200px] h-[50px] bg-[#2961B1] hover:bg-[#184C97] text-white text-[20px] font-[500px] justify-center rounded-lg "
                    >
                        {data.translates.apply_vacansy[lang]}
                        <Image src={strelka1} alt="strelka" />
                    </button>
                </div>

                {/* Vacancy Responsibility */}
                <div
                    className="w-full flex-wrap h-fit px-10 py-5 bg-[#F7F8FA] rounded-lg lg:items-center items-start lg:px-10 mt-7"
                    dangerouslySetInnerHTML={{
                        __html: CurrenVacansy.responsibility[lang],
                    }}
                />

                {/* Social Media Share Icons */}
                <div className="flex flex-col">
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
            </main>

            <Footer data={data.translates} lang={lang} contact={data.contact} />
        </div>
    );
}
