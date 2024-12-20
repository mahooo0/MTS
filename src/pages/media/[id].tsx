import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import strelka from '../../../public/svg/strelka_black.svg';
import ship from '../../../public/images/ship.png';
import grid2 from '../../../public/svg/grid2.svg';
import grid4 from '../../../public/svg/grid4.svg';
import { useAppDispatch } from '@/redux/store';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';
import CustomAbsoluteSwiper from '@/components/fixenimagesSwipper';

export default function id() {
    const [grid_cols, setgrid_cols] = useState<2 | 4>(4);
    const [reset, setreset] = useState<boolean>(false);
    const [lang, setlang] = useState<string>('az');
    const [data, setdata] = useState<any>();
    const [isopen, setisopen] = useState<boolean>(false);
    const [currentimgid, setcurrentimgid] = useState<number>(1);
    const baseurl = 'https://mts.caratcons.az/';
    useEffect(() => {
        const Id = localStorage.getItem('scrollto');
        if (Id) {
            const element = document.getElementById(Id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            localStorage.removeItem('scrollto');
        }
        const lng = localStorage.getItem('language') || 'en';
        setlang(lng);
    }, [reset]);
    const router = useRouter();
    const { id } = router.query;
    console.log(id);

    useEffect(() => {
        (async () => {
            if (id) {
                try {
                    const res = await fetch(
                        `https://mts.caratcons.az/api/gallery-detail/${id}`
                    );
                    const data = await res.json();
                    setdata(data.data);
                } catch (error) {
                    console.log(error);
                }
            }
        })();
    }, [id]);

    const dispatch = useAppDispatch();

    if (!data) {
        return <></>;
    } else {
        const blog = data.gallery;
        return (
            <div className="relative">
                <Header
                    setReset={() => setreset((prew) => !prew)}
                    active={6}
                    data={data.translates}
                />
                <div className="bg-[#FBFBFB] h-[90px] w-full "></div>
                <main>
                    <div className="flex flex-row lg:text-[18px] md:text-[18px] text-[12px] items-center gap-3 mt-[41px]  lg:ml-[100px] md:ml-[60px] ml-[30px]">
                        <Link href={'/'}>
                            <h5>{data.translates.home[lang]}</h5>
                        </Link>
                        <Image
                            src={strelka}
                            alt="strelka"
                            className=" opacity-60"
                        />
                        <Link href={'/media'}>
                            <h5>{data.translates.gallery[lang]}</h5>
                        </Link>
                        <Image
                            src={strelka}
                            alt="strelka"
                            className=" opacity-60"
                        />
                        <h6 className=" opacity-60">{blog.title[lang]}</h6>
                    </div>
                    <h1 className="lg:text-[48px] md:text-[36px] text-[24px] font-semibold text-[#050B20] mb-[48px] mt-[28px] lg:ml-[100px] md:ml-[60px] ml-[30px]">
                        {data.translates.gallery[lang]}
                    </h1>
                    <div className="lg:px-[100px] md:px-[60px] px-[30px]">
                        <div className="w-full lg:flex  hidden   justify-end">
                            <div className="flex flex-row gap-3">
                                {/* <Image
                                    className={
                                        grid_cols === 2
                                            ? ' border-b border-black '
                                            : ''
                                    }
                                    src={grid2}
                                    alt="grid2"
                                    onClick={() => setgrid_cols(2)}
                                /> */}
                                {/* <Image
                                    className={
                                        grid_cols === 4
                                            ? ' border-b border-black '
                                            : ''
                                    }
                                    src={grid4}
                                    alt="grid4"
                                    onClick={() => setgrid_cols(4)}
                                /> */}
                            </div>
                        </div>
                        <div
                            className={
                                grid_cols === 2
                                    ? ` grid flex-row justify-between w-full lg:grid-cols-2 md:grid-cols-2 grid-cols-1  gap-5 mt-7 mb-[100px] `
                                    : ` grid flex-row justify-between w-full lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-7 mb-[100px] `
                            }
                        >
                            {grid_cols === 4
                                ? blog.images.map(
                                      (item: any, index: number) => (
                                          <div
                                              className={
                                                  'w-full h-[310px] overflow-hidden rounded-lg '
                                              }
                                              onClick={() => {
                                                  setcurrentimgid(index);
                                                  setisopen(true);
                                              }}
                                          >
                                              <img
                                                  src={`https://mts.caratcons.az/${item}`}
                                                  alt="ship"
                                                  className={
                                                      // grid_cols === 4
                                                      //     ? ' aspect-square w-full h-full rounded-lg'
                                                      //     :
                                                      'w-full h-full rounded-lg object-fill'
                                                  }
                                              />
                                          </div>
                                      )
                                  )
                                : blog.big_images.map(
                                      (item: any, index: number) => (
                                          <div
                                              className={''}
                                              onClick={() => {
                                                  setcurrentimgid(index);
                                                  setisopen(true);
                                              }}
                                          >
                                              <img
                                                  src={`https://mts.caratcons.az/${item}`}
                                                  alt="ship"
                                                  className={
                                                      ' aspect-square w-full h-full max-h-[300px] rounded-lg'
                                                  }
                                              />
                                          </div>
                                      )
                                  )}
                            {/* {blog.images.map((item: any) => (
                                <div
                                    className={
                                        'w-full h-[310px] overflow-hidden rounded-lg '
                                    }
                                >
                                    <img
                                        src={`https://mts.caratcons.az/${item}`}
                                        alt="ship"
                                        className={
                                            // grid_cols === 4
                                            //     ? ' aspect-square w-full h-full rounded-lg'
                                            //     :
                                             'w-full h-full rounded-lg object-fill'
                                        }
                                    />
                                </div>
                            ))} */}
                        </div>
                    </div>
                </main>
                <Footer
                    data={data.translates}
                    contact={data.contact}
                    lang={lang}
                />
                <CustomAbsoluteSwiper
                    onclose={() => setisopen(false)}
                    images={data.gallery.images}
                    isOpen={isopen}
                    currentIndex={currentimgid}
                />
            </div>
        );
    }

    console.log(data);
}
