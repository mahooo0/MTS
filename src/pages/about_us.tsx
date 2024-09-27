import Image from 'next/image';
import React, { useEffect } from 'react';
import strelka from '../../public/svg/strelka_black.svg';
import dnk from '../../public/svg/dnk.svg';
import dnk2 from '../../public/svg/dnk2.svg';
import container from '../../public/images/container.png';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Employee_card from '@/components/Employee_card';
import Sertificat from '@/components/Sertificats';

function about_us() {
    useEffect(() => {
        const id = localStorage.getItem('scrollto');
        if (id) {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            localStorage.removeItem('scrollto');
        }
    }, []);
    return (
        <div>
            <Header active={2} />
            <div className="bg-[#FBFBFB] h-[90px] w-full "></div>

            <main>
                <div className="w-full  flex lg:flex-row flex-col relative bg-[#F7F7F8]">
                    <div className="lg:w-1/2 lg:pl-[100px] md:px-[60px] px-[30px]">
                        <div className="flex flex-row text-[18px] gap-3 mt-[41px] ">
                            <h5>Ana səhifə</h5>
                            <Image
                                src={strelka}
                                alt="strelka"
                                className=" opacity-60"
                            />
                            <h6 className=" opacity-60">Haqqımızda</h6>
                        </div>
                        <h1 className="lg:text-[48px] md:text-[48px]  text-[32px] font-semibold mt-7">
                            Şirkət tarixçəmiz
                        </h1>
                        <p className=" text-[16px] font-normal opacity-80 lg:pr-[20px] pr-0 mt-5 lg:mt-0">
                            “Marine Technical Solutions” Qapalı Səhmdar
                            Cəmiyyəti 28 aprel 2014-cü il tarixində Bakıda –
                            Azərbaycanda yaradılmış müasir və sürətlə inkişaf
                            edən şirkətdir. Artıq 10 ildən artıqdır ki, sizin
                            xidmətinizdə olan Marine Technical Solutions şirkəti
                            müxtəlif növ gəmilərin əsaslı təmiri,
                            konstruksiyaların quraşdırılması və s. bu kimi
                            işləri peşəkar komandası ilə icra edir. Şirkətdə 100
                            – dən çox əməkdaş sayı ilə daim inkişafa meyilli
                            olan peşəkar və təcrübəli komanda fəaliyyət
                            göstərir. “Marine Technical Solutions” Qapalı
                            Səhmdar Cəmiyyəti (QSC) gəmi təmiri və texniki
                            xidmət sahəsində fəaliyyət göstərən, 10 illik
                            təcrübəyə malik bir şirkətdir. Bu şirkət, gəmi
                            sənayesində müştərilərinə yüksək keyfiyyətli və tam
                            çeşidli xidmətlər təklif etmək məqsədilə yaradılıb.
                            Əsas fəaliyyət sahələrimiz gəmi təmiri, texniki
                            xidmət, avadanlıqların yenilənməsi və
                            modernizasiyası, həmçinin dəniz nəqliyyatı
                            vasitələrinin texniki təftişidir.
                        </p>
                    </div>
                    <div className="lg:w-1/2 lg:h-[587px] h-fit  ">
                        <Image
                            src={container}
                            alt="container"
                            className=" object-cover lg:h-full md:h-3/5 h-1/2 lg:mb-0 mb-6 lg:mt-0 mt-6"
                        />
                    </div>
                    <div className="bg-[#F7F7F8] lg:h-[128px]  h-fit  lg:w-3/5 w-full md:justify-around lg:absolute z-30 bottom-0 left-[100px] border-b border-black flex lg:justify-between justify-around items-center lg:pr-[40px] pr-0 lg:flex-row md:flex-row flex-row ">
                        <div className="flex flex-col  flex-wrap w-fit lg:mt-0 mt-4">
                            <h4 className="lg:text-[32px] md:text-[32px] text-[24px] font-semibold gap-3 lg:text-start text-center">
                                10+
                            </h4>
                            <p className="lg:text-[16px] md:text-[16px] text-[10px] font-normal">
                                İllik təcrübə
                            </p>
                        </div>
                        <div className="flex flex-col   w-fit lg:mt-0 mt-4">
                            <h4 className="lg:text-[32px] md:text-[32px] text-[24px] font-semibold gap-3 lg:text-start text-center">
                                1100+{' '}
                            </h4>
                            <p className="lg:text-[16px] md:text-[16px] text-[10px] flex-wrap lg:text-start md:text-start lg:max-w-full md:max-w-full max-w-20  text-center font-normal">
                                İllik təcrübə
                            </p>
                        </div>
                        <div className="flex flex-col   w-fit lg:mt-0 mt-4">
                            <h4 className="lg:text-[32px] md:text-[32px] text-[24px] font-semibold gap-3 lg:text-start text-center">
                                10+
                            </h4>
                            <p className="lg:text-[16px] md:text-[16px] text-[10px] flex-wrap lg:text-start md:text-start lg:max-w-full md:max-w-full max-w-20 text-center font-normal">
                                Tamamlanmış layihə{' '}
                            </p>
                        </div>
                        <div className="flex flex-col   w-fit lg:mt-0 mt-4">
                            <h4 className="lg:text-[32px] md:text-[32px] text-[24px] font-semibold gap-3 lg:text-start text-center">
                                10+
                            </h4>
                            <p className="lg:text-[16px] md:text-[16px] text-[10px] flex-wrap lg:text-start md:text-start lg:max-w-full md:max-w-full max-w-20 text-center font-normal">
                                Tamamlanmış təmir və konvensiya işləri{' '}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:px-[100px] md:px-[60px] px-[30px] pt-[20px] pn-[40px]">
                    <p className=" text-[16px] font-normal opacity-80 lg:pr-[20px]">
                        Şirkətimiz müştərilərinə geniş spektrli xidmətlər
                        göstərir ki, bunlar arasında mühərriklərin, nasosların,
                        elektrik sistemlərinin, boru xətlərinin və digər texniki
                        avadanlıqların təmiri və yenidən quraşdırılması xüsusi
                        yer tutur. Bundan əlavə, “Marine Technical Solutions”
                        QSC gəmi sahiblərinə təmirdən sonrakı dövrdə texniki
                        dəstək və məsləhət xidmətləri də göstərir. Peşəkar
                        mühəndislərdən və texniki personaldan ibarət komandamız
                        müştərilərin ehtiyaclarına uyğun olaraq hərtərəfli və
                        sürətli xidmətlər göstərir. Bütün bunlara əlavə olaraq
                        müasir texnologiyalar və qabaqcıl avadanlıqları istifadə
                        edərək, gəmi təmir işlərini ən yüksək standartlara uyğun
                        şəkildə həyata keçiririk. Şirkət fəaliyyət göstərdiyi
                        dövr ərzində gəmi sahibləri arasında etibar və nüfuz
                        qazanmış, həmçinin Azərbaycanın gəmi sənayesində
                        əhəmiyyətli rol oynayan bir qurum halına gəlmişdir.
                        Bizim əsas məqsədimiz, yerli və beynəlxalq bazarda
                        rəqabət qabiliyyətli xidmətlər göstərərək, müştərilərə
                        hər zaman keyfiyyətli və etibarlı həllər təqdim
                        etməkdir.
                    </p>
                </div>

                <div className="p-5 bg-white relative " id="structure">
                    <div className="pt-[100px] flex flex-col justify-center items-center bg-[#F3F7FF] pb-[100px] relative">
                        <Image
                            src={dnk}
                            alt="dnk"
                            className=" absolute top-0 "
                        />
                        <h2 className="text-[40px] font-semibold text-center mb-[40px] z-20">
                            Struktur{' '}
                        </h2>
                        <div className="z-20 flex flex-col  justify-center items-center">
                            <Employee_card />
                            <div className="  gap-[60px] pt-5 grid  grid-cols-1 lg:grid-cols-2 md:grid-cols-2 justify-between flex-row mt-[40px]">
                                <Employee_card />
                                <Employee_card />
                            </div>
                            <div className="  gap-[60px] pt-5 grid lg:grid-cols-3 md:grid-cols-3  md:justify-center md:items-center grid-rows-1  justify-between flex-row mt-[40px]">
                                <Employee_card />
                                <Employee_card />
                                <Employee_card />
                            </div>
                            <div className="  gap-[60px] pt-5  grid  grid-cols-1 lg:grid-cols-2 md:grid-cols-2 justify-between flex-row mt-[40px]">
                                <Employee_card />
                                <Employee_card />
                            </div>
                            <div className="  gap-[60px] pt-5 grid lg:grid-cols-4 md:grid-cols-2 place-items-center  place-content-center   md:justify-center md:items-center grid-rows-1  lg:justify-between justify-center  mt-[40px]">
                                <Employee_card />
                                <Employee_card />
                                <Employee_card />
                                <Employee_card />
                            </div>
                        </div>
                        <Image
                            src={dnk2}
                            alt="dnk"
                            className=" absolute  bottom-0 w-full"
                        />
                    </div>
                </div>

                <div className="pt-[100px]  bg-[#F6F7F8] " id="sertificatlar">
                    <h2 className="text-[40px] font-semibold text-center mb-[40px]">
                        Sertifikatlar
                    </h2>
                    <div className="flex items-center justify-evenly  flex-wrap pb-[100px] gap-[20px] lg:px-[100px] md:px-[60px]  px-[30px] ">
                        <Sertificat />
                        <Sertificat />
                        <Sertificat />
                        <Sertificat />
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default about_us;
