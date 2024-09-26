import React, { useRef } from 'react';
import email_icon from '../../public/svg/email.svg';
import cv_icon from '../../public/svg/cv.svg';
import image_icon from '../../public/svg/image.svg';
import Image from 'next/image';
import { Blue_to_blue } from './btns';
export default function Request_blanck() {
    const cvinpt = useRef<any>();
    const Imageinpt = useRef<any>();
    const triggerFileSelectPopup = () => cvinpt.current.click();
    const triggerFileSelectPopup2 = () => Imageinpt.current.click();
    return (
        <div className="w-full  bg-[#F7F8FA] rounded-lg pt-[48px] px-[24px]">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Ad"
                    className="h-[56px] w-full focus:outline-none bg-white rounded-lg p-[17px] text-[16px] font-normal"
                />
                <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Soyad"
                    className="h-[56px] w-full focus:outline-none bg-white rounded-lg p-[17px] text-[16px] font-normal"
                />
                <div className="h-[56px] w-full bg-white rounded-lg text-[16px] font-normal flex flex-row  items-center">
                    <div className="p-[17px] ">
                        <Image src={email_icon} alt="email_icon" />
                    </div>
                    <input
                        type="email"
                        name=""
                        id=""
                        pattern="Email"
                        className="h-[56px] w-full focus:outline-none bg-white rounded-lg p-[17px] text-[16px] font-normal"
                    />
                    <div />
                </div>
                <div className="h-[56px] w-full bg-white rounded-lg text-[16px] font-normal flex flex-row  items-center">
                    <div className="p-[17px]">+994</div>
                    <input
                        type="tel"
                        name="azerbaijanPhone"
                        id="azerbaijanPhone"
                        className="h-[56px] w-full bg-white rounded-lg p-[17px] pl-0 focus:outline-none text-[16px] font-normal"
                        placeholder=" xx xxx xx xx"
                        pattern="\+994\s?\d{2}\s?\d{3}\s?\d{2}\s?\d{2}"
                        title="Azerbaijan phone numbers should be in the format: +994 xx xxx xx xx"
                        required
                    />
                </div>
                <input type="file" className=" hidden" ref={cvinpt} />
                <input type="file" className=" hidden" ref={Imageinpt} />
                <div>
                    <label
                        htmlFor=""
                        className="text-[14px] font-normal opacity-60 mt-5"
                    >
                        CV üçün klik edin
                    </label>
                    <div className="w-full h-[92px] flex flex-col justify-center items-center bg-[#FFFFFF] rounded-lg border-dashed border-2 mt-[12px] border-[#2961B1]">
                        <div
                            className="flex flex-row text-[#2961B1] text-[16px] font-medium gap-3 cursor-pointer"
                            onClick={() => {
                                triggerFileSelectPopup();
                            }}
                        >
                            <Image src={cv_icon} alt="cv_icon" />
                            CV faylın seç
                        </div>
                        <p className="text-[14px] font-normal text-center opacity-60 mt-2">
                            Yüklədiyiniz fayl PDF, DOC, DOCX formatında olmalı (
                            max 3 mb)
                        </p>
                    </div>
                </div>
                <div className="">
                    <label
                        htmlFor=""
                        className="text-[14px] font-normal opacity-60 mt-5"
                    >
                        Şəkil üçün klik edin
                    </label>
                    <div className="w-full h-[92px] flex flex-col justify-center items-center bg-[#FFFFFF] rounded-lg border-dashed border-2 mt-[12px] border-[#2961B1]">
                        <div
                            className="flex flex-row text-[#2961B1] text-[16px] font-medium gap-3 cursor-pointer"
                            onClick={() => {
                                triggerFileSelectPopup2();
                            }}
                        >
                            <Image src={image_icon} alt="image_icon" />
                            Dəyişmək üçün kliklə
                        </div>
                        <p className="text-[14px] font-normal opacity-60 mt-2">
                            PNG, JPG (Max 3 mb)
                        </p>
                    </div>
                </div>
                <div></div>
                <div className="flex lg:justify-end justify-center mb-10">
                    <Blue_to_blue text={'Göndər'} action={() => {}} />
                </div>
            </div>
        </div>
    );
}
