import React, { useState } from 'react';
import { White_to_blue } from './btns';

export default function News_bunner() {
    const [ison, setison] = useState<boolean>(false);
    return (
        <div
            className="relative w-[610px] h-[320px]  overflow-hidden rounded-lg  "
            onMouseEnter={() => setison(true)}
            onMouseLeave={() => setison(false)}
        >
            <div
                className={`bg-cover bg-center  overflow-hidden  transition-transform duration-500 ${
                    ison ? 'scale-110' : ''
                } text-white `}
                style={{
                    backgroundImage: `url('/images/layner2.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '610px',
                    height: '320px',
                    // or any height you need
                }}
            >
                {/* <Image ca/> */}

                {/* <button></button> */}
            </div>
            <div className="text-white absolute top-[92px] left-8 ">
                <p className="text-[14px] font-normal mb-[16px]">
                    12 iyul 2024
                </p>
                <h5 className="text-[20px] font-semibold mb-[12px]">
                    Lorem Ipsum is simply dummy text of the printing.
                </h5>
                <p className="text-4 font-normal">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                </p>
                <White_to_blue text="Ətraflı bax" />
            </div>
        </div>
    );
}
