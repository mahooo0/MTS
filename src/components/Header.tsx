import Image from 'next/image';
import React from 'react';
import Logo_Icon from '../../public/svg/Logo.svg';
import { useRouter } from 'next/router';
interface Props {
    active: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
}
export default function Header({ active }: Props) {
    const router = useRouter();
    return (
        <div className="px-[100px] w-full h-[70px] flex flex-row justify-between items-center  absolute top-0 z-[99]">
            <Image src={Logo_Icon} alt="Logo_Icon" />
            <ul className="flex flex-row gap-[28px] h-full  items-center cursor-pointer">
                <li
                    onClick={() => router.push('/')}
                    className={
                        active === 1
                            ? 'h-full flex items-center text-[#2961B1] border-[#2961B1] border-b '
                            : ' text-[15px] font-medium'
                    }
                >
                    Ana səhifə
                </li>
                <li
                    className={
                        active === 2
                            ? 'h-full flex items-center text-[#2961B1] border-[#2961B1] border-b '
                            : ' text-[15px] font-medium'
                    }
                >
                    Haqqımızda
                </li>
                <li
                    className={
                        active === 3
                            ? 'h-full flex items-center text-[#2961B1] border-[#2961B1] border-b '
                            : ' text-[15px] font-medium'
                    }
                >
                    Xidmətlərimiz
                </li>
                <li
                    className={
                        active === 4
                            ? 'h-full flex items-center text-[#2961B1] border-[#2961B1] border-b '
                            : ' text-[15px] font-medium'
                    }
                >
                    Stuktur
                </li>
                <li
                    className={
                        active === 5
                            ? 'h-full flex items-center text-[#2961B1] border-[#2961B1] border-b '
                            : ' text-[15px] font-medium'
                    }
                >
                    Sertifikatlar
                </li>
                <li
                    className={
                        active === 6
                            ? 'h-full flex items-center text-[#2961B1] border-[#2961B1] border-b '
                            : ' text-[15px] font-medium'
                    }
                >
                    Tərəftaşlar
                </li>
                <li
                    onClick={() => router.push('/news')}
                    className={
                        active === 7
                            ? 'h-full flex items-center text-[#2961B1] border-[#2961B1] border-b '
                            : ' text-[15px] font-medium'
                    }
                >
                    Xəbərlər
                </li>
                <li
                    className={
                        active === 8
                            ? 'h-full flex items-center text-[#2961B1] border-[#2961B1] border-b '
                            : ' text-[15px] font-medium'
                    }
                >
                    Qalereya
                </li>
                <li
                    onClick={() => router.push('/contact')}
                    className={
                        active === 9
                            ? 'h-full flex items-center text-[#2961B1] border-[#2961B1] border-b '
                            : ' text-[15px] font-medium'
                    }
                >
                    Əlaqə
                </li>
            </ul>
            <div className="flex flex-row gap-3">
                <button className=" rounded-full bg-white bg-opacity-60 h-10 w-10 flex justify-center items-center">
                    EN
                </button>
                <button className="rounded-full bg-white bg-opacity-60 h-10 w-10 flex justify-center items-center">
                    Ru
                </button>
            </div>
        </div>
    );
}
