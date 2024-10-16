import { useRouter } from 'next/router';
import React from 'react';

export default function ProjectCard({
    data,
    lang,
}: {
    data: any;
    lang: string;
}) {
    const router = useRouter();
    return (
        <div
            className="w-[300px]  aspect-square rounded-[8px]  relative  overflow-hidden "
            onClick={() => {
                router.push(`/Projects/${data.id}`);
            }}
        >
            <img
                className="w-full  object-fill h-full"
                src={`https://mts.caratcons.az/${data.image}`}
            />
            <div className="p-3  absolute bottom-0 bg-white bg-opacity-80 w-[94%] rounded-lg m-2">
                <div className="w-full  flex flex-row justify-between">
                    <p className="text-[12px] font-normal text-black  opacity-60">
                        {data.start_date}
                    </p>{' '}
                    <img src="/svg/strelka_blue.svg" />
                </div>
                <p>{data.title[lang]}</p>
            </div>
        </div>
    );
}
