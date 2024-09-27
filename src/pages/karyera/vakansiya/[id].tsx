import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';
import strelka from '../../../../public/svg/strelka_black.svg';
import strelka1 from '../../../../public/svg/strelka1.svg';
import calendar from '../../../../public/svg/calendar.svg';
import location from '../../../../public/svg/Locationn.svg';
import aye from '../../../../public/svg/aye.svg';
import Image from 'next/image';
import { Blue_to_blue } from '@/components/btns';
import Request_blanck from '@/components/Request_blanck';

export default function vakancyid() {
    return (
        <div className="bg-white">
            <Header active={3} />
            <div className="bg-[#FBFBFB] h-[90px] w-full "></div>
            <main className="lg:px-[100px] md:px-[60px] px-[30px]">
                <div className="flex flex-row flex-wrap text-[18px] gap-3 mt-[41px] ">
                    <h5>Ana səhifə</h5>
                    <Image
                        src={strelka}
                        alt="strelka"
                        className=" opacity-60"
                    />
                    <h5>Karyera</h5>
                    <Image
                        src={strelka}
                        alt="strelka"
                        className=" opacity-60"
                    />
                    <h6 className=" opacity-60">vakansiya adi</h6>
                </div>
                <div className="flex lg:flex-row flex-col lg:justify-between justify-start w-full flex-wrap lg:h-[204px] h-fit px-10 lg:pl-10  bg-[#F7F8FA] rounded-lg lg:items-center items-start mt-7">
                    <div className="flex flex-col ">
                        <h2 className="lg:text-[32px] md:text-[28px] text-[20px] font-semibold text-[#050B20] lg:w-[900px] w-fit">
                            İşə qəbul və qiymətləndirmə şöbəsində Menecer/Şöbə
                            rəis müavini/Şöbə rəisi
                        </h2>
                        <div className="flex lg:flex-row md:flex-row flex-col mt-5 gap-5">
                            <div className="flex flex-row gap-2">
                                <Image src={calendar} alt="calendar" />
                                <p>12/09/2024-12/10/2024</p>
                            </div>
                            <div className="flex flex-row gap-2">
                                <Image src={aye} alt="calendar" />
                                <p>200 baxış</p>
                            </div>
                            <div className="flex flex-row gap-2">
                                <Image src={location} alt="calendar" />
                                <p>Bakı şəhəri</p>
                            </div>
                        </div>
                    </div>

                    {/* <Blue_to_blue text="Muraciet et" action={() => {}} /> */}
                </div>
                <div className="mt-5 mb-[100px]">
                    <Request_blanck />
                </div>
            </main>
            <Footer />
        </div>
    );
}
