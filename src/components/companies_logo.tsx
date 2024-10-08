import Image from 'next/image';
import React, { useState } from 'react';

interface CompaniesLogoProps {
    img: string; // Image URL
    alt: string; // Alt text for the image
    Title: string; // Title attribute for the image
}

export default function Companies_logo({
    img,
    alt,
    Title,
}: CompaniesLogoProps) {
    console.log(alt, Title);
    console.log(img);

    const [ison, setIson] = useState<boolean>(false);

    return (
        <div
            onMouseEnter={() => setIson(true)}
            onMouseLeave={() => setIson(false)}
            className="lg:w-[140px] md:w-[100px] grayscale hover:grayscale-0 md:h-[67px] w-[50px] lg:h-[67px] h-[40px] border border-opacity-5 border-black rounded-lg flex justify-center items-center"
        >
            <img src={img} alt={alt} title={Title} className="w-full h-full" />
            {/* <Image src={img} alt={alt} title={Title} width={140} height={67} /> */}
        </div>
    );
}
