import React, { useState } from 'react';
import strelka2 from '../../public/svg/strelka2.svg';
import strelka1 from '../../public/svg/strelka1.svg';
import Image from 'next/image';

function White_to_blue({ text, action }: { text: string; action: () => void }) {
    const [ison, setIson] = useState<any>();
    return (
        <button
            onClick={() => action()}
            onMouseEnter={() => setIson(true)}
            onMouseLeave={() => setIson(false)}
            className="flex flex-row gap-2 items-center lg:w-[200px] lg:h-[50px] md:w-[200px] md:h-[50px] w-[120px] h-[30px] bg-white hover:bg-[#2961B1] hover:text-white text-[#2961B1] lg:text-[20px] md:text-[20px] text-[12px] font-[500px] justify-center rounded-lg lg:mt-12 md:mt-9 mt-6"
        >
            {text} <Image src={ison ? strelka1 : strelka2} alt="strelka" />
        </button>
    );
}
function Blue_to_blue({
    text,
    action,
    icon = true,
}: {
    text: string;
    action: () => void;
    icon?: boolean;
}) {
    const [ison, setIson] = useState<any>();
    return (
        <button
            onClick={() => action()}
            className="flex flex-row gap-2 items-center text-nowrap px-4 w-[200px] h-[50px] bg-[#2961B1] hover:bg-[#184C97]  text-white text-[20px] font-[500px] justify-center rounded-lg lg:mt-12 md:mt-9 mt-3"
        >
            {text} {icon && <Image src={strelka1} alt="strelka" />}
        </button>
    );
}
function Blue_to_White({ text }: { text: string }) {
    const [ison, setIson] = useState<any>();
    return (
        <button
            onMouseEnter={() => setIson(true)}
            onMouseLeave={() => setIson(false)}
            className="flex flex-row gap-2 items-center w-[200px] h-[50px] hover:bg-white bg-[#2961B1] text-white hover:text-[#2961B1] text-[20px] font-[500px] justify-center rounded-lg "
        >
            {text}
        </button>
    );
}
export { White_to_blue, Blue_to_blue, Blue_to_White };
