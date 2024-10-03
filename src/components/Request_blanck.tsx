import React, { useRef } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import email_icon from '../../public/svg/email.svg';
import cv_icon from '../../public/svg/cv.svg';
import image_icon from '../../public/svg/image.svg';
import Image from 'next/image';
import { Blue_to_blue } from './btns';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

import { useRouter } from 'next/router';
// Define validation schema using Yup
const validationSchema = Yup.object({
    firstName: Yup.string().required('Ad vacibdir'),
    lastName: Yup.string().required('Soyad vacibdir'),
    email: Yup.string()
        .email('Etibarlı bir e-poçt daxil edin')
        .required('E-poçt vacibdir'),
    azerbaijanPhone: Yup.string().required('Telefon nömrəsi vacibdir'),
});

export default function Request_blanck({ data }: { data: any }) {
    const cvinpt = useRef<any>();
    const Imageinpt = useRef<any>();
    const triggerFileSelectPopup = () => cvinpt.current.click();
    const triggerFileSelectPopup2 = () => Imageinpt.current.click();
    const router = useRouter();
    return (
        <>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    azerbaijanPhone: '',
                    cvFile: null,
                    imageFile: null,
                }}
                validationSchema={validationSchema}
                onSubmit={async (values) => {
                    console.log(values);
                    if (values.cvFile === null && values.imageFile === null) {
                        toast.error('ADD cv file');
                        return;
                    } else {
                        console.log(values, 'valueler');
                        const formData = new FormData();
                        formData.append('firstname', values.firstName);
                        formData.append('lastname', values.lastName);
                        formData.append('email', values.email);
                        formData.append('vacancy_id', data.id);
                        formData.append('phone', values.azerbaijanPhone);
                        if (values.cvFile) {
                            formData.append('cv', values.cvFile); // Only append if it's a valid file
                        }
                        if (values.imageFile) {
                            formData.append('image', values.imageFile); // Only append if it's a valid file
                        }
                        const res = await axios.post(
                            'https://mts.caratcons.az/api/apply-vacancy',
                            formData,
                            {
                                headers: {
                                    'Content-Type': 'multipart/form-data',
                                },
                            }
                        );

                        if (res.data) {
                            router.push('/karyera/aply');
                        } else {
                            console.log(res.status);
                        }

                        // if (status === 201) {
                        //
                        // }
                    }
                }}
            >
                {(formik) => (
                    <Form className="w-full bg-[#F7F8FA] rounded-lg pt-[48px] px-[24px]">
                        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                            <div>
                                <Field
                                    name="firstName"
                                    placeholder="Ad"
                                    className="h-[56px] w-full focus:outline-none bg-white rounded-lg p-[17px] text-[16px] font-normal"
                                />
                                <ErrorMessage
                                    name="firstName"
                                    component="div"
                                    className="text-red-500 text-sm"
                                />
                            </div>

                            <div>
                                <Field
                                    name="lastName"
                                    placeholder="Soyad"
                                    className="h-[56px] w-full focus:outline-none bg-white rounded-lg p-[17px] text-[16px] font-normal"
                                />
                                <ErrorMessage
                                    name="lastName"
                                    component="div"
                                    className="text-red-500 text-sm"
                                />
                            </div>

                            <div className="h-[56px] w-full bg-white rounded-lg text-[16px] font-normal flex flex-row items-center">
                                <div className="p-[17px] ">
                                    <Image src={email_icon} alt="email_icon" />
                                </div>
                                <Field
                                    type="email"
                                    name="email"
                                    className="h-[56px] w-full focus:outline-none bg-white rounded-lg p-[17px] text-[16px] font-normal"
                                />
                                <ErrorMessage
                                    name="email"
                                    component="div"
                                    className="text-red-500 text-sm"
                                />
                            </div>

                            <div className="h-[56px] w-full bg-white rounded-lg text-[16px] font-normal flex flex-row items-center">
                                <div className="p-[17px]">+994</div>
                                <Field
                                    type="tel"
                                    name="azerbaijanPhone"
                                    placeholder=" xx xxx xx xx"
                                    className="h-[56px] w-full bg-white rounded-lg p-[17px] pl-0 focus:outline-none text-[16px] font-normal"
                                />
                                <ErrorMessage
                                    name="azerbaijanPhone"
                                    component="div"
                                    className="text-red-500 text-sm"
                                />
                            </div>

                            {/* CV File input */}
                            <input
                                type="file"
                                className="hidden"
                                ref={cvinpt}
                                onChange={(event) => {
                                    if (event.currentTarget.files) {
                                        formik.setFieldValue(
                                            'cvFile',
                                            event.currentTarget.files[0]
                                        );
                                    }
                                }}
                            />
                            <div>
                                <label className="text-[14px] font-normal opacity-60 mt-5">
                                    CV üçün klik edin
                                </label>
                                <div
                                    className="w-full h-[92px] flex flex-col justify-center items-center bg-[#FFFFFF] rounded-lg border-dashed border-2 mt-[12px] border-[#2961B1] cursor-pointer"
                                    onClick={triggerFileSelectPopup}
                                >
                                    <div className="flex flex-row text-[#2961B1] text-[16px] font-medium gap-3">
                                        <Image src={cv_icon} alt="cv_icon" />
                                        CV faylın seç
                                    </div>
                                    <p className="text-[14px] font-normal text-center opacity-60 mt-2">
                                        Yüklədiyiniz fayl PDF, DOC, DOCX
                                        formatında olmalı (max 3 mb)
                                    </p>
                                </div>
                                <ErrorMessage
                                    name="cvFile"
                                    component="div"
                                    className="text-red-500 text-sm"
                                />
                            </div>

                            {/* Image File input */}
                            <input
                                type="file"
                                className="hidden"
                                ref={Imageinpt}
                                onChange={(event) => {
                                    if (event.currentTarget.files) {
                                        formik.setFieldValue(
                                            'imageFile',
                                            event.currentTarget.files[0]
                                        );
                                    }
                                }}
                            />
                            <div>
                                <label className="text-[14px] font-normal opacity-60 mt-5">
                                    Şəkil üçün klik edin
                                </label>
                                <div
                                    className="w-full h-[92px] flex flex-col justify-center items-center bg-[#FFFFFF] rounded-lg border-dashed border-2 mt-[12px] border-[#2961B1] cursor-pointer"
                                    onClick={triggerFileSelectPopup2}
                                >
                                    <div className="flex flex-row text-[#2961B1] text-[16px] font-medium gap-3">
                                        <Image
                                            src={image_icon}
                                            alt="image_icon"
                                        />
                                        Dəyişmək üçün kliklə
                                    </div>
                                    <p className="text-[14px] font-normal opacity-60 mt-2">
                                        PNG, JPG (Max 3 mb)
                                    </p>
                                </div>
                                <ErrorMessage
                                    name="imageFile"
                                    component="div"
                                    className="text-red-500 text-sm"
                                />
                            </div>
                            <div></div>
                            <div className="flex lg:justify-end justify-center mb-10">
                                <Blue_to_blue
                                    text="Göndər"
                                    action={formik.handleSubmit}
                                />
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
}
