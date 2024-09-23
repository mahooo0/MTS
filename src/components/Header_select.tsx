import Image from 'next/image';
import React, { useState } from 'react';
import strelka from '../../public/svg/option_strelka.svg';
interface ARRE {
    title: string;
    action: () => void;
}
export default function Header_select({
    text,
    ARR,
}: {
    text: string;
    ARR?: ARRE[];
}) {
    const [show, setshow] = useState<Boolean>(true);
    return (
        <div className="flex flex-col relative">
            <div
                className="flex flex-row gap-[9px]"
                onClick={() => setshow((prew) => !prew)}
            >
                <h5>{text}</h5>
                <Image
                    src={strelka}
                    alt="strelka"
                    style={!show ? { transform: 'rotate(180deg)' } : {}}
                />
            </div>
            <div
                className="flex flex-col absolute  -bottom-[100px] w-full  justify-end text-right bg-white  "
                style={show ? { display: 'none' } : { display: 'flex' }}
            >
                {ARR?.map((item: ARRE) => (
                    <p
                        onClick={item.action}
                        className="text-right bg-white border rounded-lg border-black border-opacity-40 p-1"
                    >
                        {item.title}
                    </p>
                ))}
            </div>
        </div>
    );
}
