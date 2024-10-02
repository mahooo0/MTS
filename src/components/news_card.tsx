import Image from 'next/image';
import React, { useState } from 'react';
import kater_png from '../../public/images/kater.png';
import strelka2 from '../../public/svg/strelka2.svg';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setCurrentNew } from '@/redux/slices/PassSlice';
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
    const rounter = useRouter();
    console.log(data);
    // const lang = localStorage.getItem('language') || 'en';
    const dispatch = useDispatch();

    return (
        <div
            className="w-[295px] h-[342px] bg-[#FAFAFA] rounded-t-lg overflow-hidden  flex flex-col "
            onMouseEnter={() => setison(true)}
            onMouseLeave={() => setison(false)}
            onClick={() => {
                console.log(data);
                dispatch(setCurrentNew(data));
                rounter.push(`news/${data.slug[lang]}`);
            }}
        >
            <div className="h-[226px] overflow-hidden relative">
                <img
                    src={`http://mts.caratcons.az/${data.image}`}
                    alt="kater_png"
                    className={`w-full h-full  ${
                        ison ? 'scale-110' : ''
                    }  transition-transform duration-500 rounded-lg`}
                />
                <div className="w-[134px] h-[36px] text-white flex justify-center items-center rounded-lg bg-black bg-opacity-15 top-3 left-3 text-[14px] font-medium  absolute ">
                    {data.date}
                </div>
            </div>

            <h6 className="text-[18px] my-4 px-3 font-[500] text-[#050B20]">
                {data.meta_description[lang]}
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
