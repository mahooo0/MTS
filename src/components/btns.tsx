import React, { useState } from 'react';
import strelka2 from '../../public/svg/strelka2.svg';
import strelka1 from '../../public/svg/strelka1.svg';
import Image from 'next/image';

function White_to_blue({ text }: { text: string }) {
    const [ison, setIson] = useState<any>();
    return (
        <button
            onMouseEnter={() => setIson(true)}
            onMouseLeave={() => setIson(false)}
            className="flex flex-row gap-2 items-center w-[200px] h-[50px] bg-white hover:bg-[#2961B1] hover:text-white text-[#2961B1] text-[20px] font-[500px] justify-center rounded-lg mt-12"
        >
            {text} <Image src={ison ? strelka1 : strelka2} alt="strelka" />
        </button>
    );
}
function Blue_to_blue({ text }: { text: string }) {
    const [ison, setIson] = useState<any>();
    return (
        <button className="flex flex-row gap-2 items-center w-[200px] h-[50px] bg-[#2961B1] hover:bg-[#184C97]  text-white text-[20px] font-[500px] justify-center rounded-lg mt-12">
            {text} <Image src={strelka1} alt="strelka" />
        </button>
    );
}
export { White_to_blue, Blue_to_blue };
