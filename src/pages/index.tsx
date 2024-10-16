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
import { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';
import Rounded_Swipper2 from '@/components/Rounded_Swipper2';
import { useDispatch } from 'react-redux';
import { setcurrentservices, setservices } from '@/redux/slices/PassSlice';

export default function Home({ apiData }: { apiData: any }) {
    const [lang, setlang] = useState<string>('az');
    const [reset, setreset] = useState<boolean>(false);
    const [activeSer, setactiveSer] = useState<number>(0);
    const router = useRouter();
    const data = apiData.data;
    const baseurl = 'https://mts.caratcons.az/';
    useEffect(() => {
        const lng = localStorage.getItem('language') || 'en';
        setlang(lng);
    }, [reset]);
    // const lang = localStorage.getItem('language') || 'en';
    console.log(data.galleries);
    const dispatch = useDispatch();
    return (
        <div
            className="relative flex flex-col justify-center bg-[#F7F7F8]
        "
        >
            <Header
                setReset={() => setreset((prew) => !prew)}
                active={1}
                data={data.translates}
            />
            <div className="bg-slate-500 lg:h-[700px] h-[280px] w-full overflow-hidden relative">
                <div className="lg:w-full w-full bg-[linear-gradient(180deg,_rgba(255,255,255,0.4)_4.66%,_rgba(255,255,255,0.4)_13.57%,_rgba(255,255,255,0)_25.57%),_linear-gradient(180deg,_rgba(0,0,0,0.2)_65.29%,_rgba(0,0,0,0)_100%)] lg:bg-opacity-20 bg-opacity-20 h-full z-40 flex pt-[70px] lg:items-center absolute top-0 left-0 justify-around">
                    <div className="md:px-[100px] px-[30px]  flex flex-col justify-center items-center w-full ">
                        <h1 className="font-bold  lg:text-[48px]  text-[25px] text-white max-w-[633px]">
                            {data.hero.title[lang]}
                        </h1>
                        <div className="min-h-[132px] h-fit  bg-white bg-opacity-20   backdrop-blur-[4px] grid lg:grid-cols-4   justify-center place-items-center items-center  md:grid-cols-4 sm:grid-cols-4   grid-cols-2 lg:min-w-[853px] w-fit  px-[auto]  rounded-[4px] lg:mt-[136px] mt-0 text-white flex-wrap">
                            {data.statistics.map((item: any) => (
                                <div className="flex flex-col  flex-wrap w-full h-full   items-center">
                                    <h4 className="lg:text-[32px] md:text-[32px] text-[20px] font-semibold gap-3 lg:text-start text-center lg:mt-7 md:mt-7 mt-0">
                                        {item.value}
                                    </h4>
                                    <p className="lg:text-[16px] md:text-[16px] text-[10px] font-normal max-w-[149px] text-center">
                                        {item.title[lang]}
                                    </p>
                                </div>
                            ))}
                        </div>
                        {/* <p className="text-black font-[500] lg:text-[20px] text-[12px] lg:mt-[20px] mt-[10px] max-w-[551px]">
                            {data.hero.sub_title[lang]}
                        </p> */}
                        {/* <Blue_to_blue
                            text={data.translates.contact_us[lang]}
                            action={() => {
                                router.push('/contact');
                            }}
                        /> */}
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
                    <source
                        src={`${baseurl}${data.hero.video}`}
                        type="video/mp4"
                    />
                </video>
            </div>
            <div className="lg:px-[100px] px-[30px] flex flex-row justify-around mt-[40px] flex-wrap gap-3 w-full ">
                {data.brands.map((item: any, i: number) => (
                    <Companies_logo
                        key={i}
                        img={`${baseurl}${item.image}`}
                        alt={item.image_alt[lang]}
                        Title={item.image_title[lang]}
                        id={item.id}
                    />
                ))}
            </div>
            <div className="lg:mt-[100px] mt-[50px] flex justify-center ">
                <div className=" h-fit flex flex-col justify-center items-center">
                    <h1 className=" max-w-[744px] lg:text-[48px] text-[24px] font-semibold text-center">
                        {data.translates.service_title[lang]}
                    </h1>
                    <div className="flex flex-row gap-5 mt-10 flex-wrap justify-around lg:px-[100px] px-[30px] ">
                        {data.services.map((item: any, i: number) => {
                            console.log(item);

                            return (
                                <button
                                    onClick={() => setactiveSer(i)}
                                    className={`px-4 py-2 rounded-lg border border-black border-opacity-10 max-w-[600px] ${
                                        activeSer === i &&
                                        'bg-[#2961B1] text-white'
                                    } `}
                                >
                                    {item.name[lang]}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="lg:mx-[100px] flex justify-center mt-[48px] h-[300px]  relative  overflow-hidden">
                <div className="bg-black  bg-opacity-60 rounded-lg w-full   h-full absolute top-0  flex flex-col justify-center text-center items-center">
                    <h1 className="lg:text-[32px] text-[24px] font-semibold text-white">
                        {data.services[activeSer].title[lang]}
                    </h1>
                    <p className=" lg:w-[798px] w-[98%] lg:text-[18px] text-[12px] font-medium text-white mt-3">
                        {data.services[activeSer].content[lang]}
                    </p>
                    <White_to_blue
                        text={data.translates.see_more[lang]}
                        action={() => {
                            dispatch(setservices(data.services));
                            dispatch(
                                setcurrentservices(data.services[activeSer])
                            );
                            router.push(
                                `/services/${data.services[activeSer].id}`
                            );
                        }}
                    />
                </div>
                <img
                    src="/images/trubı.png"
                    alt="trubı_png"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="bg-white mt-[100px] ">
                <div className="m-5 lg:min-h-[509px] pb-[30px] lg:w-[97%] bg-[#E7EDF8] pt-[75px] lg:pl-[80px] pl-[30px] flex flex-row relative rounded-lg overflow-hidden">
                    <div>
                        <h2 className=" lg:text-[48px] text-[20px] font-semibold lg:w-[60%] w-full">
                            {data.home_about.title[lang]}
                        </h2>
                        <div
                            className="lg:w-[780px] w-[95%] mt-3 lg:text-[16px] text-[12px] text-opacity-80 text-wrap "
                            id="home_about_description"
                            dangerouslySetInnerHTML={{
                                __html: data.home_about.description[lang],
                            }}
                        />

                        <Blue_to_blue
                            text={data.translates.contact_us[lang]}
                            action={() => {
                                router.push('/contact');
                            }}
                        />
                    </div>

                    <Image
                        src={`${baseurl}${data.home_about.image}`}
                        alt="layner_png"
                        className=" absolute  bottom-0 right-0 lg:block hidden  h-full"
                        width={600}
                        height={600}
                    />
                </div>
            </div>

            <div className="flex lg:flex-row flex-col bg-  justify-between  pt-[80px] lg:px-[100px] px-[30px]">
                <h3 className=" lg:text-[48px] text-[24px] lg:text-left text-center text-[#050B20] max-w-[341px]">
                    {data.translates.our_advantages[lang]}
                </h3>
                <div className="flex-wrap flex-row grid gap-10 mt-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    {data.advantages.map((item: any) => (
                        <div className="w-[313px] h-[196px]">
                            <div className="w-[56px] h-[56px] rounded-lg bg-[#7DB3FF] flex justify-center items-center mb-5">
                                <Image
                                    src={`${baseurl}${item.icon}`}
                                    alt="like"
                                    width={34}
                                    height={34}
                                />
                            </div>
                            <h6 className="text-[20px] font-semibold">
                                {item.title[lang]}
                            </h6>
                            <p className="text-[16px] font-normal  w-[100%]">
                                {item.text[lang]}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className=" bg-[#131E41] h-[708px] w-full flex flex-col justify-center items-center overflow-hidden relative mt-[80px]">
                <h3 className=" lg:text-[48px] text-[32px] text-white font-semibold w-[200px] text-center absolute z-[101] top-20">
                    {data.translates.gallery[lang]}
                </h3>
                <Rounded_Swipper2 data={data.galleries} />
                <div className=" absolute  bottom-[78px]  z-[10333]">
                    <White_to_blue
                        text={data.translates.see_more[lang]}
                        action={() => router.push('/media')}
                    />
                </div>
            </div>
            <div className="bg-white">
                <div className="lg:px-[100px] md:px-[60px] px-[30px]   mt-[100px]">
                    <div className="flex lg:flex-row flex-col justify-between gap-[20px] items-center">
                        <h3 className=" lg:text-[48px] text-[32px] font-semibold">
                            {data.translates.news[lang]}
                        </h3>
                        <button
                            onClick={() => {
                                router.push('/news');
                            }}
                            className="flex flex-row gap-2 items-center w-[200px] h-[50px] bg-[#2961B1] hover:bg-[#184C97] z-[999999999999999] text-white text-[20px] font-[500px] justify-center rounded-lg "
                        >
                            {data.translates.see_more[lang]}
                            <Image src={strelka} alt="strelka" />
                        </button>
                    </div>
                    <div className="flex justify-center">
                        <div className="flex flex-row w-full  items-center gap-4 flex-wrap  lg:justify-between md:justify-between justify-center mt-12 ">
                            {data.blogs.map((item: any, i: any) => {
                                if (i < 3) {
                                    return;
                                }
                                return (
                                    <News_card
                                        data={item}
                                        lang={lang}
                                        translates={data.translates}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div
                    className="lg:px-[100px] mt-[100px] rounded-lg relative mb-[100px] lg:h-[605px] h-auto "
                    id="contact"
                >
                    <div
                        className="IfarmeCLass"
                        dangerouslySetInnerHTML={{
                            __html: `${data.contact.map} `,
                        }}
                    />

                    <div className="w-[395px] h-[94%] bg-white rounded-lg  absolute top-5 left-[120px] bottom-5  z-30 pt-7 pl-6 pr-[14px] lg:flex hidden flex-col">
                        <h3 className="text-[#050B20] text-[32px] font-semibold mb-3">
                            {data.translates.contact_us[lang]}
                        </h3>
                        <p className="text-[16px] font-normal mb-10">
                            {data.translates.contact_title[lang]}
                        </p>
                        <div className="flex flex-row gap-[11.5px] mb-[24px] items-center">
                            <div className="flex justify-center items-center bg-[#7DB3FF] w-11 h-11 rounded-lg">
                                <Image src={phone} alt="phone" />
                            </div>
                            <p className=" text-[16px] font-medium">
                                {' '}
                                <a href={`tel:${data.contact.phone_1}`}>
                                    {' '}
                                    {data.contact.phone_1}{' '}
                                </a>
                                /{' '}
                                <a href={`tel:${data.contact.phone_2}`}>
                                    {' '}
                                    {data.contact.phone_2}{' '}
                                </a>
                            </p>
                        </div>
                        <div className="flex flex-row gap-[11.5px] mb-[24px] items-center">
                            <div className="flex justify-center items-center bg-[#7DB3FF] w-11 h-11 rounded-lg">
                                <Image src={location} alt="location" />
                            </div>
                            <p className=" text-[16px] font-medium flex flex-wrap w-[291px]">
                                {data.contact.address[lang]}
                            </p>
                        </div>
                        <div className="flex flex-row gap-[11.5px] mb-[24px] items-center">
                            <div className="flex justify-center items-center bg-[#7DB3FF] w-11 h-11 rounded-lg">
                                <Image src={mail} alt="mail" />
                            </div>
                            <a href={`mailto:${data.contact.email}`}>
                                <p className=" text-[16px] font-medium flex flex-wrap w-[291px]">
                                    {data.contact.email}
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <Footer data={data.translates} lang={lang} contact={data.contact} />
            {/* <Map /> */}
        </div>
    );
}
export async function getServerSideProps() {
    const res = await fetch('https://mts.caratcons.az/api/home');
    const data = await res.json();
    console.log(data);

    // Pass data to the page via props
    return { props: { apiData: data } };
}
