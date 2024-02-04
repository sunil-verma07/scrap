import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Counter from '../components/Counter';
import Testimonial from '../components/Testimonial';

import BlogSlider from '../components/BlogSlider';
import { IRootState } from '../store';

const Aboutus = () => {
    document.title = 'About Us | Scrapbag';

    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;

    // sm:-mx-[130px]  lg:-mx-[130px] bg-cover bg-bottom bg-no-repeat pt-[82px] lg:pt-[80px] style={{ borderRadius: "0 0 50% 50%/0 0 100% 100%" }}

    return (
        <div className='bg-white mb-10'>
            <div className="md:-mx-[300px] font-Lato">
                <div className="bg-defaultLime w-full h-full top-0 left-0 pt-[82px] md:pt-[60px] md:rounded-custom pb-7 lg:pb-0" >
                    <div className="relative">
                        <div className="container">
                            <div className="items-center justify-center flex flex-wrap lg:h-[500px] md:py-0 xl:gap-64">
                                <div className="heading mb-0 lg:text-left text-center">
                                    <div className="text-white text-2xl lg:text-[40px] font-bold mt-5">About Us</div>
                                    <p className="max-w-[450px] text-white text-[20px] font-normal mt-5">plar och sasamma. Autos lujåktig. Syhyska nobelt i pseudol, trins tede. Posävis ber or. Dor diasest.</p>
                                </div>
                                <div className="relative mt-5 md:mt-0" data-aos='fade-left' data-aos-duration="1000">
                                    <img className="h-[20rem]" src="/assets/images/illustartion_aboutUs.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="flex items-center flex-col flex-wrap justify-center py-14 lg:py-[100px] gap-20 font-Lato">

                <div  className='text-black text-2xl italic font-semibold text-center' >Scrapbag is offering complete waste management solutions. We are working on 3R concept of waste <br /> minimization which ensures the positive impact of our climate actions for New India.</div>

                <div className="relative block md:flex rounded-3xl border border-transparent bg-white transition duration-500 lg:w-[1000px] lg:h-80 justify-between px-5 lg:px-0">
                    <div data-aos="fade-down-left" data-aos-duration="1000" className="pb-5">
                        <h5 className="my-[20px] block text-2xl text-zinc-700 font-semibold line-clamp-2">
                            Founder’s Message
                        </h5>
                        <p className="font-medium text-zinc-500 text-[19px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, facere! Saepe ducimus neque modi, veniam facere inventore! Maiores quibusdam, necessitatibus optio, maxime vero ducimus aspernatur iste ipsam laudantium illum dolores.</p>
                    </div>
                    <img data-aos="fade-down-right" data-aos-duration="1000" src="/assets/images/blog1.png" alt="blog-1" className="rounded-3xl object-cover" />
                </div>

            </section>

            {/* lg:w-[360px] lg:h-[350px] */}
            <section className="font-Lato">
                <div className='flex flex-wrap gap-11 items-center justify-center'>
                    <div data-aos="fade-down-left" data-aos-duration="1000" className="relative flex flex-col mt-6 shadow-md bg-clip-border rounded-3xl lg:w-[360px] lg:h-[350px]">
                        <div className="lg:px-[75px] lg:py-8 flex flex-col items-center">
                            <h5 className="block mb-6 text-2xl antialiased font-bold leading-snug text-defaultLime">
                                OUR MISSION
                            </h5>
                            <p className="block font-bold text-[19px] my-10 text-[#464646]">
                                the first and foremost <br /> mission of scrapbag is to <br /> dispense the waste <br /> management services,<br />preserve the nature and <br /> natural resources.
                            </p>
                        </div>
                    </div>

                    <div data-aos="fade-down" className="relative flex flex-col mt-6 shadow-md bg-clip-border rounded-3xl lg:w-[360px] lg:h-[350px] bg-defaultLime">
                        <div className="lg:py-8 flex flex-col items-center text-white">
                            <h5 className="block mb-6 text-2xl antialiased font-bold leading-snug">
                                OUR VISION
                            </h5>
                            <p className="block font-bold text-[19px] my-10">
                                with the vision of making <br /> India an outstrip nation, <br /> with mitigated pollution and <br />upgraded lifestyle.
                            </p>
                        </div>
                    </div>

                    <div data-aos="fade-down-right" data-aos-duration="1000" className="relative flex flex-col mt-6 shadow-md bg-clip-border rounded-3xl lg:w-[360px] lg:h-[350px]">
                        <div className=" lg:py-8 flex flex-col items-center">
                            <h5 className="block mb-6 text-2xl antialiased font-bold leading-snug text-defaultLime">
                                OUR VALUES
                            </h5>
                            <p className="block font-bold text-[19px] my-10 text-[#464646]">
                                commitment: customers are <br /> the one who could make us <br /> work better, So Scrapbag is <br /> committed to customers and <br /> work on deadlines.
                            </p>
                        </div>
                    </div>
                </div>
            </section >

            <section className="pt-28">
                <div className="font-Lato lg:px-[85px] items-center justify-center">
                    <div className='text-center'><h4 className="text-[49px] font-HindMysuru font-bold text-defaultLime ">What we do</h4></div>

                    <div className="flex flex-col gap-16">
                        <div className="flex flex-wrap items-center text-center lg:text-left justify-center lg:justify-between">
                            <img data-aos="zoom-in" data-aos-duration="1000" className="max-h-96 w-1/3" src="/assets/images/green_community.png" alt="" />
                            <div className="flex flex-col gap-5 max-w-[550px] max-h-32 w-2/3">
                                <div className="text-[#464646] font-extrabold text-2xl">Building Green Community</div>
                                <p className="text-[#868686] font-bold">hhLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud h</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap-reverse items-center text-center lg:text-left justify-center lg:justify-between lg:pr-8 lg:pl-20">
                            <div className="flex flex-col gap-5 max-w-[550px] max-h-32 w-2/3">
                                <div className="text-[#464646] font-extrabold text-2xl">Informal Sector Growth</div>
                                <p className="text-[#868686] font-bold">hhLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud h</p>
                            </div>
                            <img data-aos="zoom-in" data-aos-duration="1000" className="max-h-[360px] h-1/3" src="/assets/images/growth.png" alt="" />
                        </div>

                        <div className="flex flex-wrap  items-center text-center lg:text-left justify-center lg:justify-between">
                            <img data-aos="zoom-in" data-aos-duration="1000" className="max-h-[480px] w-1/3" src="/assets/images/water_supply.png" alt="" />
                            <div className="flex flex-col gap-5 max-w-[550px] max-h-32 w-2/3">
                                <div className="text-[#464646] font-extrabold text-2xl">Channelizing Waste Supply Chain</div>
                                <p className="text-[#868686] font-bold">hhLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud h</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap-reverse lg:flex-nowrap items-center text-center lg:text-left justify-center lg:justify-between lg:pr-8 lg:pl-20">
                            <div className="flex flex-col gap-5 max-w-[550px] max-h-32 w-2/3">
                                <div className="text-[#464646] font-extrabold text-2xl">Rural Economy Development</div>
                                <p className="text-[#868686] font-bold">hhLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud h</p>
                            </div>
                            <img data-aos="zoom-in" data-aos-duration="1000" className="max-h-[360px] w-1/3" src="/assets/images/rural_economy.png" alt="" />
                        </div>

                        <div className="flex flex-wrap lg:flex-nowrap items-center text-center lg:text-left justify-center lg:justify-between">
                            <img data-aos="zoom-in" data-aos-duration="1000" className="max-h-[480px] w-1/3" src="/assets/images/sustainable_goods.png" alt="" />
                            <div className="flex flex-col gap-5 max-w-[550px] max-h-32 w-2/3">
                                <div className="text-[#464646] font-extrabold text-2xl">Achieving Sustainable Goals</div>
                                <p className="text-[#868686] font-bold">hhLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud h</p>
                            </div>
                        </div>
                    </div>

                </div>



            </section>
        </div >
    );
};

export default Aboutus;
