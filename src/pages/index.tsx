import Image from 'next/image';
import localFont from 'next/font/local';
import Header from '@/components/Header';
import strelka from '../../public/svg/strelka1.svg';
import strelka2 from '../../public/svg/strelka2.svg';
import like from '../../public/svg/like.svg';
import layner from '../../public/svg/layner.svg';
import phone from '../../public/svg/phone_white.svg';
import location from '../../public/svg/location.svg';
import locationREd from '../../public/svg/location_red.svg';
import mail from '../../public/svg/gmail.svg';
import layner_png from '../../public/images/laner.png';
import trubı_png from '../../public/images/trubı.png';
import map_png from '../../public/images/map.png';

import CustomSwiper from '@/components/Rounded_Swipper';
import Rounded_Swipper from '@/components/Rounded_Swipper';
import News_card from '@/components/news_card';
import Footer from '@/components/Footer';
const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
});
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900',
});

export default function Home() {
    return (
        <div
            className="relative flex flex-col justify-center bg-[#F7F7F8]
        "
        >
            {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6836.025529021591!2d49.85315080154546!3d40.380998971825385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d0a3ea7028d%3A0xac9d73dbd66392c8!2s28%20May!5e0!3m2!1sru!2saz!4v1726840557089!5m2!1sru!2saz"
                width="600"
                height="450"
                loading="lazy"
            ></iframe> */}
            <Header active={1} />
            <div className="bg-slate-500 h-[700px] w-full overflow-hidden relative">
                <div className="w-1/2 bg-white bg-opacity-90 h-full flex pt-[194px] absolute top-0 left-0">
                    <div className="ml-[100px]  flex flex-col ">
                        <h1 className="font-bold text-[48px] text-[#050B20]">
                            Lorem Ipsum is simply dummy text of the <br />{' '}
                            printing.
                        </h1>
                        <p className="text-black font-[500] text-[20px] mt-[20px]">
                            Lorem Ipsum is simply dummy text of the printing and{' '}
                            <br />
                            typesetting industry.
                        </p>
                        <button className="flex flex-row gap-2 items-center w-[200px] h-[50px] bg-[#2961B1] text-white text-[20px] font-[500px] justify-center rounded-lg mt-12">
                            Bizimlə əlaqə <Image src={strelka} alt="strelka" />
                        </button>
                    </div>
                </div>
                <video
                    controls={false}
                    width="600"
                    autoPlay
                    muted
                    loop
                    className="w-full "
                >
                    <source src="/videos/vid.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="px-[100px] flex flex-row justify-between mt-[40px]">
                <div className="w-[140px] h-[67px] border border-opacity-5 border-black rounded-lg flex justify-center items-center">
                    <Image src={layner} alt=" layner" />
                </div>
                <div className="w-[140px] h-[67px] border border-opacity-5 border-black rounded-lg flex justify-center items-center">
                    <Image src={layner} alt=" layner" />
                </div>
                <div className="w-[140px] h-[67px] border border-opacity-5 border-black rounded-lg flex justify-center items-center">
                    <Image src={layner} alt=" layner" />
                </div>
                <div className="w-[140px] h-[67px] border border-opacity-5 border-black rounded-lg flex justify-center items-center">
                    <Image src={layner} alt=" layner" />
                </div>
                <div className="w-[140px] h-[67px] border border-opacity-5 border-black rounded-lg flex justify-center items-center">
                    <Image src={layner} alt=" layner" />
                </div>
                <div className="w-[140px] h-[67px] border border-opacity-5 border-black rounded-lg flex justify-center items-center">
                    <Image src={layner} alt=" layner" />
                </div>
                <div className="w-[140px] h-[67px] border border-opacity-5 border-black rounded-lg flex justify-center items-center">
                    <Image src={layner} alt=" layner" />
                </div>
                <div className="w-[140px] h-[67px] border border-opacity-5 border-black rounded-lg flex justify-center items-center">
                    <Image src={layner} alt=" layner" />
                </div>
            </div>
            <div className="mt-[100px] flex justify-center ">
                <div className="w-[744px] h-[209px] flex flex-col justify-center">
                    <h1 className="text-[48px] font-semibold text-center">
                        Gəmilərdə yerinə yetirilən <br />
                        təmir  və  modernizasiya  işləri
                    </h1>
                    <div className="flex flex-row gap-5 mt-10">
                        <button className="px-6 py-3 rounded-lg border border-black border-opacity-10 hover:bg-[#2961B1] hover:text-white hover:border-none">
                            Valkom və Praxis
                        </button>
                        <button className="px-6 py-3 rounded-lg border border-black border-opacity-10  hover:bg-[#2961B1] hover:text-white hover:border-none">
                            Mexanika
                        </button>
                        <button className="px-6 py-3 rounded-lg border border-black border-opacity-10  hover:bg-[#2961B1] hover:text-white hover:border-none">
                            Avtomatika
                        </button>
                        <button className="px-6 py-3 rounded-lg border border-black border-opacity-10  hover:bg-[#2961B1] hover:text-white hover:border-none">
                            Hidravlika
                        </button>
                        <button className="px-6 py-3 rounded-lg border border-black border-opacity-10  hover:bg-[#2961B1] hover:text-white hover:border-none">
                            Soyutma
                        </button>
                    </div>
                </div>
            </div>
            <div className="mx-[100px] flex justify-center mt-[48px] h-[300px]  relative  overflow-hidden">
                <div className="bg-black  bg-opacity-60 rounded-lg w-full   h-full absolute top-0  flex flex-col justify-center text-center items-center">
                    <h1 className="text-[32px] font-semibold text-white">
                        Mexanika sahəsi üzrə
                    </h1>
                    <p className="w-[798px] text-[18px] font-medium text-white mt-3">
                        Gəmilərdə  Baş və köməkçi mühərriklərin sürət
                        tənzimləyicisilərinin,yüksək təzyiqli yanacaq
                        nasoslarının, Baş mühərrikin pnevmatik (DAU) məsafədən
                        idarəetmə sisteminin təmiri işləri
                    </p>
                    <button className="flex flex-row gap-2 items-center w-[200px] h-[50px] bg-white text-[#2961B1] text-[20px] font-[500px] justify-center rounded-lg mt-12">
                        Daha ətraflı <Image src={strelka2} alt="strelka" />
                    </button>
                </div>
                <Image src={trubı_png} alt="trubı_png" className="w-full" />
            </div>
            <div className="m-5 h-[509px] mt-[100px] w-[97%] bg-[#E7EDF8] pt-[75px] pl-[80px] flex flex-row relative rounded-lg overflow-hidden">
                <div>
                    <h2 className="text-[48px] font-semibold ">
                        “Marine Technical Solutions” <br />
                        QSC haqqında qısa məlumat
                    </h2>
                    <p className="w-[780px] text-[16px] text-opacity-80">
                        “Marine Technical Solutions” Qapalı Səhmdar Cəmiyyəti 28
                        aprel 2014-cü il tarixində Bakıda – Azərbaycanda
                        yaradılmış müasir və sürətlə inkişaf edən şirkətdir.
                        Artıq 10 ildən artıqdır ki, sizin xidmətinizdə olan
                        Marine Technical Solutions şirkəti müxtəlif növ
                        gəmilərin əsaslı təmiri, konstruksiyaların
                        quraşdırılması və s. bu kimi işləri peşəkar komandası
                        ilə icra edir. Şirkətdə 100 – dən çox əməkdaş sayı ilə
                        daim inkişafa meyilli olan peşəkar və təcrübəli komanda
                        fəaliyyət göstərir.
                    </p>
                    <button className="flex flex-row gap-2 items-center w-[200px] h-[50px] bg-[#2961B1] text-white text-[20px] font-[500px] justify-center rounded-lg mt-12">
                        Bizimlə əlaqə <Image src={strelka} alt="strelka" />
                    </button>
                </div>
                <Image
                    src={layner_png}
                    alt="layner_png"
                    className=" absolute  bottom-0 right-0"
                    width={600}
                />
            </div>
            <div className="flex flex-row bg-[#F7F7F8]  justify-between  pt-[80px] px-[100px]">
                <h3 className="text-[48px] text-[#050B20]">
                    Bizim <br /> üstünlüklərimiz
                </h3>
                <div className="flex-wrap flex-row grid gap-10 grid-cols-2">
                    <div className="w-[313px] h-[196px]">
                        <div className="w-[56px] h-[56px] rounded-lg bg-[#7DB3FF] flex justify-center items-center">
                            <Image src={like} alt="like" />
                        </div>
                        <h6 className="text-[20px] font-semibold">
                            Peşəkar yanaşma
                        </h6>
                        <p className="text-[16px] font-normal  w-[90%]">
                            {' '}
                            Şəxsi hesabatlılığı qoruyarkən iş təcrübələrimizi
                            yaxşılaşdırmaq və hər bir fərdi töhfəyə ortaq bir
                            yanaşma təmin etmək vəzifəsini davam etdirir
                        </p>
                    </div>
                    <div className="w-[313px] h-[196px]">
                        <div className="w-[56px] h-[56px] rounded-lg bg-[#7DB3FF] flex justify-center items-center">
                            <Image src={like} alt="like" />
                        </div>
                        <h6 className="text-[20px] font-semibold">
                            Peşəkar yanaşma
                        </h6>
                        <p className="text-[16px] font-normal w-[90%]">
                            {' '}
                            Şəxsi hesabatlılığı qoruyarkən iş təcrübələrimizi
                            yaxşılaşdırmaq və hər bir fərdi töhfəyə ortaq bir
                            yanaşma təmin etmək vəzifəsini davam etdirir
                        </p>
                    </div>
                    <div className="w-[313px] h-[196px]">
                        <div className="w-[56px] h-[56px] rounded-lg bg-[#7DB3FF] flex justify-center items-center">
                            <Image src={like} alt="like" />
                        </div>
                        <h6 className="text-[20px] font-semibold">
                            Peşəkar yanaşma
                        </h6>
                        <p className="text-[16px] font-normal w-[90%]">
                            {' '}
                            Şəxsi hesabatlılığı qoruyarkən iş təcrübələrimizi
                            yaxşılaşdırmaq və hər bir fərdi töhfəyə ortaq bir
                            yanaşma təmin etmək vəzifəsini davam etdirir
                        </p>
                    </div>
                    <div className="w-[313px] h-[196px]">
                        <div className="w-[56px] h-[56px] rounded-lg bg-[#7DB3FF] flex justify-center items-center">
                            <Image src={like} alt="like" />
                        </div>
                        <h6 className="text-[20px] font-semibold">
                            Peşəkar yanaşma
                        </h6>
                        <p className="text-[16px] font-normal w-[90%]">
                            {' '}
                            Şəxsi hesabatlılığı qoruyarkən iş təcrübələrimizi
                            yaxşılaşdırmaq və hər bir fərdi töhfəyə ortaq bir
                            yanaşma təmin etmək vəzifəsini davam etdirir
                        </p>
                    </div>
                </div>
            </div>
            <div className=" bg-[#131E41] h-[708px] w-full flex flex-col justify-center items-center overflow-hidden relative mt-[80px]">
                <h3 className="text-[48px] text-white font-semibold w-[200px] text-center absolute z-[101] top-20">
                    Qalereya
                </h3>
                <Rounded_Swipper />
                <button className="flex flex-row gap-2 items-center w-[200px] h-[50px] bg-white text-[#2961B1] text-[20px] font-[500px] justify-center rounded-lg  absolute  bottom-[78px] z-[10333]">
                    Daha ətraflı <Image src={strelka2} alt="strelka" />
                </button>
            </div>
            <div className="px-[100px]   mt-[100px]">
                <div className="flex flex-row justify-between items-center">
                    <h3 className="text-[48px] font-semibold">
                        Xəbərlər və yeniliklər
                    </h3>
                    <button className="flex flex-row gap-2 items-center w-[200px] h-[50px] bg-[#2961B1] text-white text-[20px] font-[500px] justify-center rounded-lg ">
                        Bizimlə əlaqə <Image src={strelka} alt="strelka" />
                    </button>
                </div>
                <div className="flex flex-row   justify-between mt-12">
                    <News_card />
                    <News_card />
                    <News_card />
                    <News_card />
                </div>
            </div>
            <div className="px-[100px] mt-[100px] rounded-lg relative mb-[100px] ">
                <Image src={map_png} alt="map_png " className="w-full" />

                <div className="w-[395px] h-[94%]] bg-white rounded-lg absolute top-5 left-[120px] bottom-5  z-30 pt-7 pl-6 pr-[14px] flex flex-col">
                    <h3 className="text-[#050B20] text-[32px] font-semibold mb-3">
                        Bizimlə əlaqə
                    </h3>
                    <p className="text-[16px] font-normal mb-10">
                        Sualın var? Bizimlə əlaqə saxla ən qısa zamanda sualını
                        cavablandıraq.
                    </p>
                    <div className="flex flex-row gap-[11.5px] mb-[24px] items-center">
                        <div className="flex justify-center items-center bg-[#7DB3FF] w-11 h-11 rounded-lg">
                            <Image src={phone} alt="phone" />
                        </div>
                        <p className=" text-[16px] font-medium">
                            +99412 525 85 42 / +99410 250 94 94
                        </p>
                    </div>
                    <div className="flex flex-row gap-[11.5px] mb-[24px] items-center">
                        <div className="flex justify-center items-center bg-[#7DB3FF] w-11 h-11 rounded-lg">
                            <Image src={location} alt="location" />
                        </div>
                        <p className=" text-[16px] font-medium flex flex-wrap w-[291px]">
                            AZ1023, Azərbaycan, Bakı Səbail ray., Salyan şosesi
                            12
                        </p>
                    </div>
                    <div className="flex flex-row gap-[11.5px] mb-[24px] items-center">
                        <div className="flex justify-center items-center bg-[#7DB3FF] w-11 h-11 rounded-lg">
                            <Image src={mail} alt="mail" />
                        </div>
                        <p className=" text-[16px] font-medium flex flex-wrap w-[291px]">
                            reception@marinets.az
                        </p>
                    </div>
                </div>
                <Image
                    src={locationREd}
                    alt="locationREd"
                    className=" absolute top-[311px] right-[525px]"
                />
            </div>
            <Footer />
            {/* <Map /> */}
        </div>
    );
}
