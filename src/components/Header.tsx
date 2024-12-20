import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Logo_Icon from '../../public/svg/Logo.svg';
import menu_Icon from '../../public/svg/menu.svg';
import close_Icon from '../../public/svg/close_black.svg';
import { useRouter } from 'next/router';
import Header_select from './Header_select';
import { useDispatch } from 'react-redux';
import { setcurrentservices, setservices } from '@/redux/slices/PassSlice';
interface Props {
    active: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
    setReset: () => void;
    data: any;
}
export default function Header({ active, setReset, data }: Props) {
    const router = useRouter();
    const [show, setshow] = useState<boolean>(false);
    const [Loading, setIsLoading] = useState<boolean>(false);
    const [lang, setlang] = useState<any>('az');
    const [services, setserviceS] = useState<any>([]);
    const [contacts, setcontacts] = useState<any>();

    useEffect(() => {
        const lng = localStorage.getItem('language');
        // setlang(lng);
        if (lng) {
            setlang(lng);
        } else {
            setlang('az');
            localStorage.setItem('language', 'az');
        }
    }, [setlang]);

    const handleChangelang = (lang: string) => {
        setlang(lang);
        localStorage.setItem('language', lang);
    };

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
                setcontacts(NewDATA.contact);
                // dispatch(setservices(ARR));
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        })();
    }, []);
    const dispatch = useDispatch();
    console.log(services);
    if (Loading) {
        return <div></div>;
    }
    return (
        <div className="lg:px-[100px] md:px-[100px] px-[30px]   w-full h-[70px] flex flex-row justify-between items-center  absolute top-0 z-[99]">
            <img
                onClick={() => router.push('/')}
                src={`https://mts.caratcons.az/${contacts?.logo}`}
                alt="Logo_Icon"
                className=" w-auto cursor-pointer "
            />
            <ul className="lg:flex hidden  flex-row gap-[28px] h-full  items-center cursor-pointer">
                <li
                    onClick={() => router.push('/')}
                    className={
                        active === 1
                            ? 'h-full flex items-center text-[#2961B1] border-[#2961B1] '
                            : '  font-medium'
                    }
                >
                    {data.home[lang]}
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
                        text={data?.about[lang]}
                        ARR={[
                            {
                                title: data?.sstory_of_the_company[lang],
                                action: () => {
                                    router.push('/about_us');
                                },
                            },

                            {
                                title: data?.certificates[lang],
                                action: () => {
                                    setReset();

                                    localStorage.setItem(
                                        'scrollto',
                                        'sertificatlar'
                                    );
                                    active === 2
                                        ? ''
                                        : router.push('/about_us');
                                },
                            },
                            {
                                title: data?.structure[lang],
                                action: () => {
                                    localStorage.setItem(
                                        'scrollto',
                                        'structure'
                                    );
                                    setReset();
                                    active === 2
                                        ? ''
                                        : router.push('/about_us');
                                },
                            },
                            {
                                title: data?.acknowledgments[lang],
                                action: () => {
                                    localStorage.setItem(
                                        'scrollto',
                                        'tesekkurname'
                                    );
                                    setReset();
                                    active === 2
                                        ? ''
                                        : router.push('/about_us');
                                },
                            },

                            {
                                title: data?.administration[lang],
                                action: () => {
                                    localStorage.setItem(
                                        'scrollto',
                                        'administration'
                                    );
                                    setReset();
                                    active === 2
                                        ? ''
                                        : router.push('/about_us');
                                },
                            },
                            {
                                title: data?.Partners[lang],
                                action: () => {
                                    localStorage.setItem(
                                        'scrollto',
                                        'əməkdalar'
                                    );
                                    setReset();
                                    active === 2
                                        ? ''
                                        : router.push('/about_us');
                                },
                            },
                        ]}
                    />
                </li>
                {/* <li
                    className={
                        active === 3
                            ? 'h-full flex items-center text-[#2961B1] border-[#2961B1]  '
                            : '  font-medium'
                    }
                >
                    <Header_select
                        action={() => {
                            // console.log('services:', services);

                            router.push('/services');
                        }}
                        text={data?.our_services[lang]}
                        ARR={[
                            ...services
                                .filter((item: any) => {
                                    const result = item.type === 'Digər';
                                    return !result;
                                })
                                .map((item: any) => {
                                    return {
                                        title: item.name[lang],
                                        action: () => {
                                            router.push(`/services/${item.id}`);

                                            // dispatch(setcurrentservices(item));
                                        },
                                    };
                                }),
                            {
                                title: data?.others[lang],
                                action: () => router.push(`/services/other`),
                            },
                        ]}
                    />
                </li> */}
                <li
                    onClick={() => router.push('/services')}
                    className={
                        active === 3
                            ? 'h-full flex items-center text-[#2961B1] border-[#2961B1]  '
                            : '  font-medium'
                    }
                >
                    {data?.our_services[lang]}
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
                        text={data?.media[lang]}
                        ARR={[
                            {
                                title: data?.gallery[lang],
                                action: () => {
                                    router.push('/media');
                                },
                            },
                            {
                                title: data?.videos[lang],
                                action: () => {
                                    router.push('/media/videos/');
                                },
                            },

                            {
                                title: data?.news[lang],
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
                        text={data?.career[lang]}
                        ARR={[
                            {
                                title: data?.vacancies[lang],
                                action: () => {
                                    router.push('/karyera');
                                },
                            },
                            {
                                title: data?.training[lang],
                                action: () => {
                                    router.push('/karyera/cours');
                                },
                            },

                            {
                                title: data?.application_form[lang],
                                action: () => {
                                    router.push('/karyera/request_blanck');
                                },
                            },
                        ]}
                    />
                </li>
                <li
                    onClick={() => router.push('/Projects')}
                    className={
                        active === 8
                            ? 'h-full flex items-center text-[#2961B1] border-[#2961B1]  '
                            : '  font-medium'
                    }
                >
                    {data?.Projects[lang]}
                </li>
                <li
                    onClick={() => router.push('/contact')}
                    className={
                        active === 9
                            ? 'h-full flex items-center text-[#2961B1] border-[#2961B1]  '
                            : '  font-medium'
                    }
                >
                    {data?.contact[lang]}
                </li>
            </ul>
            <div className="flex flex-row gap-3">
                <button
                    onClick={() => {
                        handleChangelang('en');
                        setReset();
                    }}
                    className={` rounded-full ${
                        lang === 'en'
                            ? 'bg-[#2961B1] text-white'
                            : 'bg-white bg-opacity-60'
                    }  h-10 w-10 flex justify-center items-center`}
                >
                    EN
                </button>
                <button
                    onClick={() => {
                        handleChangelang('ru');
                        setReset();
                    }}
                    className={` rounded-full ${
                        lang === 'ru'
                            ? 'bg-[#2961B1] text-white'
                            : 'bg-white bg-opacity-60'
                    }  h-10 w-10 flex justify-center items-center`}
                >
                    Ru
                </button>
                <button
                    onClick={() => {
                        handleChangelang('az');
                        setReset();
                    }}
                    className={` rounded-full ${
                        lang === 'az'
                            ? 'bg-[#2961B1] text-white'
                            : 'bg-white bg-opacity-60'
                    }  h-10 w-10 flex justify-center items-center`}
                >
                    Az
                </button>
                <Image
                    src={menu_Icon}
                    alt="menu_Icon"
                    className="lg:hidden w-[30px]"
                    onClick={() => setshow(true)}
                />
            </div>
            {/* aside */}
            <div
                className="lg:hidden  bg-[#E7EDF8] flex-col   fixed right-0 top-0 h-[100vh] w-[300px] rounded-l-lg
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
                <ul className="flex  flex-col gap-[28px] h-full justify-start  items-start cursor-pointer">
                    <li
                        onClick={() => router.push('/')}
                        className={
                            active === 1
                                ? 'h-fit flex items-center text-[#2961B1] border-[#2961B1] '
                                : '  font-medium'
                        }
                    >
                        {data?.home[lang]}
                    </li>
                    <li
                        className={
                            active === 2
                                ? 'h-fit flex items-center text-[#2961B1]  border-[#2961B1]  '
                                : '  font-medium'
                        }
                    >
                        <Header_select
                            action={() => router.push('/about_us')}
                            text={data?.about[lang]}
                            ARR={[
                                {
                                    title: data?.sstory_of_the_company[lang],
                                    action: () => {
                                        router.push('/about_us');
                                    },
                                },
                                {
                                    title: data?.structure[lang],
                                    action: () => {
                                        router.push('/about_us');
                                        localStorage.setItem(
                                            'scrollto',
                                            'structure'
                                        );
                                    },
                                },
                                {
                                    title: data?.certificates[lang],
                                    action: () => {
                                        router.push('/about_us');
                                        localStorage.setItem(
                                            'scrollto',
                                            'sertificatlar'
                                        );
                                    },
                                },
                                {
                                    title: data?.acknowledgments[lang],
                                    action: () => {
                                        localStorage.setItem(
                                            'scrollto',
                                            'tesekkurname'
                                        );
                                        setReset();
                                        active === 2
                                            ? ''
                                            : router.push('/about_us');
                                    },
                                },
                                {
                                    title: data?.Partners[lang],
                                    action: () => {
                                        localStorage.setItem(
                                            'scrollto',
                                            'əməkdalar'
                                        );
                                        setReset();
                                        active === 2
                                            ? ''
                                            : router.push('/about_us');
                                    },
                                },
                            ]}
                        />
                    </li>
                    {/* <li
                        className={
                            active === 3
                                ? 'h-fit flex items-center text-[#2961B1] border-[#2961B1]  '
                                : '  font-medium'
                        }
                    >
                        <Header_select
                            action={() => router.push('/services')}
                            text={data?.our_services[lang]}
                            ARR={[
                                ...services
                                    .filter((item: any) => {
                                        const result = item.type === 'Digər';
                                        return !result;
                                    })
                                    .map((item: any) => {
                                        return {
                                            title: item.name[lang],
                                            action: () => {
                                                router.push(
                                                    `/services/${item.id}`
                                                );

                                                // dispatch(setcurrentservices(item));
                                            },
                                        };
                                    }),
                                {
                                    title: data?.others[lang],
                                    action: () =>
                                        router.push(`/services/other`),
                                },
                            ]}
                        />
                    </li> */}
                    <li
                        onClick={() => router.push('/services')}
                        className={
                            active === 3
                                ? 'h-full flex items-center text-[#2961B1] border-[#2961B1]  '
                                : '  font-medium'
                        }
                    >
                        {data?.our_services[lang]}
                    </li>
                    <li
                        className={
                            active === 6
                                ? 'h-fit flex items-center text-[#2961B1] border-[#2961B1]  '
                                : '  font-medium'
                        }
                    >
                        <Header_select
                            action={() => router.push('/media')}
                            text={data?.media[lang]}
                            ARR={[
                                {
                                    title: data?.gallery[lang],
                                    action: () => {
                                        router.push('/media');
                                    },
                                },
                                {
                                    title: data?.videos[lang],
                                    action: () => {
                                        router.push('/media/videos/');
                                    },
                                },

                                {
                                    title: data?.news[lang],
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
                                ? 'h-fit flex items-center text-[#2961B1] border-[#2961B1]  '
                                : '  font-medium'
                        }
                    >
                        <Header_select
                            action={() => router.push('/karyera')}
                            text={data?.career[lang]}
                            ARR={[
                                {
                                    title: data?.vacancies[lang],
                                    action: () => {
                                        router.push('/karyera');
                                    },
                                },
                                {
                                    title: data?.training[lang],
                                    action: () => {
                                        router.push('/karyera/cours');
                                    },
                                },

                                {
                                    title: data?.application_form[lang],
                                    action: () => {
                                        router.push('/karyera/request_blanck');
                                    },
                                },
                            ]}
                        />
                    </li>
                    <li
                        onClick={() => router.push('/Projects')}
                        className={
                            active === 9
                                ? 'h-full flex items-center text-[#2961B1] border-[#2961B1]  '
                                : '  font-medium'
                        }
                    >
                        {data?.Projects[lang]}
                    </li>
                    <li
                        onClick={() => router.push('/contact')}
                        className={
                            active === 9
                                ? 'h-fit flex items-center text-[#2961B1] border-[#2961B1]  '
                                : '  font-medium'
                        }
                    >
                        {data?.contact[lang]}
                    </li>
                </ul>
            </div>
        </div>
    );
}
