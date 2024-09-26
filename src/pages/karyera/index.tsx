import Header from '@/components/Header';
import Image from 'next/image';
import React, { useState } from 'react';
import strelka from '../../../public/svg/strelka_black.svg';
import strelka2 from '../../../public/svg/strelka2.svg';
import Footer from '@/components/Footer';
import CAnteiner from '../../../public/images/container.png';
import Rounded_Swipper from '@/components/Rounded_Swipper';
import Request_blanck from '@/components/Request_blanck';
import { useRouter } from 'next/router';
export default function index() {
    const [variant, setvariant] = useState<1 | 2 | 3>(3);
    const router = useRouter();
    return (
        <div className="bg-white">
            <Header active={3} />
            <div className="bg-[#FBFBFB] h-[90px] w-full "></div>
            <main className="">
                <div className="flex flex-row lg:px-[100px] md:px-[60px] px-[30px]">
                    <div className="flex flex-col lg:w-1/2 w-full">
                        <div className="flex flex-row text-[18px] gap-3 mt-[41px] ">
                            <h5>Ana səhifə</h5>
                            <Image
                                src={strelka}
                                alt="strelka"
                                className=" opacity-60"
                            />
                            <h6 className=" opacity-60">Karyera</h6>
                        </div>
                        <h1 className="lg:text-[48px] md:text-[36px] text-[28px]  font-semibold mt-[68px]">
                            Karyerana ilk addımını “Marine Technical Solutions”
                            QSC-də at!
                        </h1>
                        <p className="lg:text-[18px] text-[16px] text-wrap font-normal lg:w-[467px] mt-[20px]">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. 
                        </p>
                        <div className="mt-[124px] flex flex-row flex-wrap text-nowrap gap-3 justify-center">
                            <button
                                onClick={() => router.push('/karyera')}
                                className="px-4 py-2 rounded-lg border border-black border-opacity-10 hover:bg-[#2961B1] hover:text-white hover:border-none"
                            >
                                Vakansiyalar
                            </button>
                            <button
                                onClick={() => router.push('/karyera/cours')}
                                className="px-4 py-2 rounded-lg border border-black border-opacity-10 hover:bg-[#2961B1] hover:text-white hover:border-none"
                            >
                                Peşəkar inkişaf və təlim
                            </button>
                            <button
                                onClick={() =>
                                    router.push('/karyera/request_blanck')
                                }
                                className="px-4 py-2 rounded-lg border border-black border-opacity-10 hover:bg-[#2961B1] hover:text-white hover:border-none"
                            >
                                Müraciət blankı
                            </button>
                        </div>
                    </div>
                    <div className="lg:flex hidden justify-center items-center p-10 pb-0 w-1/2">
                        <Image
                            src={CAnteiner}
                            alt="CAnteiner"
                            className="h-full object-cover rounded-lg "
                        />
                    </div>
                </div>

                <div className="lg:px-[100px] md:px-[60px] px-[30px]">
                    <h1 className="text-[36px] font-semibold text-center mt-[100px]">
                        Vakansiyalar
                    </h1>
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 justify-center  gap-5 mt-10">
                        <div
                            onClick={() => router.push('/karyera/aa')}
                            className="w-[295px] h-[195px] p-5 flex flex-col justify-between bg-[#F7F8FA] rounded-lg"
                        >
                            <h6 className="text-[18px] font-semibold">
                                İşə qəbul və qiymətləndirmə şöbəsində
                                Menecer/Şöbə rəis müavini/Şöbə rəisi
                            </h6>
                            <div className="flex flex-row justify-between items-center">
                                <p className="text-[14px] font-normal opacity-70">
                                    12/09/2024
                                </p>
                                <div className="bg-white w-8 h-8 rounded-full flex justify-center items-center">
                                    <Image
                                        src={strelka2}
                                        alt="strelka 2"
                                        width={16}
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            onClick={() => router.push('/karyera/aa')}
                            className="w-[295px] h-[195px] p-5 flex flex-col justify-between bg-[#F7F8FA] rounded-lg"
                        >
                            <h6 className="text-[18px] font-semibold">
                                İşə qəbul və qiymətləndirmə şöbəsində
                                Menecer/Şöbə rəis müavini/Şöbə rəisi
                            </h6>
                            <div className="flex flex-row justify-between items-center">
                                <p className="text-[14px] font-normal opacity-70">
                                    12/09/2024
                                </p>
                                <div className="bg-white w-8 h-8 rounded-full flex justify-center items-center">
                                    <Image
                                        src={strelka2}
                                        alt="strelka 2"
                                        width={16}
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            onClick={() => router.push('/karyera/aa')}
                            className="w-[295px] h-[195px] p-5 flex flex-col justify-between bg-[#F7F8FA] rounded-lg"
                        >
                            <h6 className="text-[18px] font-semibold">
                                İşə qəbul və qiymətləndirmə şöbəsində
                                Menecer/Şöbə rəis müavini/Şöbə rəisi
                            </h6>
                            <div className="flex flex-row justify-between items-center">
                                <p className="text-[14px] font-normal opacity-70">
                                    12/09/2024
                                </p>
                                <div className="bg-white w-8 h-8 rounded-full flex justify-center items-center">
                                    <Image
                                        src={strelka2}
                                        alt="strelka 2"
                                        width={16}
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            onClick={() => router.push('/karyera/aa')}
                            className="w-[295px] h-[195px] p-5 flex flex-col justify-between bg-[#F7F8FA] rounded-lg"
                        >
                            <h6 className="text-[18px] font-semibold">
                                İşə qəbul və qiymətləndirmə şöbəsində
                                Menecer/Şöbə rəis müavini/Şöbə rəisi
                            </h6>
                            <div className="flex flex-row justify-between items-center">
                                <p className="text-[14px] font-normal opacity-70">
                                    12/09/2024
                                </p>
                                <div className="bg-white w-8 h-8 rounded-full flex justify-center items-center">
                                    <Image
                                        src={strelka2}
                                        alt="strelka 2"
                                        width={16}
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            onClick={() => router.push('/karyera/aa')}
                            className="w-[295px] h-[195px] p-5 flex flex-col justify-between bg-[#F7F8FA] rounded-lg"
                        >
                            <h6 className="text-[18px] font-semibold">
                                İşə qəbul və qiymətləndirmə şöbəsində
                                Menecer/Şöbə rəis müavini/Şöbə rəisi
                            </h6>
                            <div className="flex flex-row justify-between items-center">
                                <p className="text-[14px] font-normal opacity-70">
                                    12/09/2024
                                </p>
                                <div className="bg-white w-8 h-8 rounded-full flex justify-center items-center">
                                    <Image
                                        src={strelka2}
                                        alt="strelka 2"
                                        width={16}
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            onClick={() => router.push('/karyera/aa')}
                            className="w-[295px] h-[195px] p-5 flex flex-col justify-between bg-[#F7F8FA] rounded-lg"
                        >
                            <h6 className="text-[18px] font-semibold">
                                İşə qəbul və qiymətləndirmə şöbəsində
                                Menecer/Şöbə rəis müavini/Şöbə rəisi
                            </h6>
                            <div className="flex flex-row justify-between items-center">
                                <p className="text-[14px] font-normal opacity-70">
                                    12/09/2024
                                </p>
                                <div className="bg-white w-8 h-8 rounded-full flex justify-center items-center">
                                    <Image
                                        src={strelka2}
                                        alt="strelka 2"
                                        width={16}
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            onClick={() => router.push('/karyera/aa')}
                            className="w-[295px] h-[195px] p-5 flex flex-col justify-between bg-[#F7F8FA] rounded-lg"
                        >
                            <h6 className="text-[18px] font-semibold">
                                İşə qəbul və qiymətləndirmə şöbəsində
                                Menecer/Şöbə rəis müavini/Şöbə rəisi
                            </h6>
                            <div className="flex flex-row justify-between items-center">
                                <p className="text-[14px] font-normal opacity-70">
                                    12/09/2024
                                </p>
                                <div className="bg-white w-8 h-8 rounded-full flex justify-center items-center">
                                    <Image
                                        src={strelka2}
                                        alt="strelka 2"
                                        width={16}
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            onClick={() => router.push('/karyera/aa')}
                            className="w-[295px] h-[195px] p-5 flex flex-col justify-between bg-[#F7F8FA] rounded-lg"
                        >
                            <h6 className="text-[18px] font-semibold">
                                İşə qəbul və qiymətləndirmə şöbəsində
                                Menecer/Şöbə rəis müavini/Şöbə rəisi
                            </h6>
                            <div className="flex flex-row justify-between items-center">
                                <p className="text-[14px] font-normal opacity-70">
                                    12/09/2024
                                </p>
                                <div className="bg-white w-8 h-8 rounded-full flex justify-center items-center">
                                    <Image
                                        src={strelka2}
                                        alt="strelka 2"
                                        width={16}
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            onClick={() => router.push('/karyera/aa')}
                            className="w-[295px] h-[195px] p-5 flex flex-col justify-between bg-[#F7F8FA] rounded-lg"
                        >
                            <h6 className="text-[18px] font-semibold">
                                İşə qəbul və qiymətləndirmə şöbəsində
                                Menecer/Şöbə rəis müavini/Şöbə rəisi
                            </h6>
                            <div className="flex flex-row justify-between items-center">
                                <p className="text-[14px] font-normal opacity-70">
                                    12/09/2024
                                </p>
                                <div className="bg-white w-8 h-8 rounded-full flex justify-center items-center">
                                    <Image
                                        src={strelka2}
                                        alt="strelka 2"
                                        width={16}
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            onClick={() => router.push('/karyera/aa')}
                            className="w-[295px] h-[195px] p-5 flex flex-col justify-between bg-[#F7F8FA] rounded-lg"
                        >
                            <h6 className="text-[18px] font-semibold">
                                İşə qəbul və qiymətləndirmə şöbəsində
                                Menecer/Şöbə rəis müavini/Şöbə rəisi
                            </h6>
                            <div className="flex flex-row justify-between items-center">
                                <p className="text-[14px] font-normal opacity-70">
                                    12/09/2024
                                </p>
                                <div className="bg-white w-8 h-8 rounded-full flex justify-center items-center">
                                    <Image
                                        src={strelka2}
                                        alt="strelka 2"
                                        width={16}
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            onClick={() => router.push('/karyera/aa')}
                            className="w-[295px] h-[195px] p-5 flex flex-col justify-between bg-[#F7F8FA] rounded-lg"
                        >
                            <h6 className="text-[18px] font-semibold">
                                İşə qəbul və qiymətləndirmə şöbəsində
                                Menecer/Şöbə rəis müavini/Şöbə rəisi
                            </h6>
                            <div className="flex flex-row justify-between items-center">
                                <p className="text-[14px] font-normal opacity-70">
                                    12/09/2024
                                </p>
                                <div className="bg-white w-8 h-8 rounded-full flex justify-center items-center">
                                    <Image
                                        src={strelka2}
                                        alt="strelka 2"
                                        width={16}
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            onClick={() => router.push('/karyera/aa')}
                            className="w-[295px] h-[195px] p-5 flex flex-col justify-between bg-[#F7F8FA] rounded-lg"
                        >
                            <h6 className="text-[18px] font-semibold">
                                İşə qəbul və qiymətləndirmə şöbəsində
                                Menecer/Şöbə rəis müavini/Şöbə rəisi
                            </h6>
                            <div className="flex flex-row justify-between items-center">
                                <p className="text-[14px] font-normal opacity-70">
                                    12/09/2024
                                </p>
                                <div className="bg-white w-8 h-8 rounded-full flex justify-center items-center">
                                    <Image
                                        src={strelka2}
                                        alt="strelka 2"
                                        width={16}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-[295px] h-[195px] p-5 flex flex-col justify-between bg-[#F7F8FA] rounded-lg">
                            <h6 className="text-[18px] font-semibold">
                                İşə qəbul və qiymətləndirmə şöbəsində
                                Menecer/Şöbə rəis müavini/Şöbə rəisi
                            </h6>
                            <div className="flex flex-row justify-between items-center">
                                <p className="text-[14px] font-normal opacity-70">
                                    12/09/2024
                                </p>
                                <div className="bg-white w-8 h-8 rounded-full flex justify-center items-center">
                                    <Image
                                        src={strelka2}
                                        alt="strelka 2"
                                        width={16}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-[295px] h-[195px] p-5 flex flex-col justify-between bg-[#F7F8FA] rounded-lg">
                            <h6 className="text-[18px] font-semibold">
                                İşə qəbul və qiymətləndirmə şöbəsində
                                Menecer/Şöbə rəis müavini/Şöbə rəisi
                            </h6>
                            <div className="flex flex-row justify-between items-center">
                                <p className="text-[14px] font-normal opacity-70">
                                    12/09/2024
                                </p>
                                <div className="bg-white w-8 h-8 rounded-full flex justify-center items-center">
                                    <Image
                                        src={strelka2}
                                        alt="strelka 2"
                                        width={16}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-[295px] h-[195px] p-5 flex flex-col justify-between bg-[#F7F8FA] rounded-lg">
                            <h6 className="text-[18px] font-semibold">
                                İşə qəbul və qiymətləndirmə şöbəsində
                                Menecer/Şöbə rəis müavini/Şöbə rəisi
                            </h6>
                            <div className="flex flex-row justify-between items-center">
                                <p className="text-[14px] font-normal opacity-70">
                                    12/09/2024
                                </p>
                                <div className="bg-white w-8 h-8 rounded-full flex justify-center items-center">
                                    <Image
                                        src={strelka2}
                                        alt="strelka 2"
                                        width={16}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-[295px] h-[195px] p-5 flex flex-col justify-between bg-[#F7F8FA] rounded-lg">
                            <h6 className="text-[18px] font-semibold">
                                İşə qəbul və qiymətləndirmə şöbəsində
                                Menecer/Şöbə rəis müavini/Şöbə rəisi
                            </h6>
                            <div className="flex flex-row justify-between items-center">
                                <p className="text-[14px] font-normal opacity-70">
                                    12/09/2024
                                </p>
                                <div className="bg-white w-8 h-8 rounded-full flex justify-center items-center">
                                    <Image
                                        src={strelka2}
                                        alt="strelka 2"
                                        width={16}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex mb-[100px] justify-center mt-10">
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
