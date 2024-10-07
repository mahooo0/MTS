import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React, { useEffect, useState } from 'react';
import strelka from '../../../../public/svg/strelka_black.svg';
import strelka1 from '../../../../public/svg/strelka1.svg';
import calendar from '../../../../public/svg/calendar.svg';
import location from '../../../../public/svg/Locationn.svg';
import aye from '../../../../public/svg/aye.svg';
import Image from 'next/image';
import { Blue_to_blue } from '@/components/btns';
import Request_blanck from '@/components/Request_blanck';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/router';

export default function vakancyid() {
    const [lang, setlang] = useState<string>('az');
    const [reset, setreset] = useState<boolean>(false);
    const [data, setdata] = useState<any>();

    const baseurl = 'https://mts.caratcons.az/';
    useEffect(() => {
        const lng = localStorage.getItem('language') || 'en';
        setlang(lng);
    }, [reset]);
    const router = useRouter();
    const { id } = router.query;
    useEffect(() => {
        (async () => {
            if (id) {
                try {
                    const res = await fetch(
                        `https://mts.caratcons.az/api/vacancy-detail/${id}`
                    );
                    const data = await res.json();
                    setdata(data.data);
                } catch (error) {
                    console.log(error);
                }
            }
        })();
    }, [id]);

    if (!data) {
        return <></>;
    }
    console.log(data);
    const CurrenVacansy = data.vacancy;
    return (
        <div className="bg-white">
            <Header
                setReset={() => setreset((prew) => !prew)}
                active={7}
                data={data.translates}
            />
            <div className="bg-[#FBFBFB] h-[90px] w-full "></div>
            <main className="lg:px-[100px] md:px-[60px] px-[30px]">
                <div className="flex flex-row flex-wrap text-[18px] gap-3 mt-[41px] ">
                    <h5>{data.translates.home[lang]}</h5>
                    <Image
                        src={strelka}
                        alt="strelka"
                        className=" opacity-60"
                    />
                    <h5>{data.translates.career[lang]}</h5>
                    <Image
                        src={strelka}
                        alt="strelka"
                        className=" opacity-60"
                    />
                    <h6 className=" opacity-60">{CurrenVacansy.title[lang]}</h6>
                </div>
                <div className="flex lg:flex-row flex-col  lg:justify-between justify-start w-full flex-wrap lg:h-[204px] h-fit px-10 lg:p-0 p-10 bg-[#F7F8FA] rounded-lg lg:items-center items-start lg:px-10 mt-7">
                    <div className="flex flex-col">
                        <h2 className="lg:text-[32px] md:text-[28px] text-[20px] font-semibold text-[#050B20] lg:w-[900px] w-fit">
                            {CurrenVacansy.title[lang]}
                        </h2>
                        <div className="flex lg:flex-row md:flex-row flex-col mt-5 gap-5">
                            <div className="flex flex-row gap-2">
                                <Image src={calendar} alt="calendar" />
                                <p>
                                    {CurrenVacansy.start_date}-
                                    {CurrenVacansy.start_date}
                                </p>
                            </div>
                            <div className="flex flex-row gap-2">
                                <Image src={aye} alt="calendar" />
                                <p>200 baxış</p>
                            </div>
                            <div className="flex flex-row gap-2">
                                <Image src={location} alt="calendar" />
                                <p>{CurrenVacansy.address[lang]}</p>
                            </div>
                        </div>
                    </div>

                    {/* <Blue_to_blue text="Muraciet et" action={() => {}} /> */}
                </div>
                <div className="mt-5 mb-[100px]">
                    <Request_blanck data={CurrenVacansy} />
                </div>
            </main>
            <Footer data={data.translates} lang={lang} contact={data.contact} />
            <ToastContainer />
        </div>
    );
}
