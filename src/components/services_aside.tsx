import Image from 'next/image';
import React, { ReactNode } from 'react';
import clockicon from '../../public/images/clock.png';
import strelka from '../../public/svg/option_strelka_blue.svg';
import strelka2 from '../../public/svg/option_strelka.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setcurrentservices } from '@/redux/slices/PassSlice';
import { useRouter } from 'next/router';

function Asidemodule({
    active,
    children,
    action,
}: {
    active: boolean;
    children: ReactNode;
    action: () => void;
}) {
    if (active) {
        return (
            <div className="flex flex-row lg:w-[287px] w-full min-h-[56px] h-fit justify-between rounded-lg bg-white text-[#2961B1] items-center p-3 gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#C9DEF7] flex justify-center items-center">
                    <Image src={clockicon} alt="clockicon" width={20} />
                </div>
                <p className="text-[14px] font-normal w-[183px] flex flex-wrap">
                    {children}
                </p>
                <Image src={strelka} alt="strelka" />
            </div>
        );
    } else {
        return (
            <div
                onClick={() => {
                    action();
                }}
                className="flex flex-row lg:w-[287px] w-full h-[56px] rounded-lg bg-white   text-black text-opacity-80 items-center p-4 gap-3 justify-between"
            >
                <p className="text-[14px] font-normal w-[183px] flex flex-wrap m-1 ">
                    {children}
                </p>
                <Image
                    src={strelka2}
                    alt="strelka"
                    style={{ transform: 'rotate(-90deg)' }}
                />
            </div>
        );
    }
}
export default function Services_aside({
    currenntService,
    Services,
    action,
    lang,
    translates,
}: {
    translates: any;
    Services: any;
    currenntService: any;
    action: () => void;
    lang: any;
}) {
    const router = useRouter();
    const dipatch = useDispatch();
    // const Services = useSelector((state: any) => state.counter.services);
    // console.log(Services);
    // const currenntService = useSelector(
    //     (state: any) => state.counter.Currentservice
    // );
    console.log('currenntService', currenntService);

    return (
        <div className="lg:w-fit w-full h-fit bg-[#F7F8FA]  border rounded-lg  lg:mt-10 mt-14 flex flex-col text-center ">
            <h5 className="text-[20px] font-semibold mt-5">
                {translates.our_services[lang]}
            </h5>
            <p className="text-[14px] font-normal mt-2">
                {translates.services_DESc[lang]}
            </p>
            <div className="px-[9px] flex flex-col gap-[6px] pb-6 pt-6">
                {Services.map((item: any) => {
                    console.log(currenntService, item);

                    if (item.type === 'Digər') {
                        return;
                    }
                    return (
                        <Asidemodule
                            active={currenntService?.id === item?.id}
                            action={() => {
                                dipatch(setcurrentservices(item));
                                // console.log('AAAAAAAAA', Services, ServiceS);

                                router.push(`/services/${item.id}`);
                            }}
                        >
                            {item.title[lang]}
                        </Asidemodule>
                    );
                })}
                <Asidemodule
                    active={
                        currenntService ===
                        Services.find((item: any) => item.type === 'Digər')
                    }
                    action={() => {
                        dipatch(
                            setcurrentservices(
                                Services.find(
                                    (item: any) => item.type === 'Digər'
                                )
                            )
                        );
                        // console.log(item, currenntService);
                        router.push(`/services/other`);
                    }}
                >
                    {translates.others[lang]}
                </Asidemodule>
            </div>
        </div>
    );
}
