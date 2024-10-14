import Image from 'next/image';
import React, { useState } from 'react';
import strelka2 from '../../public/svg/strelka2.svg';
import { useDispatch } from 'react-redux';
import { setCurrentNew } from '@/redux/slices/PassSlice';
import { useRouter } from 'next/router'; // <-- Use 'next/router'

export default function News_card({
    data,
    lang,
    translates,
}: {
    data: any;
    lang: string;
    translates: any;
}) {
    const [ison, setison] = useState<boolean>(false);
    const router = useRouter(); // <-- Using correct useRouter from next/router
    const dispatch = useDispatch();
    function shortenText(text: string, maxLength: number) {
        if (text) {
            return text.length > maxLength
                ? text.slice(0, maxLength) + '...'
                : text;
        }
    }
    return (
        <div
            className="w-[295px] h-[342px] bg-[#FAFAFA] rounded-t-lg overflow-hidden flex flex-col cursor-pointer justify-between"
            onMouseEnter={() => setison(true)}
            onMouseLeave={() => setison(false)}
            onClick={() => {
                console.log(data);
                dispatch(setCurrentNew(data));

                // Always navigate to the correct path (news/id)
                router.push(`/news/${data.id}`);
            }}
        >
            <div className="h-[226px] overflow-hidden relative">
                <img
                    src={`https://mts.caratcons.az/${data.image}`}
                    alt="kater_png"
                    className={`w-full h-full ${
                        ison ? 'scale-110' : ''
                    } transition-transform duration-500 rounded-lg`}
                />
                <div className="w-[134px] h-[36px] text-white flex justify-center items-center rounded-lg bg-black bg-opacity-15 top-3 left-3 text-[14px] font-medium absolute">
                    {data.date}
                </div>
            </div>

            <h6 className="text-[18px] my-4 px-3 font-[500] text-[#050B20]">
                {shortenText(data.title[lang], 60)}
            </h6>
            <div className="flex flex-row justify-between px-3">
                <p className="text-[#2961B1] text-[16px] font-semibold">
                    {translates.see_more[lang]}
                </p>
                <Image src={strelka2} alt="strelka 2" />
            </div>
        </div>
    );
}
