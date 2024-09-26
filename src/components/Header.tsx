import Image from 'next/image';
import React, { useState } from 'react';
import Logo_Icon from '../../public/svg/Logo.svg';
import menu_Icon from '../../public/svg/menu.svg';
import close_Icon from '../../public/svg/close_black.svg';
import { useRouter } from 'next/router';
import Header_select from './Header_select';
interface Props {
    active: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
}
export default function Header({ active }: Props) {
    const router = useRouter();
    const [show, setshow] = useState<boolean>(false);
    return (
        <div className="lg:px-[100px] md:px-[100px] px-[30px]   w-full h-[70px] flex flex-row justify-between items-center  absolute top-0 z-[99]">
            <Image src={Logo_Icon} alt="Logo_Icon" />
            <ul className="lg:flex hidden  flex-row gap-[28px] h-full  items-center cursor-pointer">
                <li
                    onClick={() => router.push('/')}
                    className={
                        active === 1
                            ? 'h-full flex items-center text-[#2961B1] border-[#2961B1] '
                            : '  font-medium'
                    }
                >
                    Ana səhifə
                </li>
                <li
                    className={
                        active === 2
                            ? 'h-full flex items-center text-[#2961B1] border-[#2961B1]  '
                            : '  font-medium'
                    }
                >
                    <Header_select
                        action={() => router.push('/about_us')}
                        text="Haqqımızda"
                        ARR={[
                            {
                                title: 'Şirkət tarixçəsi',
                                action: () => {
                                    router.push('/about_us');
                                },
                            },
                            {
                                title: 'Sertifikatlar',
                                action: () => {
                                    router.push('/about_us');
                                    localStorage.setItem(
                                        'scrollto',
                                        'sertificatlar'
                                    );
                                },
                            },

                            {
                                title: 'Stuktur',
                                action: () => {
                                    router.push('/about_us');
                                    localStorage.setItem(
                                        'scrollto',
                                        'structure'
                                    );
                                },
                            },
                        ]}
                    />
                </li>
                <li
                    className={
                        active === 3
                            ? 'h-full flex items-center text-[#2961B1] border-[#2961B1]  '
                            : '  font-medium'
                    }
                >
                    <Header_select
                        action={() => router.push('/services')}
                        text="Xidmətlərimiz"
                        ARR={[
                            {
                                title: 'Soyutma sahəsi üzrə',
                                action: () => {
                                    router.push('/services/aaaa');
                                },
                            },
                            {
                                title: 'Hidravlika sahəsi üzrə',
                                action: () => {
                                    router.push('/services/sss');
                                },
                            },

                            {
                                title: 'Mexanika sahəsi üzrə',
                                action: () => {
                                    router.push('/services/sss');
                                },
                            },
                            {
                                title: 'Avtomatika sahəsi üzrə',
                                action: () => {
                                    router.push('/services/sss');
                                },
                            },
                            {
                                title: 'Elektrik avadanlıqlarının diaqnostikası və tarirovkası',
                                action: () => {
                                    router.push('/services/sss');
                                },
                            },
                            {
                                title: 'Digər',
                                action: () => {
                                    router.push('/services/sss');
                                },
                            },
                        ]}
                    />
                </li>

                <li
                    className={
                        active === 6
                            ? 'h-full flex items-center text-[#2961B1] border-[#2961B1]  '
                            : '  font-medium'
                    }
                >
                    <Header_select
                        action={() => router.push('/media')}
                        text="Media"
                        ARR={[
                            {
                                title: 'Qalereya',
                                action: () => {
                                    router.push('/media');
                                },
                            },
                            {
                                title: 'vidiolar',
                                action: () => {
                                    router.push('/media/videos/');
                                },
                            },

                            {
                                title: 'Xəbərlər',
                                action: () => {
                                    router.push('/news');
                                },
                            },
                        ]}
                    />
                </li>
                <li
                    className={
                        active === 7
                            ? 'h-full flex items-center text-[#2961B1] border-[#2961B1]  '
                            : '  font-medium'
                    }
                >
                    <Header_select
                        action={() => router.push('/karyera')}
                        text="Karyera"
                        ARR={[
                            {
                                title: 'Vakansiyalar',
                                action: () => {
                                    router.push('/karyera');
                                },
                            },
                            {
                                title: 'Peşəkar inkişaf və təlim',
                                action: () => {
                                    router.push('/karyera/cours');
                                },
                            },

                            {
                                title: 'Müraciət blankı.',
                                action: () => {
                                    router.push('/karyera/request_blanck');
                                },
                            },
                        ]}
                    />
                </li>

                <li
                    onClick={() => router.push('/contact')}
                    className={
                        active === 9
                            ? 'h-full flex items-center text-[#2961B1] border-[#2961B1]  '
                            : '  font-medium'
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
                <Image
                    src={menu_Icon}
                    alt="menu_Icon"
                    className="lg:hidden w-[30px]"
                    onClick={() => setshow(true)}
                />
            </div>
            <div
                className="lg:hidden  bg-[#E7EDF8] flex-col  fixed right-0 top-0 h-[100vh] w-[300px] rounded-l-lg
                p-6"
                style={show ? { display: 'flex' } : { display: 'none' }}
            >
                <div className="flex w-full justify-end">
                    <Image
                        src={close_Icon}
                        alt="close_Icon"
                        width={30}
                        onClick={() => setshow(false)}
                    />
                </div>
                <ul className="flex flex-col  lg:flex-row gap-[28px] h-full w-full text-[30px]  items-start justify-start cursor-pointer">
                    <li
                        onClick={() => router.push('/')}
                        className={
                            active === 1
                                ? 'lg:h-full flex items-center text-[#2961B1] border-[#2961B1] '
                                : '  font-medium'
                        }
                    >
                        Ana səhifə
                    </li>
                    <li
                        className={
                            active === 2
                                ? 'lg:h-full flex items-center text-[#2961B1] border-[#2961B1]  '
                                : '  font-medium'
                        }
                    >
                        Haqqımızda
                    </li>
                    <li
                        className={
                            active === 3
                                ? 'lg:h-full flex items-center text-[#2961B1] border-[#2961B1]  '
                                : '  font-medium'
                        }
                    >
                        Xidmətlərimiz
                    </li>

                    <li
                        className={
                            active === 6
                                ? 'lg:h-full flex items-center text-[#2961B1] border-[#2961B1]  '
                                : '  font-medium'
                        }
                    >
                        Media
                    </li>
                    <li
                        onClick={() => router.push('/news')}
                        className={
                            active === 7
                                ? 'lg:h-full flex items-center text-[#2961B1] border-[#2961B1]  '
                                : '  font-medium'
                        }
                    >
                        Karyera
                    </li>

                    <li
                        onClick={() => router.push('/contact')}
                        className={
                            active === 9
                                ? 'lg:h-full flex items-center text-[#2961B1] border-[#2961B1]  '
                                : '  font-medium'
                        }
                    >
                        Əlaqə
                    </li>
                </ul>
            </div>
        </div>
    );
}
