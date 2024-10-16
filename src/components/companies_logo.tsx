import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

interface CompaniesLogoProps {
    img: string; // Image URL
    alt: string; // Alt text for the image
    Title: string;
    id: number; // Title attribute for the image
}

export default function Companies_logo({
    img,
    alt,
    Title,
    id,
}: CompaniesLogoProps) {
    console.log(alt, Title);
    console.log(img);

    const [ison, setIson] = useState<boolean>(false);
    const router = useRouter();
    return (
        <div
            onClick={() => router.push(`partners/${id}`)}
            onMouseEnter={() => setIson(true)}
            onMouseLeave={() => setIson(false)}
            className="w-[140px]   h-[67px] border border-opacity-5 border-black rounded-lg flex justify-center items-center"
        >
            <img src={img} alt={alt} title={Title} className="w-full h-full" />
            {/* <Image src={img} alt={alt} title={Title} width={140} height={67} /> */}
        </div>
    );
}
