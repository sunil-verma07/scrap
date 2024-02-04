import React from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import ClientSlider from '../components/ClientSlider';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { description } from '../constants';


const Application = () => {
    document.title = 'Application | Scrapbag';
    const location = useLocation()


    return (
        <section>
            <div className="md:-mx-[300px] font-Lato">
                <div className="bg-defaultLime w-full h-full top-0 left-0 pt-[82px] md:pt-[60px] md:rounded-custom" >
                    <div className="relative">
                        <div className="container">
                            <div className="flex items-center justify-center md:flex md:h-[500px] md:py-0 gap-60">
                                <div className="heading mb-0 lg:text-left text-center">
                                    <div className='!text-white font-semibold text-base'>Careers</div>
                                    <div className="text-white text-[40px] font-bold mt-5">{location.state.title}</div>
                                    <p className="max-w-[450px] text-white text-[20px] font-normal mt-5">plar och sasamma. Autos lujåktig. Syhyska nobelt i pseudol, trins tede. Posävis ber or. Dor diasest.</p>
                                </div>
                                <div className="relative mt-5 md:mt-0" data-aos='fade-left' data-aos-duration="1000">
                                    <img className="h-[17rem]" src="/assets/images/illustration_career.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center font-HindMysuru gap-16 my-28">
                <div>
                    <div className="text-defaultLime text-[39.5px] font-bold mb-16">Job Description</div>
                    <div>
                        {description.map((desc, index) => (
                            desc.title === location.state.title ?
                                <div key={index} className="flex flex-col gap-3">
                                    {desc.details.map((item) => (
                                        <li className="text-[#464646] text-[19px] font-medium" key={item}>{item}</li>
                                    ))}
                                </div> : <>
                                </>
                        ))}
                    </div>
                </div>

                <div>
                    <div className="text-defaultLime text-[39.5px] font-bold mb-16">Eligibility Criteria</div>
                    <div>
                        {description.map((desc, index) => (
                            desc.title === location.state.title ?
                                <div key={index} className="flex flex-col gap-3">
                                    {desc.details.map((item) => (
                                        <li className="text-[#464646] text-[19px] font-medium" key={item}>{item}</li>
                                    ))}
                                </div> : <>
                                </>
                        ))}
                    </div>
                </div>

                <Link to="/contact-us">
                    <div className="rounded-xl bg-defaultLime md:px-14 xl:px-[330px] py-[9px] text-white font-BalooChettan2 font-semibold text-base">
                        Proceed
                    </div>
                </Link>
            </div>
        </section>
    );
};

export default Application;
