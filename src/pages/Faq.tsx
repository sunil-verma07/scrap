import { useSelector } from 'react-redux';
import Faq from '../components/Faq';
import Testimonial from '../components/Testimonial';
import { IRootState } from '../store';
import Contactus from '../components/ContactUs';

const FAQs = () => {
    document.title = 'FAQs | Scrapbag';
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;

    return (
        <div>
            <div className="md:-mx-[300px] font-Lato">
                <div className="bg-defaultLime w-full h-full top-0 left-0 pt-[82px] md:pt-[60px] md:rounded-custom" >
                    <div className="relative">
                        <div className="container">
                            <div className="flex items-center justify-center md:flex md:h-[500px] md:py-0 gap-60">
                                <div className="heading mb-0 lg:text-left text-center">
                                    {/* <div className='!text-white font-semibold text-base'></div> */}
                                    <div className="text-white text-[40px] font-bold mt-5">Faqs</div>
                                    <p className="max-w-[450px] text-white text-[20px] font-normal mt-5">plar och sasamma. Autos lujåktig. Syhyska nobelt i pseudol, trins tede. Posävis ber or. Dor diasest.</p>
                                </div>
                                <div className="relative mt-5 md:mt-0" data-aos='fade-left' data-aos-duration="1000">
                                    <img className="h-[20rem]" src="/assets/images/illustration_faq.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Faq showTitle={true} />
        </div>
    );
};

export default FAQs;
