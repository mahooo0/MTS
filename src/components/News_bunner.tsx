import React, { useState } from 'react';
import { White_to_blue } from './btns';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentNew } from '@/redux/slices/PassSlice';

export default function News_bunner({
    data,
    lang,
}: {
    data: any;
    lang: string;
}) {
    const router = useRouter();
    const [ison, setison] = useState<boolean>(false);
    const dispatch = useDispatch();
    const CurrentNEw = useSelector((state: any) => state.counter.CurrentNew);
    console.log(CurrentNEw);

    return (
        <div
            className="relative lg:w-[610px] lg:h-[320px]  md:w-[500px] md:h-[250px] w-[360px] h-[160px]  overflow-hidden rounded-lg  "
            onMouseEnter={() => setison(true)}
            onMouseLeave={() => setison(false)}
        >
            <div
                className={`bg-cover bg-center lg:w-[610px] lg:h-[320px]  md:w-[500px] md:h-[250px]   w-[360px] h-[160px] overflow-hidden  transition-transform duration-500 ${
                    ison ? 'scale-110' : ''
                } text-white `}
                style={{
                    backgroundImage: `url('https://mts.caratcons.az/${data.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* <Image ca/> */}

                {/* <button></button> */}
            </div>
            <div className="text-white absolute lg:top-[70px] md:top-[60px] top-[20px] lg:left-8  md:left-8 left-4">
                <p className="lg:text-[14px] md:text-[12px] text-[10px] font-normal lg:mb-[16px] mb-[8px] md:mb-[16px]">
                    {data.date}
                </p>
                <h5 className=" lg:text-[20px] md:text-[14px] text-[12px] font-semibold  lg:mb-[16px] mb-[8px] md:mb-[16px]">
                    {data.title[lang]}
                </h5>
                <div
                    className="text-4 font-normal lg:text-[18px] md:text-[12px] text-[10px] "
                    dangerouslySetInnerHTML={{ __html: data.content[lang] }}
                />

                <White_to_blue
                    text="Ətraflı bax "
                    action={() => {
                        dispatch(setCurrentNew(data));
                        router.push(`news/${data.id}`);
                    }}
                />
            </div>
        </div>
    );
}
