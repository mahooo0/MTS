import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Image from 'next/image';
import strelka2 from '../../public/svg/strelka2.svg';
import axios from 'axios';

export default function ContactForm({ data, leng }: { data: any; leng: any }) {
    return (
        <Formik
            initialValues={{
                fullName: '',
                email: '',
                phone: '',
                message: '',
            }}
            onSubmit={async (values) => {
                console.log(values);
                try {
                    const body = {
                        name: values.fullName,
                        phone: `+994${values.phone}`,
                        info: values.message,
                        email: values.email,
                    };

                    const res = await axios.post(
                        `https://mts.caratcons.az/api/send-message`,
                        body
                    );

                    console.log(res);
                } catch (error) {
                    console.log(error);
                }
            }}
        >
            {(formik) => (
                <Form className="lg:w-[455px] w-full lg:h-[94%] h-fit bg-white rounded-lg lg:absolute top-[26px] left-[100px] bottom-5 z-30 pt-7 pl-6 pr-[14px] flex flex-col">
                    <h3 className="text-[#050B20] text-[28px] font-semibold mb-3">
                        {data.contact_info[leng]}
                    </h3>
                    <p className="text-[16px] font-normal mb-10">
                        {data.contact_title[leng]}
                    </p>
                    <div className="mt-10 flex flex-col gap-3">
                        {/* Full Name */}
                        <Field
                            type="text"
                            name="fullName"
                            placeholder="Ad və soyad"
                            required
                            className="w-full h-[55px] rounded-lg bg-[#F5F5F5] p-4 focus:outline-none focus:border-transparent"
                        />
                        <ErrorMessage
                            name="fullName"
                            component="div"
                            className="text-red-500 text-sm"
                        />

                        {/* Email */}
                        <Field
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                            className="w-full h-[55px] rounded-lg bg-[#F5F5F5] p-4 focus:outline-none focus:border-transparent"
                        />
                        <ErrorMessage
                            name="email"
                            component="div"
                            className="text-red-500 text-sm"
                        />

                        {/* Phone Number */}
                        <div className="flex flex-row w-full h-[55px] rounded-lg bg-[#F5F5F5] items-center pl-3">
                            +994
                            <Field
                                type="tel"
                                name="phone"
                                pattern="[0-9]*"
                                inputMode="numeric"
                                required
                                placeholder="00 000 00 00"
                                className="h-[55px] w-full bg-[#F5F5F5] p-4 focus:outline-none focus:ring-0"
                            />
                        </div>
                        <ErrorMessage
                            name="phone"
                            component="div"
                            className="text-red-500 text-sm"
                        />

                        {/* Message */}
                        <Field
                            as="textarea"
                            name="message"
                            placeholder="Mesaj"
                            className="h-[112px] w-full rounded-lg bg-[#F5F5F5] p-4 focus:outline-none focus:border-transparent resize-none overflow-auto"
                        />
                        <ErrorMessage
                            name="message"
                            component="div"
                            className="text-red-500 text-sm"
                        />

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="flex flex-row gap-2 items-center w-full h-[50px] bg-[#2961B1] text-white text-[20px] font-[500px] justify-center rounded-lg mt-3"
                        >
                            Daha ətraflı <Image src={strelka2} alt="strelka2" />
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
}
