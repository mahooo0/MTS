import Image from 'next/image';
import React, { ReactNode } from 'react';
import clockicon from '../../public/images/clock.png';
import strelka from '../../public/svg/option_strelka_blue.svg';
import strelka2 from '../../public/svg/option_strelka.svg';

function Asidemodule({
    active,
    children,
    action,
}: {
    active: boolean;
    children: ReactNode;
    action: () => void;
}) {
    if (active) {
        return (
            <div className="flex flex-row lg:w-[287px] w-full h-[56px] justify-between rounded-lg bg-white text-[#2961B1] items-center p-3 gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#C9DEF7] flex justify-center items-center">
                    <Image src={clockicon} alt="clockicon" width={20} />
                </div>
                <p className="text-[14px] font-normal w-[183px] flex flex-wrap">
                    {children}
                </p>
                <Image src={strelka} alt="strelka" />
            </div>
        );
    } else {
        return (
            <div
                onClick={() => {
                    action();
                }}
                className="flex flex-row lg:w-[287px] w-full h-[56px] rounded-lg bg-white  text-black text-opacity-80 items-center p-4 gap-3 justify-between"
            >
                <p className="text-[14px] font-normal w-[183px] flex flex-wrap ">
                    {children}
                </p>
                <Image
                    src={strelka2}
                    alt="strelka"
                    style={{ transform: 'rotate(-90deg)' }}
                />
            </div>
        );
    }
}
export default function Services_aside({ action }: { action: () => void }) {
    return (
        <div className="lg:w-fit w-full h-fit bg-[#F7F8FA]  border rounded-lg  lg:mt-10 mt-14 flex flex-col text-center ">
            <h5 className="text-[20px] font-semibold mt-5">Xidmətlərimiz</h5>
            <p className="text-[14px] font-normal mt-2">
                Gəmi təmiri xidmətlərimizə daxildir:
            </p>
            <div className="px-[9px] flex flex-col gap-[6px] pb-6 pt-6">
                <Asidemodule
                    active={true}
                    action={() => {
                        action();
                    }}
                >
                    Elektrik avadanlıqlarının diaqnostikası və tarirovkası
                </Asidemodule>
                <Asidemodule
                    active={false}
                    action={() => {
                        action();
                    }}
                >
                    Mexanika sahəsi üzrə
                </Asidemodule>
                <Asidemodule
                    active={false}
                    action={() => {
                        action();
                    }}
                >
                    Mexanika sahəsi üzrə
                </Asidemodule>
                <Asidemodule
                    active={false}
                    action={() => {
                        action();
                    }}
                >
                    Mexanika sahəsi üzrə
                </Asidemodule>
                <Asidemodule
                    active={false}
                    action={() => {
                        action();
                    }}
                >
                    Mexanika sahəsi üzrə
                </Asidemodule>
                <Asidemodule
                    active={false}
                    action={() => {
                        action();
                    }}
                >
                    Mexanika sahəsi üzrə
                </Asidemodule>
            </div>
        </div>
    );
}
