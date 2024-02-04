import Testimonial from '../components/Testimonial';
import { useEffect, useState, useRef } from 'react';
import Counter from '../components/Counter';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import router from '../router';
import ProjectSlider from '../components/ProjectSlider';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import Contact from '../components/ContactUs';


const index = (props: any) => {
    document.title = 'Scarpbag';
    const [activeTab, setActiveTab] = useState<string>('all');
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;

    const ref = useRef<null | HTMLElement>(null);

    useEffect(() => {
        console.log('router', router);
    });

    const cardStyle = {
        display: 'block',
        // width: '18.5vw',
        width: "284.16px",
        transitionDuration: '0.3s',
        // height: '21vw',
        height: '322.56px',
        borderRadius: 20
    }

    const handleClick = () => {
        if (ref.current === null) { }
        else
            ref!.current!.scrollIntoView({ block: 'end', behavior: 'smooth' });
    }

    return (
        <div className="overflow-x-hidden bg-white">
            <div className="overflow-hidden max-h-[700px] pb-9 lg:pb-0 bg-defaultLime pt-[82px] sm:-mx-[230px] sm:rounded-b-[50%] lg:-mx-[150px] lg:pt-[60px]">
                <div className="relative">
                    <div className="lg:px-[300px] font-Lato">
                        <div className="relative bg-cover bg-top bg-no-repeat pt-12 pb-0 lg:pt-20 lg:pb-60 xl:pt-32">
                            <div className="w-full relative z-[1] text-center text-white lg:w-3/5 lg:text-left xl:w-1/2">
                                <h2 className="text-2xl font-extrabold leading-normal sm:text-5xl lg:text-[55px] lg:leading-[70px] ">
                                    Sell your  <span className="italic text-zinc-700">Scrap<br /></span> at one click,
                                </h2>
                                <p className="max-w-[450px] text-white text-[20px] font-normal mt-5">plar och sasamma. Autos lujåktig. Syhyska nobelt i pseudol, trins tede. Posävis ber or. Dor diasest.</p>
                                <p className="mt-[64px] mb-2\7 text-2xl font-medium italic lg:w-[90%]">
                                    Download our app now
                                </p>

                                <div className='md:justify-start items-center justify-center inline-flex flex-wrap'>
                                    <a href="https://play.google.com/store/games?hl=en&gl=US" target="_blank"
                                        rel="noopener noreferrer">
                                        <img className="w-[230px] h-[90px]" src="/assets/images/google-play-badge.png" alt="Google play store" />
                                    </a>
                                    <a href="https://www.apple.com/in/app-store/" target="_blank"
                                        rel="noopener noreferrer">
                                        <img className="w-[205px] h-[75px]" src="/assets/images/apple-store.svg" alt="Google play store" />
                                    </a>
                                </div>
                            </div>

                            <div className="w-[1000px] h-[900px] figure bottom-[-180px] ml-40 mr-24 right-28 md:w-[540px] hidden lg:block lg:absolute lg:mb-0 xl:w-[650px]">
                                <img className="w-[300px] h-[500px] top-[60px] absolute G1" src="/assets/images/Group4.png" />
                                <img className="w-[300px] h-[500px] top-[60px] absolute G3" src="/assets/images/Group3.png" />
                                <img className="w-[360px] h-[620px] left-[290px] top-0 absolute G2" src="/assets/images/Group.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center font-BalooChettan2">
                <button className=' rounded-xl flex items-center justify-center text-defaultLime bg-white  px-6 py-[6px] gap-3 -my-5' onClick={handleClick}
                    style={{ boxShadow: '0px 4.81632661819458px 4.81632661819458px rgba(0, 0, 0, 0.25)' }}
                >
                    <div className="text-xl font-semibold">
                        Explore
                    </div>
                    <svg width="24" height="24" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_309_12370" maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="29">
                            <rect x="0.551025" y="0.0407715" width="28.898" height="28.898" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_309_12370)">
                            <path d="M15 18.5538L7.77551 11.3293L9.46123 9.64355L15 15.1823L20.5388 9.64355L22.2245 11.3293L15 18.5538Z" fill="#464646" />
                        </g>
                    </svg>
                </button>
            </div>


            <section ref={ref} className="py-14  lg:py-[160px]">
                <div>
                    <div className="heading text-center">
                        <h4 className='font-HindMysuru'>Sell your scrap in three easy steps</h4>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-5">
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div
                                className="w-[280px] h-[480px] group rounded-3xl border-2 border-white bg-white p-6 transition duration-500 hover:border-defaultLime hover:bg-defaultLime/20"
                                style={{
                                    boxShadow: '-6px 2px 70px rgba(219.43, 222.33, 224.78, 0.80)',
                                }}
                            >
                                <div className="flex items-center flex-col font-mulish">
                                    <div
                                        className="flex h-12 w-12 items-center justify-center rounded-full bg-defaultLime transition text-white text-[30px] font-extrabold"
                                        style={{
                                            boxShadow: '0 10px 60px 0 #71BF44',
                                        }}
                                    >
                                        1
                                    </div>

                                    <div>
                                        <img src="/assets/images/Step1.svg" alt="Step1" />
                                    </div>
                                </div>

                                <div
                                    className="mt-5 inline-block text-[18px] font-extrabold text-black"
                                >
                                    Order
                                </div>
                                <p className="mb-10 mt-2 text-sm font-medium transition line-clamp-3 ">
                                    Open Scrapbag app & check the price and place order.
                                </p>
                            </div>

                        </div>


                        <div

                            className="hidden lg:flex h-11 w-11 items-center justify-center rounded-full bg-[#F3F4F6] transition group-hover:bg-black rtl:rotate-180 dark:bg-gray-dark"
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-black transition group-hover:text-white dark:text-white"
                            >
                                <path
                                    d="M9.41083 14.4109L10.5892 15.5892L16.1783 10.0001L10.5892 4.41089L9.41083 5.58922L12.9883 9.16672H5V10.8334H12.9883L9.41083 14.4109Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </div>

                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div
                                className="w-[280px] h-[480px] group rounded-3xl border-2 border-white bg-white p-6 transition duration-500 hover:border-defaultLime hover:bg-defaultLime/20"
                                style={{
                                    boxShadow: '-6px 2px 70px rgba(219.43, 222.33, 224.78, 0.80)',
                                }}
                            >
                                <div className="flex items-center flex-col font-mulish">
                                    <div
                                        className="flex h-12 w-12 items-center justify-center rounded-full bg-defaultLime transition text-white text-[30px] font-extrabold"
                                        style={{
                                            boxShadow: '0 15px 60px 0 #71BF44',
                                        }}
                                    >
                                        2
                                    </div>

                                    <div className='my-7'>
                                        <img src="/assets/images/Step2.svg" alt="Step2" />
                                    </div>
                                </div>

                                <div
                                    className="mt-5 inline-block text-[18px] font-extrabold text-black"
                                >
                                    Pickup
                                </div>
                                <p className="mb-10 mt-2 text-sm font-medium transition line-clamp-3 ">
                                    Accurate weighing at your doorstep by our pickup partner.
                                </p>
                                {/* <Link
                                    to="/services-detail"
                                    className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F3F4F6] transition group-hover:bg-black rtl:rotate-180 dark:bg-gray-dark"
                                >
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="text-black transition group-hover:text-white dark:text-white"
                                    >
                                        <path
                                            d="M9.41083 14.4109L10.5892 15.5892L16.1783 10.0001L10.5892 4.41089L9.41083 5.58922L12.9883 9.16672H5V10.8334H12.9883L9.41083 14.4109Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </Link> */}
                            </div>

                        </div>

                        <div

                            className="hidden lg:flex  h-11 w-11 items-center justify-center rounded-full bg-[#F3F4F6] transition group-hover:bg-black rtl:rotate-180 dark:bg-gray-dark"
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-black transition group-hover:text-white dark:text-white"
                            >
                                <path
                                    d="M9.41083 14.4109L10.5892 15.5892L16.1783 10.0001L10.5892 4.41089L9.41083 5.58922L12.9883 9.16672H5V10.8334H12.9883L9.41083 14.4109Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </div>

                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div
                                className="w-[280px] h-[480px] group rounded-3xl border-2 border-white bg-white p-6 transition duration-500 hover:border-defaultLime hover:bg-defaultLime/20"
                                style={{
                                    boxShadow: '-6px 2px 70px rgba(219.43, 222.33, 224.78, 0.80)',
                                }}
                            >
                                <div className="flex items-center flex-col font-mulish">
                                    <div
                                        className="flex h-12 w-12 items-center justify-center rounded-full bg-defaultLime transition text-white text-[30px] font-extrabold"
                                        style={{
                                            boxShadow: '0 15px 60px 0 #71BF44',
                                        }}
                                    >
                                        3
                                    </div>

                                    <div className='my-10'>
                                        <img src="/assets/images/Step3.svg" alt="Step3" />
                                    </div>
                                </div>

                                <div
                                    className="mt-5 inline-block text-[18px] font-extrabold text-black"
                                >
                                    Get paid
                                </div>
                                <p className="mb-10 mt-2 text-sm font-medium transition line-clamp-3 ">
                                    Get paid in either cash or green coins.
                                </p>
                                {/* <Link
                                    to="/services-detail"
                                    className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F3F4F6] transition group-hover:bg-black rtl:rotate-180 dark:bg-gray-dark"
                                >
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="text-black transition group-hover:text-white dark:text-white"
                                    >
                                        <path
                                            d="M9.41083 14.4109L10.5892 15.5892L16.1783 10.0001L10.5892 4.41089L9.41083 5.58922L12.9883 9.16672H5V10.8334H12.9883L9.41083 14.4109Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </Link> */}
                            </div>

                        </div>

                    </div>

                </div>
            </section>


            <ProjectSlider title="What we collect" />


            <section className="w-full h-full bg-[url('/assets/images/volunteers.svg')] mt-60">
                <div data-aos="fade-up" data-aos-duration="1000" className="bg-defaultLime/75 pb-28">
                    <div className="text-center text-[#FFFFFF] font-bold text-[40px] pt-28 mb-12">Why Us?</div>
                    <div data-aos="fade-up" data-aos-duration="1500" className="flex flex-wrap items-center justify-center gap-4">
                        <Card sx={{ minWidth: 275 }} style={cardStyle}>
                            <CardContent>
                                <div className="flex flex-col items-center text-center gap-4">
                                    <img className="h-36" src="/assets/images/Ecosocial.svg" alt="" />
                                    <Typography sx={{ fontSize: 25, color: '#464646', fontWeight: 700, fontFamily: 'HindMysuru' }}>
                                        Eco-Social Impact
                                    </Typography>
                                    <Typography sx={{ color: '#464646', fontFamily: 'HindMysuruMedium', fontSize: 15, fontWeight: 400 }}>
                                        Our services contribute to environmental sustainability by making a positive social impact on the environment.
                                    </Typography>
                                </div>
                            </CardContent>
                        </Card>
                        <Card sx={{ minWidth: 275 }} style={cardStyle}>
                            <CardContent>
                                <div className="flex flex-col items-center text-center gap-4">
                                    <img className="h-[130px] mt-6" src="/assets/images/Rewards.svg" alt="" />
                                    <Typography sx={{ fontSize: 25, color: '#464646', fontWeight: 700, fontFamily: 'HindMysuru', wordWrap: 'break-word', lineHeight: 1 }}>
                                        Reward Points on Scrap Selling
                                    </Typography>
                                    <Typography sx={{ color: '#464646', fontFamily: 'HindMysuruMedium', fontSize: 15, fontWeight: 400 }}>
                                        Our services contribute to environmental sustainability by making a positive social impact.
                                    </Typography>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1500" className="flex flex-wrap items-center justify-center gap-4 mt-6">
                        <Card sx={{ minWidth: 275 }} style={cardStyle}>
                            <CardContent>
                                <div className="flex flex-col items-center text-center gap-7">
                                    <img className="h-[130px]" src="/assets/images/Weighing.svg" alt="" />
                                    <Typography sx={{ fontSize: 25, color: '#464646', fontWeight: 700, fontFamily: 'HindMysuru' }}>
                                        Accurate Weighing
                                    </Typography>
                                    <Typography sx={{ color: '#464646', fontFamily: 'HindMysuruMedium', fontSize: 15, fontWeight: 400 }}>
                                        We use precise electronic weighing machines according to industry standards.
                                    </Typography>
                                </div>
                            </CardContent>
                        </Card>
                        <Card sx={{ minWidth: 275 }} style={cardStyle}>
                            <CardContent>
                                <div className="flex flex-col items-center text-center gap-5">
                                    <img className="h-36" src="/assets/images/Rates.svg" alt="" />
                                    <Typography sx={{ fontSize: 25, color: '#464646', fontWeight: 700, fontFamily: 'HindMysuru' }}>
                                        Viable Market Rates
                                    </Typography>
                                    <Typography sx={{ color: '#464646', fontFamily: 'HindMysuruMedium', fontSize: 15, fontWeight: 400 }}>
                                        We ensure fair prices, considering the value and future potential as perceived by our customers.
                                    </Typography>
                                </div>
                            </CardContent>
                        </Card>
                        <Card sx={{ minWidth: 275 }} style={cardStyle}>
                            <CardContent>
                                <div className="flex flex-col items-center text-center gap-5">
                                    <img className="h-36" src="/assets/images/Doorstep.svg" alt="" />
                                    <Typography sx={{ fontSize: 25, color: '#464646', fontWeight: 700, fontFamily: 'HindMysuru' }}>
                                        Doorstep Pickup
                                    </Typography>
                                    <Typography sx={{ color: '#464646', fontFamily: 'HindMysuruMedium', fontSize: 15, fontWeight: 400 }}>
                                        We provide doorstep scrap collection service, eliminating the need for you to visit our stores.
                                    </Typography>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

            </section>


            <section className="mt-60 gap-8">
                <div className="heading text-center">
                    <h3 className="font-HindMysuru">Environmental Impact</h3>
                </div>
                <div data-aos="fade-in" data-aos-duration="1000" className="flex flex-wrap justify-center gap-8">
                    <Card sx={{ minWidth: 275 }} style={{ width: '300px', height: '210px', boxShadow: '-40px 30px 70px rgba(113, 191, 68, 0.30)', borderRadius: 8 }}>
                        <CardContent>
                            <div className="mt-8 flex">
                                <div className="mx-3">
                                    <Typography sx={{ fontSize: 80, color: '#464646', fontFamily: 'HindMysuruSemiBold', lineHeight: 1 }}>
                                        100
                                    </Typography>
                                    <Typography sx={{ color: '#464646', fontFamily: 'BalooChettan2SemiBold', fontSize: 21 }}>
                                        Trees saved
                                    </Typography>
                                </div>
                                <img className="h-24" src="/assets/images/trees.svg" alt="" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card sx={{ minWidth: 275 }} style={{ width: '290px', height: '175px', boxShadow: '-40px 30px 70px rgba(113, 191, 68, 0.30)', borderRadius: 8, backgroundColor: '#71BF44', color: "white" }}>
                        <CardContent>
                            <div className="mt-8 flex">
                                <div className="mx-6">
                                    <Typography sx={{ fontSize: 55, fontFamily: 'HindMysuruSemiBold' }}>
                                        50 kg
                                    </Typography>
                                    <Typography sx={{ fontFamily: 'BalooChettan2SemiBold', fontSize: 21 }}>
                                        Plastic Waste
                                    </Typography>
                                </div>
                                <img className="h-[85px]" src="/assets/images/bottle.svg" alt="" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card sx={{ minWidth: 275 }} style={{ width: '290px', height: '175px', boxShadow: '-40px 30px 70px rgba(113, 191, 68, 0.30)', borderRadius: 8, backgroundColor: 'white', color: "#464646" }}>
                        <CardContent>
                            <div className="mt-8 flex">
                                <div className="mx-6">
                                    <Typography sx={{ fontSize: 55, fontFamily: 'HindMysuruSemiBold' }}>
                                        10 kg
                                    </Typography>
                                    <Typography sx={{ fontFamily: 'BalooChettan2SemiBold', fontSize: 21 }}>
                                        Electronic Waste
                                    </Typography>
                                </div>
                                <img className="h-[85px]" src="/assets/images/Electronic.svg" alt="" />
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div data-aos="fade-in" data-aos-duration="1000" className="flex flex-wrap items-center justify-center gap-8">
                    <Card sx={{ minWidth: 275 }} style={{ width: '300px', height: '175px', boxShadow: '-40px 30px 70px rgba(113, 191, 68, 0.30)', borderRadius: 8, backgroundColor: '#71BF44', color: "white" }}>
                        <CardContent>
                            <div className="mt-6 flex">
                                <div className="mx-6">
                                    <Typography sx={{ fontSize: 55, fontFamily: 'HindMysuruSemiBold' }}>
                                        50 kg
                                    </Typography>
                                    <Typography sx={{ fontFamily: 'BalooChettan2SemiBold', fontSize: 21 }}>
                                        Metal Waste
                                    </Typography>
                                </div>
                                <img className="h-[85px]" src="/assets/images/Wrench.svg" alt="" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card sx={{ minWidth: 275 }} style={{ width: '610px', boxShadow: '-40px 30px 70px rgba(113, 191, 68, 0.30)', borderRadius: 8, backgroundColor: 'white', color: "#464646" }}>
                        <CardContent>
                            <div className="mt-8 flex">
                                <div className="mx-10">
                                    <Typography sx={{ fontSize: 83, fontFamily: 'HindMysuru' }}>
                                        10 kg
                                    </Typography>
                                    <Typography sx={{ fontFamily: 'BalooChettan2SemiBold', fontSize: 25 }}>
                                        CO2 Emission Reduced
                                    </Typography>
                                </div>
                                <img className="h-28" src="/assets/images/CO2.svg" alt="" />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>


            <Counter title="TEAM. CUSTOMER. COMMUNITY" />


            <Testimonial />

            <section className="py-14 lg:py-[60px] bg-defaultLime h-auto">
                <div className="lg:px-[260px] px-6">
                    <div className="relative z-10 lg:flex items-center justify-center">
                        <div className="heading text-center lg:mb-0 lg:w-1/3 lg:h-2/5 lg:pr-11 lg:text-left">
                            <div className="!text-white text-[30px] font-extrabold font-mulish">Get In Touch</div>
                            <div className="!text-white text-[30px] font-extrabold mt-5">With Us</div>
                            <img
                                src="/assets/images/form-img.svg"
                                alt="form-img"
                                className="mx-auto"
                                data-aos-duration="1000"
                            />
                        </div>
                        <Contact />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default index;
