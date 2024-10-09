import Image from 'next/image';
import React from 'react';
import image1 from '../../public/images/sertificat.png';
import link from '../../public/svg/link.svg';
import { Blue_to_blue, Blue_to_White } from './btns';
export default function Sertificat({ data, lang }: { data: any; lang: any }) {
    console.log(data);
    const baseurl = 'https://mts.caratcons.az/';
    console.log(`${baseurl}${data.pdf}`);

    return (
        <div className=" flex lg:flex-row md:flex-row flex-col lg:w-[610px] md:w-[610px] w-[300px] lg:h-[410px] h-fit bg-white">
            <div className="p-5 lg:w-[410px] md:w-[410px] flex items-center  w-full h-full ">
                <img
                    src={
                        data.image
                            ? `${baseurl}${data.image}`
                            : 'https://s3-alpha-sig.figma.com/img/5e23/ee97/f941d290d3ccbd6eb78ffa997c61242e?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aYQl62EKEAfA3t74wWRaMXTZuu65UulbZLv7BrqJjJPMQLfXxOOx7tWjg~oIe59Kj-mFnPXf7m8znJPwiq79dxneYg9qQgmmK8P5FaUGSfnBmMp6cB5bjfgJE9Aax7WyUvlMoer8SSHtwaqXe6iFFKxNGveyGnKfX~2fwsRWel1FuRR44OD12BoxEPVXDHc7cp063--oPlZ5~zQC9oC4ZJOg9rCJVJ4COfyJpl68ayLnzZb9EfV0tAxBqnNfI-8EfgTqq9VSyaWKpN5qq-4rNkCTvSTYLv0pFpFUB5D9WSkLsyjmJcOhcD1se2Q6V~Ah1iKoDa4BqMgJ4vKkQYBkjg__'
                    }
                    alt="image"
                    className=" h-full w-full  object-fit"
                />
                {/* <iframe
                    src={`${baseurl}${data.pdf}`}
                    width="600"
                    height="500"
                    className=" h-full w-full  object-fill"
                >
                    {/* <a href="path/to/yourfile.pdf">Download PDF</a> 
                </iframe> */}
            </div>
            <div className="flex flex-col justify-center text-black lg:p-0 p-5 ">
                <p className="text-[14px] font-normal opacity-60 mb-5">
                    01/{data.page}
                </p>
                <h5 className="w-[270px] text-[18px] font-medium mb-5">
                    {data.title[lang]}
                </h5>
                <a
                    href={`${baseurl}${data.pdf}`}
                    download={`${baseurl}${data.pdf}`}
                >
                    <Blue_to_blue
                        text="PDF yüklə"
                        action={() => {}}
                        icon={false}
                    />
                </a>

                <div className="flex flex-row mt-10  items-center gap-4">
                    <p>
                        {lang === 'en'
                            ? 'sheare'
                            : lang === 'ru'
                            ? 'поделиться'
                            : 'Paylaş'}
                    </p>
                    <div
                        className="flex justify-center items-center w-10 h-10 rounded-full bg-[#F5F5F5]"
                        onClick={() => {
                            navigator.clipboard.writeText(
                                `${baseurl}${data.pdf}`
                            );
                        }}
                    >
                        <Image src={link} alt="link" />
                    </div>
                </div>
            </div>
        </div>
    );
}
