import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React, { useEffect, useState } from 'react';
import strelka from '../../../public/svg/strelka_black.svg';
import strelka1 from '../../../public/svg/strelka1.svg';
import calendar from '../../../public/svg/calendar.svg';
import location from '../../../public/svg/Locationn.svg';
import aye from '../../../public/svg/aye.svg';
import Image from 'next/image';
import { Blue_to_blue } from '@/components/btns';
import Request_blanck from '@/components/Request_blanck';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { GetServerSideProps } from 'next';

export default function vakancyid() {
    const [lang, setlang] = useState<string>('az');
    const [reset, setreset] = useState<boolean>(false);
    const [data, setdata] = useState<any>();

    const baseurl = 'https://mts.caratcons.az/';
    useEffect(() => {
        const lng = localStorage.getItem('language') || 'en';
        setlang(lng);
    }, [reset]);
    // const CurrenVacansy = useSelector(
    //     (state: any) => state.counter.CurrenVacansy
    // );
    // console.log('currentNew', CurrenVacansy);
    const router = useRouter();
    const { id } = router.query;
    useEffect(() => {
        (async () => {
            if (id) {
                try {
                    const res = await fetch(
                        `https://mts.caratcons.az/api/vacancy-detail/${id}`
                    );
                    await fetch(
                        `https://mts.caratcons.az/api/vacancy/change-view/${id}`
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
            <main className="lg:px-[100px] md:px-[60px] px-[30px] mb-[40px]">
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
                                <p>{CurrenVacansy.view}</p>
                            </div>
                            <div className="flex flex-row gap-2">
                                <Image src={location} alt="calendar" />
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
                        className="flex flex-row text-nowrap gap-2 items-center lg:mt-0 mt-5 w-[200px] h-[50px] bg-[#2961B1] hover:bg-[#184C97]  text-white text-[20px] font-[500px] justify-center rounded-lg "
                    >
                        {data.translates.apply_vacansy[lang]}{' '}
                        <Image src={strelka1} alt="strelka" />
                    </button>
                    {/* <Blue_to_blue text="Muraciet et" action={() => {}} /> */}
                </div>
                <div
                    className=" w-full flex-wrap  h-fit px-10  py-5 bg-[#F7F8FA] rounded-lg lg:items-center items-start lg:px-10 mt-7"
                    dangerouslySetInnerHTML={{
                        __html: CurrenVacansy.responsibility[lang],
                    }}
                />
            </main>
            <Footer data={data.translates} lang={lang} contact={data.contact} />
        </div>
    );
}
