import React, { useEffect, useState } from 'react';
import strelka from '../../public/svg/strelka2.svg';
import logo from '../../public/svg/Logo.svg';
import Image from 'next/image';
import mail from '../../public/svg/gmail.svg';
import phone from '../../public/svg/phone_white.svg';
import insta from '../../public/svg/insta.svg';
import facebock from '../../public/svg/facebock.svg';
import wp from '../../public/svg/wp.svg';
import location from '../../public/svg/location.svg';
import { useRouter } from 'next/router';
export default function ({
    data,
    lang,
    contact,
}: {
    data: any;
    lang: any;
    contact: any;
}) {
    const [services, setserviceS] = useState<any>([]);
    const [Loading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true);

                const res = await fetch(
                    `https://mts.caratcons.az/api/get-header-data`
                );
                const newdata = await res.json();
                console.log('newdata', newdata);

                console.log('newdata', newdata);

                const NewDATA = await newdata.data;
                setserviceS(NewDATA.services);
                // setdata(NewDATA);
                const ARR = [...NewDATA.services];

                // dispatch(setservices(ARR));
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        })();
    }, []);
    if (Loading) {
        return <div></div>;
    }
    console.log(services);

    const router = useRouter();
    return (
        <div className=" w-full lg:min-h-[477px] h-fit bg-[#131E41]">
            <div className="pt-[48px] lg:px-20 px-5 flex flex-row justify-between">
                <div className=" flex lg:flex-row md:flex-column flex-col-reverse  justify-between w-full flex-wrap gap-[55px]  ">
                    <div className="lg:flex   flex-col text-[16px] text-white font-normal gap-[14px]">
                        <h4 className="mb-[16px] text-[18px] font-semibold">
                            {data.about[lang]}
                        </h4>
                        <p onClick={() => router.push('/about_us')}>
                            {data.company_chronology[lang]}
                        </p>
                        <p onClick={() => router.push('/about_us')}>
                            {data.certificates[lang]}
                        </p>
                        <p onClick={() => router.push('/about_us')}>
                            {' '}
                            {data.structure[lang]}
                        </p>
                    </div>
                    <div className="lg:flex   flex-col text-[16px] w-[210px] text-white font-normal gap-[14px]">
                        <h4 className="mb-[16px] text-[18px] font-semibold">
                            {data.our_services[lang]}
                        </h4>
                        {services.map((item: any) => (
                            <p
                                onClick={() =>
                                    router.push(`/services/${item.id}`)
                                }
                            >
                                {item.title[lang]}
                            </p>
                        ))}

                        <p onClick={() => router.push('/services/aaa')}>
                            Digər
                        </p>
                    </div>
                    <div className="lg:flex  md:flex flex-col   text-[16px] text-white font-normal gap-[14px]">
                        <h4 className="mb-[16px] text-[18px] font-semibold">
                            {data.media[lang]}
                        </h4>
                        <p onClick={() => router.push('/news')}>
                            {' '}
                            {data.news[lang]}
                        </p>
                        <p onClick={() => router.push('/media/images')}>
                            {data.gallery[lang]}
                        </p>
                        <p onClick={() => router.push('/media/videos')}>
                            {data.video[lang]}
                        </p>
                    </div>
                    <div className="lg:flex  md:flex flex-col text-[16px] text-white font-normal gap-[14px]">
                        <h4 className="mb-[16px] text-[18px] font-semibold">
                            {data.career[lang]}
                        </h4>
                        <p onClick={() => router.push('/karyera')}>
                            {data.vacancies[lang]}
                        </p>
                        <p onClick={() => router.push('/karyera/cours')}>
                            {data.training[lang]}
                        </p>
                        <p
                            onClick={() =>
                                router.push('/karyera/request_blanck')
                            }
                        >
                            {data.application_form[lang]}
                        </p>
                    </div>
                    <div className="text-white">
                        <h4 className="mb-[16px] text-[18px] font-semibold">
                            {data.contact_info[lang]}
                        </h4>
                        <div className="flex flex-row gap-[11.5px] mb-[24px] items-center">
                            <div className="flex justify-center items-center bg-[#FFFFFF1F] w-11 h-11 rounded-lg">
                                <Image src={phone} alt="phone" />
                            </div>
                            <p className=" text-[16px] font-medium lg:w-fit w-[200px]">
                                {contact.phone_1} / {contact.phone_2}
                            </p>
                        </div>
                        <div className="flex flex-row gap-[11.5px] mb-[24px] items-center">
                            <div className="flex justify-center items-center bg-[#FFFFFF1F] w-11 h-11 rounded-lg">
                                <Image src={location} alt="location" />
                            </div>
                            <p className=" text-[16px] font-medium flex flex-wrap lg:w-[291px]  w-[200px]">
                                {contact.address[lang]}
                            </p>
                        </div>
                        <div className="flex flex-row gap-[11.5px] mb-[24px] items-center">
                            <div className="flex justify-center items-center bg-[#FFFFFF1F] w-11 h-11 rounded-lg">
                                <Image src={mail} alt="mail" />
                            </div>
                            <p className=" text-[16px] font-medium flex flex-wrap w-[291px]">
                                {contact.email}
                            </p>
                        </div>
                    </div>
                    <div className="flex  flex-col text-white w-fit ">
                        <h4 className="mb-[20px] text-[18px] font-semibold ">
                            {data.contact_us[lang]}
                        </h4>
                        <div className="flex flex-row gap-[16px] ">
                            <div className="flex justify-center items-center bg-[#FFFFFF1F] w-11 h-11 rounded-lg">
                                <a href={contact.instagram_url}>
                                    <Image src={insta} alt="insta" />
                                </a>
                            </div>
                            <div className="flex justify-center items-center bg-[#FFFFFF1F] w-11 h-11 rounded-lg">
                                <a href={contact.facebook_url}>
                                    <Image src={facebock} alt="facebock" />
                                </a>
                            </div>
                            <div className="flex justify-center items-center bg-[#FFFFFF1F] w-11 h-11 rounded-lg">
                                <a href="">
                                    <Image src={wp} alt="wp" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-[#FFFFFF1F] flex justify-between text-white lg:mx-[100px] md:mx-[60px] mx-[30px] mt-20 pt-6">
                <p>© 2024 exemple.com. All rights reserved.</p>
                <div
                    className="flex justify-center items-center rounded-full w-10 h-10 bg-[#E1F2FF] animate-bounce "
                    onClick={() =>
                        window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: 'smooth', // Enables smooth scrolling
                        })
                    }
                >
                    <Image
                        src={strelka}
                        alt="strelka"
                        className=" -rotate-90"
                    />
                </div>
            </div>
        </div>
    );
}
