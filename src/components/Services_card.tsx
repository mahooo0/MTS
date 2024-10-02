import React from 'react';
import whiteStrelka from '../../public/svg/strelka1.svg';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useAppDispatch } from '@/redux/store';
import { useSelector } from 'react-redux';
import { setcurrentservices, setservices } from '@/redux/slices/PassSlice';
export default function Services_card({
    data,
    lang,
    ser,
}: {
    data: any;
    lang: any;
    ser: any;
}) {
    console.log(ser);
    function shortenText(text: string, maxLength: number): string {
        if (text?.length <= maxLength) {
            return text;
        }
        return text?.slice(0, maxLength) + '...';
    }
    const dispatch = useAppDispatch();

    const router = useRouter();
    return (
        <div
            className="mb-9 "
            onClick={() => {
                dispatch(setcurrentservices(data));
                dispatch(setservices(ser));
                if (data.type === 'Digər') {
                    router.push(`/services/other`);
                } else {
                    router.push(`/services/${data.slug[lang]}`);
                }
            }}
        >
            <div
                className="rounded-lg overflow-hidden w-[295px] h-[250px]  hover:scale-105  ransition-transform duration-500 lg:p-2 flex items-end "
                style={{
                    backgroundImage: `url('http://mts.caratcons.az/${data.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',

                    // or any height you need
                }}
            >
                <div className="bg-white bg-opacity-10 flex px-4 justify-between items-center text-white h-11 rounded-[100px] w-[98%]">
                    <p>Ətraflı bax</p>
                    <Image src={whiteStrelka} alt="white strelka" />
                </div>
            </div>
            <h6 className="text-[16px] font-semibold mt-4 mb-2 w-[295px]">
                {shortenText(data.title[lang], 35)}
            </h6>
            <p className="text-[16px] font-normal w-[295px]">
                {shortenText(data.content[lang], 80)}

                {/* {data.content[lang]} */}
            </p>
        </div>
    );
}
