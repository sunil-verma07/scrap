import Counter from '../components/Counter';
import Testimonial from '../components/Testimonial';
import ProjectSlider from '../components/ProjectSlider';
import Modal from '../components/Modal';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay, Virtual } from 'swiper';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';

const Services = () => {
    document.title = 'Services | Scrapbag';
    const dialog: any = useRef();
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;

    return (
        <div className='bg-white'>
            <div className="md:-mx-[300px] font-Lato">
                <div className="bg-defaultLime w-full h-full top-0 left-0 pt-[82px] md:pt-[60px] md:rounded-custom pb-7 lg:pb-0" >
                    <div className="relative">
                        <div className="container">
                            <div className="items-center justify-center flex flex-wrap lg:h-[500px] md:py-0 xl:gap-64">
                                <div className="heading mb-0 lg:text-left text-center">
                                    <div className='!text-white font-semibold text-base'>Services</div>
                                    <div className="text-white text-2xl lg:text-[40px] font-bold mt-5">Our Services</div>
                                    <p className="max-w-[450px] text-white text-[20px] font-normal mt-5">plar och sasamma. Autos lujåktig. Syhyska nobelt i pseudol, trins tede. Posävis ber or. Dor diasest.</p>
                                </div>
                                <div className="relative mt-5 md:mt-0" data-aos='fade-left' data-aos-duration="1000">
                                    <img className="h-[20rem]" src="/assets/images/illustartion_services.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="py-14 lg:py-[100px] font-Lato">
                <div className="px-4 xl:pl-24 xl:pr-16">
                    <div className="text-defaultLime text-4xl lg:text-[51px] font-bold">Waste Managment</div>
                    <div className="grid grid-cols-3 gap-2 lg:gap-1 mt-20">
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className='text-[#464646] lg:text-[32px] font-bold'>Waste Collection</div>
                            <div className="bg-transparent transition duration-500 max-w-[430px] mt-7">
                                <img className='rounded-2xl ' src="/assets/images/waste_collection.svg" alt="" />
                                <p className="text-[#868686] lg:text-xl mt-7">sade Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa aliquam temporibus perferendis expedita modi possimus!</p>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className='text-[#464646]  lg:text-[32px] font-bold'>Reverse Logistics</div>
                            <div className="bg-transparent transition duration-500  max-w-[430px] mt-7">
                                <img className='rounded-2xl' src="/assets/images/reverse_logistics.svg" alt="" />
                                <p className="text-[#868686] lg:text-xl mt-7">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa aliquam temporibus perferendis expedita modi possimus!</p>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className='text-[#464646] lg:text-[32px] font-bold'>Waste Segregation</div>
                            <div className="bg-transparent transition duration-500  max-w-[430px] mt-7">
                                <img className='rounded-2xl' src="/assets/images/waste_segregation.svg" alt="" />
                                <p className="text-[#868686] lg:text-xl mt-7">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa aliquam temporibus perferendis expedita modi possimus!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="py-14 dark:bg-transparent lg:py-[100px]">
                <div>
                    <div className="heading text-center">
                        <div className="font-Lato text-defaultLime font-bold text-5xl">Tech Platform</div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:place-items-center px-10 xl:px-[420px] gap-28 font-HindMysuru">
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="group rounded-[32px] bg-white py-[30px] px-[23px] transition duration-500 hover:scale-105" style={{ boxShadow: '-20px 30px 70px rgba(219.43, 222.33, 224.78, 0.40)' }}>
                                <svg width="105" height="105" viewBox="0 0 133 133" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <mask id="mask0_299_4773" maskUnits="userSpaceOnUse" x="0" y="0" width="133" height="133">
                                        <rect width="133" height="133" fill="#D9D9D9" />
                                    </mask>
                                    <g mask="url(#mask0_299_4773)">
                                        <path d="M38.7918 127.458C35.7439 127.458 33.1347 126.373 30.9642 124.203C28.7937 122.032 27.7085 119.423 27.7085 116.375V16.625C27.7085 13.577 28.7937 10.9678 30.9642 8.79736C33.1347 6.62687 35.7439 5.54163 38.7918 5.54163H94.2085C97.2564 5.54163 99.8656 6.62687 102.036 8.79736C104.207 10.9678 105.292 13.577 105.292 16.625V116.375C105.292 119.423 104.207 122.032 102.036 124.203C99.8656 126.373 97.2564 127.458 94.2085 127.458H38.7918ZM66.5002 113.604C68.0703 113.604 69.3865 113.073 70.4486 112.011C71.5108 110.949 72.0418 109.633 72.0418 108.062C72.0418 106.492 71.5108 105.176 70.4486 104.114C69.3865 103.052 68.0703 102.521 66.5002 102.521C64.93 102.521 63.6139 103.052 62.5517 104.114C61.4896 105.176 60.9585 106.492 60.9585 108.062C60.9585 109.633 61.4896 110.949 62.5517 112.011C63.6139 113.073 64.93 113.604 66.5002 113.604ZM38.7918 88.6666H94.2085V33.25H38.7918V88.6666Z" fill="#71BF44" />
                                    </g>
                                </svg>
                                <div className="max-w-[300px] mt-9">
                                    <div className="text-[#464646] font-bold text-lg leading-7 mb-3">Digital platform</div>
                                    <p className="text-[#7780A1] text-[14px] font-medium">We provide services with the best designs than our designer team for your business.</p>
                                </div>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="group rounded-[32px] bg-white py-[30px] px-[23px] transition duration-500 hover:scale-105" style={{ boxShadow: '-20px 30px 70px rgba(219.43, 222.33, 224.78, 0.40)' }}>
                                <svg width="105" height="105" viewBox="0 0 133 133" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.5" d="M34.4168 110.833H16.9168C15.3697 110.833 13.886 110.219 12.792 109.125C11.6981 108.031 11.0835 106.547 11.0835 105V58.3333C11.0835 56.7862 11.6981 55.3025 12.792 54.2085C13.886 53.1146 15.3697 52.5 16.9168 52.5H34.4168C35.9639 52.5 37.4477 53.1146 38.5416 54.2085C39.6356 55.3025 40.2502 56.7862 40.2502 58.3333V105C40.2502 106.547 39.6356 108.031 38.5416 109.125C37.4477 110.219 35.9639 110.833 34.4168 110.833ZM116.084 110.833H98.5836C97.0365 110.833 95.5527 110.219 94.4588 109.125C93.3648 108.031 92.7502 106.547 92.7502 105V40.8333C92.7502 39.2862 93.3648 37.8025 94.4588 36.7085C95.5527 35.6146 97.0365 35 98.5836 35H116.084C117.631 35 119.114 35.6146 120.208 36.7085C121.302 37.8025 121.917 39.2862 121.917 40.8333V105C121.917 106.547 121.302 108.031 120.208 109.125C119.114 110.219 117.631 110.833 116.084 110.833Z" fill="url(#paint0_linear_228_11260)" />
                                    <path d="M75.2498 110.833H57.7498C56.2027 110.833 54.719 110.219 53.625 109.125C52.5311 108.031 51.9165 106.547 51.9165 105V5.83334C51.9165 4.28624 52.5311 2.80251 53.625 1.70854C54.719 0.614582 56.2027 0 57.7498 0H75.2498C76.7969 0 78.2806 0.614582 79.3746 1.70854C80.4686 2.80251 81.0831 4.28624 81.0831 5.83334V105C81.0831 106.547 80.4686 108.031 79.3746 109.125C78.2806 110.219 76.7969 110.833 75.2498 110.833Z" fill="#71BF44" />
                                    <defs>
                                        <linearGradient id="paint0_linear_228_11260" x1="119.146" y1="35" x2="50.857" y2="137.366" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#AA181B" />
                                            <stop offset="1" stop-color="#FF7074" />
                                        </linearGradient>
                                    </defs>
                                </svg>

                                <div className="max-w-[300px] mt-9">
                                    <div className="text-[#464646] font-bold text-lg leading-7 mb-3">Live market rate</div>
                                    <p className="text-[#7780A1] text-[14px] font-medium">We also help you market your products through an online marketplace.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="py-14 lg:py-[100px]">
                <div className="px-4 xl:pl-24 xl:pr-16">
                    <div className="text-defaultLime text-4xl lg:text-5xl font-bold font-Lato">Zero-waste Campaigns</div>
                    <div className="grid grid-cols-3 gap-2 lg:gap-1 mt-20 font-HindMysuru">

                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="transition duration-500 max-w-[430px] rounded-b-3xl" style={{ boxShadow: '5px 10px 100px rgba(8, 17, 31, 0.06)' }}>
                                <img className='rounded-t-3xl' src="/assets/images/clean_drives.svg" alt="" />
                                <div className="px-4 py-3">
                                    <div className="text-[#08111F] text-base font-bold">Clean Up Drives</div>
                                    <p className="text-[#7780A1] text-sm font-medium mt-2">sade Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa aliquam temporibus perferendis expedita modi possimus!</p>
                                </div>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="transition duration-500 max-w-[430px] rounded-b-3xl" style={{ boxShadow: '5px 10px 100px rgba(8, 17, 31, 0.06)' }}>
                                <img className='rounded-t-3xl' src="/assets/images/plantation_drives.svg" alt="" />
                                <div className="px-4 py-3">
                                    <div className="text-[#08111F] text-base font-bold">Tree Plantation Drives</div>
                                    <p className="text-[#7780A1] text-sm font-medium mt-2">sade Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa aliquam temporibus perferendis expedita modi possimus!</p>
                                </div>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="transition duration-500 max-w-[430px] rounded-b-3xl" style={{ boxShadow: '5px 10px 100px rgba(8, 17, 31, 0.06)' }}>
                                <img className='rounded-t-3xl' src="/assets/images/awareness_drives.svg" alt="" />
                                <div className="px-4 py-3">
                                    <div className="text-[#08111F] text-base font-bold">Awareness Drives</div>
                                    <p className="text-[#7780A1] text-sm font-medium mt-2">sade Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa aliquam temporibus perferendis expedita modi possimus!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div className="flex items-center justify-center text-white font-BalooChettan2">
                <button className="bg-defaultLime text-base font-semibold px-9 rounded-xl py-2"
                    style={{ boxShadow: '-20px 30px 70px rgba(113, 191, 68, 0.40)' }}
                >
                    JOIN US TO BE THE PART OF THE DRIVES
                </button>
            </div>

            <section className="py-14 lg:py-[100px]">
                <div className="font-HindMysuru px-4 xl:pl-24 xl:pr-16 flex items-center justify-center">
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <div className="transition duration-500 max-w-[890px] rounded-b-3xl" style={{ boxShadow: '5px 10px 100px rgba(8, 17, 31, 0.06)' }}>
                            <img className='rounded-t-3xl' src="/assets/images/donate.svg" alt="" />
                            <div className="px-4 py-3">
                                <div className="text-[#08111F] text-base font-bold">Donate Us Your Old Clothes</div>
                                <p className="text-[#7780A1] text-[14.5px] font-medium mt-2">To take the part in Securing our future.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Services;
