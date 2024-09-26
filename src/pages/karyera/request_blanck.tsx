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

                <div className="lg:px-[100px] md:px-[60px] px-[30px] mt-[100px] mb-[100px]">
                    <div className="flex flex-row">
                        <div className="w-2/5 lg:block hidden h-[600px]">
                            <Image
                                src={CAnteiner}
                                alt="container"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                        <div className="flex flex-col py-[74px] pl-[24px]">
                            <h4 className="text-[40px] font-semibold">
                                İşə qəbul prosesi
                            </h4>
                            <p className="text-[18px] font-medium opacity-50  mt-5 lg:w-[712px] w-fit">
                                Sit arcu, egestas nunc, eros dignissim nunc,
                                pretium malesuada. Tristique est tellus non
                                maecenas in egestas aliquam. Eget dolor{' '}
                            </p>
                            <div className="mt-10 flex flex-col gap-6">
                                <div className=" flex flex-row gap-5 ">
                                    <div className="w-12 h-12 bg-[#FFF8DE] flex justify-center items-center rounded-lg">
                                        <Image src={strelka2} alt="strelka2" />
                                    </div>
                                    <div className="flex flex-col lg:w-[600px] w-fit text-[#000000] gap-[14px]">
                                        <h5 className="text-[18px] font-medium">
                                            Vakansiyaya müraciət etmək
                                        </h5>
                                        <p className="text-[16px] font-normal opacity-50">
                                            Velit lacus ipsum, urna, pretium
                                            lacinia. Mauris fermentum ut nunc
                                            est, nibh. Lectus eu vel et placerat
                                            sed velit morbi diam. Amet{' '}
                                        </p>
                                    </div>
                                </div>
                                <div className=" flex flex-row gap-5 ">
                                    <div className="w-12 h-12 bg-[#FFF8DE] flex justify-center items-center rounded-lg">
                                        <Image src={strelka2} alt="strelka2" />
                                    </div>
                                    <div className="flex flex-col lg:w-[600px] w-fit text-[#000000] gap-[14px]">
                                        <h5 className="text-[18px] font-medium">
                                            Vakansiyaya müraciət etmək
                                        </h5>
                                        <p className="text-[16px] font-normal opacity-50">
                                            Velit lacus ipsum, urna, pretium
                                            lacinia. Mauris fermentum ut nunc
                                            est, nibh. Lectus eu vel et placerat
                                            sed velit morbi diam. Amet{' '}
                                        </p>
                                    </div>
                                </div>
                                <div className=" flex flex-row gap-5 ">
                                    <div className="w-12 h-12 bg-[#FFF8DE] flex justify-center items-center rounded-lg">
                                        <Image src={strelka2} alt="strelka2" />
                                    </div>
                                    <div className="flex flex-col lg:w-[600px] w-fit text-[#000000] gap-[14px]">
                                        <h5 className="text-[18px] font-medium">
                                            Vakansiyaya müraciət etmək
                                        </h5>
                                        <p className="text-[16px] font-normal opacity-50">
                                            Velit lacus ipsum, urna, pretium
                                            lacinia. Mauris fermentum ut nunc
                                            est, nibh. Lectus eu vel et placerat
                                            sed velit morbi diam. Amet{' '}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" text-center bg-[#F7F8FA] rounded-lg mt-[100px]">
                        <h1 className="text-[36px] font-semibold pt-[60px] ">
                            Müraciət blankı
                        </h1>
                        <Request_blanck />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
