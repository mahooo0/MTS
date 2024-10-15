import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React, { useEffect, useState } from 'react';
import strelka from '../../public/svg/strelka_black.svg';
import strelka2 from '../../public/svg/strelka1.svg';
import location from '../../public/svg/location.svg';
import phone from '../../public/svg/phone_white.svg';
import map_png from '../../public/images/map.png';
import locationREd from '../../public/svg/location_red.svg';
import mail from '../../public/svg/gmail.svg';
import Image from 'next/image';
import ContactForm from '@/components/contacy_bar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';

type Props = {};

export default function contact({ apiData }: { apiData: any }) {
    const [lang, setlang] = useState<string>('az');
    const [reset, setreset] = useState<boolean>(false);
    const data = apiData.data;
    const baseurl = 'https://mts.caratcons.az/';
    useEffect(() => {
        const lng = localStorage.getItem('language') || 'en';
        setlang(lng);
    }, [reset]);
    console.log(data.translates.home);

    return (
        <div className="bg-white">
            <Header
                setReset={() => setreset((prew) => !prew)}
                active={9}
                data={data.translates}
            />

            <div className="bg-[#FBFBFB] h-[90px] w-full "></div>
            <div className="flex flex-row text-[18px] gap-3 mt-[41px]   lg:ml-[100px] md:ml-[60px] ml-[30px]">
                <Link href={'/'}>
                    <h5>{data.translates.home[lang]}</h5>
                </Link>
                <Image src={strelka} alt="strelka" className=" opacity-60" />
                <h6 className=" opacity-60">{data.translates.contact[lang]}</h6>
            </div>
            <h1 className="lg:text-[48px] md:text-[38px] text-[32px] font-semibold text-[#050B20] mb-[48px] mt-[28px] lg:ml-[100px] md:ml-[60px] ml-[30px]">
                {data.translates.main_ofis[lang]}
            </h1>
            <div className="flex lg:flex-row flex-col lg:px-[100px] md:px-[60px] px-[30px] justify-between gap-5">
                <div className="flex flex-row gap-[11.5px] mb-[24px] items-center pr-[15px] bg-[#F6F7F8] rounded-lg  w-full ">
                    <div className="flex justify-center items-center bg-[#7DB3FF] min-w-11 h-11 rounded-lg">
                        <Image src={location} alt="location" />
                    </div>
                    <p className=" text-[16px] font-medium">
                        {data.contact.address[lang]}
                    </p>
                </div>
                <div className="flex flex-row gap-[11.5px] mb-[24px] items-center pr-[75px] bg-[#F6F7F8] rounded-lg w-full ">
                    <div className="flex justify-center items-center bg-[#7DB3FF] min-w-11 h-11 rounded-lg">
                        <Image src={phone} alt="phone" />
                    </div>
                    <p className=" text-[16px] font-medium">
                        <a href={`tel:${data.contact.phone_1}`}>
                            {' '}
                            {data.contact.phone_1}{' '}
                        </a>
                        /{' '}
                        <a href={`tel:${data.contact.phone_2}`}>
                            {' '}
                            {data.contact.phone_2}{' '}
                        </a>
                    </p>
                </div>
                <div className="flex flex-row gap-[11.5px] mb-[24px] items-center pr-[75px] bg-[#F6F7F8] rounded-lg w-full">
                    <div className="flex justify-center items-center bg-[#7DB3FF] min-w-11 h-11 rounded-lg">
                        <Image src={mail} alt="mail" />
                    </div>
                    <a href={`mailto:${data.contact.email}`}>
                        <p className=" text-[16px] font-medium">
                            {data.contact.email}
                        </p>
                    </a>
                </div>
            </div>
            <h1 className="lg:text-[48px] md:text-[38px] text-[32px] font-semibold text-[#050B20] mb-[48px] mt-[28px] lg:ml-[100px] md:ml-[60px] ml-[30px]">
                {data.translates.reprathentation[lang]}
            </h1>
            {data?.representations?.map((item: any) => (
                <div className="flex lg:flex-row flex-col lg:px-[100px] md:px-[60px] px-[30px] justify-between gap-5">
                    <div className="flex flex-row gap-[11.5px] mb-[24px] items-center pr-[15px] bg-[#F6F7F8] rounded-lg  w-full  ">
                        <div className="flex justify-center items-center bg-[#7DB3FF] min-w-11 h-11 rounded-lg">
                            <Image src={location} alt="location" />
                        </div>
                        <p className=" text-[16px] font-medium">
                            {item.address[lang]}
                        </p>
                    </div>
                    <div className="flex flex-row gap-[11.5px] mb-[24px] items-center pr-[75px] bg-[#F6F7F8] rounded-lg w-full ">
                        <div className="flex justify-center items-center bg-[#7DB3FF] min-w-11 h-11 rounded-lg">
                            <Image src={phone} alt="phone" />
                        </div>
                        <p className=" text-[16px] font-medium">
                            <a href={`tel:${item.phone}`}> {item.phone} </a>
                        </p>
                    </div>
                    <div className="flex flex-row gap-[11.5px] mb-[24px] items-center pr-[75px] bg-[#F6F7F8] rounded-lg  w-full">
                        <div className="flex justify-center items-center bg-[#7DB3FF] min-w-11 h-11 rounded-lg">
                            <Image src={mail} alt="mail" />
                        </div>
                        <a href={`mailto:${data.contact.email}`}>
                            <p className=" text-[16px] font-medium">
                                {item.name[lang]}
                            </p>
                        </a>
                    </div>
                </div>
            ))}

            <div className=" lg:h-[655px] h-fit  overflow-hidden lg:mt-[40px] mt-10 rounded-lg relative lg:mb-[100px] mb-10 flex flex-col-reverse ">
                <div
                    className="IfarmeCLass"
                    dangerouslySetInnerHTML={{ __html: `${data.contact.map}` }}
                ></div>
                {/* <iframe
                    className="w-full lg:h-full lg:mt-0 mt-10"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6836.025529021591!2d49.85315080154546!3d40.380998971825385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d0a3ea7028d%3A0xac9d73dbd66392c8!2s28%20May!5e0!3m2!1sru!2saz!4v1726840557089!5m2!1sru!2saz"
                    width="600"
                    height="450"
                    loading="lazy"
                ></iframe> */}
                <ContactForm data={data.translates} leng={lang} />
                {/* <div className="lg:w-[455px] w-full lg:h-[94%] h-fit bg-white rounded-lg lg:absolute  top-[26px] left-[100px] bottom-5  z-30 pt-7 pl-6 pr-[14px] flex flex-col">
                    <h3 className="text-[#050B20] text-[28px] font-semibold mb-3">
                        Sualın var? Biz zəng edək
                    </h3>
                    <p className="text-[16px] font-normal mb-10">
                        Sualın var? Bizimlə əlaqə saxla və ya formu doldur, ən
                        qısa zamanda sizə geri dönüş edək.
                    </p>
                    <div className="mt-10 flex flex-col gap-3">
                        <input
                            type="text"
                            name=""
                            id=""
                            className="w-full h-[55px] rounded-lg bg-[#F5F5F5] p-4  focus:outline-none focus:border-transparent"
                            placeholder="Ad və soyad"
                        />
                        <input
                            type="text"
                            name=""
                            id=""
                            className="w-full h-[55px] rounded-lg bg-[#F5F5F5] p-4    focus:outline-none focus:border-transparent"
                            placeholder="Ad və soyad"
                        />
                        <div className="flex flex-row w-full h-[55px] rounded-lg bg-[#F5F5F5] items-center pl-3">
                            +994
                            <input
                                type="tel"
                                pattern="[0-9]*"
                                inputMode="numeric"
                                placeholder="00 000 00 00"
                                className="h-[55px] w-full bg-[#F5F5F5] p-4 focus:outline-none focus:ring-0"
                            />
                        </div>

                        <textarea
                            name=""
                            id=""
                            className="h-[112px] w-full rounded-lg bg-[#F5F5F5] p-4 focus:outline-none focus:border-transparent resize-none overflow-auto"
                        ></textarea>
                        <button className="flex flex-row gap-2 items-center w-full h-[50px] bg-[#2961B1] text-white text-[20px] font-[500px] justify-center rounded-lg mt-3 ">
                            Daha ətraflı <Image src={strelka2} alt="strelka2" />
                        </button>
                    </div>
                </div> */}
            </div>
            <Footer data={data.translates} lang={lang} contact={data.contact} />
            <ToastContainer />
        </div>
    );
}
export async function getServerSideProps() {
    const res = await fetch('https://mts.caratcons.az/api/contact');
    const data = await res.json();
    console.log(data);

    // Pass data to the page via props
    return { props: { apiData: data } };
}
