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
            <Blue_to_blue
                text="Ana səhifəyə qayıt"
                action={() => router.push('/')}
            />
        </div>
    );
}
