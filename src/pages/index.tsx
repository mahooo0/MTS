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
import novelty from '../../public/svg/novelty.svg';
import novelty_color from '../../public/svg/novelty_color.svg';
import leabhear from '../../public/svg/liebhear.svg';
import layner_png from '../../public/images/laner.png';
import delta_color from '../../public/svg/delta_color.svg';
import trubı_png from '../../public/images/trubı.png';
import map_png from '../../public/images/map.png';
import ddla from '../../public/svg/ddla.svg';
import ddla_color from '../../public/svg/ddla_color.svg';
import cms from '../../public/svg/cms.svg';
import cms_color from '../../public/svg/cms_color.svg';
import asc from '../../public/svg/asc.svg';
import asc_color from '../../public/svg/asc_color.svg';
import portfel from '../../public/svg/portfel.svg';
import protextion from '../../public/svg/protection.svg';
import pramata from '../../public/svg/qramata.svg';
import layner_2d from '../../public/svg/layner_2d.svg';
import CustomSwiper from '@/components/Rounded_Swipper';
import Rounded_Swipper from '@/components/Rounded_Swipper';
import News_card from '@/components/news_card';
import Footer from '@/components/Footer';
import Companies_logo from '@/components/companies_logo';
import { Blue_to_blue, White_to_blue } from '@/components/btns';
import { useRouter } from 'next/router';

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
    const router = useRouter();
    return (
        <div
            className="relative flex flex-col justify-center bg-[#F7F7F8]
        "
        >
            <Header active={1} />
            <div className="bg-slate-500 lg:h-[700px] h-[280px] w-full overflow-hidden relative">
                <div className="lg:w-1/2 w-full bg-white lg:bg-opacity-90 bg-opacity-60 h-full z-40 flex pt-[70px] lg:items-center absolute top-0 left-0">
                    <div className="md:ml-[100px] ml-[30px]  flex flex-col ">
                        <h1 className="font-bold  lg:text-[48px]  text-[26px] text-[#050B20]">
                            Lorem Ipsum is simply dummy text of the printing.
                        </h1>
                        <p className="text-black font-[500] lg:text-[20px] text-[12px] lg:mt-[20px] mt-[10px]">
                            Lorem Ipsum is simply dummy text of the printing and{' '}
                            <br />
                            typesetting industry.
                        </p>
                        <Blue_to_blue
                            text=" Bizimlə əlaqə "
                            action={() => {
                                router.push('/contact');
                            }}
                        />
                    </div>
                </div>
                <video
                    playsInline
                    controls={false}
                    width="600"
                    autoPlay
                    muted
                    loop
                    controlsList="nodownload"
                    className="w-full  object-fill h-full"
                >
                    <source src="/videos/vid.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="lg:px-[100px] px-[30px] flex flex-row justify-between mt-[40px] z-30">
                <Companies_logo img={delta_color} />

                <Companies_logo img={novelty_color} />
                <Companies_logo img={leabhear} />
                <Companies_logo img={ddla_color} />
                <Companies_logo img={cms_color} />
                <Companies_logo img={asc_color} />
            </div>
            <div className="lg:mt-[100px] mt-[50px] flex justify-center ">
                <div className="w-[744px] h-[209px] flex flex-col justify-center">
                    <h1 className=" lg:text-[48px] text-[24px] font-semibold text-center">
                        Gəmilərdə yerinə yetirilən <br />
                        təmir  və  modernizasiya  işləri
                    </h1>
                    <div className="flex flex-row gap-5 mt-10 flex-wrap justify-center ">
                        <button className="px-4 py-2 rounded-lg border border-black border-opacity-10 hover:bg-[#2961B1] hover:text-white hover:border-none">
                            Valkom və Praxis
                        </button>
                        <button className="px-4 py-2   rounded-lg border border-black border-opacity-10  bg-[#2961B1] text-white border-none">
                            Mexanika
                        </button>
                        <button className="px-4 py-2   rounded-lg border border-black border-opacity-10  hover:bg-[#2961B1] hover:text-white hover:border-none">
                            Avtomatika
                        </button>
                        <button className="px-4 py-2   rounded-lg border border-black border-opacity-10  hover:bg-[#2961B1] hover:text-white hover:border-none">
                            Hidravlika
                        </button>
                        <button className="px-4 py-2   rounded-lg border border-black border-opacity-10  hover:bg-[#2961B1] hover:text-white hover:border-none">
                            Soyutma
                        </button>
                    </div>
                </div>
            </div>
            <div className="lg:mx-[100px] flex justify-center mt-[48px] h-[300px]  relative  overflow-hidden">
                <div className="bg-black  bg-opacity-60 rounded-lg w-full   h-full absolute top-0  flex flex-col justify-center text-center items-center">
                    <h1 className="lg:text-[32px] text-[24px] font-semibold text-white">
                        Mexanika sahəsi üzrə
                    </h1>
                    <p className=" lg:w-[798px] w-[98%] lg:text-[18px] text-[12px] font-medium text-white mt-3">
                        Gəmilərdə  Baş və köməkçi mühərriklərin sürət
                        tənzimləyicisilərinin,yüksək təzyiqli yanacaq
                        nasoslarının, Baş mühərrikin pnevmatik (DAU) məsafədən
                        idarəetmə sisteminin təmiri işləri
                    </p>
                    <White_to_blue
                        text="Daha ətraflı "
                        action={() => {
                            router.push('/services');
                        }}
                    />
                </div>
                <Image
                    src={trubı_png}
                    alt="trubı_png"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="m-5 lg:h-[509px] pb-[30px] mt-[100px] lg:w-[97%] bg-[#E7EDF8] pt-[75px] lg:pl-[80px] pl-[30px] flex flex-row relative rounded-lg overflow-hidden">
                <div>
                    <h2 className=" lg:text-[48px] text-[20px] font-semibold ">
                        “Marine Technical Solutions” <br />
                        QSC haqqında qısa məlumat
                    </h2>
                    <p className="lg:w-[780px] w-[95%] mt-3 lg:text-[16px] text-[12px] text-opacity-80 ">
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
                    <Blue_to_blue
                        text="Bizimlə əlaqə"
                        action={() => {
                            router.push('/contact');
                        }}
                    />
                </div>
                <Image
                    src={layner_png}
                    alt="layner_png"
                    className=" absolute  bottom-0 right-0 lg:block hidden "
                    width={600}
                />
            </div>
            <div className="flex lg:flex-row flex-col bg-[#F7F7F8]  justify-between  pt-[80px] lg:px-[100px] px-[30px]">
                <h3 className=" lg:text-[48px] text-[24px] lg:text-left text-center text-[#050B20]">
                    Bizim üstünlüklərimiz
                </h3>
                <div className="flex-wrap flex-row grid gap-10 mt-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    <div className="w-[313px] h-[196px]">
                        <div className="w-[56px] h-[56px] rounded-lg bg-[#7DB3FF] flex justify-center items-center mb-5">
                            <Image src={portfel} alt="like" />
                        </div>
                        <h6 className="text-[20px] font-semibold">
                            Peşəkar yanaşma
                        </h6>
                        <p className="text-[16px] font-normal  w-[100%]">
                            {' '}
                            Şəxsi hesabatlılığı qoruyarkən iş təcrübələrimizi
                            yaxşılaşdırmaq və hər bir fərdi töhfəyə ortaq bir
                            yanaşma təmin etmək vəzifəsini davam etdirir
                        </p>
                    </div>
                    <div className="w-[313px] h-[196px]">
                        <div className="w-[56px] h-[56px] rounded-lg bg-[#7DB3FF] flex justify-center items-center mb-5">
                            <Image src={protextion} alt="like" />
                        </div>
                        <h6 className="text-[20px] font-semibold">
                            Maksimum rahatlıq
                        </h6>
                        <p className="text-[16px] font-normal w-[100%] pb-3">
                            Effektiv planlaşdırma, effektiv layihə idarəetməsi
                            və ciddi proses monitorinqi ilə müştəri tələblərinə
                            çevik, lakin praktik yanaşma
                        </p>
                    </div>
                    <div className="w-[313px] h-[196px]">
                        <div className="w-[56px] h-[56px] rounded-lg bg-[#7DB3FF] flex justify-center items-center mb-5">
                            <Image src={pramata} alt="like" />
                        </div>
                        <h6 className="text-[20px] font-semibold">
                            Yüksək keyfiyyət
                        </h6>
                        <p className="text-[16px] font-normal w-[100%] pb-3">
                            Nəzərdə tutulduğu kimi və uyğunluq tələblərinə uyğun
                            olaraq fəaliyyət göstərilməsi Heç bir əməliyyat
                            SƏTƏM-dən üstün deyil
                        </p>
                    </div>
                    <div className="w-[313px] h-[196px]">
                        <div className="w-[56px] h-[56px] rounded-lg bg-[#7DB3FF] flex justify-center items-center mb-5">
                            <Image src={layner_2d} alt="like" />
                        </div>
                        <h6 className="text-[20px] font-semibold">
                            Təhlükəsiz don limanı
                        </h6>
                        <p className="text-[16px] font-normal w-[100%] pb-3">
                            Uzunluğu 1100 m, orta dərinliyi 7 m, bütün lazımi
                            vasitələrlə təchiz olunmuşdur
                        </p>
                    </div>
                </div>
            </div>
            <div className=" bg-[#131E41] h-[708px] w-full flex flex-col justify-center items-center overflow-hidden relative mt-[80px]">
                <h3 className=" lg:text-[48px] text-[32px] text-white font-semibold w-[200px] text-center absolute z-[101] top-20">
                    Qalereya
                </h3>
                <Rounded_Swipper />
                <div className=" absolute  bottom-[78px]  z-[10333]">
                    <White_to_blue
                        text="Daha ətraflı"
                        action={() => router.push('/media')}
                    />
                </div>

                {/* <button className="flex flex-row gap-2 items-center w-[200px] h-[50px] bg-white text-[#2961B1] text-[20px] font-[500px] justify-center rounded-lg  absolute  bottom-[78px] z-[10333]">
                    Daha ətraflı <Image src={strelka2} alt="strelka" />
                </button> */}
            </div>
            <div className="lg:px-[100px] md:px-[60px] px-[30px]   mt-[100px]">
                <div className="flex lg:flex-row flex-col justify-between gap-[20px] items-center">
                    <h3 className=" lg:text-[48px] text-[32px] font-semibold">
                        Xəbərlər və yeniliklər
                    </h3>
                    <button
                        onClick={() => {
                            router.push('/news');
                        }}
                        className="flex flex-row gap-2 items-center w-[200px] h-[50px] bg-[#2961B1] hover:bg-[#184C97] z-[999999999999999] text-white text-[20px] font-[500px] justify-center rounded-lg "
                    >
                        Bütün xəbərlər
                        <Image src={strelka} alt="strelka" />
                    </button>
                </div>
                <div className="flex justify-center">
                    <div className="grid lg:flex-row flex-col items-center gap-4 lg:grid-cols-4 md:grid-cols-2  justify-between mt-12 ">
                        <News_card />
                        <News_card />
                        <News_card />
                        <News_card />
                    </div>
                </div>
            </div>
            <div className="lg:px-[100px] mt-[100px] rounded-lg relative mb-[100px] ">
                <iframe
                    className="w-full"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6836.025529021591!2d49.85315080154546!3d40.380998971825385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d0a3ea7028d%3A0xac9d73dbd66392c8!2s28%20May!5e0!3m2!1sru!2saz!4v1726840557089!5m2!1sru!2saz"
                    width="600"
                    height="450"
                    loading="lazy"
                ></iframe>

                <div className="w-[395px] h-[94%] bg-white rounded-lg  absolute top-5 left-[120px] bottom-5  z-30 pt-7 pl-6 pr-[14px] lg:flex hidden flex-col">
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
            </div>
            <Footer />
            {/* <Map /> */}
        </div>
    );
}
