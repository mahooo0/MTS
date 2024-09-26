import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import image from '../../public/images/kater.png';
const FAQItem = ({
    IsOpen,
    SetopenIndex,
    Setclose,
}: {
    IsOpen: boolean;
    SetopenIndex: () => void;
    Setclose: () => void;
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
                    Mts şirkərində boruların moyifikasiyası{' '}
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
                <p className="text-[16px] mt-4 font-normal">
                    Qabaqcıl texnalogiyalarla boruların modifikasiyası
                    xidmətini “Marine Technical Solutions” Qapalı Səhmdar
                    Cəmiyyətinə etibar edə bilərsiz. Gəmi boru xətti və onun
                    tərkibinə daxil olan armatur ( xüsusən də bağlayıcı və
                    tənzimləyici funksiyalarını yerinə yetirən) daim
                    korroziyaya, mexaniki təsirə və aşınmaya məruz qalır. Bu
                    səbəbdən də gəmi boru xətlərinin tərkibi olan materiallar
                    üçün əsas tələb uzunömürlülük, təmirə yararlılıq,
                    korroziyaya və yüksək nəmişiliyə davamlılıq hesab olunur.
                    Şirkətimiz bu amilləri əsas götürərək yüksək peşəkarlıqla
                    sizə xidmət göstərir.
                </p>
                <div className="lg:w-full mg:w-full sm:w-full w-fit lg:h-[300px] h-full m-7">
                    <Image
                        src={image}
                        alt="image"
                        className=" object-cover w-full h-full  rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
};
export const FAQ = () => {
    const [openIndex, setopenIndex] = useState<number>(0);
    const ARR = [1, 2, 3, 4, 5];
    return (
        <div className="lg:w-[75%] w-full flex flex-col gap-3 mt-10">
            {ARR.map((item, i) => (
                <FAQItem
                    IsOpen={i === openIndex ? true : false}
                    SetopenIndex={() => setopenIndex(i)}
                    Setclose={() => setopenIndex(9)}
                />
            ))}
        </div>
    );
};
