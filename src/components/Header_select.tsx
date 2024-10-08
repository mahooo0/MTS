import Image from 'next/image';
import React, { useState } from 'react';
import strelka from '../../public/svg/option_strelka.svg';
interface ARRE {
    title: string;
    action: () => void;
}
export default function Header_select({
    action,
    text,
    ARR,
}: {
    action: () => void;
    text: string;
    ARR?: ARRE[];
}) {
    const [show, setshow] = useState<Boolean>(true);
    return (
        <div
            className="flex flex-col relative "
            onMouseEnter={() => setshow(false)}
            onMouseLeave={() => setshow(true)}
        >
            <div className="flex flex-row gap-[9px]">
                <h5 onClick={() => action()}>{text}</h5>
                <Image
                    onClick={() => setshow((prew) => !prew)}
                    src={strelka}
                    alt="strelka"
                    style={!show ? { transform: 'rotate(180deg)' } : {}}
                />
            </div>
            <div
                className="flex flex-col lg:absolute   top-[100%] w-fit  justify-end text-right right-0  z-[100]"
                style={show ? { display: 'none' } : { display: 'flex' }}
            >
                {ARR?.map((item: ARRE, i: number) => (
                    <p
                        key={i}
                        onClick={item.action}
                        className="text-right bg-white  rounded-lg p-1  justify-start text-black flex   overflow-hidden text-nowrap max-w-[200px]"
                    >
                        {item.title}
                    </p>
                ))}
            </div>
        </div>
    );
}
