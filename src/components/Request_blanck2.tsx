import React, { useRef, useState } from 'react';
import { useFormik } from 'formik';
import Image from 'next/image';
import email_icon from '../../public/svg/email.svg';
import cv_icon from '../../public/svg/cv.svg';
import image_icon from '../../public/svg/image.svg';
import { Blue_to_blue } from './btns';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Request_blanck2() {
    const [cv, setcv] = useState<any>();
    const [img, setimg] = useState<any>();
    const cvinpt = useRef<any>();
    const Imageinpt = useRef<any>();
    const triggerFileSelectPopup = () => cvinpt.current.click();
    const triggerFileSelectPopup2 = () => Imageinpt.current.click();
    const router = useRouter();
    const formik = useFormik({
        initialValues: {
            fullName: '',
            vacancyName: '',
            email: '',
            phone: '',
            cvFile: null,
            imageFile: null,
        },
        onSubmit: (values) => {
            console.log(values);
            // Handle form submission here
            if (values.cvFile === null || values.imageFile === null) {
                toast.error('ADD cv file');
                return;
            } else {
                (async () => {
                    const body = new FormData();
                    body.append('name', values.fullName);
                    body.append('vacancy_name', values.vacancyName);
                    body.append('email', values.email);
                    if (values.cvFile) {
                        body.append('cv', values.cvFile); // Only append if it's a valid file
                    }
                    if (values.imageFile) {
                        body.append('image', values.imageFile); // Only append if it's a valid file
                    }

                    body.append('phone', values.phone);
                    const res = await axios.put(
                        'https://mts.caratcons.az/api/apply'
                    );
                    const status = res.status;
                    if (status === 201) {
                        router.push('/karyera/aply');
                    }
                })();
            }
        },
    });

    return (
        <form
            onSubmit={formik.handleSubmit}
            className="w-full bg-[#F7F8FA] rounded-lg pt-[48px] px-[24px]"
        >
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                <input
                    type="text"
                    name="fullName"
                    placeholder="Ad Soyad"
                    className="h-[56px] w-full focus:outline-none bg-white rounded-lg p-[17px] text-[16px] font-normal"
                    onChange={formik.handleChange}
                    value={formik.values.fullName}
                />
                <input
                    type="text"
                    name="vacancyName"
                    placeholder="Müraciət etdiyiniz vakansiyanın adı"
                    className="h-[56px] w-full focus:outline-none bg-white rounded-lg p-[17px] text-[16px] font-normal"
                    onChange={formik.handleChange}
                    value={formik.values.vacancyName}
                />
                <div className="h-[56px] w-full bg-white rounded-lg text-[16px] font-normal flex items-center">
                    <div className="p-[17px]">
                        <Image src={email_icon} alt="email_icon" />
                    </div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="h-[56px] w-full focus:outline-none bg-white rounded-lg p-[17px] text-[16px] font-normal"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                </div>
                <div className="h-[56px] w-full bg-white rounded-lg text-[16px] font-normal flex items-center">
                    <div className="p-[17px]">+994</div>
                    <input
                        type="tel"
                        name="phone"
                        placeholder=" xx xxx xx xx"
                        className="h-[56px] w-full bg-white rounded-lg p-[17px] pl-0 focus:outline-none text-[16px] font-normal"
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                    />
                </div>
                <input
                    type="file"
                    ref={cvinpt}
                    name="cvFile"
                    className="hidden"
                    onChange={(event) => {
                        if (event.currentTarget.files) {
                            setcv(event.currentTarget.files[0]);
                            formik.setFieldValue(
                                'cvFile',
                                event.currentTarget.files[0]
                            );
                        }
                    }}
                    accept=".pdf,.doc,.docx" // Accept only PDF, DOC, DOCX files
                    multiple={false} // Only allow one file
                />
                <input
                    type="file"
                    ref={Imageinpt}
                    name="imageFile"
                    className="hidden"
                    onChange={(event) => {
                        if (event.currentTarget.files) {
                            setimg(event.currentTarget.files[0]);

                            formik.setFieldValue(
                                'imageFile',
                                event.currentTarget.files[0]
                            );
                        }
                    }}
                    accept="image/png, image/jpeg" // Accept only PNG and JPG files
                    multiple={false} // Only allow one file
                />
                <div>
                    <label className="text-[14px] font-normal opacity-60 mt-5">
                        CV üçün klik edin
                    </label>
                    <div
                        className="w-full h-[92px] flex flex-col justify-center items-center bg-[#FFFFFF] rounded-lg border-dashed border-2 mt-[12px] border-[#2961B1]"
                        onClick={triggerFileSelectPopup}
                    >
                        <div
                            className={
                                'flex flex-row text-[#2961B1] text-[16px] font-medium gap-3 cursor-pointer'
                            }
                        >
                            <Image src={cv_icon} alt="cv_icon" />
                            CV faylın seç
                        </div>
                        <p className="text-[14px] font-normal text-center opacity-60 mt-2">
                            {img
                                ? img.name
                                : ' Yüklədiyiniz fayl PDF, DOC, DOCX formatında olmalı (max 3 mb)'}
                        </p>
                    </div>
                </div>
                <div>
                    <label className="text-[14px] font-normal opacity-60 mt-5">
                        Şəkil üçün klik edin
                    </label>
                    <div
                        className="w-full h-[92px] flex flex-col justify-center items-center bg-[#FFFFFF] rounded-lg border-dashed border-2 mt-[12px] border-[#2961B1]"
                        onClick={triggerFileSelectPopup2}
                    >
                        <div className="flex flex-row text-[#2961B1] text-[16px] font-medium gap-3 cursor-pointer">
                            <Image src={image_icon} alt="image_icon" />
                            Dəyişmək üçün kliklə
                        </div>
                        <p className="text-[14px] font-normal text-center opacity-60 mt-2">
                            {img ? img.name : '  PNG, JPG (Max 3 mb)'}
                        </p>
                    </div>
                </div>
                <div></div>
                <div className="flex lg:justify-end justify-center mb-10">
                    <Blue_to_blue
                        text={'Göndər'}
                        action={formik.handleSubmit}
                    />
                </div>
            </div>
        </form>
    );
}
