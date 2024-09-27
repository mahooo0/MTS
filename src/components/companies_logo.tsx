import Image from 'next/image';
import React, { useState } from 'react';

export default function Companies_logo({ img }: { img: any }) {
    const [ison, setIson] = useState<boolean>(false);
    return (
        <div
            onMouseEnter={() => setIson(true)}
            onMouseLeave={() => setIson(false)}
            className="lg:w-[140px] md:w-[100px] grayscale hover:grayscale-0 md:h-[67px] w-[50px] lg:h-[67px] h-[40px] border border-opacity-5 border-black rounded-lg flex justify-center items-center"
        >
            <Image src={img} alt=" layner" />
        </div>
    );
}
