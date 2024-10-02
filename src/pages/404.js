// pages/404.js
import Link from 'next/link';

export default function Custom404() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <img src="/svg/404.svg" className="mb-[60px]" />
            <h1 className="text-4xl font-bold ">Opss! Səhifə tapılmadı!</h1>
            <p className="mt-4 text-lg">
                Axtardığınız səhifə tapılmadı və ya səhifədə error baş verdi.
            </p>
            <Link href="/">
                <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
                    Go back to Home
                </button>
            </Link>
        </div>
    );
}
