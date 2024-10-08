import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../redux/store'; // Custom hook for dispatch
import { setBlog } from '../redux/slices/PassSlice';
import { RootState } from '@reduxjs/toolkit/query';
export default function Galery_Img({
    image,
    title,
    category,
    slug,
    data,
}: {
    image: string;
    title: string;
    category: string;
    slug: any;
    data: any;
}) {
    const dispatch = useAppDispatch();
    const count = useSelector((state: any) => state.counter.blog);
    const router = useRouter();
    return (
        <div
            onClick={() => {
                dispatch(setBlog(data));
                router.push(`media/${slug}`);
            }}
            style={{
                backgroundImage: `url('${image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '295px',
                height: '255px',
                // or any height you need
            }}
            className="w-[295px] h-[255px] rounded-lg overflow-hidden hover:scale-105   ransition-transform duration-500 cursor-pointer "
        >
            <div
                className="w-full h-full relative "
                style={{
                    background:
                        'linear-gradient(180deg, rgba(0, 0, 0, 0) 36.11%, rgba(0, 0, 0, 0.361905) 74.21%, rgba(0, 0, 0, 0.6) 84.13%)',
                }}
            >
                <p className="rounded-lg bg-white bg-opacity-40 px-3 py-[6px] text-[14px] font-normal absolute top-3 left-3">
                    {category}
                </p>
                <p className="text-white text-[16px] font-medium absolute left-5 bottom-5">
                    {title}
                </p>
            </div>
        </div>
    );
}
