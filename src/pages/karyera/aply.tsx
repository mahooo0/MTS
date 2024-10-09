import React from 'react';
import aplySvg from '../../../public/svg/aply.svg';
import Image from 'next/image';
import { Blue_to_blue } from '@/components/btns';
import { useRouter } from 'next/router';
export default function aa() {
    const router = useRouter();
    return (
        <div className="w-[100%] h-[100vh] bg-white flex justify-center flex-col items-center text-center">
            <Image src={aplySvg} alt="aplySvg" />
            <h1 className="text-[32px] font-semibold">
                Müraciətiniz uğurla qeydə alındı!
            </h1>
            <p className="text-[16px] font-normal w-[388px]">
                Müraciətiniz üçün təşəkkür edirik. Sizinlə ən qısa zamanda əlaqə
                saxlayacağıq.
            </p>
            <button
                onClick={() => router.push('/')}
                className="flex flex-row gap-2 items-center text-nowrap px-4 w-[200px] h-[50px] bg-[#2961B1] hover:bg-[#184C97]  text-white text-[20px] font-[500px] justify-center rounded-lg lg:mt-12 md:mt-9 mt-3"
            >
                Ana səhifəyə qayıt
            </button>
        </div>
    );
}
