import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper';
import { Link } from 'react-router-dom';

const ProjectSlider = (props: any) => {

    // const [activeIndex, setActiveIndex] = useState(0);

    // const handleSlideChange = (swiper: { realIndex: SetStateAction<number>; }) => {
    //     setActiveIndex(swiper.realIndex);
    // };

    return (
        <section data-aos="fade-up" data-aos-duration="1000" className="px-28 font-HindMysuru">
            <div className="container">
                <div className="flex items-center justify-center">
                    <div className="heading text-center">
                        <h4>{props.title}</h4>
                    </div>
                </div>
            </div>

            <div className="swiper project-slider px-6  bg-transparent">
                <div className="swiper-wrapper">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        slidesPerView="auto"
                        spaceBetween={30}
                        loop={true}
                        autoplay={{ delay: 2500, disableOnInteraction: false }}
                        navigation={{
                            nextEl: '.project-slider-button-next',
                            prevEl: '.project-slider-button-prev',
                        }}
                        breakpoints={{
                            600: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            1000: {
                                slidesPerView: 4,
                            },
                            1200: {
                                slidesPerView: 4,
                            },
                        }}
                    >
                        <ul>
                            <SwiperSlide>
                                <div className="relative rounded-3xl border border-transparent bg-white transition duration-500 hover:border-defaultLime hover:bg-defaultLime/20" style={{ boxShadow: '5px 10px 80px rgba(119, 128, 161, 0.15)' }}>
                                    <Link to="/portfolio-detail" className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"></Link>
                                    <img src="/assets/images/screws.svg" alt="project-2" className="h-36 w-full rounded-t-3xl object-cover" />
                                    <div className="p-5 text-sm font-bold">
                                        <h6 className="mb-1 text-[#08111F] line-clamp-1">Metal</h6>
                                        <p className="text-[#7780A1]">6 types</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="relative rounded-3xl border border-transparent bg-white transition duration-500 hover:border-defaultLime hover:bg-defaultLime/20" style={{ boxShadow: '5px 10px 80px rgba(119, 128, 161, 0.15)' }}>
                                    <Link to="/portfolio-detail" className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"></Link>
                                    <img src="/assets/images/water-bottle.svg" alt="project-3" className="h-36 w-full rounded-t-3xl object-cover" />
                                    <div className="p-5 text-sm font-bold">
                                        <h6 className="mb-1 text-[#08111F] line-clamp-1">Plastic</h6>
                                        <p className="text-[#7780A1]">4 types</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="relative rounded-3xl border border-transparent bg-white transition duration-500 hover:border-defaultLime hover:bg-defaultLime/20" style={{ boxShadow: '5px 10px 80px rgba(119, 128, 161, 0.15)' }}>
                                    <Link to="/portfolio-detail" className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"></Link>
                                    <img src="/assets/images/cartoons.svg" alt="project-4" className="h-36 w-full rounded-t-3xl object-cover" />
                                    <div className="p-5 text-sm font-bold">
                                        <h6 className="mb-1 text-[#08111F] line-clamp-1">Cardboard</h6>
                                        <p className="text-[#7780A1]">5 types</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="relative rounded-3xl border border-transparent bg-white transition duration-500 hover:border-defaultLime hover:bg-defaultLime/20" style={{ boxShadow: '5px 10px 80px rgba(119, 128, 161, 0.15)' }}>
                                    <Link to="/portfolio-detail" className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"></Link>
                                    <img src="/assets/images/laptop.svg" alt="project-5" className="h-36 w-full rounded-t-3xl object-cover" />
                                    <div className="p-5 text-sm font-bold">
                                        <h6 className="mb-1 text-[#08111F] line-clamp-1">E-Waste</h6>
                                        <p className="text-[#7780A1]">3 types</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="relative rounded-3xl border border-transparent bg-white transition duration-500 hover:border-defaultLime hover:bg-defaultLime/20" style={{ boxShadow: '5px 10px 80px rgba(119, 128, 161, 0.15)' }}>
                                    <Link to="/portfolio-detail" className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"></Link>
                                    <img src="/assets/images/paper.svg" alt="project-6" className="h-36 w-full rounded-t-3xl object-cover" />
                                    <div className="p-5 text-sm font-bold">
                                        <h6 className="mb-1 text-[#08111F] line-clamp-1">Paper</h6>
                                        <p className="text-[#7780A1]">2 types</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </ul>
                    </Swiper>

                    {/* <Swiper
                        modules={[Navigation, Autoplay]}
                        slidesPerView="auto"
                        spaceBetween={30}
                        loop={true}
                        autoplay={{ delay: 2500, disableOnInteraction: false }}
                        navigation={{
                            nextEl: '.project-slider-button-next',
                            prevEl: '.project-slider-button-prev',
                        }}
                        breakpoints={{
                            600: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1000: {
                                slidesPerView: 4,
                            },
                            1200: {
                                slidesPerView: 4,
                            },
                        }}
                        onSlideChange={handleSlideChange}
                    >
                        <ul>
                            <SwiperSlide>
                                <div className={`custom-zoom ${activeIndex === 3  || activeIndex === 4 ? 'active' : ''}  relative rounded-3xl border border-transparent bg-white transition duration-500 hover:border-defaultLime hover:bg-defaultLime/20`} style={{ boxShadow: '5px 10px 80px rgba(119, 128, 161, 0.15)' }}>
                                    <Link to="/portfolio-detail" className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"></Link>
                                    <img src="/assets/images/screws.svg" alt="project-2" className="h-36 w-full rounded-t-3xl object-cover" />
                                    <div className="p-5 text-sm font-bold">
                                        <h6 className="mb-1 text-black line-clamp-1 dark:text-white">Crypto Game - UX Interface</h6>
                                        <p>Website, App</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={`custom-zoom ${activeIndex === 4 || activeIndex === 0 ? 'active' : ''}  relative rounded-3xl border border-transparent bg-white transition duration-500 hover:border-defaultLime hover:bg-defaultLime/20`}  style={{ boxShadow: '5px 10px 80px rgba(119, 128, 161, 0.15)' }}>
                                    <Link to="/portfolio-detail" className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"></Link>
                                    <img src="/assets/images/water-bottle.svg" alt="project-3" className="h-36 w-full rounded-t-3xl object-cover" />
                                    <div className="p-5 text-sm font-bold">
                                        <h6 className="mb-1 text-black line-clamp-1 dark:text-white">Looking for a quiet place</h6>
                                        <p>Website</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={`custom-zoom ${activeIndex === 0 || activeIndex === 1 ? 'active' : ''}  relative rounded-3xl border border-transparent bg-white transition duration-500 hover:border-defaultLime hover:bg-defaultLime/20`}   style={{ boxShadow: '5px 10px 80px rgba(119, 128, 161, 0.15)' }}>
                                    <Link to="/portfolio-detail" className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"></Link>
                                    <img src="/assets/images/cartoons.svg" alt="project-4" className="h-36 w-full rounded-t-3xl object-cover" />
                                    <div className="p-5 text-sm font-bold">
                                        <h6 className="mb-1 text-black line-clamp-1 dark:text-white">WeTour - Travel Hero Illustration</h6>
                                        <p>Website</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={`custom-zoom ${activeIndex === 1 || activeIndex === 2 ? 'active' : ''}  relative rounded-3xl border border-transparent bg-white transition duration-500 hover:border-defaultLime hover:bg-defaultLime/20`}   style={{ boxShadow: '5px 10px 80px rgba(119, 128, 161, 0.15)' }}>
                                    <Link to="/portfolio-detail" className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"></Link>
                                    <img src="/assets/images/laptop.svg" alt="project-5" className="h-36 w-full rounded-t-3xl object-cover" />
                                    <div className="p-5 text-sm font-bold">
                                        <h6 className="mb-1 text-black line-clamp-1 dark:text-white">Digital Art Guide</h6>
                                        <p>Branding</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={`custom-zoom ${activeIndex === 2 || activeIndex === 3 ? 'active' : ''}  relative rounded-3xl border border-transparent bg-white transition duration-500 hover:border-defaultLime hover:bg-defaultLime/20`}  >
                                    <Link to="/portfolio-detail" className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"></Link>
                                    <img src="/assets/images/paper.svg" alt="project-6" className="h-36 w-full rounded-t-3xl object-cover" />
                                    <div className="p-5 text-sm font-bold">
                                        <h6 className="mb-1 text-black line-clamp-1 dark:text-white">Frozeverse - 3D and motion design</h6>
                                        <p>Branding, Website, App</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </ul>
                    </Swiper> */}
                </div>
            </div>
        </section>
    );
};

export default ProjectSlider;
