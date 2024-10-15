import { useRouter } from 'next/router';
import React from 'react';

export default function ProjectCard() {
    const router = useRouter();
    return (
        <div
            className="max-w-[300px] aspect-square rounded-[8px]  relative  overflow-hidden "
            onClick={() => {
                router.push('/Projects/id');
            }}
        >
            <img
                className="w-full  object-fill h-full"
                src="https://s3-alpha-sig.figma.com/img/2845/f68d/8005c6340cb9c661d30d35a706049b30?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZDZJNgUedl2zGYOv-1S9UstKF5TRBdwIOV1BoGGLQENgNYy4GKlJf29WMIDMZsxL8wPLetQr0gIIxNU203Psircszk1BQYr9KAAQSWnu7VsYKmoVH1893y8OuUuXvQqZOyqhiIQ-Kk37Q-oz91oXDkkNZtKkHk5OMO4e0f31~lUijHNvjTlZ-e-u9bK~ZCo1kFiZS1DtonwU7oeiJ6bzkCPItYg96zaS1a2b-YNKBVCrXIdNty2HosK~vhb6OeiKZMp3jvXIDT5PXgymxcNygs-zDDBg~WXZRurAqJLwiWpiYNwnEBk49ja-L3QNQyL3vafhwIhMbX34nA~A7BSWug__"
            />
            <div className="p-3  absolute bottom-0 bg-white bg-opacity-80 w-[94%] rounded-lg m-2">
                <div className="w-full  flex flex-row justify-between">
                    <p className="text-[12px] font-normal text-black  opacity-60">
                        12 oktyabr 2024
                    </p>{' '}
                    <img src="/svg/strelka_blue.svg" />
                </div>
                <p>Layihənin adı</p>
            </div>
        </div>
    );
}
