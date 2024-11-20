import Header from '@/components/Header';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import strelka from '../../../public/svg/strelka_black.svg';
import Footer from '@/components/Footer';
import CustomAbsoluteSwiper from '@/components/fixenimagesSwipper';

function PartnerPage() {
    const projectSections = [
        {
            title: 'Layihənin adı',
            date: '12 oktyabr 2024',
            mainImage:
                'https://cdn.builder.io/api/v1/image/assets/TEMP/1c989cc27ddb28e8058a5ae2afd9948ed2db99fed662cab5ac9f4c53cb1a81f4?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            subImages: [
                'https://cdn.builder.io/api/v1/image/assets/TEMP/4c6be6bce0273d36f0b868552b2baef9acdf60f9cd2429080b0e28827e0c85e5?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
                'https://cdn.builder.io/api/v1/image/assets/TEMP/4c6be6bce0273d36f0b868552b2baef9acdf60f9cd2429080b0e28827e0c85e5?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            ],
            description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        },
        {
            title: 'Layihənin adı',
            date: '12 oktyabr 2024',
            mainImage:
                'https://cdn.builder.io/api/v1/image/assets/TEMP/1c989cc27ddb28e8058a5ae2afd9948ed2db99fed662cab5ac9f4c53cb1a81f4?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            subImages: [
                'https://cdn.builder.io/api/v1/image/assets/TEMP/4c6be6bce0273d36f0b868552b2baef9acdf60f9cd2429080b0e28827e0c85e5?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
                'https://cdn.builder.io/api/v1/image/assets/TEMP/4c6be6bce0273d36f0b868552b2baef9acdf60f9cd2429080b0e28827e0c85e5?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            ],
            description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        },
    ];
    const [data, setdata] = useState<any>({});
    const [page, setpage] = useState<number>(1);
    const [currentimgid, setcurrentimgid] = useState<number>(1);
    const [currentsection, setcurrentsection] = useState<any>(null);
    const [isopen, setisopen] = useState<boolean>(false);
    const [category_id, setcategory_id] = useState<number>(0);
    const [lang, setlang] = useState<string>('az');
    const [reset, setreset] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    const { id } = router.query;
    useEffect(() => {
        const lng = localStorage.getItem('language') || 'en';
        setlang(lng);
        const cat = localStorage.getItem('category');
        if (cat === 'Təlim') {
            setcategory_id(4);
        }
    }, [reset]);
    useEffect(() => {
        if (id) {
            (async () => {
                try {
                    setIsLoading(true);

                    const res = await fetch(
                        `https://mts.caratcons.az/api/brand-detail/${id}`
                    );
                    const newdata = await res.json();
                    const NewDATA = await newdata.data;
                    setdata(NewDATA);
                } catch (error) {
                    console.log(error);
                } finally {
                    setIsLoading(false);
                }
            })();
        }
    }, [id, category_id, page]);

    if (isLoading) {
        return <div></div>;
    }
    console.log('data:', data.projects);

    return (
        <>
            <Header
                setReset={() => setreset((prew) => !prew)}
                active={8}
                data={data.translates}
            />
            <div className=" h-[90px] w-full  bg-white"></div>

            <div className="flex overflow-hidden flex-col bg-white">
                <main className="flex flex-col self-center mt-10 w-full lg:px-[100px] md:px-[60px] px-[30px] max-md:max-w-full">
                    <div className="flex flex-row text-[18px] gap-3 mt-[41px]  ">
                        <Link href={'/'}>
                            <h5>{data.translates?.home[lang]}</h5>
                        </Link>

                        <Image
                            src={strelka}
                            alt="strelka"
                            className=" opacity-60"
                        />
                        <h6 className=" opacity-60">
                            {data.translates?.Partners[lang]}
                        </h6>
                    </div>
                    <div className="flex flex-wrap gap-7 items-center self-start mt-10 max-md:max-w-full">
                        <div className="flex flex-col items-center self-stretch my-auto min-w-[240px] w-[295px]">
                            <div className="flex overflow-hidden flex-col justify-center px-8 py-5 max-w-full bg-sky-50 rounded-lg w-[295px] max-md:px-5">
                                <div className="flex flex-col min-h-[160px]">
                                    <div className="flex overflow-hidden flex-col w-full">
                                        <img
                                            loading="lazy"
                                            src={`https://mts.caratcons.az/${data.brand.image}`}
                                            alt="Partner logo"
                                            className="object-contain w-full aspect-[1.25]"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h1 className="self-stretch my-auto text-4xl font-bold text-slate-950 w-[670px] max-md:max-w-full">
                            {data.brand.title[lang]}
                        </h1>
                    </div>
                    {data.projects.map((section: any, index: number) => (
                        <section
                            key={index}
                            className="flex flex-col mt-24 max-md:mt-10 max-md:max-w-full"
                        >
                            <div className="flex flex-col self-center  text-center min-w-[231px] max-w-[50%]">
                                <h2 className="self-center text-4xl font-semibold text-slate-950">
                                    {section.title[lang]}
                                </h2>
                                <time className="mt-4 text-sm text-black text-opacity-60">
                                    {section.start_date}
                                </time>
                            </div>
                            <div className="flex flex-col mt-10 w-full max-md:max-w-full">
                                <div className="flex flex-col w-full max-md:max-w-full">
                                    {/* <div className="flex overflow-hidden flex-col w-full rounded-3xl max-md:max-w-full">
                                        <img
                                            loading="lazy"
                                            src={`https://mts.caratcons.az/${section.image}`}
                                            alt={`Main image for ${section.meta_title}`}
                                            className="object-cover w-full aspect-[2.81] max-md:max-w-full"
                                        />
                                    </div> */}
                                    <div className="grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 items-center mt-5 w-full max-md:max-w-full justify-items-center">
                                        {section.images.map(
                                            (
                                                img: any,
                                                imgIndex: number,
                                                list: any
                                            ) => (
                                                <div
                                                    onClick={() => {
                                                        setcurrentimgid(
                                                            imgIndex
                                                        );
                                                        setcurrentsection(list);
                                                        setisopen(true);
                                                    }}
                                                    key={imgIndex}
                                                    className="flex overflow-hidden flex-col grow shrink self-stretch my-auto rounded-lg min-w-[240px] w-[400px] h-[312px] max-md:max-w-full"
                                                >
                                                    <img
                                                        loading="lazy"
                                                        src={`https://mts.caratcons.az/${img}`}
                                                        alt={`Sub image ${
                                                            imgIndex + 1
                                                        } for ${
                                                            section.meta_description
                                                        }`}
                                                        className="object-cover w-full h-full aspect-[1.96] max-md:max-w-full"
                                                    />
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                                <p
                                    className="mt-7 text-base text-black text-opacity-80 max-md:max-w-full"
                                    dangerouslySetInnerHTML={{
                                        __html: section.description[lang],
                                    }}
                                >
                                    {/* {section.description} */}
                                </p>
                            </div>
                        </section>
                    ))}
                    <div className="mt-[100px]"></div>
                </main>
                <Footer
                    data={data.translates}
                    lang={lang}
                    contact={data.contact}
                />
                <CustomAbsoluteSwiper
                    onclose={() => setisopen(false)}
                    images={currentsection}
                    isOpen={isopen}
                    currentIndex={currentimgid}
                />
            </div>
        </>
    );
}

export default PartnerPage;
