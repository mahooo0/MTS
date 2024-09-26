import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Image from 'next/image';
import React, { useState } from 'react';
import strelka from '../../../public/svg/strelka_black.svg';
import ship from '../../../public/images/ship.png';
import grid2 from '../../../public/svg/grid2.svg';
import grid4 from '../../../public/svg/grid4.svg';

export default function id() {
    const [grid_cols, setgrid_cols] = useState<2 | 4>(2);
    return (
        <div>
            <Header active={6} />
            <div className="bg-[#FBFBFB] h-[90px] w-full "></div>
            <main>
                <div className="flex flex-row text-[18px] gap-3 mt-[41px] lg:ml-[100px] md:ml-[60px] ml-[30px]">
                    <h5>Ana səhifə</h5>
                    <Image
                        src={strelka}
                        alt="strelka"
                        className=" opacity-60"
                    />

                    <h6 className=" opacity-60">Vidiolar</h6>
                </div>
                <h1 className="text-[48px] font-semibold text-[#050B20] mb-[48px] mt-[28px] lg:ml-[100px] md:ml-[60px] ml-[30px]">
                    Videolar
                </h1>
                <div className="lg:px-[100px]  md:px-[60px] px-[30px]  flex flex-col">
                    <video
                        controls={true}
                        width="600"
                        muted
                        loop
                        className="w-full rounded-lg"
                    >
                        <source src="/videos/vid.mp4" type="video/mp4" />
                    </video>
                    <div className="grid flex-row lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-5">
                        <div className=" aspect-square">
                            <video
                                controls={false}
                                width="600"
                                muted
                                loop
                                className="w-full rounded-lg h-full object-fill"
                            >
                                <source
                                    src="/videos/vid.mp4"
                                    type="video/mp4"
                                />
                            </video>
                        </div>
                        <div className=" aspect-square">
                            <video
                                controls={false}
                                width="600"
                                muted
                                loop
                                className="w-full rounded-lg h-full object-fill"
                            >
                                <source
                                    src="/videos/vid.mp4"
                                    type="video/mp4"
                                />
                            </video>
                        </div>
                        <div className=" aspect-square">
                            <video
                                controls={false}
                                width="600"
                                muted
                                loop
                                className="w-full rounded-lg h-full object-fill"
                            >
                                <source
                                    src="/videos/vid.mp4"
                                    type="video/mp4"
                                />
                            </video>
                        </div>
                        <div className=" aspect-square">
                            <video
                                controls={false}
                                width="600"
                                muted
                                loop
                                className="w-full rounded-lg h-full object-fill"
                            >
                                <source
                                    src="/videos/vid.mp4"
                                    type="video/mp4"
                                />
                            </video>
                        </div>
                        <div className=" aspect-square">
                            <video
                                controls={false}
                                width="600"
                                muted
                                loop
                                className="w-full rounded-lg h-full object-fill"
                            >
                                <source
                                    src="/videos/vid.mp4"
                                    type="video/mp4"
                                />
                            </video>
                        </div>
                        <div className=" aspect-square">
                            <video
                                controls={false}
                                width="600"
                                muted
                                loop
                                className="w-full rounded-lg h-full object-fill"
                            >
                                <source
                                    src="/videos/vid.mp4"
                                    type="video/mp4"
                                />
                            </video>
                        </div>
                        <div className=" aspect-square">
                            <video
                                controls={false}
                                width="600"
                                muted
                                loop
                                className="w-full rounded-lg h-full object-fill"
                            >
                                <source
                                    src="/videos/vid.mp4"
                                    type="video/mp4"
                                />
                            </video>
                        </div>
                        <div className=" aspect-square">
                            <video
                                controls={false}
                                width="600"
                                muted
                                loop
                                className="w-full rounded-lg h-full object-fill"
                            >
                                <source
                                    src="/videos/vid.mp4"
                                    type="video/mp4"
                                />
                            </video>
                        </div>
                        <div className=" aspect-square">
                            <video
                                controls={false}
                                width="600"
                                muted
                                loop
                                className="w-full rounded-lg h-full object-fill"
                            >
                                <source
                                    src="/videos/vid.mp4"
                                    type="video/mp4"
                                />
                            </video>
                        </div>
                        <div className=" aspect-square">
                            <video
                                controls={false}
                                width="600"
                                muted
                                loop
                                className="w-full rounded-lg h-full object-fill"
                            >
                                <source
                                    src="/videos/vid.mp4"
                                    type="video/mp4"
                                />
                            </video>
                        </div>
                        <div className=" aspect-square">
                            <video
                                controls={false}
                                width="600"
                                muted
                                loop
                                className="w-full rounded-lg h-full object-fill"
                            >
                                <source
                                    src="/videos/vid.mp4"
                                    type="video/mp4"
                                />
                            </video>
                        </div>
                        <div className=" aspect-square">
                            <video
                                controls={false}
                                width="600"
                                muted
                                loop
                                className="w-full rounded-lg h-full object-fill"
                            >
                                <source
                                    src="/videos/vid.mp4"
                                    type="video/mp4"
                                />
                            </video>
                        </div>
                    </div>
                    <div className="flex  justify-center mt-[20px] mb-[100px]">
                        <div className="flex flex-row gap-5">
                            <Image
                                src={strelka}
                                alt="strelka"
                                style={{ transform: 'rotate(180deg)' }}
                            />
                            <div className="flex flex-row gap-3">
                                <div className="w-10 h-10 rounded-full flex justify-center items-center border border-black border-opacity-10">
                                    1
                                </div>
                                <div className="w-10 h-10 rounded-full flex justify-center items-center text-[#2961B1] border border-[#2961B1] ">
                                    2
                                </div>
                                <div className="w-10 h-10 rounded-full flex justify-center items-center border border-black border-opacity-10">
                                    3
                                </div>
                            </div>
                            <Image src={strelka} alt="strelka" />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
