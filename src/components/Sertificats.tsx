import Image from 'next/image';
import React from 'react';
import image1 from '../../public/images/sertificat.png';
import link from '../../public/svg/link.svg';
import { Blue_to_White } from './btns';
export default function Sertificat() {
    return (
        <div className=" flex lg:flex-row md:flex-row flex-col lg:w-[610px] md:w-[610px] w-[300px] lg:h-[410px] h-fit bg-white">
            <div className="p-5 lg:w-[410px] md:w-[410px] w-[280px] h-full ">
                <Image
                    src={image1}
                    alt="image"
                    className=" h-full  object-fill"
                />
            </div>
            <div className="flex flex-col justify-center text-black lg:p-0 p-5 ">
                <p className="text-[14px] font-normal opacity-60 mb-5">01/03</p>
                <h5 className="w-[270px] text-[18px] font-medium mb-5">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                </h5>
                <Blue_to_White text="PDF yüklə" />
                <div className="flex flex-row mt-10  items-center gap-4">
                    <p>Paylaş:</p>
                    <div className="flex justify-center items-center w-10 h-10 rounded-full bg-[#F5F5F5]">
                        <Image src={link} alt="link" />
                    </div>
                </div>
            </div>
        </div>
    );
}
