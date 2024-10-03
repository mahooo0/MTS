import React, { lazy } from 'react';

export default function Employee_card({ data, lng }: { data: any; lng: any }) {
    return (
        <div className="flex justify-center flex-col items-center">
            <div
                className="  flex  items-end p-3 rounded-full"
                style={{
                    backgroundImage: `url('https://mts.caratcons.az/${data.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '200px',
                    height: '200px',
                    // or any height you need
                }}
            ></div>
            <div className="text-center mt-5">
                <p className="text-[16px] font-normal text-black text-opacity-80">
                    {data.name[lng]}
                </p>
                <h5 className="text-[20px] font-semibold">
                    {data.profession[lng]}
                </h5>
            </div>
        </div>
    );
}
