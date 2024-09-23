import React from 'react';

export default function Galery_Img() {
    return (
        <div
            style={{
                backgroundImage: `url('/images/sea.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '295px',
                height: '255px',
                // or any height you need
            }}
            className="w-[295px] h-[255px] rounded-lg overflow-hidden hover:scale-105   ransition-transform duration-500 o"
        >
            <div
                className="w-full h-full relative "
                style={{
                    background:
                        'linear-gradient(180deg, rgba(0, 0, 0, 0) 36.11%, rgba(0, 0, 0, 0.361905) 74.21%, rgba(0, 0, 0, 0.6) 84.13%)',
                }}
            >
                <p className="rounded-lg bg-white bg-opacity-40 px-3 py-[6px] text-[14px] font-normal absolute top-3 left-3">
                    Tədbir
                </p>
                <p className="text-white text-[16px] font-medium absolute left-5 bottom-5">
                    Lorem Ipsum is simply dummy
                </p>
            </div>
        </div>
    );
}
