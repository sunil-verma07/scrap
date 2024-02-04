import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import OfficeSwiper from '../components/OfficeSwiper';
import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import Contactus from '../components/ContactUs';
import { internships, jobs } from '../constants';
import Application from './Application';
import { useNavigate } from 'react-router-dom';

const items = [
    '/assets/images/gallery-1.png',
    '/assets/images/gallery-2.png',
    '/assets/images/gallery-3.png',
    '/assets/images/gallery-4.png',
    '/assets/images/gallery-5.png',
];
const Career = () => {
    document.title = 'Career | Scrapbag';
    const [activeTab, setActiveTab] = useState<string>('all');
    const [isOpen, setIsOpen] = useState<any>(false);
    const [photoIndex, setPhotoIndex] = useState<any>(0);
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;
    const navigate = useNavigate()


    useEffect(() => {
        window['global'] = window as never;
    }, []);


    const handleClick = (title: string) => {
        navigate('/application', { state: { title } })
    }

    return (
        <div>
            <div className="md:-mx-[300px] font-Lato">
                <div className="bg-defaultLime w-full h-full top-0 left-0 pt-[82px] md:pt-[60px] md:rounded-custom" >
                    <div className="relative">
                        <div className="container">
                            <div className="flex items-center justify-center md:flex md:h-[500px] md:py-0 gap-60">
                                <div className="heading mb-0 lg:text-left text-center">
                                    <div className='!text-white font-semibold text-base'>Careers</div>
                                    <div className="text-white text-[40px] font-bold mt-5">Work With Us</div>
                                    <p className="max-w-[450px] text-white text-[20px] font-normal mt-5">plar och sasamma. Autos lujåktig. Syhyska nobelt i pseudol, trins tede. Posävis ber or. Dor diasest.</p>
                                </div>
                                <div className="relative mt-5 md:mt-0" data-aos='fade-left' data-aos-duration="1000">
                                    <img className="h-[20rem]" src="/assets/images/illustration_career.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="my-24 px-44 font-HindMysuru">
                <div className="flex flex-col gap-[115px]">
                    <div className="flex flex-col gap-12">
                        <div className="text-defaultLime text-[40px] font-bold">Internships At Scrapbag</div>

                        {internships.map((internship, index) => (
                            <div>
                                <div className="flex items-center justify-between mb-[10px]">
                                    <div className="">
                                        <div className="text-[#232323] text-[22.5px] font-semibold">{internship.title}</div>
                                        <div className="text-[#464646] text-[14.5px] font-semibold">Last date to apply : {internship.lastDate}</div>
                                    </div>

                                    {/* <Link to={{ pathname: "/application", state: propsToPass }}> */}
                                    <button className='rounded-[17px] place-items-center bg-defaultLime text-white text-[19.5px] font-medium px-[33px] py-[11px]'
                                        onClick={() => handleClick(internship.title)}
                                    >
                                        Apply Now
                                    </button>
                                    {/* </Link> */}
                                </div>
                                <hr className="border-black" />
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col gap-12">
                        <div className="text-defaultLime text-[40px] font-bold">Internships At Scrapbag</div>

                        {jobs.map((job, index) => (
                            <div>
                                <div className="flex items-center justify-between mb-[10px]">
                                    <div className="">
                                        <div className="text-[#232323] text-[22.5px] font-semibold">{job.title}</div>
                                        <div className="text-[#464646] text-[14.5px] font-semibold">Last date to apply : {job.lastDate}</div>
                                    </div>
                                    <button className='rounded-[17px] place-items-center bg-defaultLime text-white text-[19.5px] font-medium px-[33px] py-[11px]'
                                        onClick={() => handleClick(job.title)}
                                    >
                                        Apply Now
                                    </button>
                                </div>
                                <hr className="border-black" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div >
    );
};

export default Career;
