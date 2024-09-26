import React from 'react';

export default function Employee_card() {
    return (
        <div>
            <div
                className="  flex  items-end p-3 rounded-full"
                style={{
                    backgroundImage: `url('/images/sea.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '200px',
                    height: '200px',
                    // or any height you need
                }}
            ></div>
            <div className="text-center mt-5">
                <p className="text-[16px] font-normal text-black text-opacity-80">
                    Direktor
                </p>
                <h5 className="text-[20px] font-semibold">Elxan Nəbiyev</h5>
            </div>
        </div>
    );
}
