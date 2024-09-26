import Image from 'next/image';
import React, { useState } from 'react';
import kater_png from '../../public/images/kater.png';
import strelka2 from '../../public/svg/strelka2.svg';
import { useRouter } from 'next/router';
export default function News_card() {
    const [ison, setison] = useState<boolean>(false);
    const rounter = useRouter();
    return (
        <div
            className="w-[295px] h-[342px] bg-[#FAFAFA] rounded-t-lg overflow-hidden  flex flex-col "
            onMouseEnter={() => setison(true)}
            onMouseLeave={() => setison(false)}
            onClick={() => rounter.push('news/sss')}
        >
            <div className="h-[226px] overflow-hidden">
                <Image
                    src={kater_png}
                    alt="kater_png"
                    className={`w-full  ${
                        ison ? 'scale-110' : ''
                    }  transition-transform duration-500 rounded-lg`}
                />
            </div>

            <h6 className="text-[18px] my-4 px-3 font-[500] text-[#050B20]">
                156 evakuasiya xidmətinin nə kimi üstünlüyü var?
            </h6>
            <div className="flex flex-row justify-between px-3">
                <p className="text-[#2961B1] text-[16px] font-semibold">
                    Ətraflı bax
                </p>
                <Image src={strelka2} alt="strelka 2" />
            </div>
        </div>
    );
}
