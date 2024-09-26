import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Image from 'next/image';
import React from 'react';
import strelka from '../../../public/svg/strelka_black.svg';
import Services_card from '@/components/Services_card';

export default function () {
    return (
        <div>
            <Header active={3} />
            <div className="bg-[#FBFBFB] h-[90px] w-full "></div>
            <main className="lg:px-[100px] md:px-[60px] px-[30px] flex flex-col justify-center">
                <div className="flex flex-row text-[18px] gap-3 mt-[41px] ">
                    <h5>Ana səhifə</h5>
                    <Image
                        src={strelka}
                        alt="strelka"
                        className=" opacity-60"
                    />
                    <h6 className=" opacity-60">Xidmətlər</h6>
                </div>
                <div
                    className="w-full lg:h-[380px] h-fit rounded-lg overflow-hidden mt-10"
                    style={{
                        backgroundImage: `url('/images/trubı.png')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',

                        // or any height you need
                    }}
                >
                    <div className="bg-[#050B20] w-full h-full bg-opacity-60 flex flex-col items-center justify-center text-white text-center gap-5">
                        <h4 className="lg:w-3/5 w-4/5 lg:text-[40px] md:text-[36px] text-[24px] font-semibold">
                            Mts şirkətində dizel genaratorlarının təmiri və
                            quraşdırılması işləri davam edir.
                        </h4>
                        <p className="lg:w-1/2 w-9/12 text-[18px] font-medium">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting,
                        </p>
                    </div>
                </div>

                <div className="mt-10 grid lg:grid-cols-4 md:grid-cols-2  lg:justify-between justify-center mb-[100px] ">
                    <Services_card />
                    <Services_card />
                    <Services_card />
                    <Services_card />
                    <Services_card />
                    <Services_card />
                </div>
            </main>
            <Footer />
        </div>
    );
}
