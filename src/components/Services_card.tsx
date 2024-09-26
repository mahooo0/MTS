import React from 'react';
import whiteStrelka from '../../public/svg/strelka1.svg';
import Image from 'next/image';
export default function Services_card() {
    return (
        <div className="mb-9">
            <div
                className="rounded-lg overflow-hidden w-[295px] h-[250px]  hover:scale-105  ransition-transform duration-500 lg:p-2 flex items-end "
                style={{
                    backgroundImage: `url('/images/sea.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',

                    // or any height you need
                }}
            >
                <div className="bg-white bg-opacity-10 flex px-4 justify-between items-center text-white h-11 rounded-[100px] w-[98%]">
                    <p>Ətraflı bax</p>
                    <Image src={whiteStrelka} alt="white strelka" />
                </div>
            </div>
            <h6 className="text-[16px] font-semibold mt-4 mb-2 w-[295px]">
                Soyutma sahəsi üzrə
            </h6>
            <p className="text-[16px] font-normal w-[295px]">
                Gəmilərdə kondisionerlərin təmiri və quraşdırılması, ərzaq
                saxlama ...
            </p>
        </div>
    );
}
