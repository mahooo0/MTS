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
                <div className="flex flex-row text-[18px] gap-3 mt-[41px]  ml-[100px]">
                    <h5>Ana səhifə</h5>
                    <Image
                        src={strelka}
                        alt="strelka"
                        className=" opacity-60"
                    />
                    <h5>Qalereya</h5>
                    <Image
                        src={strelka}
                        alt="strelka"
                        className=" opacity-60"
                    />
                    <h6 className=" opacity-60">name</h6>
                </div>
                <h1 className="text-[48px] font-semibold text-[#050B20] mb-[48px] mt-[28px] ml-[100px]">
                    Qalereya
                </h1>
                <div className="px-[100px]">
                    <div className="w-full flex  justify-end">
                        <div className="flex flex-row gap-3">
                            <Image
                                src={grid2}
                                alt="grid2"
                                onClick={() => setgrid_cols(2)}
                            />
                            <Image
                                src={grid4}
                                alt="grid4"
                                onClick={() => setgrid_cols(4)}
                            />
                        </div>
                    </div>
                    <div
                        className={` grid flex-row justify-between w-full grid-cols-${grid_cols} gap-5 mt-7 mb-[100px] `}
                    >
                        <div
                            className={
                                grid_cols === 4
                                    ? ''
                                    : 'w-full h-[310px] overflow-hidden rounded-lg '
                            }
                        >
                            <Image
                                src={ship}
                                alt="ship"
                                className={
                                    grid_cols === 4
                                        ? 'rounded-lg aspect-square'
                                        : 'w-full h-full rounded-lg object-fill'
                                }
                            />
                        </div>

                        <div
                            className={
                                grid_cols === 4
                                    ? ''
                                    : 'w-full h-[310px] overflow-hidden rounded-lg '
                            }
                        >
                            <Image
                                src={ship}
                                alt="ship"
                                className={
                                    grid_cols === 4
                                        ? 'rounded-lg aspect-square'
                                        : 'w-full h-full rounded-lg object-fill'
                                }
                            />
                        </div>
                        <div
                            className={
                                grid_cols === 4
                                    ? ''
                                    : 'w-full h-[310px] overflow-hidden rounded-lg '
                            }
                        >
                            <Image
                                src={ship}
                                alt="ship"
                                className={
                                    grid_cols === 4
                                        ? 'rounded-lg aspect-square'
                                        : 'w-full h-full rounded-lg object-fill'
                                }
                            />
                        </div>

                        <div
                            className={
                                grid_cols === 4
                                    ? ''
                                    : 'w-full h-[310px] overflow-hidden rounded-lg '
                            }
                        >
                            <Image
                                src={ship}
                                alt="ship"
                                className={
                                    grid_cols === 4
                                        ? 'rounded-lg aspect-square'
                                        : 'w-full h-full rounded-lg object-fill'
                                }
                            />
                        </div>
                        <div
                            className={
                                grid_cols === 4
                                    ? ''
                                    : 'w-full h-[310px] overflow-hidden rounded-lg '
                            }
                        >
                            <Image
                                src={ship}
                                alt="ship"
                                className={
                                    grid_cols === 4
                                        ? 'rounded-lg aspect-square'
                                        : 'w-full h-full rounded-lg object-fill'
                                }
                            />
                        </div>
                        <div
                            className={
                                grid_cols === 4
                                    ? ''
                                    : 'w-full h-[310px] overflow-hidden rounded-lg '
                            }
                        >
                            <Image
                                src={ship}
                                alt="ship"
                                className={
                                    grid_cols === 4
                                        ? 'rounded-lg aspect-square'
                                        : 'w-full h-full rounded-lg object-fill'
                                }
                            />
                        </div>
                        <div
                            className={
                                grid_cols === 4
                                    ? ''
                                    : 'w-full h-[310px] overflow-hidden rounded-lg '
                            }
                        >
                            <Image
                                src={ship}
                                alt="ship"
                                className={
                                    grid_cols === 4
                                        ? 'rounded-lg aspect-square'
                                        : 'w-full h-full rounded-lg object-fill'
                                }
                            />
                        </div>
                        <div
                            className={
                                grid_cols === 4
                                    ? ''
                                    : 'w-full h-[310px] overflow-hidden rounded-lg '
                            }
                        >
                            <Image
                                src={ship}
                                alt="ship"
                                className={
                                    grid_cols === 4
                                        ? 'rounded-lg aspect-square'
                                        : 'w-full h-full rounded-lg object-fill'
                                }
                            />
                        </div>
                        <div
                            className={
                                grid_cols === 4
                                    ? ''
                                    : 'w-full h-[310px] overflow-hidden rounded-lg '
                            }
                        >
                            <Image
                                src={ship}
                                alt="ship"
                                className={
                                    grid_cols === 4
                                        ? 'rounded-lg aspect-square'
                                        : 'w-full h-full rounded-lg object-fill'
                                }
                            />
                        </div>
                        <div
                            className={
                                grid_cols === 4
                                    ? ''
                                    : 'w-full h-[310px] overflow-hidden rounded-lg '
                            }
                        >
                            <Image
                                src={ship}
                                alt="ship"
                                className={
                                    grid_cols === 4
                                        ? 'rounded-lg aspect-square'
                                        : 'w-full h-full rounded-lg object-fill'
                                }
                            />
                        </div>
                        <div
                            className={
                                grid_cols === 4
                                    ? ''
                                    : 'w-full h-[310px] overflow-hidden rounded-lg '
                            }
                        >
                            <Image
                                src={ship}
                                alt="ship"
                                className={
                                    grid_cols === 4
                                        ? 'rounded-lg aspect-square'
                                        : 'w-full h-full rounded-lg object-fill'
                                }
                            />
                        </div>
                        <div
                            className={
                                grid_cols === 4
                                    ? ''
                                    : 'w-full h-[310px] overflow-hidden rounded-lg '
                            }
                        >
                            <Image
                                src={ship}
                                alt="ship"
                                className={
                                    grid_cols === 4
                                        ? 'rounded-lg aspect-square'
                                        : 'w-full h-full rounded-lg object-fill'
                                }
                            />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
