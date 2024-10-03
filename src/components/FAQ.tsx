import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import image from '../../public/images/kater.png';
import { useSelector } from 'react-redux';
const FAQItem = ({
    IsOpen,
    SetopenIndex,
    Setclose,
    data,
    lang,
}: {
    IsOpen: boolean;
    SetopenIndex: () => void;
    Setclose: () => void;
    data: any;
    lang: any;
}) => {
    // const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-[#F7F8FA] px-7 py-6 rounded-lg  ">
            <button
                onClick={() => {
                    // setIsOpen(!isOpen);
                    IsOpen ? Setclose() : SetopenIndex();
                }}
                className="flex items-center justify-between w-full focus:outline-none"
            >
                <h3 className=" font-semibold text-[20px]">
                    {' '}
                    {data.title[lang]}
                </h3>
                <div className="w-8 h-8 flex justify-center items-center bg-white rounded-full text-[32px]">
                    {!IsOpen ? '+' : '-'}
                </div>
            </button>
            <div
                className={`mt-2 text-gray-600 transition-max-height transition-all duration-500 ease-in-out overflow-hidden  ${
                    IsOpen ? 'max-h-screen' : 'max-h-0'
                }`}
            >
                <div
                    className="text-[16px] mt-4 font-normal"
                    dangerouslySetInnerHTML={{ __html: data.description[lang] }}
                />

                <div className="lg:w-full mg:w-full sm:w-full w-fit lg:h-[300px] h-full m-7">
                    <img
                        src={`https://mts.caratcons.az/${data.image}`}
                        alt="image"
                        className=" object-cover w-full h-full  rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
};
export const FAQ = ({ lang, Services }: { lang: any; Services: any }) => {
    const [openIndex, setopenIndex] = useState<number>(0);

    // const Services = useSelector((state: any) => state.counter.services);
    const otherServices = Services.filter((item: any) => item.type === 'Digər');
    return (
        <div className="lg:w-[75%] w-full flex flex-col gap-3 mt-10">
            {otherServices.map((item: any, i: number) => (
                <FAQItem
                    data={item}
                    lang={lang}
                    IsOpen={i === openIndex ? true : false}
                    SetopenIndex={() => setopenIndex(i)}
                    Setclose={() => setopenIndex(9)}
                />
            ))}
        </div>
    );
};
